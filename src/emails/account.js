const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ujjwalkamilya90@gmail.com',
        subject: 'Welcome!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })

}
const sendDeletionMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ujjwalkamilya90@gmail.com',
        subject: `Goodbye! ${name}`,
        text: ':('
        })
}

module.exports = {
    sendWelcomeEmail,
    sendDeletionMail
}

