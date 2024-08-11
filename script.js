//body scripts
let navbar = document.getElementById("navbar");
console.log(navbar);
let rightItem = document.getElementsByClassName("right-item");

let menu = document.getElementsByClassName("humburger-menu");
let closeButton = document.getElementsByClassName("close1");

menu[0].addEventListener("click", () => {
  rightItem[0].style.transition = "all ease-in-out .5s";
  rightItem[0].style.left = "0px";
});

closeButton[0].addEventListener("click", () => {
  rightItem[0].style.left = "-46%";
});

const quote = [
  "“We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein",
  "“Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi",
  "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” —Mark Twain",
  "“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” —Eleanor Roosevelt",
  "“When you change your thoughts, remember to also change your world.” —Norman Vincent Peale",
  "“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.” —Walter Anderson",
  "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” —Diane McLaren",
];

const msg = Array.from(document.getElementsByClassName("quote-message"));
// msg[0].innerHTML = "Life is not giving second chance";
let genrate_quote;
setInterval(() => {
  genrate_quote = quote[Math.floor(Math.random() * quote.length)];
  msg[0].innerHTML = genrate_quote;
}, 5000);

// console.log(genrate_quote);

const span = Array.from(document.getElementsByClassName("after-ele"));
const marksheet = Array.from(document.getElementsByClassName("marksheet"));

span.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("after-ele");
    element.style.transform = "scale(1.5)";
    element.style.cursor = "pointer";

    element.children[1].style.display = "flex";
  });
});

span.forEach((element) => {
  element.addEventListener("mouseout", () => {
    function getEle(span) {
      setTimeout(() => {
        element.classList.add("after-ele");
      }, 1000);
    }
    async function ele() {
      await getEle(span);
    }
    ele();
    element.style.removeProperty("transform");
    element.children[1].style.display = "none";
  });
});
