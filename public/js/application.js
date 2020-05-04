const inputSearch = document.getElementById('searchText');
const userButton = document.getElementById('user-button');
const contentContainer = document.getElementById('content');
const hiddenBox = document.getElementById('hiddenBox');
const menuElem = document.getElementById('menu');
const menuJSON = [
    {
        item: 'Home',
        subitems: []
    },
    {
        item: 'Shop',
        subitems: ['Stöbern', 'Anbieten']
    },
    {
        item: 'Kategorien',
        subitems: []
    },
    {
        item: 'Unternehmen',
        subitems: ['Philosophie', 'Karriere']
    },
];
const color = ['backBlue', 'backGreen', 'backRed', 'backYellow'];

var shopIsShown = false;
var companyIsShown = false;
var menuHTML = '';
var articlesArray;
var shownArticles;
var signedIn;
var cartClassList;

menuJSON.forEach((item, itemIndex) => {
    menuHTML += '<span id="item' + itemIndex + '" class="item link" onclick="chooseMenu(' + itemIndex + ')">' + item.item + '</span>';
    if (item.subitems.length > 0) {
        item.subitems.forEach((subitem, subitemIndex) => {
            menuHTML += '<span id="subitem' + itemIndex + subitemIndex + '" class="subitem link hidden ' + color[itemIndex % 4] + '" onclick="chooseMenu(' + itemIndex + subitemIndex + ')">' + subitem + '</span>';
        });
    }
});

inputSearch.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        requestArticles(inputSearch.value);
        inputSearch.value = '';
    }
});

function initView() {
    // localStorage.removeItem('cookieconsent');
    if (!isConsentGiven()) {
        signedIn = null;
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
    } else {
        signedIn = localStorage.getItem('user') === null ? null : localStorage.getItem('user');
    }
    updateUserButton();

    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }

    menuElem.innerHTML = menuHTML;
    showHome();
}

function chooseMenu(num) {
    switch (num) {
        case 0:
            showHome();
            break;
        case 1:
            if (shopIsShown) {
                shopIsShown = false;
                hideSubitems(num);
            } else {
                shopIsShown = true;
                showSubitems(num);
            }
            break;
        case 10:
            requestArticles('%');
            break;
        case 11:
            createNewArticle();
            break;
        case 2:
            showCategories();
            break;
        case 3:
            if (companyIsShown) {
                companyIsShown = false;
                hideSubitems(num);
            } else {
                companyIsShown = true;
                showSubitems(num);
            }
            break;
        case 30:
            // goto philosophie
            break;
        case 31:
            // open karriere
            break;
    }
}

function hideSubitems(num) {
    const length = menuJSON[num].subitems.length;
    for (let i = 0; i < length; i++) {
        document.getElementById('subitem' + num + i).classList.add('hidden');
    }
}

function showSubitems(num) {
    const length = menuJSON[num].subitems.length;
    for (let i = 0; i < length; i++) {
        document.getElementById('subitem' + num + i).classList.remove('hidden');
    }
}

function showHome() {
    setActive('item0');
    contentContainer.innerHTML = 'Herzlich Willkommen!';
}

function requestArticles(input) {
    setActive('subitem10');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/article/find/' + input);
    xhr.onload = () => {
        contentContainer.innerHTML = xhr.responseText;
        const cart = JSON.parse(localStorage.getItem('cart'));
        articlesArray = JSON.parse(document.getElementById('all-articles-hidden').innerText);
        document.getElementById('all-articles-hidden').remove();
        cartClassList = document.getElementById('shopping-card-list').classList.toString();
        updateLists();
        showCart();
        showArticles();
    }
    xhr.onerror = function () {
    };
    xhr.send();
}

function updateLists() {
    shownArticles = [];
    articlesArray.forEach(articlesElem => {
        if (!cartContains(articlesElem.id)) {
            shownArticles.push(articlesElem);
        }
    });
}

