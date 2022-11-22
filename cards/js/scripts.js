let drivers = [
    {image: 'img/hombre1-cutout.png', nombre: 'Mateo Gómez', comunas: [1,2,3,4,5], tamanios: 'Pequeño, mediano, grande', urgencias: true},
    {image: 'img/hombre2-cutout.png', nombre: 'José Hernández', comunas: [8,9,10,11], tamanios: 'Pequeño, mediano', urgencias: true},
    {image: 'img/mujer1-cutout.png', nombre: 'Erika Rivas', comunas: [15, 12, 13, 1], tamanios: 'Pequeño, mediano', urgencias: false},
    {image: 'img/OIP-cutout.png', nombre: 'Matías Alé', comunas: [6,7,8], tamanios: 'Pequeño, mediano, grande', urgencias: false},
    {image: 'img/hombre3-cutout.png', nombre: 'Cesar Altamirano', comunas: [1,2,3,4,5], tamanios: 'Pequeño, mediano, grande', urgencias: true},
    {image: 'img/woman-cutout.png', nombre: 'María Córdoba', comunas: [1,2,3], tamanios: 'Pequeño', urgencias: true},
    {image: 'img/hombre4-cutout.png', nombre: 'Felipe SantaCruz', comunas: [6,7,8], tamanios: 'Pequeño, mediano', urgencias: false},
    {image: 'img/mujer2-cutout.png', nombre: 'Daiana López', comunas: [15, 12, 13, 1], tamanios: 'Pequeño, mediano', urgencias: false},
    {image: 'img/mujer3-cutout.png', nombre: 'Luciana Echeverría', comunas: [2,6,7,8,9], tamanios: 'Pequeño, mediano, grande', urgencias: false},
    {image: 'img/hombre5-cutout.png', nombre: 'Jorge Indalecio', comunas: [1,2,4,5,7], tamanios: 'Pequeño, mediano, grande', urgencias: true},
    {image: 'img/hombre6-cutout.png', nombre: 'Matías Rodríguez', comunas: [1,2,3,6], tamanios: 'Pequeño', urgencias: true},
    {image: 'img/mujer4-cutout.png', nombre: 'Abril Salgueiro', comunas: [14,15], tamanios: 'Pequeño, mediano', urgencias: false},
]

const $drivers = document.getElementById('drivers')

let urgencies = (item) =>{

}
let addDrivers = (array) => {
    let {image, nombre, comunas, tamanios, urgencias, phone} = array
    let fragment = document.createDocumentFragment()
    //FRONT-CARD
    let article = document.createElement('article')
    article.classList.add('card-driver')

    let frontCard = document.createElement('div')
    frontCard.classList.add('front-card')

    let divImg = document.createElement('div')
    divImg.classList.add('img-space')

    let img = document.createElement('img')
    img.setAttribute('src', image)

    let nameTag = document.createElement('h2')
    let name = document.createTextNode(nombre)

    let pComunas = document.createElement('p')
    pComunas.classList.add('comunes')
    let comunasContent = document.createTextNode(`Comunas: ${comunas}`)

    let pTamanios = document.createElement('p')
    pTamanios.classList.add('sizes')
    let tamaniosContent = document.createTextNode(`Tamaños: ${tamanios}`)

    let pUrgencias = document.createElement('p')
    pUrgencias.classList.add('urgencies')
    if(urgencias){
        pUrgencias.classList.add('yes')
        let urgenciesContentY = document.createTextNode(`Urgencias: Sí`)
        pUrgencias.appendChild(urgenciesContentY)
    }
    else{
        pUrgencias.classList.add('no')
       let urgenciesContentN = document.createTextNode(`Urgencias: No`)
       pUrgencias.appendChild(urgenciesContentN)
    }
    
   let btnContact = document.createElement('button') 
    btnContact.classList.add('contact-driver')
    btnContact.classList.add('flip')
    let btnContactContent = document.createTextNode('Contactame')

    divImg.appendChild(img)
    nameTag.appendChild(name)
    pComunas.appendChild(comunasContent)
    pTamanios.appendChild(tamaniosContent)
    btnContact.appendChild(btnContactContent)

    frontCard.appendChild(divImg)
    frontCard.appendChild(nameTag)
    frontCard.appendChild(pComunas)
    frontCard.appendChild(pTamanios)
    frontCard.appendChild(pUrgencias)
    frontCard.appendChild(btnContact)
    article.appendChild(frontCard)
    fragment.appendChild(article)
    $drivers.appendChild(fragment)

    //BACK-CARD
    let backCard = document.createElement('div')
    backCard.classList.add('back-card')

    backCard.innerHTML = '<h3> Contactame! </h3>'
    
    let pNumber = document.createElement('p')
    pNumber.classList.add('phone')
    pNumber.textContent = phone
    
    //LISTA DE ICONOS
    let ulContact = document.createElement('ul')
    let liWpp = document.createElement('li')
    let imgWpp = document.createElement('img')
    imgWpp.setAttribute('src', 'assets/whatsapp.svg')
    liWpp.appendChild(imgWpp)

    let liPhone = document.createElement('li')
    let imgPhone = document.createElement('img')
    imgPhone.setAttribute('src', 'assets/phone.svg')
    liPhone.appendChild(imgPhone)

    let liMail = document.createElement('li')
    let imgMail = document.createElement('img')
    imgMail.setAttribute('src', 'assets/mail.svg')
    liMail.appendChild(imgMail)

    ulContact.appendChild(liWpp)
    ulContact.appendChild(liPhone)
    ulContact.appendChild(liMail)

    let btnBack = document.createElement('button')
    btnBack.classList.add('flp')
    btnBack.innerText = 'X'

    backCard.appendChild(pNumber)
    backCard.appendChild(ulContact)
    backCard.appendChild(btnBack)

    article.appendChild(backCard)
}

drivers.forEach((item)=>{
    let driver =  addDrivers(item)
})


let btns = document.querySelectorAll('.flip');
let btnsBack = document.querySelectorAll('.flp');

btns.forEach(item => {
    item.addEventListener('click', event => {
        const cc = event.target.parentElement.parentElement;
        cc.classList.toggle('flipped')
    })
});

btnsBack.forEach(item => {
    item.addEventListener('click', event => {
        const cc = event.target.parentElement.parentElement;
        cc.classList.toggle('flipped')
    })
});