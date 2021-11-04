const nav = document.querySelector('.nav');
const buttonsLi = Array.from(nav.children);

const pagesContainer = document.querySelector('.content-container');
const pages = Array.from(pagesContainer.children);

// button[0] == about me
// button[1] == resume
// button[2] == portfolio
// button[3] == contact

// nav menu
// i should have used a loop, but i could not figure it out
// so i hard code it
// i will fix it in the future when i get move comfortable with JS

buttonsLi[0].addEventListener('click', e => {
    const initialButton = buttonsLi[0];

    if(initialButton.classList.contains('right')) {
        buttonsLi[2].classList.add('hidden-right');
        buttonsLi[2].classList.remove('hidden-left');
        pages[2].classList.add('hidden-right');
        pages[2].classList.remove('hidden-left');
    }
    if(initialButton.classList.contains('left')) {
        buttonsLi[2].classList.add('hidden-left');
        buttonsLi[2].classList.remove('hidden-right');
        pages[2].classList.add('hidden-left');
        pages[2].classList.remove('hidden-right');
    }
    
    pages[0].classList.add('current');
    pages[0].classList.remove('left');
    pages[0].classList.remove('right');
    pages[0].classList.remove('hidden-right');
    pages[0].classList.remove('hidden-left');

    buttonsLi[0].classList.remove('left');
    buttonsLi[0].classList.remove('right');
    buttonsLi[0].classList.add('current');

    pages[1].classList.add('right');
    pages[1].classList.remove('left');
    pages[1].classList.remove('current');
    pages[1].classList.remove('hidden-right');
    pages[1].classList.remove('hidden-left');

    buttonsLi[1].classList.add('right');
    buttonsLi[1].classList.remove('current');
    buttonsLi[1].classList.remove('left');
    buttonsLi[1].classList.remove('hidden-right');
    buttonsLi[1].classList.remove('hidden-left');

    buttonsLi[2].classList.remove('right');
    buttonsLi[2].classList.remove('current');
    buttonsLi[2].classList.remove('left');

    pages[3].classList.add('left');
    pages[3].classList.remove('right');
    pages[3].classList.remove('current');
    pages[3].classList.remove('hidden-right');
    pages[3].classList.remove('hidden-left');

    buttonsLi[3].classList.add('left');
    buttonsLi[3].classList.remove('current');
    buttonsLi[3].classList.remove('right');
    buttonsLi[3].classList.remove('hidden-right');
    buttonsLi[3].classList.remove('hidden-left');

    pages[0].classList.remove('hidden');
    pages[1].classList.add('hidden');
    pages[2].classList.add('hidden');
    pages[3].classList.add('hidden');
});

buttonsLi[1].addEventListener('click', e => {
    const initialButton = buttonsLi[1];

    if(initialButton.classList.contains('right')) {
        buttonsLi[3].classList.add('hidden-right');
        buttonsLi[3].classList.remove('hidden-left');
        pages[3].classList.add('hidden-right');
        pages[3].classList.remove('hidden-left');
    }
    if(initialButton.classList.contains('left')) {
        buttonsLi[3].classList.add('hidden-left');
        buttonsLi[3].classList.remove('hidden-right');
        pages[3].classList.add('hidden-left');
        pages[3].classList.remove('hidden-right');
    }

    pages[1].classList.add('current');
    pages[1].classList.remove('left');
    pages[1].classList.remove('right');
    pages[1].classList.remove('hidden-right');
    pages[1].classList.remove('hidden-left');

    buttonsLi[1].classList.add('current');
    buttonsLi[1].classList.remove('right');
    buttonsLi[1].classList.remove('left');

    pages[2].classList.add('right');
    pages[2].classList.remove('current');
    pages[2].classList.remove('left');
    pages[2].classList.remove('hidden-right');
    pages[2].classList.remove('hidden-left');

    buttonsLi[2].classList.add('right');
    buttonsLi[2].classList.remove('current');
    buttonsLi[2].classList.remove('left');
    buttonsLi[2].classList.remove('hidden-left');
    buttonsLi[2].classList.remove('hidden-right');
    
    buttonsLi[3].classList.remove('right');
    buttonsLi[3].classList.remove('current');
    buttonsLi[3].classList.remove('left');

    pages[0].classList.add('left');
    pages[0].classList.remove('right');
    pages[0].classList.remove('current');
    pages[0].classList.remove('hidden-right');
    pages[0].classList.remove('hidden-left');

    buttonsLi[0].classList.add('left');
    buttonsLi[0].classList.remove('hidden-left');
    buttonsLi[0].classList.remove('hidden-right');
    buttonsLi[0].classList.remove('current');
    buttonsLi[0].classList.remove('right');

    pages[1].classList.remove('hidden');
    pages[2].classList.add('hidden');
    pages[3].classList.add('hidden');
    pages[0].classList.add('hidden');
});

