import { emailBody } from "../interfaces/email.interface";

export function sendEmail({ name, email, message, phoneNr }: emailBody) {
  const apiEndpoint = "/api/email";

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify({
      emails: ["te.theenvelope@gmail.com"],
      subject: `Contact: ${name} is trying to contact you`,
      message: `<h1>Message from: ${name}</h1>
      <p>Phone Number: ${phoneNr}</p>
      <p>Email Address: ${email}</p>
      <p>Message: ${message}</p>
      `,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.error) {
        return false;
      }
      return true;
    })
    .catch((err) => {
      return false;
    });
}
