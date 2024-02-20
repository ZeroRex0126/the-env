export function sendEmail() {
  const apiEndpoint = "/api/email";

  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify({
      emails: ["te.theenvelope@gmail.com"],
      subject: "Testing SUbject",
      message: "<h1>lets do it</h1>",
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
