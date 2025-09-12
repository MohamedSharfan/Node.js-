let products =[
    {id:1, name:'sunlight', price:120},
    {id:2, name:'sugar', price:240},
    {id:3, name:'flour', price:560},
];

const getProducts = (req,res)=>{
    res.json(products);
}

const getProductsById = (req,res) =>{
    const id = parseInt(req.params.id);
    
    const selectedProduct = products.find(p => p.id == id);
    if(selectedProduct){
        res.json(selectedProduct);
    }
    else{
        res.status(404).json({messege:"product not found"}); 
    }
}

module.exports ={ getProducts, getProductsById };