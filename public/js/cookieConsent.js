function startCookieConsent() {
    const keks = localStorage.getItem('cookieconsent');
    if (!keks) {
        document.body.innerHTML += '\ <div id="cookieConsent">Mit dem klicken auf dieses Banner, stimmen Sie zu das die Seite Cookies benutzen darf</div>\ ';
        document.getElementById("cookieConsent").addEventListener("click", consenting);
    }
}

function consenting() {
    const keks = localStorage.getItem('cookieconsent');
    if (!keks) {
        console.log("Initialisiere");
    }
    alert("funktioniert");
    localStorage.setItem('cookieconsent', true);
    console.log(localStorage.getItem('cookieconsent'));
}

function isConsentGiven() {
    const keks = localStorage.getItem('cookieconsent');
    if (keks) {
        return true;
    } else {
        return false;
    }
}
