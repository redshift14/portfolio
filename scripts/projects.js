const projects = [
  {
    id: 1,
    name: {
      en: 'certifier',
      fr: 'certifier'
    },
    description: {
      en: 'A blockchain based educational certificates generation and verification system, uses IPFS to store certificates and ethereum blockchain to store its hashes, the generated certificates are generated in PDF format. The project features rolebased authorization system, where an issuer can issuer a new certificates, a verifier can either verify by Hash or by uploading the file, and a student where he can access its certificate by entering the Hash.',
      fr: "Un système de génération et de vérification de certificats éducatifs basé sur la blockchain, utilise IPFS pour stocker les certificats et la blockchain Ethereum pour stocker ses hachages, les certificats générés sont générés au format PDF. Le projet comprend un système d'autorisation basé sur les rôles, où un émetteur peut émettre de nouveaux certificats, un vérificateur peut soit vérifier par Hash ou en téléchargeant le fichier, et un étudiant où il peut accéder à son certificat en saisissant le Hash."
    },
    image: '../resources/images/certifier-card.webp',
    code: 'https://github.com/redshift14/Projet-M2',
    launch: 'https://project-m2-certifier.herokuapp.com/',
    technologies: [ 'react js', 'bootstrap', 'mongo db', 'node js', 'solidity' ]
  },
  {
    id: 2,
    name: {
      en: 'rest countries api',
      fr: 'pays rest api' 
    },
    description: {
      en: 'front end mentor challenge solution, in this challenge users are able to see all the countries from the api to the homepage, search, and filter countries by region, also click throw a country and see more details about it, it features alos a dark and a light theme.',
      fr: "solution de défi de front end mentor, dans ce défi, les utilisateurs peuvent voir tous les pays de l'API à la page d'accueil, rechercher et filtrer les pays par région, également cliquer sur jeter un pays et voir plus de détails à ce sujet, il comporte également un sombre et un thème léger."
    },
    image: '../resources/images/countries-api-card.webp',
    code: 'https://github.com/redshift14/front-end-mentor-rest-countries-api-with-color-theme-switcher',
    launch: 'https://ornate-pika-b45ee8.netlify.app/',
    technologies: [ 'react js', 'api' ]
  },
  {
    id: 3,
    name: {
      en: 'manage landing page',
      fr: 'manage page de destination'
    },
    description: {
      en: 'front end mentor challenge solution, fully responsive landing page with heavy using of css pseudo classes and elements, and a custom slider using an external library',
      fr: "solution de défi de front end mentor, page de destination entièrement réactive avec une utilisation intensive de pseudo-classes et d'éléments CSS, et un curseur personnalisé utilisant une bibliothèque externe"
    },
    image: '../resources/images/manage-card.webp',
    code: 'https://github.com/redshift14/front-end-mentor-manage-landing-page',
    launch: 'https://redshift14.github.io/front-end-mentor-manage-landing-page/',
    technologies: [ 'html', 'css', 'javascript', 'splide js' ]
  },
  {
    id: 4,
    name: {
      en: 'weather app',
      fr: 'application météo'
    },
    description: {
      en: 'a simple weather app that sets the background according to the selected location, using openweathermap to get weather data and Api and Unsplash Api to get images for locations.',
      fr: "une application météo simple qui définit l'arrière-plan en fonction de l'emplacement sélectionné, en utilisant openweathermap pour obtenir des données météorologiques et Api et Unsplash Api pour obtenir des images pour les emplacements."
    },
    image: '../resources/images/weather-app-card.webp',
    code: 'https://github.com/redshift14/weather-app',
    launch: 'https://pedantic-banach-42fc63.netlify.app/',
    technologies: [ 'html', 'css', 'javascript', 'api' ]
  },
  {
    id: 5,
    name: {
      en: 'todo app',
      fr: 'application todo'
    },
    description: {
      en: 'front end mentor challenge solution, users are able to make crud operations on the todo list and store them in local storage, filter the list, and drag and drop elements to reorder them, this app also features dark and light modes.',
      fr: 'solution de défi de mentor frontal, les utilisateurs peuvent effectuer des opérations crud sur la liste de tâches et les stocker dans le stockage local, filtrer la liste et faire glisser et déposer des éléments pour les réorganiser, cette application propose également des modes sombre et clair.'
    },
    image: '../resources/images/todo-app-card-light.webp',
    code: 'https://github.com/redshift14/front-end-mentor-todo-app',
    launch: 'https://vocal-zabaione-da06cd.netlify.app/',
    technologies: [ 'react js', 'react beautiful drag and drop']
  }
]

export default projects