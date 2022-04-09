const navbar = document.querySelector('nav')
const navbarContainer = document.querySelector('.nav-container')

/* navbar */ 
const addShadowNavbar = (scrollPos) => {
  if (scrollPos > 186) {
    navbarContainer.classList.add('moving')
  }
  else {
    navbarContainer.classList.remove('moving')
  }
}

let ticking = false;
var lastScrollTop = window.scrollY;

window.addEventListener("scroll", () => { 
  if (!ticking) {
    window.requestAnimationFrame(() => {
      ticking = false
      var st = window.pageYOffset || document.scrollTop
      if (st > lastScrollTop){
        navbarContainer.classList.add('hidden-nav')
        navbar.classList.add('hidden-nav')
      } else {
        navbarContainer.classList.remove('hidden-nav')
        navbar.classList.remove('hidden-nav')
      }
      addShadowNavbar(lastScrollTop)
      lastScrollTop = st <= 0 ? 0 : st
    })
    ticking = true
  }
})

/* navigation */
const projectsLink = document.querySelector('.projects-link')
const aboutLink = document.querySelector('.about-link')
const arrowBtn = document.querySelector('.arrow-btn')

projectsLink.addEventListener('click', () => {
  document.querySelector('.projects-section').scrollIntoView({ behavior: 'smooth' })
})
arrowBtn.addEventListener('click', () => {
  document.querySelector('.projects-section').scrollIntoView({ behavior: 'smooth' })
})
aboutLink.addEventListener('click', () => {
  document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' })
})

/* links */
const github = document.querySelector('#github')
const linkedin = document.querySelector('#linkedin')

github.addEventListener('click', () => {
  window.open("https://github.com/redshift14", '_blank')
});
linkedin.addEventListener('click', () => {
  window.open("https://linkedin.com/in/anas-arif-mi", '_blank')
}); 

/* languages */ 
const contactPage = document.querySelector('#contact-page')

const subHeader = document.querySelector('h2')
const projectsTitle = document.querySelector('.projects-title')
const aboutTitle = document.querySelector('.about-title')
const aboutText = document.querySelector('.about-text')

const resumeBtn = document.querySelector('#resume-btn')

const setLang = (lang) => {
  if (lang === 'fr') {
    document.documentElement.lang = 'fr'
    projectsLink.innerText = 'projets'
    aboutLink.innerText = 'à propos'
    subHeader.innerText = 'développeur web front-end junior'
    projectsTitle.innerText = 'projets'
    aboutTitle.innerText = 'à propos'
    aboutText.innerHTML = `
      diplômé en informatique, ayant étudié les systèmes distribués et les réseaux, j'ai de solides connaissances en <strong>algorithmes
      et structures de données, </strong> puis j'ai appris en autodidacte le développement web, je suis à l'aise avec <strong>html, css,
      javascript, react, mysql et mongo db, </strong> j'ai également traité d'autres technologies telles que <strong>node js, express js,
      java, electron js, bootstrap, </strong> ainsi que d'autres outils de programmation et de conception utiles tels que <strong >github,
      produits de bureau, inkscape, gimp, figma.</strong>
    `
    resumeBtn.innerText = 'télécharger le cv'
  }
  else {
    document.documentElement.lang = 'en'
    projectsLink.innerText = 'projects'
    aboutLink.innerText = 'about'
    subHeader.innerText = 'junior front end web developer'
    projectsTitle.innerText = 'projects'
    aboutTitle.innerText = 'about'
    aboutText.innerHTML = `
      computer science graduate, studied about distributed systems and networks, i have strong knowledge in <strong>algorithmes and data
      structures, </strong> and then taught myself web development, i am comfortable with <strong>html, css, javascript, react, mysql
      and mongo db, </strong> i have also dealt with more some other technologies like <strong>node js, express js, java, electron js,
      bootstrap, </strong> plus other useful programming and designing related tools like <strong>github, office products, inkscape,
      gimp, figma.</strong>
    `
    resumeBtn.innerText = 'download resume'
  }
}

const langLink = document.querySelector('#lang-link')

