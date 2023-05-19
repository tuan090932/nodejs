const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/productmodel')
const User = require('./models/usermodel')
const Course = require('./models/coursemodel'); // Assuming the Course model is in a separate 
const Lesson = require('./models/lessonmodel');




const cors = require('cors'); // Add this line
app.use(express.json())
app.use(cors()); // Add this line before your routes
const session = require('express-session');
//create a new coursemodel



//create  lesson list


// Import the Lesson model



// Create a new lesson using the Lesson model
const lesson1 = new Lesson({
  courseId: 'course2',
  lessonNumber: 1,
  title: 'Lesson 1: What are Javascript engines',
  description: 'Welcome to the javascript course. This is a new javascript course designed, created, and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course, you can move to ReactJS, AngularJS, Node.js, and many other JS libraries and frameworks.',
  duration: '3 hours',
  videoLink: 'https://www.youtube.com/watch?v=BMKWdLX9w3M&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=3',
});

const lesson2 = new Lesson({
  courseId: 'course2',
  lessonNumber: 2,
  title: 'Lesson 2: What ES version of JavaScript is good for us',
  description: 'Welcome to the javascript course. This is a new javascript course designed, created, and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course, you can move to ReactJS, AngularJS, Node.js, and many other JS libraries and frameworks.',
  duration: '1.5 hours',
  videoLink: 'https://www.youtube.com/watch?v=7z-VseyACaE&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=4',
});

const lesson3 = new Lesson({
  courseId: 'course2',
  lessonNumber: 3,
  title: 'Lesson 3: Variable and datatypes in JavaScript',
  description: 'You will also learn to create the first "Hello, World!" program with the help of a command prompt. Python, PyCharm, and Notepad, a total of three methods, are discussed here in this video to run a JavaScript program.',
  duration: '1.5 hours',
  videoLink: 'https://www.youtube.com/watch?v=ycLqC41TO1U&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=5',
});
const a=8;
const lesson4 = new Lesson({
  courseId: 'course2',
  lessonNumber: 4,
  title: 'Lesson 4: Our first User Signup',
  description: 'Welcome to the javascript course. This is a new javascript course designed, created, and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course, you can move to ReactJS, AngularJS, Node.js, and many other JS libraries and frameworks. My other courses are available on my website, so please go ahead and check them out. Link to my programming Video Library:',
  duration: '1.5 hours',
  videoLink: 'https://www.youtube.com/watch?v=Sb5_BIprKDs&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=6',
});

const lesson5 = new Lesson({
  courseId: 'course2',
  lessonNumber: 5,
  title: 'Lesson 5: Operators in JavaScript | Calculate discount',
  description: 'Welcome to the javascript course.This is a new javascript course designed, created, and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course, you can move to ReactJS, AngularJS, Node.js, and many other JS libraries and frameworks. My other courses are available on my website, so please go ahead and check them out. Link to my programming Video Library:',
  duration: '1.5 hours',
  videoLink: 'https://www.youtube.com/watch?v=WxyFRb0_eUQ&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=7',
});

Course.findOne({ _id: lesson1._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lesson1.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });


  
Course.findOne({ _id: lesson2._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lesson2.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });


  
Course.findOne({ _id: lesson3._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lesson3.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });


  
Course.findOne({ _id: lesson4._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lesson4.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });


  
Course.findOne({ _id: lesson5._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lesson5.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });

//create lesson python

const lessonpy1 = new Lesson({
  courseId: 'course1',
  lessonNumber: 1,
  title: 'Lesson 1: Introduction to Download & Installation',
  description: 'To begin with Python, you need to download the latest version available on the official website. It is recommended to download from the official site for security reasons.',
  duration: '1 hour',
  videoLink: 'https://www.youtube.com/watch?v=fS1Lh5TwWN8&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=2',
});

const lessonpy2 = new Lesson({
  courseId: 'course1',
  lessonNumber: 2,
  title: 'Lesson 2: What is PyCharm and How to Install PyCharm',
  description: 'This video provides a complete guide to download and install PyCharm, including practical implementation. PyCharm offers suggestions and has an advantage over other Python compilers.',
  duration: '1.5 hours',
  videoLink: 'https://www.youtube.com/watch?v=18oZPfHYfeE&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=3',
});

