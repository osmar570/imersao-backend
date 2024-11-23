import fs from 'fs';
import {getAllPosts, createPost, UpdatePost}  from "../Models/postsModel.js";
import gerarDescricaoComGemini from '../services/geminiService.js';

export async function listAllPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function  postNewPost(req, res) {
    const newPost = req.body;
    try{
        const postCriado = await createPost(newPost);
        res.status(201).json(postCriado);
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({message: "Error creating post"});
    }
}

export async function  uploadImage(req, res) {
    const newPost = {
        "descricao": "",
        "imgUrl": req.file.originalname,
        "alt": ""
    }
    try{
        const postCriado = await createPost(newPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`; 
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(201).json(postCriado);
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({message: "Error creating post"});
    }
}

export async function  updateNewPost(req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:4190/${id}.png`;

    try{
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const description = await gerarDescricaoComGemini(imageBuffer); 
        const post = {
            imgUrl: urlImage,
            descricao: description,
            alt: req.body.alt
        }

        const postatualizado = await UpdatePost(id, post);
        res.status(201).json(postatualizado);
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({message: "Error creating post"});
    }
}