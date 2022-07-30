<template>
    <v-row>
        <v-col>
            <div class="screenshots">
                <img
                    :src="game.screenshots[0].image"
                    :alt="game.screenshots[0].id"
                />
            </div>
        </v-col>
        <v-col>
            <div class="screenshots">
                <img
                    :src="game.screenshots[1].image"
                    :alt="game.screenshots[1].id"
                />
            </div>
        </v-col>
        <v-col>
            <div class="screenshots">
                <img
                    :src="game.screenshots[2].image"
                    :alt="game.screenshots[2].id"
                />
            </div>
        </v-col>
        <v-col>
            <div class="screenshots">
                <img
                    :src="game.screenshots[3].image"
                    :alt="game.screenshots[3].id"
                />
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        game: Object,
    },
};
</script>

<style lang="scss" scoped>
.screenshots {
    margin-bottom: 50px;
}
</style>
