import sgMail from '@sendgrid/mail';
import NextCors from 'nextjs-cors';

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const {body, sendTo} = req.body;
    const msg = {
        to: sendTo || 'info@palladomsolutions.com',
        from: 'noreply@palladomsolutions.com',
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