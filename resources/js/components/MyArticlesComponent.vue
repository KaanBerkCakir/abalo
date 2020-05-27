<template>
    <div class="content--stretch">
        <div class="my-articles-item--green">
            <div :class="[showCreate ? 'my-articles-item__head--opened' : 'my-articles-item__head']" @click="showHide(0)">
                <span>Neuer Artikel</span>
                <i v-if="showCreate" class="fas fa-angle-up"></i>
                <i v-else class="fas fa-angle-down"></i>
            </div>
            <div class="column" v-if="showCreate">g</div>
        </div>
        <div class="my-articles-item--yellow">
            <div :class="[showMy ? 'my-articles-item__head--opened' : 'my-articles-item__head']" @click="showHide(1)">
                <span>Meine Artikel</span>
                <i v-if="showMy" class="fas fa-angle-up"></i>
                <i v-else class="fas fa-angle-down"></i>
            </div>
            <div class="column" v-if="showMy">
                <div v-for="elem in myArticles" class="row">
                    <button class="icon-button" @click="trash(elem.id)">
                        <i class="fas fa-trash"></i>
                    </button>
                    <span style="margin-left: 10px">{{elem.ab_name}}</span>
                </div>
            </div>
        </div>
        <div class="my-articles-item--red">
            <div :class="[showDeleted ? 'my-articles-item__head--opened' : 'my-articles-item__head']" @click="showHide(2)">
                <span>gelöschte Artikel</span>
                <i v-if="showDeleted" class="fas fa-angle-up"></i>
                <i v-else class="fas fa-angle-down"></i>
            </div>
            <div class="column" v-if="showDeleted">
                <div v-for="elem in trashedArticles" class="row">
                    <button class="icon-button" @click="restore(elem.id)">
                        <i class="fas fa-undo-alt"></i>
                    </button>
                    <button class="icon-button" @click="remove(elem.id)">
                        <i class="far fa-times-circle"></i>
                    </button>
                    <span style="margin-left: 10px">{{elem.ab_name}}</span>
                </div>
            </div>
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
                myArticles: [],
                trashedArticles: []
            };
        },
        created: function () {
            this.loadMyArticles();
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
            },
            loadMyArticles: function () {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'http://localhost:8000/api/articles/user/' + this.signedIn);
                xhr.onload = () => {
                    this.myArticles = JSON.parse(xhr.response).articles;
                }
                xhr.send();

                const xhr1 = new XMLHttpRequest();
                xhr1.open('GET', 'http://localhost:8000/api/articles/user/' + this.signedIn + '/trashed');
                xhr1.onload = () => {
                    this.trashedArticles = JSON.parse(xhr1.response).trashed;
                }
                xhr1.send();
            },
            trash: function (id) {
                const xhr = new XMLHttpRequest();
                xhr.open('DELETE', 'http://localhost:8000/api/articles/' + id);
                xhr.onload = () => {
                    this.loadMyArticles();
                }
                xhr.send();
            },
            restore: function (id) {
                console.log('restore');
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'http://localhost:8000/api/articles/' + id + '/restore');
                xhr.onload = () => {
                    this.loadMyArticles();
                }
                xhr.send();
            },
            remove: function (id) {
                const xhr = new XMLHttpRequest();
                xhr.open('DELETE', 'http://localhost:8000/api/articles/' + id + '/hard');
                xhr.onload = () => {
                    this.loadMyArticles();
                }
                xhr.send();
            }
        }
    }
</script>
