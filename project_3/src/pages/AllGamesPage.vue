<template>
    <games-list :games="gamesList" />
</template>
<script>
import GamesList from "@/components/GamesList.vue";

export default {
    components: { GamesList },
    data() {
        return {
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

                .catch((err) => console.error(err));
        },
    },
    mounted() {},
    created() {
        this.fetchAll();
    },
};
</script>

<style lang="scss" scoped></style>