const lessonpy3 = new Lesson({
  courseId: 'course1',
  lessonNumber: 3,
  title: 'Lesson 3: Creating your First Python Project Using the Print Function',
  description: 'In this video, you will learn to create your first "Hello, World!" program using various methods such as Python, PyCharm, and Notepad.',
  duration: '1.5 hours',
  videoLink: 'https://www.youtube.com/watch?v=MfGfMWsvgCc&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=4',
});

const lessonpy4 = new Lesson({
  courseId: 'course1',
  lessonNumber: 4,
  title: 'Lesson 4: Understanding Variables in Python and How to Create Them',
  description: 'This lesson covers the basics of variables in Python, including printing variables and the requirements for variable names, such as no spaces and no starting with a number.',
  duration: '1.5 hours',
  videoLink: 'https://www.youtube.com/watch?v=o-pRdr8IMWg&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=5',
});

const lessonpy5 = new Lesson({
  courseId: 'course1',
  lessonNumber: 5,
  title: 'Lesson 5: Understanding Strings in Python and Concatenating Variables',
  description: 'In this practical video, our trainer explains string concatenation in Python. You will gain a clear understanding of string concepts in Python.',
  duration: '1.5 hours',
  videoLink: 'https://www.youtube.com/watch?v=ig3fRo9hlMo&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=6',
});


Course.findOne({ _id: lessonpy1._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lessonpy1.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });


  Course.findOne({ _id: lessonpy2._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lessonpy2.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });


  Course.findOne({ _id: lessonpy3._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lessonpy3.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });



  Course.findOne({ _id: lessonpy4._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lessonpy4.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });


  Course.findOne({ _id: lessonpy5._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    lessonpy5.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });









  











// Create a new course
const sampleCoursepython = new Course({
  _id: 'course1',
  title: 'Python for Beginners',
  description: 'This course is designed for beginners who want to learn Python programming language.',
  instructor: 'John Doe',
  price: 29.99,
  duration: '2 weeks',
  enrolledStudents: [],
  preview: 'https://www.youtube.com/watch?v=OZIRAavoGng&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7',
  category: 'python',
  lessons: [
    {
      lessonNumber:1,
      title: 'Lesson 1: Introduction Download & Instalation',
      description: 'You should download only the latest version that is available on the website. You should download it from the official site for security reasons.',
      duration: '1 hour',
      videoLink: 'https://www.youtube.com/watch?v=fS1Lh5TwWN8&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=2',
    },
    {
      lessonNumber:2,
      title: 'Lesson 2: What is Pycharm and How to Install Pycharm',
      description: 'This video will be your complete guide to download and install PyCharm as practical implementation is explained in this video. PyCharm gives suggestions that give it an upper hand over other compilers for Python.',
      duration: '1.5 hours',
      videoLink: 'https://www.youtube.com/watch?v=18oZPfHYfeE&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=3',
    },
    {
      lessonNumber:3,
          title: 'Lesson 3: Create your first Project on Python Using Print Function',
      description: 'You will also learn to create the first hello world program with the help of a command prompt. Python, PyCharm, and notepad, total three methods are discussed here in this video to run a Python program',
      duration: '1.5 hours',
      videoLink: 'https://www.youtube.com/watch?v=MfGfMWsvgCc&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=4',

    },

    {
         lessonNumber:4,
          title: 'Lesson 4: What is Variable in Python and How to Create Variables in Python',
      description: 'You will get to know how to print variables in Python. You will know the basic requirements needed for variables in Python, like there should not be any space between characters, and it should not start with a number.',
      duration: '1.5 hours',
      videoLink: 'https://www.youtube.com/watch?v=o-pRdr8IMWg&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=5',

    },
    {
        lessonNumber:5,
          title: 'Lesson 5: What is String in Python and How to Concatenate Two String Variables',
      description: 'Our trainer has explained it all in a very practical manner so you can understand it precisely. It will all your queries related to string concatenation. You will also understand the concept of strings in Python.',
      duration: '1.5 hours',
      videoLink: 'https://www.youtube.com/watch?v=ig3fRo9hlMo&list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&index=6',

    },

  ],
});










