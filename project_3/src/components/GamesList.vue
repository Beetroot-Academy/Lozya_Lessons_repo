<template>
  <div class="wrapper list__wrapper">
    <div class="cards-list">
      <game-card v-for="game in pageOfItems" :key="game.id" :card="game" />
    </div>
    <div class="cards-footer">
      <jw-pagination
        :labels="customLabels"
        :pageSize="pageSize"
        :styles="customStyles"
        :items="games"
        :maxPages="maxPages"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
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
    };
  },
  components: { GameCard },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
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
.cards-footer {
  display: flex;
  justify-content: center;
}
</style>
