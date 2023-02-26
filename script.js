async function includeHTML() {
    let includeElements = document.querySelectorAll('[include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}
let services = [{
    'name': 'Reach SVHC',
    'img': 'img/img1.jpg',
    'description': 'Reach SVHC'
}, {
    'name': 'Chemische Tests',
    'img': 'img/img2.jpg',
    'description': 'PAH, SCCP, Pb, Cd,...'
}, {
    'name': 'Lebensmittelkontakt',
    'img': 'img/img3.jpg',
    'description': 'LFGB'
}, {
    'name': 'E&E-Produkte',
    'img': 'img/img4.jpg',
    'description': 'CE, EMC, LVD, RED'
}, {
    'name': 'Spielwaren',
    'img': 'img/img5.jpg',
    'description': 'EN71'
}, {
    'name': 'Inspektionen & Sichtprüfungen',
    'img': 'img/img6.jpg',
    'description': 'Inspektion'
}, {
    'name': 'Report Review',
    'img': 'img/img7.jpg',
    'description': 'Report Check'
}];

function init() {
    renderService();
}

function renderService() {
    document.getElementById('service').innerHTML = '';
    for (let i = 0; i < services.length; i++) {
        const service = services[i];
        document.getElementById('service').innerHTML += generateService(service, i);
    }
}

function generateService(service, i) {
    return `<div style="background-image: url('${service['img']}');"onclick="openService(${i})"><div class="servOverlay"><span>${service['name']}</span></div></div>`
}

function openService(n) {
    let service = services[n];
    document.getElementById('servDescription').innerHTML = `
    ${service['name']} <br>
    ${service['description']}
    `;
}



// let sX = 0;
// let pX = 0
// window.onscroll = function() {
//     if (window.scrollY > 250) {
//         sX = (window.scrollY - 250) * 0.3;
//         document.getElementById('header').style = `transform: translateX(-${sX}%)`;
//     } else {
//         document.getElementById('header').style = `transform: translateX(0%)`;
//     }
//     if (window.scrollY < 1100) {
//         pX = ((window.scrollY - 1100) * -0.3);
//         document.getElementById('labDescription').style = `transform: translateX(${pX}%)`;
//     } else {
//         document.getElementById('labDescription').style = `transform: translateX(0%)`;
//     }
// }
let waveFront = 0;
let waveBack = 0;
window.onscroll = function() {
    if (window.scrollY > 0) {
        waveBack = window.scrollY / 4.5;
        scaleBack = (1 + (window.scrollY / 1600))
        document.getElementById('waveBack').style = `bottom: ${waveBack}px; transform: scaleY(${scaleBack});`;

        waveFront = window.scrollY / 4;
        scaleFront = (1 - (window.scrollY / 1600));
        document.getElementById('waveFront').style = `bottom: -${waveFront}px; transform: scaleY(${scaleFront});`;
    }
}