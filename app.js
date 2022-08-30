import express from 'express';
const app = express();

import router from './router/index.js';

app.use(router);

app.listen(9000, ()=>{
    console.log(`Listening at http://localhost:9000`);
});