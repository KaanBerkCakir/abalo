require('./bootstrap');

import Vue from 'vue';
import Dialog from 'v-dialogs'
import Axios from 'axios';
import VueAxios from 'vue-axios'
import SiteHeaderComponent from "./components/SiteHeaderComponent";
import SiteNavBarComponent from "./components/SiteNavBarComponent";
import HomeComponent from "./components/HomeComponent";
import AllArticlesComponent from "./components/AllArticlesComponent";
import MyArticlesComponent from "./components/MyArticlesComponent";
import CreateArticleComponent from "./components/CreateArticleComponent";
import CategoryComponent from "./components/CategoryComponent";
import ImpressumComponent from "./components/ImpressumComponent";


Vue.use(Dialog, {
    language: 'en'
});
Vue.use(VueAxios, Axios);

Vue.component("SiteHeaderComponent", SiteHeaderComponent);
Vue.component("SiteNavBarComponent", SiteNavBarComponent);

Vue.component("HomeComponent", HomeComponent);
Vue.component("AllArticlesComponent", AllArticlesComponent);
Vue.component("MyArticlesComponent", MyArticlesComponent);
Vue.component("CreateArticleComponent", CreateArticleComponent);
Vue.component("CategoryComponent", CategoryComponent);
Vue.component("ImpressumComponent", ImpressumComponent);

var allArticles = [];
var cart;

new Vue({
    el: '#container',
    data: {
        choice: 0,
        colors: ['backBlue', 'backGreen', 'backRed', 'backYellow'],
        input: "%",
        user: "",
        cart: [],
        articles: [],
        limit: 5,
        category: 'all',
        site: 1,
        amount: 0,
        maintenanceSocket: null,
    },
    created: function () {
        this.maintenanceSocket = new WebSocket('ws://localhost:1234/maintenance');
        this.initMaintenanceSocket();
    },
    beforeDestroy: function () {
        this.maintenanceSocket.close();
    },
    methods: {
        initMaintenanceSocket: function () {
            this.maintenanceSocket.onopen = (event) => {
                console.log('Connection to maintenance socket established');
            };
            this.maintenanceSocket.onmessage = (msgEvent) => {
                let data = JSON.parse(msgEvent.data);
                this.$dlg.alert(data.data,
                    () => {
                        this.$dlg.toast('Wartung in ... Tagen', {
                            messageType: 'warning'
                        });
                    }, {
                        messageType: 'warning'
                    }
                );
            };
            this.maintenanceSocket.onclose = (closeEvent) => {
                console.log(
                    'Connection closed' +
                    ': code=', closeEvent.code,
                    '; reason=', closeEvent.reason);
            };
        },
        choose: function (link) {
            this.choice = link;
            if (link === 10) {
                this.input = '%';
                this.site = 1;
                this.limit = 5;
                this.category = 'all';
                this.fetchArticles();
            }
        },
        updateUser: function (user) {
            this.site = 1;
            if (user) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'http://localhost:8000/api/shoppingcarts/' + user);
                xhr.onload = () => {
                    localStorage.setItem('cart', JSON.stringify(JSON.parse(xhr.response).cart));
                    this.user = user;

                    if (this.choice === 10) {
                        xhr.open('GET', 'http://localhost:8000/api/shoppingcarts/' + JSON.parse(xhr.response).cart.id + '/articles');
                        xhr.onload = () => {
                            this.cart = JSON.parse(xhr.response).articles;
                            this.updateArticleList();
                        }
                        xhr.send();
                    }
                }
                xhr.onerror = () => {
                    this.$dlg.toast(xhr.responseText, {
                        messageType: 'error',
                        closeTime: 3
                    });
                };
                xhr.send();
            } else {
                localStorage.setItem('cart', "");
                this.user = user;
            }
        },
        findArticles: function (input, limit) {
            this.site = 1;
            this.choice = 10;
            this.input = input;
            this.fetchArticles();
        },
        fetchArticles: function () {
            const xhr = new XMLHttpRequest();
            const offset = (this.site * this.limit) - this.limit;
            xhr.open('GET', 'http://localhost:8000/api/articles/' + this.input + '/limit/' + this.limit + '/offset/' + offset);
            xhr.onload = () => {
                allArticles = JSON.parse(xhr.response).articles;
                this.amount = JSON.parse(xhr.response).amount;
                if (!this.user) {
                    this.articles = allArticles;
                } else {
                    const cart = JSON.parse(localStorage.getItem('cart'));
                    xhr.open('GET', 'http://localhost:8000/api/shoppingcarts/' + cart.id + '/articles');
                    xhr.onload = () => {
                        this.cart = JSON.parse(xhr.response).articles;
                        this.updateArticleList();
                    }
                    xhr.send();
                }
            }
            xhr.onerror = () => {
                this.cart = [];
                this.articles = [];
            }
            xhr.send();
        },
        addToCart: function (id) {
            if (this.user) {
                cart = JSON.parse(localStorage.getItem('cart'));
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8000/api/shoppingcarts/' + cart.id + '/articles/' + id);
                xhr.onload = () => {
                    this.cart = JSON.parse(xhr.response).articles;
                    this.updateArticleList();
                    this.$dlg.toast('Artikel wurde dem Warenkorb hinzugefügt.', {
                        messageType: 'success',
                        closeTime: 3
                    });
                }
                xhr.onerror = () => {
                    this.$dlg.toast(xhr.responseText, {
                        messageType: 'error',
                        closeTime: 3
                    });
                };
                xhr.send();
            } else {
                this.$dlg.alert('Sie müssen sich zuvor anmelden!', {
                    title: false,
                    messageType: 'error',
                    language: 'en'
                });
            }
        },
        removeFromCart: function (id) {
            cart = JSON.parse(localStorage.getItem('cart'));
            const xhr = new XMLHttpRequest();
            xhr.open('DELETE', 'http://localhost:8000/api/shoppingcarts/' + cart.id + '/articles/' + id);
            xhr.onload = () => {
                this.cart = JSON.parse(xhr.response).articles;
                this.updateArticleList();
                this.$dlg.toast('Artikel wurde aus dem Warenkorb entfernt.', {
                    messageType: 'success',
                    closeTime: 3
                });
            }
            xhr.onerror = () => {
                this.$dlg.toast(xhr.responseText, {
                    messageType: 'error',
                    closeTime: 3
                });
            };
            xhr.send();
        },
        updateArticleList: function () {
            this.articles = [];
            allArticles.forEach(elem => {
                if (!cartContains(this.cart, elem.id)) {
                    this.articles.push(elem);
                }
            });
        },
        setLimit: function (limit) {
            this.site = 1;
            this.limit = limit;
            this.fetchArticles();
        },
        updateSite: function (site) {
            this.site = site;
            this.fetchArticles();
        },
        setCategory: function (category) {
            console.log(category);
        }
    }
});

function cartContains(cart, id) {
    for (let elem of cart) {
        if (elem.id === id) {
            return true;
        }
    }
    return false;
}
