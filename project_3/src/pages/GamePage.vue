<template>
    <section class="game">
        <div class="wrapper game__wrapper">
            <div class="game__side">
                <div class="game__pic">
                    <img :src="game.thumbnail" alt="" />
                </div>
                <a
                    :href="game.game_url"
                    class="button button--primary"
                    target="_blank"
                    rel="noopener norefer"
                    >Play Now for free</a
                >
            </div>
            <div class="game__info">
                <h1 class="title game__title">
                    {{ game.title }}
                </h1>
                <span class="game__developer">{{ game.developer }}</span>

                <v-expansion-panels class="about game__about">
                    <v-expansion-panel class="about__wrapper">
                        <v-expansion-panel-header
                            class="about__header"
                            @click="isClicked = !isClicked"
                        >
                            <span
                                v-if="isClicked"
                                class="fa-solid fa-plus"
                            ></span>
                            <span v-else class="fa-solid fa-minus"></span>

                            About game
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="about__content">
                            {{ game.description }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-row>
                    <v-col>
                        <h2 class="subtitle game__subtitle">
                            Additional information
                        </h2>
                    </v-col>
                </v-row>
                <game-additional :game="game" />
                <v-row>
                    <v-col>
                        <h2 class="subtitle game__subtitle">
                            {{ game.title }} Screenshots
                        </h2>
                    </v-col>
                </v-row>
                <game-screenshots :game="game" />
                <v-row>
                    <v-col>
                        <h2 class="subtitle game__subtitle">
                            Minimum System Requirements ({{ game.platform }})
                        </h2>
                    </v-col>
                </v-row>
                <system-requirements :game="game" />
            </div>
        </div>
    </section>
</template>

<script>
import GameScreenshots from "@/components/GameScreenshots.vue";
import GameAdditional from "@/components/AdditionalIndo.vue";
import SystemRequirements from "@/components/SysReq.vue";
export default {
    components: { GameAdditional, GameScreenshots, SystemRequirements },
    data() {
        return {
            game: {},
            isClicked: true,
            gameId: "",

            options: {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key":
                        "6889109058msh56a1eb53d5b3f74p1e533ajsn6362febb3222",
                    "X-RapidAPI-Host":
                        "free-to-play-games-database.p.rapidapi.com",
                },
            },
        };
    },
    methods: {
        async fetchGame() {
            await fetch(
                `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameId}`,
                this.options
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return (this.game = data);
                })
                .then((data) => console.log(data))
                .catch((err) => console.error(err));
        },
    },
    created() {
        this.gameId = this.$route.params.id;
        this.fetchGame();
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.game {
    &__wrapper {
        position: relative;
        display: grid;
        grid-template-columns: 0.5fr 1fr;
    }

    &__side {
    }

    &__pic {
        margin-bottom: 10px;
        & > img {
            border-radius: 2%;
        }
    }

    &__info {
    }

    &__title {
    }

    &__developer {
    }

    &__about {
    }
    &__subtitle {
        color: $blue;
    }
}

.about {
    width: fit-content;
    display: block;
    margin-bottom: 20px;
    &__wrapper {
    }

    &__header {
        display: block;
        text-align: left;
        background-color: transparent;
        color: $red;
    }

    &__content {
        background-color: transparent;
        color: #c7d5e2;
        font-size: 19px;
    }
}
</style>
