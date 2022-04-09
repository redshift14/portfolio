// contact form 
const form = document.querySelector('form');
const myStatus = document.getElementById('status');

const globalLang = window.frameElement.dataset.lang

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    console.log(response)
    if (globalLang === 'fr') {
      myStatus.innerHTML = "merci pour votre soumission!";
    }
    else if (globalLang === 'en') {
      myStatus.innerHTML = "thanks for your submission!";
    }
    myStatus.classList.remove('error');
    setTimeout(() => {
      myStatus.innerHTML = ''
    }, 3000);
    form.reset()
  }).catch(error => {
    if (globalLang === 'fr') {
      myStatus.innerHTML = "Oups! Il y a eu un problème lors de la soumission de votre formulaire";
    }
    else if (globalLang === 'en') {
      myStatus.innerHTML = "Oops! There was a problem submitting your form";
    }
    myStatus.classList.add('error');
    setTimeout(() => {
      myStatus.innerHTML = ''
      myStatus.classList.remove('error');
    }, 3000);
    console.log(error)
  });
}

form.addEventListener("submit", handleSubmit); 

// language
const title = document.querySelector('h3')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')
const submitBtn = document.querySelector('.submit-btn')

const setLang = (lang) => {
  if (lang === 'fr') {
    title.innerText = 'contactez moi'
    nameInput.placeholder = 'votre nom'
    emailInput.placeholder = 'votre émail'
    messageInput.placeholder = 'votre message'
    submitBtn.innerText = 'soumettre'
  }
  else {
    title.innerText = 'contact me'
    nameInput.placeholder = 'your name'
    emailInput.placeholder = 'your email'
    messageInput.placeholder = 'your message'
    submitBtn.innerText = 'submit'
  }
}

setLang(globalLang)
