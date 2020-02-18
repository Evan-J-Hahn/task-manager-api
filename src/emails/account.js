const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'evanhahn3@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'evanhahn3@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Bye ${name}! Let us know why you left.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}