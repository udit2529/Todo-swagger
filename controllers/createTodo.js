 const Todo = require('../models/Todo');


 /**
 *  @swagger
 * /createTodo:
 *   post:
 *     summary: Create a new Todo
 *     tags: [Todos]
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
 *         
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 * 
 * 
 */

 exports.createTodo = async(req, res)=>{
    try{
        const {title, description} = req.body;

        const response = await Todo.create({title, description});

        res.status(200).json({
          sucess: true,
          data: response,
          message: "Entry Created successfully"
        }) ;

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


 