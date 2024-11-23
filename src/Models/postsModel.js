import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';


const conexao = await conectarAoBanco(process.env.STRING_MONGODB);

export async function getAllPosts(){
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
  }


export async function createPost(newPost) {
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.insertOne(newPost)
}


export async function UpdatePost(id, post) {
    const db = conexao.db("imersao-instabytes");
    const collection = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return collection.updateOne({_id: new ObjectId(objId)}, {
      $set: post
    });
}