const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/productmodel')


app.use(express.json())

// Route
app.get('/', (req, res) => {
  res.send('hello node API')
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})

app.post('/product', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(200).json(newProduct)
  } catch (error) {
    console.log(error.message)
  }
})


app.get('/product', async (req, res) => {

    try {
          const newProduct = await Product.find({});

        res.status(200).json(newProduct);
        
    } catch (error) {
         res.status(500).json({message:error.message})
    }

})


app.get('/product/:id', async (req, res) => {

    try {
        // truyen vao bien id vao -> dich no sang id roi tim kiem 
        const { id } = req.params;// drop all id
        console.log('ID:', id);
        const newProduct = await Product.findById(id);


        res.status(200).json(newProduct);




        
    } catch (error) {
         res.status(500).json({message:error.message})
    }

})

//update a product
app.put('/product/:id', async (req, res) => {

    try {
        // truyen vao bien id vao -> dich no sang id roi tim kiem 
        const { id } = req.params;// drop all id
        console.log('ID:', id);
        const newProduct = await Product.findByIdAndUpdate(id,req.body);// gui id va update tu client den findbyidupdate xu ly -> gui phai tuan theo quy luat cua ham  findByIdAndUpdate
        res.status(200).json(newProduct);
        
    } catch (error) {
         res.status(500).json({message:error.message})
    }

})

//delete a product

app.delete('/product/:id', async (req, res) => {

    try {
        // truyen vao bien id vao -> dich no sang id roi tim kiem 
        const { id } = req.params;// drop all id
        console.log('ID:', id);
        const newProduct = await Product.findByIdAndDelete(id,req.body);// gui id va update tu client den findbyidupdate xu ly -> gui phai tuan theo quy luat cua ham  findByIdAndUpdate
        res.status(200).json(newProduct);
        
    } catch (error) {
         res.status(500).json({message:error.message})
    }

})







mongoose.connect('mongodb+srv://gietconheo888:provt123@cluster0.82zcgle.mongodb.net/')
  .then(() => {
    console.log('connect success')
  }).catch((error) => {
    console.log(error)
  })
