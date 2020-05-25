<template>
    <div id="navbar" class="row al-end">
        <div id="title" class="grow-1 column jc-end">
            <span>Abalo</span>
            <span>Macht Altes Flüssig.</span>
        </div>
        <input id="searchText" type="text" placeholder="Search.." v-model="search" v-on:input="searchForNames">
        <button v-if="signedIn" class="icon-button login-button" @click="userInteraction(false)">
            <i class="fas fa-sign-out-alt"></i>
        </button>
        <button v-else class="icon-button login-button" @click="userInteraction(true)">
            <i class="fas fa-sign-in-alt"></i>
        </button>
    </div>
</template>
<script>
    export default {
        props: ['signed-in'],
        data: function () {
            return {
                search: ""
            }
        },
        methods: {
            searchForNames: function () {
                if (this.search.length === 0) {
                    this.$emit('%', this.search, 5);
                } else if (this.search.length > 2) {
                    this.$emit('search', this.search, 5);
                }
            },
            userInteraction: function (login) {
                if (login) {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', 'http://localhost:8000/authentification/login');
                    xhr.withCredentials = true;
                    xhr.onload = () => {
                        this.$emit('sign-in', JSON.parse(xhr.response).user);
                    }
                    xhr.onerror = function () {
                    };
                    xhr.send();
                } else {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', 'http://localhost:8000/authentification/logout');
                    xhr.withCredentials = true;
                    xhr.onload = () => {
                        this.$emit('sign-in', "");
                    }
                    xhr.onerror = function () {
                    };
                    xhr.send();
                }
            }
        }
    }
</script>
