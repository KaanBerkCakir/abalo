<template>
    <div id="content" class="card grow-1 column al-stretch">
        <div class="backGreen articles-head column">
            <div class="row jc-between al-center" @click="showHide(0)">
                <span>Neuer Artikel</span>
                <i v-if="showCreate" class="fas fa-angle-up"></i>
                <i v-else class="fas fa-angle-down"></i>
            </div>
            <div class="column" v-if="showCreate">g</div>
        </div>
        <div class="backYellow articles-head column">
            <div class="row jc-between al-center" @click="showHide(1)">
                <span>Meine Artikel</span>
                <i v-if="showMy" class="fas fa-angle-up"></i>
                <i v-else class="fas fa-angle-down"></i>
            </div>
            <div class="column" v-if="showMy">
                <div v-for="elem in articles">{{elem.ab_name}}</div>
            </div>
        </div>
        <div class="backRed articles-head column">
            <div class="row jc-between al-center" @click="showHide(2)">
                <span>gelöschte Artikel</span>
                <i v-if="showDeleted" class="fas fa-angle-up"></i>
                <i v-else class="fas fa-angle-down"></i>
            </div>
            <div class="column" v-if="showDeleted">g</div>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['signed-in'],
        data: function () {
            return {
                showCreate: false,
                showMy: false,
                showDeleted: false,
                articles: []
            };
        },
        created: function () {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:8000/api/articles/user/' + this.signedIn);
            xhr.onload = () => {
                this.articles = JSON.parse(xhr.response).articles;
            }
            xhr.send();
        },
        methods: {
            showHide: function (num) {
                switch (num) {
                    case 0:
                        this.showCreate = !this.showCreate;
                        break;
                    case 1:
                        this.showMy = !this.showMy;
                        break;
                    case 2:
                        this.showDeleted = !this.showDeleted;
                        break;
                }
            }
        }
    }
</script>
