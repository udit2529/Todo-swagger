const Todo = require("../models/Todo");


/**
 * @swagger
 * /updateTodos/{id}:
 *   put:
 *     summary: Update a todo item
 *     tags: [Todos]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the todo item to update
 *         required: true
 *         schema:
 *           type: string  # Assuming 'id' is a string, use appropriate type if it's different
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response with updated todo item data
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
 *              
 *               # Reference to the Todo schema
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
exports.updateTodo = async(req,res)=>{
    try{
           const {id}= req.params;
           const {title,description} = req.body;

           const todo= await Todo.findByIdAndUpdate({
              _id: id,
           },{
              title,description,updatedAt:Date.now()
           },
           { new: true });

           res.status(200).json({
            sucess: true,
            data:todo,
            messages:`Updated  ${id} sucessfully`
         })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            sucess: false,
            data:"internal error",
            message:err.message
        })
    }
}