// Check if the course already exists
// tham so existingCourse -> no duoc tao ra  khi findOne duoc khai tao -> no la 1 bien bat ky co the dat la course cung duoc existingCourse => { viet code trong day}
Course.findOne({ _id: sampleCoursepython._id })
  .then(existingCourse => {
    if (existingCourse) {
      console.log('Course javasript already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    sampleCoursepython.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });




//create course js
const sampleCoursejs = new Course({
  _id: 'course2',
  title: 'JavaScript  for Beginners',
  description: 'Disclaimer:It doesn t feel good to have a disclaimer in every video but this is how the world is right now.All videos are for educational purpose and use them wisely. Any video may have a slight mistake, please take decisions based on your research. This video is not forcing anything on you.',
  instructor: 'Amelia',
  price: 9.9,
  duration: '3 weeks',
  enrolledStudents: [],
  preview: 'https://www.youtube.com/watch?v=2md4HQNRqJA&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD',
  category: 'python',
  lessons: [
    {
      lessonNumber:1,
      title: 'Lesson 1: What are Javascript engines',
      description: 'Welcome to javascript course. This is a new javascript course designed, created and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course you can move to reactjs, AngularJS, nodeJS and many other such JS libraries and framework.',
      duration: '3 hour',
      videoLink: 'https://www.youtube.com/watch?v=BMKWdLX9w3M&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=3',
    },
    {
      lessonNumber:2,
      title: 'Lesson 2: What ES version of javascript is good for us',
      description: 'Welcome to javascript course. This is a new javascript course designed, created and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course you can move to reactjs, AngularJS, nodeJS and many other such JS libraries and framework.',
      duration: '1.5 hours',
      videoLink: 'https://www.youtube.com/watch?v=7z-VseyACaE&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=4',
    },
    {
      lessonNumber:3,
          title: 'Lesson 3: Variable and datatypes in javascript',
      description: 'You will also learn to create the first hello world program with the help of a command prompt. Python, PyCharm, and notepad, total three methods are discussed here in this video to run a Python program',
      duration: '1.5 hours',
      videoLink: 'https://www.youtube.com/watch?v=ycLqC41TO1U&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=5',

    },

    {
         lessonNumber:4,
          title: 'Lesson 4: Our first User Signup',
      description: 'Welcome to javascript course. This is a new javascript course designed, created and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course you can move to reactjs, AngularJS, nodeJS and many other such JS libraries and framework.My other courses are available at my website, so please go ahead and check it. Link to my programming Video Library:',
      duration: '1.5 hours',
      videoLink: 'https://www.youtube.com/watch?v=Sb5_BIprKDs&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=6 ',

    },
          {
            lessonNumber:5,
          title: 'Lesson 5: Operators in javascript | Calculate discount',
      description: 'Welcome to javascript course. This is a new javascript course designed, created and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course you can move to reactjs, AngularJS, nodeJS and many other such JS libraries and framework. My other courses are available at my website, so please go ahead and check it. Link to my programming Video Library:',
      duration: '1.5 hours',
      videoLink: 'https://www.youtube.com/watch?v=WxyFRb0_eUQ&list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&index=7',

    },

  ],
});

// Check if the course already exists
Course.findOne({ _id: sampleCoursejs._id })
  .then(
    existingCourse => {
    if (existingCourse) {
      console.log('Course python already exists:', existingCourse);
      // You can choose to return or handle the case where the course already exists
      return;
    }

    // Save the course to the database
    sampleCoursejs.save()
      .then(savedCourse => {
        console.log('Course saved:', savedCourse);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  })
  .catch(error => {
    console.error('Error checking course existence:', error);
  });


//create a lesson 


















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













app.listen(3003, () => {
  console.log("listening on port 3003")
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

//search all product 

app.get('/searchallcourse', async(req, res) => {
  try {

    const newProduct = await Course.find({}).maxTimeMS(15000);
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
