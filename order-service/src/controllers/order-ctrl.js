const yup = require ('yup')
const OrderService = require ('../services/order.service')
const OrderException = require('../utils/errors/OrderException')
const { sendNotification } = require('../config/rabbitmq')

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
              throw new OrderException('Order is not valid', 400)
            }

            const user = await OrderService.findUser(newOrder.userId)

            if(!user){
              throw new OrderException('User does not exists', 400)
            }
            
            const order = await OrderService.create(newOrder) 

            sendNotification('order-success', user.email)

            res.status(200).json(order);
        } catch (error) {
            console.log(error);
            res.status(error.status || 500).json({ message: error.message });
        }
    }
}
module.exports = OrderController;