const Todo = require("../models/Todo");
/**
 *  @swagger
 *  /deleteTodos/{id}:  # Include the {id} as a path parameter
 *   delete:
 *     summary: Delete a Todo
 *     tags: [Todos]
 *     parameters:  # Define the 'id' parameter as part of the URL path
 *       - name: id
 *         in: path
 *         description: The ID of the todo to delete
 *         required: true
 *         schema:
 *           type: string  # Assuming the 'id' is a string, use appropriate type if it's different
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
exports.deleteTodo = async (req,res)=>{
    try{
      const {id} = req.params
      
      await Todo.findByIdAndDelete(id);

      res.json({
        success: true,
        message: 'Todo deleted successfully'
      })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data:"internal error",
            message:err.message
        })

    }
}