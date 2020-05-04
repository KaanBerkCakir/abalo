function startCookieConsent() {
    const box = document.createElement('div');
    box.id = 'cookieConsent';
    box.classList = 'row jc-center al-center';

    const msg = document.createElement('span');
    msg.innerText = 'Erlaubst du abalo die Verwendung von Cookies?';

    const yes = document.createElement('button');
    yes.onclick =  () => {
        localStorage.setItem('cookieconsent', true);
        document.body.removeChild(box);
    };
    yes.innerText = 'Einverstanden!';

    const no = document.createElement('button');
    no.onclick =  () => {
        localStorage.setItem('cookieconsent', false);
        document.body.removeChild(box);
    };
    no.innerText = 'Nein, danke!';

    box.appendChild(msg);
    box.appendChild(yes);
    box.appendChild(no);
    document.body.appendChild(box);
}

function isConsentGiven() {
    const keks = localStorage.getItem('cookieconsent');
    console.log(keks);
    if (keks === null) {
        startCookieConsent();
        return false;
    } else return keks==='true';
}

function removeConsent() {
    localStorage.removeItem('cookieconsent');
}
