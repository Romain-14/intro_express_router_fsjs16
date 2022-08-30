import express from 'express';
const app = express();

import router from './router/index.js';

// va utiliser lors de l'instanciation de notre app le fichier sur toute les routes le fichier principal de routing
app.use(router);

app.listen(9000, ()=>{
    console.log(`Listening at http://localhost:9000`);
});