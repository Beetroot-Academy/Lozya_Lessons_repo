<template>
    <v-footer class="footer">
        <div class="footer__wrapper wrapper">
            <v-row class="flex-container">
                <v-col
                    ><router-link class="footer__link" :to="{ name: 'home' }">
                        Home
                    </router-link></v-col
                >
                <v-col
                    ><router-link class="footer__link" :to="{ name: 'all' }">
                        Games
                    </router-link></v-col
                >
                <v-col
                    ><router-link
                        class="footer__link"
                        :to="{ name: 'about-us' }"
                    >
                        About
                    </router-link></v-col
                >
            </v-row>
            <v-row class="trade-mark"><span> &#xA9; GameCave</span></v-row>
        </div>
    </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex-container {
    display: flex;
    gap: 60px;
    margin-bottom: 10px;
}
.trade-mark {
    justify-content: center;
    & > span {
        color: #c7d5e2;
    }
}
.footer {
    background-color: #3d3c3c;
    padding: 40px 0;

    &__link {
        font-family: "Press Start 2P", cursive;
        color: $red;
        font-size: 15px;
        position: relative;
        transition: color 0.3s ease;
        &:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -3px;
            left: 0;
            background-color: $red;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        &:hover {
            color: $yellow;
            &::after {
                transform: scaleX(1);
                transform-origin: bottom left;
                background-color: $yellow;
            }
        }
    }
}
</style>
