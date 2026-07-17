// ======================
// Subscribe Form
// ======================

const subscribeForm = document.querySelector(".subscribe form");

if (subscribeForm) {

subscribeForm.addEventListener("submit", function(e){

e.preventDefault();

const name = subscribeForm.querySelector('input[type="text"]').value;
const email = subscribeForm.querySelector('input[type="email"]').value;

fetch("https://script.google.com/macros/s/AKfycbxmfMzjm-ovm23nfj10DLLrSlfqv3WslXnXTd4obHcr-x6YKuHTjARgMsG8UyMPzkw7OA/exec",{

method:"POST",

body:JSON.stringify({

type:"subscribe",

name:name,

email:email

})

})

.then(()=>{

alert("Thank you for subscribing!");

subscribeForm.reset();

})

.catch(()=>{

alert("Something went wrong.");

});

});

}


// ======================
// Contact Form
// ======================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const inputs = contactForm.querySelectorAll("input");

const name = inputs[0].value;
const email = inputs[1].value;
const phone = inputs[2].value;
const message = contactForm.querySelector("textarea").value;

fetch("https://script.google.com/macros/s/AKfycbxmfMzjm-ovm23nfj10DLLrSlfqv3WslXnXTd4obHcr-x6YKuHTjARgMsG8UyMPzkw7OA/exec",{

method:"POST",

body:JSON.stringify({

type:"contact",

name:name,

email:email,

phone:phone,

message:message

})

})

.then(()=>{

alert("Message sent successfully!");

contactForm.reset();

})

.catch(()=>{

alert("Something went wrong.");

});

});

}