buttonsLi[2].addEventListener('click', e => {
    const initialButton = buttonsLi[2];
    if(initialButton.classList.contains('right')) {
        buttonsLi[0].classList.add('hidden-right');
        buttonsLi[0].classList.remove('hidden-left');
        pages[0].classList.add('hidden-right');
        pages[0].classList.remove('hidden-left');
    }
    if(initialButton.classList.contains('left')) {
        buttonsLi[0].classList.add('hidden-left');
        buttonsLi[0].classList.remove('hidden-right');
        pages[0].classList.add('hidden-left');
        pages[0].classList.remove('hidden-right');
    }
    pages[2].classList.add('current');
    pages[2].classList.remove('right');
    pages[2].classList.remove('left');

    buttonsLi[2].classList.add('current');
    buttonsLi[2].classList.remove('right');
    buttonsLi[2].classList.remove('left');

    pages[3].classList.add('right');
    pages[3].classList.remove('current');
    pages[3].classList.remove('left');
    pages[3].classList.remove('hidden-right');
    pages[3].classList.remove('hidden-left');

    buttonsLi[3].classList.add('right');
    buttonsLi[3].classList.remove('current');
    buttonsLi[3].classList.remove('left');
    buttonsLi[3].classList.remove('hidden-right');
    buttonsLi[3].classList.remove('hidden-left');

    buttonsLi[0].classList.remove('right');
    buttonsLi[0].classList.remove('current');
    buttonsLi[0].classList.remove('left');

    pages[1].classList.add('left');
    pages[1].classList.remove('current');
    pages[1].classList.remove('right');
    pages[1].classList.remove('hidden-right');
    pages[1].classList.remove('hidden-left');

    buttonsLi[1].classList.add('left');
    buttonsLi[1].classList.remove('hidden-right');
    buttonsLi[1].classList.remove('hidden-left');
    buttonsLi[1].classList.remove('current');
    buttonsLi[1].classList.remove('right');

    pages[2].classList.remove('hidden');
    pages[3].classList.add('hidden');
    pages[0].classList.add('hidden');
    pages[1].classList.add('hidden');
});

buttonsLi[3].addEventListener('click', e => {
    const initialButton = buttonsLi[3];
    if(initialButton.classList.contains('right')) {
        buttonsLi[1].classList.add('hidden-right');
        buttonsLi[1].classList.remove('hidden-left');
        pages[1].classList.add('hidden-right');
        pages[1].classList.remove('hidden-left');
    }
    if(initialButton.classList.contains('left')) {
        buttonsLi[1].classList.add('hidden-left');
        buttonsLi[1].classList.remove('hidden-right');
        pages[1].classList.add('hidden-left');
        pages[1].classList.remove('hidden-right');
    }
    pages[3].classList.add('current');
    pages[3].classList.remove('right');
    pages[3].classList.remove('hidden-right');
    pages[3].classList.remove('hidden-left');
    pages[3].classList.remove('left');

    buttonsLi[3].classList.add('current');
    buttonsLi[3].classList.remove('right');
    buttonsLi[3].classList.remove('left');

    pages[0].classList.add('right');
    pages[0].classList.remove('current');
    pages[0].classList.remove('left');
    pages[0].classList.remove('hidden-right');
    pages[0].classList.remove('hidden-left');

    buttonsLi[0].classList.add('right');
    buttonsLi[0].classList.remove('current');
    buttonsLi[0].classList.remove('left');
    buttonsLi[0].classList.remove('hidden-right');
    buttonsLi[0].classList.remove('hidden-left');

    buttonsLi[1].classList.remove('right');
    buttonsLi[1].classList.remove('current');
    buttonsLi[1].classList.remove('left');

    pages[2].classList.add('left');
    pages[2].classList.remove('hidden-right');
    pages[2].classList.remove('hidden-left');
    pages[2].classList.remove('current');
    pages[2].classList.remove('right');

    buttonsLi[2].classList.add('left');
    buttonsLi[2].classList.remove('hidden-right');
    buttonsLi[2].classList.remove('hidden-left');
    buttonsLi[2].classList.remove('current');
    buttonsLi[2].classList.remove('right');

    pages[3].classList.remove('hidden');
    pages[0].classList.add('hidden');
    pages[1].classList.add('hidden');
    pages[2].classList.add('hidden');
});


