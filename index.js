const express =require("express");
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//load configuration from env file
require("dotenv").config();
const PORT= process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

const todoRoutes = require("./routes/todo");

app.use(todoRoutes);

const options ={
  definition : {
      openapi : "3.0.0",
              info : {
                  title : "API",
                  version : "1.0.0"
              },
              servers:[
                  {
                      url:"http://localhost:3001/"
                  },
                //   {
                //     url: "https://dev.tundrafmp.com/api",
                //   }
              ]
  },
  apis:['./controllers/createTodo.js',
          './controllers/getTodo.js',
          './controllers/updateTodo.js',
          './controllers/deleteTodo.js'],

}

const swaggerDocs = swaggerJSDoc(options);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))


app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
});

const dbConnect= require("./config/database");
dbConnect();

app.get('/', (req, res)=>{
  res.send("hello world!");
});
