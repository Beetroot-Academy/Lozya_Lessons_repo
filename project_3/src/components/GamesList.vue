<template></template>

<script>
import GameCard from "../components/GameCard.vue";
export default {
  props: {
    games: {
      type: Array,
      default: () => [],
    },
  },
  components: { FilmCard },
};
</script>

<style></style>
