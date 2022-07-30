<template>
    <div class="additional">
        <v-row>
            <v-col>
                <div class="additional__item">
                    <span class="additional__title">Title</span
                    ><span class="additional__text">{{ game.title }}</span>
                </div>
            </v-col>
            <v-col>
                <div class="additional__item">
                    <span class="additional__title">Developer</span
                    ><span class="additional__text">{{ game.developer }}</span>
                </div>
            </v-col>
            <v-col>
                <div class="additional__item">
                    <span class="additional__title">Publisher</span
                    ><span class="additional__text">{{ game.publisher }}</span>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="additional__item">
                    <span class="additional__title">Release Date</span
                    ><span class="additional__text">
                        {{ game.release_date }}</span
                    >
                </div>
            </v-col>
            <v-col>
                <div class="additional__item">
                    <span class="additional__title">Genre</span
                    ><span class="additional__text">{{ game.genre }}</span>
                </div>
            </v-col>
            <v-col>
                <div class="additional__item">
                    <span class="additional__title">Platform</span
                    ><span class="additional__text">{{ game.platform }}</span>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        game: Object,
    },
};
</script>

<style lang="scss" scoped>
.additional {
    margin-bottom: 10px;
    &__title {
        color: $yellow;
        margin-bottom: 5px;
    }
    &__item {
        display: flex;
        flex-direction: column;
    }
}
</style>
