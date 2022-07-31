<template>
    <div class="wrapper list__wrapper">
        <v-row class="flex-center">
            <h1 class="list__title no-app-title">
                Best Free Games for PC and Browser In 2022!
            </h1>
        </v-row>
        <v-row class="flex-center">
            <span>354 free-to-play games found in our games list! </span></v-row
        >
        <game-filter @sendFilter="saveFilter" />
        <div>
            <v-row class="cards-list">
                <game-card
                    v-for="game in pageOfItems"
                    :key="game.id"
                    :card="game"
                />
            </v-row>
        </div>
        <div class="cards-footer">
            <jw-pagination
                :labels="customLabels"
                :pageSize="pageSize"
                :styles="customStyles"
                :items="filteredGames || games"
                :maxPages="maxPages"
                @changePage="onChangePage"
            ></jw-pagination>
        </div>
    </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
import GameFilter from "../components/GameFilter.vue";

const customStyles = {
    ul: {
        display: "flex",
        gap: "10px",
        "padding-bottom": "10px",
    },
    li: {
        "background-color": "#20bd83",
        border: "3px solid #f8e800",
        display: "inline-block",
        "border-radius": "25%",
        "font-family": '"Press Start 2P", cursive',
    },
    a: {
        color: `#f8e800`,
    },
};
const customLabels = {
    first: "<<",
    last: ">>",
    previous: "<",
    next: ">",
};
export default {
    props: {
        games: Array,
    },
    data() {
        return {
            customLabels,
            customStyles,
            maxPages: 4,
            pageSize: 24,
            pageOfItems: [],
            filteredGames: null,
        };
    },
    components: { GameCard, GameFilter },
    methods: {
        saveFilter(event) {
            this.filteredGames = event;
        },
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },
    },
};
</script>

<style lang="scss" scoped>
.cards-list {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    padding-bottom: 30px;
}
@media screen and (max-width: $tablet) {
    .cards-list {
        column-gap: 4%;
        row-gap: 10px;
        grid-template-columns: 43% 43%;
        padding-bottom: 0;
    }
}
.cards-footer {
    display: flex;
    justify-content: center;
}
.button--centred {
    display: flex;
    justify-content: center;
    align-items: center;
}
.flex-center {
    display: flex;
    justify-content: center;
}
</style>
