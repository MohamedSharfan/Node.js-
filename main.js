const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products'); 

app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`);
})