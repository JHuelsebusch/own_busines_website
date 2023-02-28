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
    'description': `Die REACh-Verordnung (Registrierung, Evaluierung und Autorisierung von Chemikalien) gilt nicht nur für Produkte aus dem Chemie-Sektor, sondern auch für alle Alltagsgegenstände. <br>
   Händler und Importeure stehen in der Pflicht zu wissen, welche Materialien und Substanzen ihr Produkt enthält. Zudem sind sie ebenfalls verpflichtet Endkunden und Verbrauchern auf Anfrage Auskunft über enthaltene 
   SVHC (Substances of Very High Concern - besonders besorgniserregende Stoffe) zu geben. <br>
   Die Liste der besonders besorgniseregenden Stoffe enthält eine Reihe von karzinogenen, mutagenen, reproduktionstoxischen, persistenten oder bioakkumulierbaren Substanzen und wird halbjährlich von der ECHA (Europäische Chemikalienagentur) aktualisiert.<br>
   Mit uns bist du hier immer auf dem neusten Stand und bekommst Unterstützung zur Einhaltung der REACh-Vorschriften! `
}, {
    'name': 'Chemische Tests',
    'img': 'img/img2.jpg',
    'description': `Jeder Hersteller und/oder Importeur muss sicherstellen, dass seine Produkte bei einem vorhersehbaren Gebrauch keinerlei Auswirkungen auf die Gesundheit des Verwenders haben. 
    Dies gilt für jegliche Arten von Bedarfsgegenständen. <br>
    <br>
    Unsere Chemiekalienanalyse enthält - je nach Kundenwunsch - u.A: <br>
    <ul><li>Polyzyklische Aromatische Kohlenwasserstoffe (PAH)</li>
    <li>Kurzkettige Chlorparaffine (SCCP)</li>
    <li>Schwermetalrückstände</li>
    <li>Weichmacher</li>
    <li>Bisphenol A (BPA)</li>
    <li>uvm.</li></ul>`
}, {
    'name': 'Lebensmittelkontakt',
    'img': 'img/img3.jpg',
    'description': `Lebensmittel kommen im Haushalt mit vielen Bedarfsgegenständen in Berührung - sei es bei der Lagerung oder Aufbewahrung, bei der Zubereitung von Speisen oder Servieren von Gerichten. <br>
    Für all diese Artikel gelten strenge gesetzliche Vorgaben. In erster Linie dürfen sie keine Gefahr für die Gesundheit darstellen. Es dürfen keinerlei Stoffe vom Gegenständen auf die Lebensmittel übergehen, 
    welche toxisch sind, zu einer unvertretbaren Änderung des Lebensmittel führen oder eine Veränderung des Geruchs oder Geschmacks bewirken. <br>
    <br>
    Unsere Angebote enthalten: <br>
    <ul><li>Sensorische Prüfung</li>
    <li>Prüfung der Gesamtmigration</li>
    <li>viele weitere materialabhängige Prüfungen</li>
    </ul>`

}, {
    'name': 'E&E-Produkte',
    'img': 'img/img4.jpg',
    'description': `Elektrische betriebene Artikel können ein erhebliches Risiko darstellen. Sei es durch Stromschläge, Überhitzungen oder Explosionen. Dadurch gibt es eine Reihe von Normen und Standards, die es einzuhalten gilt. 
    Hier den Übersicht zu behalten ist nicht leicht. <br>
    Mit unserer Unterstützung erhältst du einen individuellen Überblick zu deinem Produkt. <br>
    <br>
    Unsere Angebote: <br>
    <ul><li>Elektromagnetische Verträglichkeit (EMC)</li>
    <li>Niederspannungsrichtlinie (LVD)</li>
    <li>Ristriction of Hazard Substances (RoHS)</li>
    <li>Funkanlagenrichtlinie (RED)</li>
    <li>uvm.</li>
    </ul>`
}, {
    'name': 'Spielwaren',
    'img': 'img/img5.jpg',
    'description': `Die Sicherheit und Qualität von Spiel- und Freizeitartikeln gerät immer wieder in den Focus der Öffentlichenkeit.
    Regelmäßig werden Belastungen von Weichmachern, Cadium, Blei, Nickel, etc festgestellt, die zu einem vollständigen Produktruf führen. <br>
    Wir helfen dir die Sicherheit und Qualität deines Produktes zu gewährleisten.<br>
    <br>
    Unser Angebot umfasst unter anderem:
    <ul><li>Physikalische Prüfung (scharfe Spitzen und Kanten)</li>
    <li>Kleinteilüberprüfung</li>
    <li>Prüfung der Verarbeitungsqualität</li>
    <li>Funktionalitätsprüfung</li>
    <li>Prüfung der Entflammbarkeit</li>
    <li>Toxikologische Beurteilung</li>
    <li>Prüfung der Warnhinweise und Kennzeichnungen</li>
    <li>uvm.</li></ul>
`
}, {
    'name': 'Inspektionen & Sichtprüfungen',
    'img': 'img/img6.jpg',
    'description': `Überprüfe deine Produktqualität bevor deine Ware das Werk oder Lagerhaus verlässt. <br>
    Wähle deine Qualitätscheckliste aus vielen Standardoptionen oder entwerfe deine ganz eigenen Spezifikationen. Geschulte und spezialisierte Inspektoren verschaffen sich einen Überblick und prüfen deine Bestellung anhand deiner Spezifikationen. 
    Durch einen detailieren Bericht mit Fotos und Fehlerbeschreibungen erhältst du ein umfassendes Bild über den Zustand deiner Ware.<br>
    <br>
    Unsere Angebote: <br>
    <ul><li>Musterziehung aus der Produktion</li>
    <li>Preshipment Inspection (PSI)</li>
    <li>Final Random Inspection (FRI)</li>
    <li>Ladungsüberwachung</li>
    <li>uvm.</li>
    </ul>
    `
}, {
    'name': 'Report Review',
    'img': 'img/img7.jpg',
    'description': `Du hast einen Prüfbericht von einem Lieferanten erhalten und kannst nicht beurteilen, ob der Testreport zu deinem Produkt oder deinen Qualitätsanforderungen passt? Oder kannst den Bericht nicht auf europäische und deutsche Normen oder Richtlinien evaluieren?
    <br> Das ist kein Problem! <br> Für Teilnehmer und Kunden unserer Partner bieten wir eine exklusive Überprüfung deines Berichtes an! <br> Melde dich gerne bei uns!`
}];

function init() {
    renderService();
    openService(0);
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
            <div>
                <div class="descriptionCard">
                    <h3>${service['name']}</h3>
                    <p>
                        ${service['description']}
                    </p>
                    <img src="${service['img']}" alt="">
                </div>
            </div>    
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