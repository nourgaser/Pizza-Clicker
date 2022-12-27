const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const topic = document.getElementById("topic");
const message = document.getElementById("message");

function sendEmail() {
  const nameVal = name.value;
  const emailVal = email.value;
  const phoneVal = phone.value;
  const topicVal = topic.value;
  const messageVal = message.value;

  const emailBody = `
    <h3>Message from Website Visitor</h3>
    <p><strong>Name:</strong> ${nameVal}</p>
    <p><strong>Email:</strong> ${emailVal}</p>
    <p><strong>Phone:</strong> ${phoneVal}</p>
    <p><strong>Topic:</strong> ${topicVal}</p>
    <p><strong>Message:</strong> ${messageVal}</p>
    `;
  const emailSubject = `New message: ${topicVal}`;
  fetch("https://api.sendinblue.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "api-key":
        "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",
    },
    body: JSON.stringify({
      sender: {
        name: "Puzzle Pizza SMTP",
        email: "internal@nourgaser.com",
      },
      to: [
        {
            email: "nourgaser2012@gmail.com",
            name: "Puzzle Pizza Message Form",
        },
      ],
      subject: emailSubject,
      htmlContent: `<html><head></head><body>${emailBody}</body></html>`,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      window.alert("Your message has been sent!");
      name.value = "";
        email.value = "";
        phone.value = "";
        topic.value = "";
        message.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
}