// filter cards by category
const filterItem = document.querySelector('.filterable-items');
const cards = document.querySelectorAll('.project-card');

onload = () => {
    filterItem.addEventListener('click', (selectedItem) => {
        if(selectedItem.target.classList.contains('filterable-item')) {
            filterItem.querySelector('.active-item').classList.remove('active-item');
            selectedItem.target.classList.add('active-item');
            let filterName = selectedItem.target.getAttribute('data-name');
            cards.forEach((card) => {
                let filterCards = card.getAttribute('data-name');
                if(filterCards == filterName || filterName == 'all') {
                    card.classList.remove('hide-card');
                    card.classList.add('show-card');
                }
                else {
                    card.classList.add('hide-card');
                    card.classList.remove('show-card');
                }
            })
        }
    })
}

// projects preview 
const certifierBtn = document.querySelector('.certifier-btn');
const univBtn = document.querySelector('.univ-btn');
const portfolio1Btn = document.querySelector('.portfolio-1-btn');
const iamBtn = document.querySelector('.iam-btn');

const certifierPreview = document.querySelector('.certifier-preview-page');
const univPreview = document.querySelector('.univ-preview-page');
const portfolio1Preview = document.querySelector('.portfolio-1-preview-page');
const iamPreview = document.querySelector('.iam-preview-page');

const closeBtn = document.querySelector('.close-preview');

certifierBtn.addEventListener('click', () => {
    certifierPreview.classList.add('iframe-container-show');
    certifierPreview.classList.remove('iframe-container-hide');
    closeBtn.classList.add('close-preview-show');
    closeBtn.classList.remove('close-preview-hide');
});

univBtn.addEventListener('click', () => {
    univPreview.classList.add('iframe-container-show');
    univPreview.classList.remove('iframe-container-hide');
    closeBtn.classList.add('close-preview-show');
    closeBtn.classList.remove('close-preview-hide');
});

portfolio1Btn.addEventListener('click', () => {
    portfolio1Preview.classList.add('iframe-container-show');
    portfolio1Preview.classList.remove('iframe-container-hide');
    closeBtn.classList.add('close-preview-show');
    closeBtn.classList.remove('close-preview-hide');
});

iamBtn.addEventListener('click', () => {
    iamPreview.classList.add('iframe-container-show');
    iamPreview.classList.remove('iframe-container-hide');
    closeBtn.classList.add('close-preview-show');
    closeBtn.classList.remove('close-preview-hide');
})

closeBtn.addEventListener('click', () => {
    certifierPreview.classList.add('iframe-container-hide');
    certifierPreview.classList.remove('iframe-container-show');
    univPreview.classList.add('iframe-container-hide');
    univPreview.classList.remove('iframe-container-show');
    portfolio1Preview.classList.add('iframe-container-hide');
    portfolio1Preview.classList.remove('iframe-container-show');
    iamPreview.classList.add('iframe-container-hide');
    iamPreview.classList.remove('iframe-container-show');
    closeBtn.classList.add('close-preview-hide');
    closeBtn.classList.remove('close-preview-show');
});

// contact section
const facebook = document.querySelector('#facebook');
const github = document.querySelector('#github');
const linkedin = document.querySelector('#linkedin');

facebook.addEventListener('click', () => {
    window.open('https://www.facebook.com/anas.arif.1614/', '_blank');
});
github.addEventListener('click', () => {
    window.open("https://github.com/redshift14", '_blank');
});
linkedin.addEventListener('click', () => {
    window.open("https://linkedin.com/in/anas-arif-mi", '_blank');
});

// contact form
var form = document.getElementById("contact-form");
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
                // if (localStorage.getItem('lang') === 'english') {
                //     status.innerHTML = "Thanks for your submission!";
                // }
                // else if (localStorage.getItem('lang') === 'french') {
                //     status.innerHTML = "Merci pour votre soumission!"
            // }
                status.innerHTML = "Thanks for your submission!";
                status.classList.add('success');
                form.reset()
        }).catch(error => {
                // if (localStorage.getItem('lang') === 'english') {
                //     status.innerHTML = "Oops! There was a problem submitting your form";
                // }
                // else if (localStorage.getItem('lang') === 'french') {
                //     status.innerHTML = "Oups! Un problème est survenu lors de l'envoi de votre formulaire"
            // }
            status.innerHTML = "Oops! There was a problem submitting your form";
            status.classList.add('error');
        });
    }
form.addEventListener("submit", handleSubmit);

// download cv
const downloadCvBtn = document.querySelector('.downloadCv-btn');
downloadCvBtn.addEventListener('click', () => {
    window.open('./cvEn.pdf');
});