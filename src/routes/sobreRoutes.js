const Sobre = {
    nome: "Osmar dos Santos Neto",
    idade: 28,
    profissao: "Developer"
}

const sobreRoutes = (app) => {
    app.get("/api/Sobre", (req, res) => {
    res.status(200).send(Sobre);
});
}

export default sobreRoutes;