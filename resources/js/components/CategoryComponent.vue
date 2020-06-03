<template>
    <div class="content--center">
        <div class="category">
            <div v-for="(parent, index) in categories" :class='"category__card--" + (index%4)'>
                <div class="category__card--head">{{parent.parent}}</div>
                <div class="category__card--body">
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
                xhr.onerror = () => {
                    this.$dlg.toast(xhr.responseText,{
                        messageType: 'error',
                        closeTime: 3
                    });
                };
                xhr.send();
            }
        }
    }
</script>
