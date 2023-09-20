import express from 'express';

const port = 80;
const app = express();

app.get("/", async (req, res) => {
    res.json({
        msg: "Hola desde web 2",
        whatever: "Buenas nocheeeeees"
    });
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en puerto:${port}`);
});
