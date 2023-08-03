const Todo = require('../models/Todo');

/**
 * @swagger
 * /getTodos:
 *   get:
 *     summary: Get all todo items
 *     tags:
 *       - Todos
 *     responses:
 *       200:
 *         description: Successful response with todo data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful.
 *                 data:
 *                   type: array
 *                   description: Array of todo items.
 *                 message:
 *                   type: string
 *                   description: A message describing the response.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful (false for errors).
 *                 data:
 *                   type: string
 *                   description: Error message indicating internal error.
 *                 message:
 *                   type: string
 *                   description: A message describing the error.
 */

// The actual implementation of the `/getTodos` API will be in your server code
// This is just the Swagger (OpenAPI) documentation for the API endpoint


exports.getTodo = async(req, res)=>{
    try{
         const todos = await Todo.find({});
         res.status(200).json({
            sucess: true,
            data:todos,
            messages:"entire todo data"
         })

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            sucess: false,
            data:"internal error",
            message:err.message
        })
    }
 }

 /**
 * @swagger
 * /getTodoById/{id}:
 *   get:
 *     summary: Get a todo item by ID
 *     tags: [Todos]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the todo item to retrieve
 *         required: true
 *         schema:
 *           type: string  
 *     responses:
 *       200:
 *         description: Successful response with the todo item data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful.
 *                 data:
 *                   type: array
 *                   description: Array of todo items.
 *                 message:
 *                   type: string
 *                   description: A message describing the response.
 *               
 *       404:
 *         description: Todo not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucess:
 *                   type: boolean
 *                   description: Indicates if the request was successful (false for errors).
 *                 messages:
 *                   type: string
 *                   description: A message indicating that no data was found for the provided ID.
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sucess:
 *                   type: boolean
 *                   description: Indicates if the request was successful (false for errors).
 *                 data:
 *                   type: string
 *                   description: Error message indicating internal error.
 *                 message:
 *                   type: string
 *                   description: A message describing the error.
 */

 exports.getTodoById = async(req, res)=>{
    try{
        const id = req.params.id;
        
         const todos = await Todo.findById({_id:id});
         
         if(!todos){
            return res.status(404).json({
                sucess: false, 
                messages:"No data found"
            });
        }
         res.status(200).json({
            sucess: true,
            data:todos,
            messages:`Todo ${id} successfully`
         })

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            sucess: false,
            data:"internal error",
            message:err.message
        })
    }
 }

