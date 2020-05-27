<template>
    <div class="side-nav">
        <div class="menu">
            <template v-for="(item, itemIndex) in items">
                <span :class="[(itemIndex === choice) ? 'menu__item--active': 'menu__item']"
                      @click="chooseMenu(itemIndex)">{{item.item}}</span>
                <span v-for="(subitem, subitemIndex) in item.subitems"
                      :class="[(hide[itemIndex]) ? 'menu__sub-item--hidden' : ((itemIndex*10 + subitemIndex) === choice) ? 'menu__sub-item--' + (itemIndex%4) + '--active' : 'menu__sub-item--' + itemIndex]"
                      @click="chooseMenu(itemIndex*10 + subitemIndex)">{{subitem}}</span>
            </template>
        </div>
        <div class="impressum">
            <span class="impressum__item--1">Kaan Berk Cakir</span>
            <div class="impressum__item--2">
                <span>Jonas Schell</span>
                <span><span onclick="removeConsent()">&copy;</span> Copyright</span>
            </div>
        </div>
    </div>
</template>
<script>
    const menuJSON = [
        {
            item: 'Home',
            subitems: []
        },
        {
            item: 'Shop',
            subitems: ['Stöbern', 'Meine Artikel']
        },
        {
            item: 'Kategorien',
            subitems: []
        },
        {
            item: 'Unternehmen',
            subitems: ['Philosophie', 'Karriere']
        },
    ];

    export default {
        props: ['colors', 'signed-in'],
        data: function () {
            return {
                choice: 0,
                hide: [false, true, false, true],
                items: menuJSON,
            }
        },
        methods: {
            chooseMenu: function (num) {
                const tmp = [...this.hide];
                switch (num) {
                    case 0:
                        this.choice = num;
                        this.$emit('router', num);
                        break;
                    case 1:
                        tmp[num] = !tmp[num];
                        this.hide = tmp;
                        break;
                    case 10:
                        this.choice = num;
                        this.$emit('router', num);
                        break;
                    case 11:
                        if (this.signedIn) {
                            this.choice = num;
                            this.$emit('router', num);
                        } else {
                            alert('Anmelden');
                        }
                        break;
                    case 2:
                        this.choice = num;
                        this.$emit('router', num);
                        break;
                    case 3:
                        tmp[num] = !tmp[num];
                        this.hide = tmp;
                        break;
                    case 30:
                        this.choice = num;
                        this.$emit('router', num);
                        // goto philosophie
                        break;
                    case 31:
                        this.choice = num;
                        this.$emit('router', num);
                        // open karriere
                        break;
                }
            },
        },
    }
</script>
