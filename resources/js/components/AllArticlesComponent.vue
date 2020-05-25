<template>
    <div id="content" class="card grow-1 column al-center">
        <div id="pagination" class="al-s-stretch row al-center jc-between">
            <div style="width: 15%">
                <select v-model="limit" @change="selectLim">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="0">Alle</option>
                </select>
            </div>
            <button class="icon-button white-icon" :class="{'disabled': !backwardsAllowed}"
                    :disabled="!backwardsAllowed" @click="backward">
                <i class="fas fa-angle-left"></i>
            </button>
            <span class="white-icon">Seite: {{site}}</span>
            <button class="icon-button white-icon" :class="{'disabled': !forwardsAllowed}" :disabled="!forwardsAllowed"
                    @click="forward">
                <i class="fas fa-angle-right"></i>
            </button>
            <div class="row jc-end" style="width: 15%">
                <select v-model="category" @change="selectCat">
                    <option value="all">Alle Kategorien</option>
                    <optgroup v-for="parent in categories" :label="parent.parent">
                        <option v-for="child in parent.children" :value="child.id">{{child.ab_name}}</option>
                    </optgroup>
                </select>
            </div>
        </div>
        <span v-if="signedIn && articlesOnCart.length === 0" id="shopping-card-null">
            Der Warenkorb ist leer.
        </span>
        <div v-else-if="signedIn && articlesOnCart.length > 0" id="shopping-card-list"
             class="al-s-stretch column al-s-stretch">
            <span class="al-s-center">Warenkorb</span>
            <ul id="all-articles-ul">
                <template v-for="elem in articlesOnCart">
                    <li>
                        <div class="row">
                            <span>{{elem.ab_name}}</span>
                            <span class="al-s-stretch grow-1" style="text-align: end">{{elem.ab_price}}€</span>
                            <div>
                                <button class="btn" @click="removeItem(elem.id)">
                                    <i class="fas fa-minus-circle" style="color: #bc2d2d"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                </template>
            </ul>
            <span id="shopping-card-total-costs" class="al-s-end">{{total()}}€</span>
        </div>

        <span v-if="buyableArticles.length === 0" id="all-articles-null">Keine Artikel vorhanden.</span>
        <table v-if="buyableArticles.length > 0" id="all-articles-list">
            <tr id="all-articles-head">
                <th>Artikel-Id</th>
                <th>Name</th>
                <th>Beschreibung</th>
                <th>Erstellt am</th>
                <th>Preis</th>
                <th>Wk</th>
            </tr>
            <tr v-for="(elem,index) in buyableArticles">
                <td>{{elem.id}}</td>
                <td>{{elem.ab_name}}</td>
                <td>{{elem.ab_description}}</td>
                <td>{{elem.ab_createdate}}</td>
                <td>{{elem.ab_price}}</td>
                <td>
                    <button @click="addItem(elem.id)"><i class="fas fa-plus"></i></button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        props: ['signedIn',
            'articlesOnCart',
            'buyableArticles',
            'max'
        ],
        data: function () {
            return {
                limit: 5,
                category: 'all',
                categories: [],
                site: 1,
                backwardsAllowed: false,
                forwardsAllowed: true
            }
        },
        created: function () {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:8000/api/categories');
            xhr.onload = () => {
                this.categories = JSON.parse(xhr.response).categories;
            }
            xhr.onerror = function () {
            };
            xhr.send();

        },
        methods: {
            addItem: function (id) {
                this.$emit('add', id);
            },
            removeItem: function (id) {
                this.$emit('remove', id);
            },
            total: function () {
                let sum = 0;
                this.articlesOnCart.forEach(elem => {
                    sum += elem.ab_price;
                });
                return sum;
            },
            selectLim: function () {
                this.site = 1;
                this.backwardsAllowed = false;
                this.forwardsAllowed = this.max > (this.site * this.limit);
                this.$emit('limit', this.limit);
            },
            backward: function () {
                this.site--;
                this.$emit('set-site', this.site);
                this.forwardsAllowed = true;
                this.backwardsAllowed = this.site > 1;
            },
            forward: function () {
                this.site++;
                this.$emit('set-site', this.site);
                this.backwardsAllowed = true;
                this.forwardsAllowed = this.max > this.site * this.limit;
            },
            selectCat: function () {
                this.$emit('categroy', this.category);
            }
        },
        watch: {
            max: function () {
                this.site = 1;
                this.backwardsAllowed = false;
                this.forwardsAllowed = this.max > this.limit;
            }
        }
    }
</script>
