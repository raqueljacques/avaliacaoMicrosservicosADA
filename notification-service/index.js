const { receiveMessages } = require('./src/config/rabbitmq')
const sendEmail = require('./src/controllers/email-ctrl')

const main = () => {
    receiveMessages((message) => {
        const { notificationName, email } = JSON.parse(message.content.toString())
        console.log('Message:', JSON.parse(message.content.toString()));

        sendEmail(message)
    })
}

main()