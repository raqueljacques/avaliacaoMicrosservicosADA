const yup = require ('yup')
const OrderService = require ('../services/order.service')

class OrderController {
    static async create(req, res) {
        try {
            const  newOrder  = req.body;
            const schema = yup.object(
              {
                userId: yup.string().required(),
                description:yup.string().required()
              }
            )
            if(!(await schema.isValid(newOrder))){
              throw {message:'Order is not valid', status: 400}
            }
            
            const order = await OrderService.create(newOrder) 

            res.status(200).json(order);
        } catch (error) {
            console.log(error);
            res.status(error.status || 500).json({ message: error.message });
        }
    }
}
module.exports = OrderController;