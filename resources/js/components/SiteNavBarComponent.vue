<template>
    <div id="sidenav" class="card column jc-between">
        <div id="menu" class="column al-s-center">
            <template v-for="(item, itemIndex) in items">
                <span :id='"item" + itemIndex' :class="{active: itemIndex === choice}" class="item link"
                      @click="chooseMenu(itemIndex)">{{item.item}}</span>
                <span v-for="(subitem, subitemIndex) in item.subitems" :id='"subitem" + itemIndex + subitemIndex'
                      class="subitem link"
                      :class="{[colors[itemIndex%4]]:true, hidden: hide[itemIndex], active: (itemIndex*10 + subitemIndex) === choice}"
                      @click="chooseMenu(itemIndex*10 + subitemIndex)">{{subitem}}</span>
            </template>
        </div>
        <div id="impressum" class="column je">
            <span>Kaan Berk Cakir</span>
            <div class="row jc-between">
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
