import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(req, res) {
    const {body} = req.body;
    const msg = {
        to: 'info@palladomsolutions.com',
        from: 'info@palladomsolutions.com',
        subject: 'Customer Request From Website',
        text: body,
        html: body
    }
    try {
        await sgMail.send(msg);
        res.status(200).json();
    } catch (err) {
        console.error(err);
        res.status(400).json();
    }
}