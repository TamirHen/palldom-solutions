import sgMail from '@sendgrid/mail';

sgMail.setApiKey('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')

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
        res.status(200).send({message: "Success"});
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
    }
}