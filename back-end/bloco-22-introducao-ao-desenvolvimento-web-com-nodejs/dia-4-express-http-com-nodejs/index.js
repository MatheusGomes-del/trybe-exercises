const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { getSimpsons, setSimpsons } = require('./fsSimpsons');

//const simpsons = require('./simpsons.json');

const app = express();
app.use(bodyParser.json());
//app.use(cors);

app.get('/', (req, res) => {
    res.send('opaa');
 })

app.get('/ping', (req, res) => {
   res.status(200).json({messsage: 'pong'});
})


app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name}!` });
});


app.post('/greetings', (req, res) => {
   const { name, age } = req.body;


   if(parseInt(age) > 17) return res.status(200).json({"message": `Hello, ${name}` });
   if(parseInt(age) <= 17) return res.status(401).json({"message": `Unauthorized` });
});


app.put('/users/:name/:age', (req, res) => {
   const { name, age } = req.params;
   res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});


/* simpsons */ 

app.get('/simpsons', async (req, res) => {
    
    const simpsons = await getSimpsons();
     
    res.status(200).json(simpsons);
})

app.get('/simpsons/:id', async (req, res) => {
   const { id } = req.params;
    
   const simpsons = await getSimpsons();

   const chosenSimpson = simpsons.find((s) => parseInt(s.id) === parseInt(id))
   console.log(chosenSimpson);

   if(!chosenSimpson) return res.status(404).json({message: 'simpson not found'});

   res.status(200).json(chosenSimpson);
})


app.post('/simpsons', async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await getSimpsons();
    
    if(simpsons.some((s) => s.id === id)) return res.status(409).json({ message: 'id already exists'})
    
    simpsons.push({ "id": `${id}`, "name": `${name}` })

    res.status(204).end();
})


app.listen(3001, () => {
    console.log('aplicação rodando na porta 3001');
})