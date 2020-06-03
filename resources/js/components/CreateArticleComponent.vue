<template>
    <div class="form">
        <div class="form__item">
            <span class="form__label">Titel</span>
            <input type="text" class="form__field" v-model="title" required>
        </div>
        <div class="form__item">
            <span class="form__label">Preis</span>
            <input type="text" class="form__field" v-model="price" min=1>
        </div>
        <div class="form__item">
            <span class="form__label">Beschreibung</span>
            <textarea class="form__field" v-model="desc"></textarea>
        </div>
        <button class="form__submit" @click="createArticle">Absenden</button>
    </div>
</template>
<script>
    export default {
        props: ['user'],
        data: function () {
            return {
                title: "",
                price: "",
                desc: ""
            }
        },
        methods: {
            createArticle: function () {
                const input = {
                    name: this.title,
                    price: this.price,
                    desc: this.desc,
                    creator: this.user
                }

                const body = new FormData();
                for (const key in input) {
                    body.append(key, input[key]);
                }

                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:8000/api/articles');
                xhr.onload = () => {
                    this.$emit('update-list');
                    this.$dlg.toast('Artikel " ' + this.title + '" wurde hinzugefügt.',{
                        messageType: 'success',
                        closeTime: 3
                    });
                    this.title = '';
                    this.price = '';
                    this.desc = '';
                }
                xhr.onerror = () => {
                    this.$dlg.toast(xhr.responseText,{
                        messageType: 'error',
                        closeTime: 3
                    });
                };
                xhr.send(body);
            }
        }
    }
</script>
