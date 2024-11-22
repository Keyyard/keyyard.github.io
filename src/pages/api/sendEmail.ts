import emailjs from 'emailjs-com';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { from_name, from_email, message } = req.body;

  emailjs.send(
    "service_uvala3e",
    "template_k0slif9",
    { from_name, from_email, message },
    "FKkNNZcm0oVGEhYyb"
  ).then(
    () => {
      res.status(200).json({ message: 'Email sent successfully!' });
    },
    () => {
      res.status(500).json({ message: 'Failed to send email.' });
    }
  );
}