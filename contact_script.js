let close = Array.from(document.getElementsByTagName("svg"));
// console.log(close);

let form = Array.from(document.getElementsByClassName("pop-up-form"));
// console.log(form);

function mymove() {
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 30);
  function frame() {
    if (pos == 50) {
      clearInterval(id);
    } else {
      pos++;
      form[0].style.top = pos + "%";
      form[0].style.left = pos + "%";
    }
  }
}

function myfunc() {
  setTimeout(() => {
    form[0].style.display = "flex";
    mymove();
  }, 2000);
}

async function myfunction() {
  await myfunc();
}

close[0].addEventListener("click", () => {
  form[0].style.display = "none";
});

let address = document.getElementById("address");
if (
  address.addEventListener("change", (e) => {
    let val = e.target.value;
    address.innerHTML = val;
  })
);

let message = document.getElementById("message");
if (
  message.addEventListener("change", (e) => {
    let val = e.target.value;
    message.innerHTML = val;
  })
);

function emailSend() {
  let userName = document.getElementById("name").value;
  // console.log(userName);

  let email = document.getElementById("email").value;
  // console.log(email);

  let text = address.innerHTML;
  // console.log(text);

  let messText = message.innerHTML;
  // console.log(messText);

  let body =
    "Name : " +
    userName +
    "<br>" +
    "Email : " +
    email +
    "<br>" +
    "Address : " +
    text +
    "<br>" +
    "Message : " +
    messText;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "personalportfolio111@gmail.com",
    Password: "F48379A10E6ED5B6B5A401E283B95A076372",
    To: "vikasbhardwaj013@gmail.com",
    From: "personalportfolio111@gmail.com",
    Subject: `${userName} is want to connect you!`,
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      swal("Thank You!", "Your Form is Submitted!", "success");
    } else {
      swal("Oops!", "Something Went Wrong!", "error");
    }
  });

  address.innerHTML = "";
  message.innerHTML = "";
}
