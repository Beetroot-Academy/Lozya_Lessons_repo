<template>
    <div class="wrapper">
        <h1 class="no-app-title search__title">Find game here:</h1>

        <v-text-field
            v-model="searchText"
            label="Search for games"
            placeholder="Type game name here..."
            outlined
            class="search-field"
            color="info"
        ></v-text-field>

        <v-row class="cards-list">
            <game-card
                v-for="game in searchResults"
                :key="game.id"
                :card="game"
            />
        </v-row>
    </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";

export default {
    components: { GameCard },

    data() {
        return {
            searchText: "",
            searchResults: [],
            gamesList: [],
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
    computed: {},
    watch: {
        searchText(userSearch) {
            const arr = userSearch.split(" ");
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            userSearch = arr.join(" ");
            if (userSearch.length >= 3) {
                this.searchResults = this.gamesList.filter((game) =>
                    game.title.includes(userSearch)
                );
            }
            if (userSearch.length < 3) {
                this.searchResults = [];
            }
        },
    },
    methods: {
        async fetchAll() {
            await fetch(
                "https://free-to-play-games-database.p.rapidapi.com/api/games",
                this.options
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    return (this.gamesList = data);
                })
                .then((data) => console.log(data))
                .catch((err) => console.error(err));
        },
    },

    created() {
        this.fetchAll();
    },
};
</script>

<style lang="scss" scoped>
.cards-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-bottom: 30px;
}
.search {
    &__title {
        margin-bottom: 20px;
    }
    &-field {
        width: 100%;
    }
}
</style>
