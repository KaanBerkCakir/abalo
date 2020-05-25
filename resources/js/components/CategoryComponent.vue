<template>
    <div id="content" class="card grow-1 column al-center">
        <div class="row al-s-stretch">
            <div v-for="(parent, index) in categories" :class="{[colors[index%4]]:true}" class="cat-card column">
                <div class="cat-card-header al-s-center">{{parent.parent}}</div>
                <div class="cat-card-content column">
                    <span v-for="child in parent.children">{{child.ab_name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['colors'],
        created: function () {
            this.fetchCategories();
        },
        data: function () {
            return {
                categories: []
            }
        },
        methods: {
            fetchCategories: function () {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'http://localhost:8000/api/categories');
                xhr.onload = () => {
                    this.categories = JSON.parse(xhr.response).categories;
                }
                xhr.onerror = function () {
                };
                xhr.send();
            }
        }
    }
</script>
<style scoped>
    .cat-card {
        margin: 10px;
        border-radius: 10px;
        min-width: 125px;
        padding: 20px;
    }

    .cat-card-header {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .cat-card-content > span {
        margin-bottom: 10px;
    }
</style>
