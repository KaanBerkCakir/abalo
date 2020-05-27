<!DOCTYPE html>
<html lang="de">
<head>
    <title>abalo</title>
    <script src="https://kit.fontawesome.com/c1d25b9942.js"></script>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./css/app.css">
</head>
<body>
<div id="container" class="column">
    <site-header-component :signed-in="user" v-on:sign-in="updateUser"
                           v-on:search="findArticles"></site-header-component>
    <div class="grow-1 row">
        <site-nav-bar-component :signed-in="user" v-on:router="choose" :colors='colors'></site-nav-bar-component>
        <home-component v-if="choice === 0"></home-component>
        <all-articles-component v-else-if="choice === 10"
                                :signed-in="user" :buyable-articles="articles"
                                :articles-on-cart="cart" :max="amount"
                                v-on:add="addToCart" v-on:remove="removeFromCart"
                                v-on:limit="setLimit" v-on:categroy="setCategory"
                                v-on:set-site="updateSite"></all-articles-component>
        <my-articles-component v-else-if="choice === 11" :signed-in="user"></my-articles-component>
        <category-component v-else-if="choice === 2" :colors='colors'></category-component>
        <impressum-component v-else-if="choice === 404"></impressum-component>
    </div>
</div>
<script src="./js/app.js"></script>
</body>
</html>
<script>
    import ImpressumComponent from "../js/components/ImpressumComponent";
    export default {
        components: {ImpressumComponent}
    }
</script>