const initializeLangButtonText = (lang) => {
  if (lang === 'fr') {
    langLink.innerText = 'en'
  }
  else {
    langLink.innerText = 'fr'
  }
}

let globalLang = localStorage.getItem('lang')
initializeLangButtonText(globalLang)
setLang(globalLang)

langLink.addEventListener('click', () => {
  checkGlobalLangWhenChanging()
  if (langLink.innerText === 'fr') {
    langLink.innerText = 'en'   
    globalLang = 'fr' 
    localStorage.setItem('lang', 'fr');
    setLang(globalLang)
    contactPage.dataset.lang = globalLang
  }
  else if (langLink.innerText === 'en') {
    langLink.innerText = 'fr'
    globalLang = 'en'
    localStorage.setItem('lang', 'en')
    setLang(globalLang)
    contactPage.dataset.lang = globalLang
  }
})

/* function to watch the lang when changed */ 
const checkGlobalLangWhenChanging = (oldvalue) => {
  undefined === oldvalue && (oldvalue = globalLang);
  const clearcheck = setInterval(repeatcheck,500,oldvalue);
  function repeatcheck(oldvalue) {
    if (globalLang !== oldvalue) {
      clearInterval(clearcheck);
      getProjects()
    }
  }
}

/* contact page show and hide */ 
const contactBtn = document.querySelector('#contact-btn')
const closeFrame = document.querySelector('.close-frame')

contactBtn.addEventListener('click', () => {
  contactPage.setAttribute('src', './contact.html')
  contactPage.dataset.lang = globalLang
  closeFrame.classList.remove('hidden')
  contactPage.classList.remove('hidden')
  document.body.classList.add('no-bar')
})

closeFrame.addEventListener('click', () => {
  contactPage.removeAttribute('src')
  closeFrame.classList.add('hidden')
  contactPage.classList.add('hidden')
  document.body.classList.remove('no-bar')
})

/* resume btn */ 
resumeBtn.addEventListener('click', () => {
  if (globalLang === 'fr') {
    window.open('./Anas Arif Fr.pdf')
  }
  else if (globalLang === 'en') {
    window.open('./Anas Arif En.pdf')
  }
})

/* projects */ 
import projects from "./scripts/projects.js"

const projectsContainer = document.querySelector('.projects-cards')

const getProjects = () => {
  let html = '';
  projectsContainer.innerHTML = ''
  projects.forEach(project => {

    const projectTechnologies = project.technologies.join(' - ')

    if (globalLang === 'fr') {
      html += `
        <div class="project-card">
          <h4>${project.name.fr}</h4>
          <div class="content">
            <div class="left">
              <p><span>&#8594; </span>${project.description.fr}</p>
            </div>
            <div class="right">
              <img src="${project.image}" alt="${project.name.fr}-screenshot">
            </div>
          </div>
          <div class="info">
            <div class="left">                
              <p><strong>les technologies utilisées: </strong>${projectTechnologies}</p>
            </div>
            <div class="right">
              <button id="code-btn" onclick="function openCode(){ window.open('${project.code}', '_blank')}; openCode();">code</button>
              <button id="launch-btn" onclick="function openLive(){ window.open('${project.launch}', '_blank')}; openLive();">lancer</button>
            </div>
          </div>
        </div>
      `
    }
    else {
      html += `
        <div class="project-card">
          <h4>${project.name.en}</h4>
          <div class="content">
            <div class="left">
              <p><span>&#8594; </span>${project.description.en}</p>
            </div>
            <div class="right">
              <img src="${project.image}" alt="${project.name.en}-screenshot">
            </div>
          </div>
          <div class="info">
            <div class="left">                
              <p><strong>technologies used: </strong>${projectTechnologies}</p>
            </div>
            <div class="right">
              <button id="code-btn" onclick="function openCode(){ window.open('${project.code}', '_blank')}; openCode();">code</button>
              <button id="launch-btn" onclick="function openLive(){ window.open('${project.launch}', '_blank')}; openLive();">launch</button>
            </div>
          </div>
        </div>
      `
    }
  });
  projectsContainer.innerHTML = html;
}

getProjects()