function showCart() {
    const hidden = document.getElementById('shopping-card-null');
    const list = document.getElementById('shopping-card-list');
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart.length > 0) {
        hidden.classList = 'hidden';
        list.classList = cartClassList;

        let price = 0;
        const ul = document.getElementById('all-articles-ul');
        let tableRows = '';
        cart.forEach((elem, index) => {
            price += elem.ab_price;
            tableRows += '<li>\n' +
                '<div  class="row">\n' +
                '<span>' + elem.ab_name + '</span>\n' +
                '<span class="al-s-stretch grow-1" style="text-align: end">' + elem.ab_price + '€</span>\n' +
                '<div>\n' +
                '<button class="btn" onclick="handleRemove(' + index + ')"><i class="fas fa-minus-circle" style="color: #bc2d2d"></i></button>\n' +
                '</div>\n' +
                '</div>\n' +
                '</li>';
        });
        ul.innerHTML = tableRows;
        document.getElementById('shopping-card-total-costs').innerText = price + '€';
    } else {
        hidden.classList = '';
        list.classList = 'hidden';
    }
}

function handleRemove(num) {
    const items = JSON.parse(localStorage.getItem('cart'));
    items.splice(num, 1);
    localStorage.setItem('cart', JSON.stringify(items));
    updateLists();
    showCart();
    showArticles();
}

function showArticles() {
    const hidden = document.getElementById('all-articles-null');
    const list = document.getElementById('all-articles-list');
    if (shownArticles.length > 0) {
        hidden.classList.add('hidden');
        list.classList.remove('hidden');
        let tableRows = '';
        shownArticles.forEach((elem, index) => {
                tableRows += '<tr>\n' +
                    '<td>' + elem.id + '</td>\n' +
                    '<td>' + elem.ab_name + '</td>\n' +
                    '<td>' + elem.ab_description + '</td>\n' +
                    '<td>' + elem.ab_createdate + '</td>\n' +
                    '<td>' + elem.ab_price + '</td>\n' +
                    '<td><button onclick="handleAdd(' + index + ')"><i class="fas fa-plus"></i></button></td>\n' +
                    '</tr>';
        });

        const head = document.getElementById('all-articles-head');
        const tmp = document.createElement('div');
        tmp.appendChild(head);
        tableContent = tmp.innerHTML + tableRows;
        list.innerHTML = tableContent;

    } else {
        hidden.classList.remove('hidden');
        list.classList.add('hidden');
    }
}

function handleAdd(num) {
    if (signedIn) {
        const items = JSON.parse(localStorage.getItem('cart'));
        items.push(shownArticles[num]);
        localStorage.setItem('cart', JSON.stringify(items));
        updateLists();
        showCart();
        showArticles();
    } else {
        alert('Sie müssen sich zuerst anmelden');
    }
}

function cartContains(id) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let elem of cart) {
        if (elem.id === id) return true;
    }
    return false;
}

function createNewArticle() {
    if (signedIn) {
        setActive('subitem11');
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8000/article/form');
        xhr.onload = () => {
            contentContainer.innerHTML = xhr.responseText;
            const hiddenInput = document.getElementById('hidden-input');
            hiddenInput.value = signedIn;
        }
        xhr.onerror = function () {
        };
        xhr.send();
    } else {
        alert('Bitte melde dich an, um fortfahren zu können');
    }
}

function submitForm(form) {
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
        form.reset();
        alert(JSON.parse(xhr.response).message);
    }
    xhr.open(form.method, form.getAttribute("action"));
    xhr.send(new FormData(form));
    return false;
}

function showCategories() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/category/all');
    xhr.onload = () => {
        contentContainer.innerHTML = xhr.responseText;
    }
    xhr.onerror = function () {
    };
    xhr.send();
}

function setActive(id) {
    const items = menuElem.children;
    for (let elem of items) {
        if (elem.id === id) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    }
}

function updateUserButton() {
    if (signedIn) {
        userButton.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
    } else {
        userButton.innerHTML = '<i class="fas fa-sign-in-alt"></i>';
    }
}

function userInteraction() {
    if (signedIn) {
        logout();
    } else {
        login();
    }
}

function login() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/authentification/login');
    xhr.withCredentials = true;
    xhr.onload = () => {
        signedIn = JSON.parse(xhr.response).user;
        if (isConsentGiven()) {
            localStorage.setItem('user', signedIn);
        }
        updateUserButton();
    }
    xhr.onerror = function () {
    };
    xhr.send();
}

function logout() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/authentification/logout');
    xhr.withCredentials = true;
    xhr.onload = () => {
        signedIn = null;
        localStorage.removeItem('user');
        localStorage.setItem('cart', JSON.stringify([]));
        updateUserButton();
        showHome();
    }
    xhr.onerror = function () {
    };
    xhr.send();
}

initView();