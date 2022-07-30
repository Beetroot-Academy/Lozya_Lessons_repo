<template>
    <header class="header">
        <div class="wrapper header__wrapper">
            <router-link :to="{ name: 'home' }" class="logo">
                <img src="../assets/logo.png" alt="logo"
            /></router-link>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link
                            class="header__link"
                            :to="{ name: 'home' }"
                        >
                            Home
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link class="header__link" :to="{ name: 'all' }">
                            Games
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link
                            class="header__link"
                            :to="{ name: 'about-us' }"
                        >
                            About
                        </router-link>
                    </li>
                </ul>
            </nav>
            <button
                type="button"
                class="button button--primary header__btn"
                @click="changeUserState"
            >
                {{ auth ? "Log in" : "Log Out" }}
            </button>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            auth: false,
        };
    },
    created() {
        this.auth = localStorage.getItem("auth") !== null;
    },
    methods: {
        changeUserState() {
            if (this.auth) {
                localStorage.removeItem("auth");
                this.$router.push({ name: "home" });
            } else {
                localStorage.setItem("auth", true);
                this.auth = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.logo {
    width: 42px;
}
.header {
    position: fixed;
    top: 0;
    z-index: 4;
    width: 100%;
    background-color: $header_color;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 40px;
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;
    }
    &__btn {
        font-size: 12px;
        padding: 15px 15px;
    }
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
.nav {
    &__list {
        display: flex;
        justify-content: space-around;
        gap: 80px;
    }
}
</style>
