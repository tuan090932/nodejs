const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/productmodel')
const User =require('./models/usermodel')
const cors = require('cors'); // Add this line
app.use(express.json())
app.use(cors()); // Add this line before your routes
const session = require('express-session');




const newUser = new User({
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'mypassword',
  role: 'user',
  enrolledCourses: [],
  purchasedCourses: [],
}); 

// Check if the user already exists
User.findOne({ email: newUser.email })
  .then(existingUser => {
    if (existingUser) {
      console.log('User already exists:', existingUser);
      // You can choose to return or handle the case where the user already exists
      return;
    }

    // Save the user to the database
    newUser.save()
      .then(savedUser => {
        console.log('User saved:', savedUser);
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
  })
  .catch(error => {
    console.error('Error checking user existence:', error);
  });


//Route for user
// Authentication route
app.use(session({
  secret: 'your_secret_key', // Replace with your own secret key
  resave: false,
  saveUninitialized: false,
}));





app.post('/login', async (req, res) => {
  const { Name, Password } = req.body;
  try {
    // Check if the user exists in the database
    const user = await User.findOne({ name: Name   },null, { maxTimeMS: 30000 } );


    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Compare the provided password with the stored hashed password
      if (Password !== user.password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    req.session.userId = user.Name;
    // User authenticated, generate a JWT
    // Send the token back to the client
    res.json({ message: 'Authentication successful' });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
}
});











// Route
app.get('/', (req, res) => {
  res.send('hello node API')
})













app.listen(3000, () => {
  console.log("listening on port 3000")
})
//them san pham
app.post('/product', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body)
    res.status(200).json(newProduct)
  } catch (error) {
    console.log(error.message)
  }
})

//lay tat ca san pham
app.get('/product', async (req, res) => {

    try {
          const newProduct = await Product.find({});

        res.status(200).json(newProduct);
        
    } catch (error) {
         res.status(500).json({message:error.message})
    }

})

// lay san pham theo id
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
