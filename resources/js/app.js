require('./bootstrap');
window.Vue = require('vue');
Vue.component("SiteHeaderComponent", () => import("./components/SiteHeaderComponent.vue"));
Vue.component("SiteNavBarComponent", () => import("./components/SiteNavBarComponent.vue"));

Vue.component("HomeComponent", () => import("./components/HomeComponent.vue"));
Vue.component("AllArticlesComponent", () => import("./components/AllArticlesComponent.vue"));
Vue.component("MyArticlesComponent", () => import("./components/MyArticlesComponent.vue"));
Vue.component("CategoryComponent", () => import("./components/CategoryComponent.vue"));

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
        amount: 0
    },
    methods: {
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
                xhr.onerror = function () {

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
                }
                xhr.onerror = function () {
                };
                xhr.send();
            } else {
                alert('Sie müssen sich zuerst anmelden');
            }
        },
        removeFromCart: function (id) {
            cart = JSON.parse(localStorage.getItem('cart'));
            const xhr = new XMLHttpRequest();
            xhr.open('DELETE', 'http://localhost:8000/api/shoppingcarts/' + cart.id + '/articles/' + id);
            xhr.onload = () => {
                this.cart = JSON.parse(xhr.response).articles;
                this.updateArticleList();
            }
            xhr.onerror = function () {
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
