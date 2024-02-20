const amqplib = require('amqplib/callback_api')

exports.receiveMessages = (cb) => {
    amqplib.connect('amqp://localhost', (err, connection) => {
        if(err) {
            throw err
        }

        connection.createChannel((err, channel) => {
            if(err) {
                throw err
            }

            channel.assertQueue('notification-queue')

            channel.consume('notification-queue', cb, {
                noAck: true
            })
        })
    })
}
