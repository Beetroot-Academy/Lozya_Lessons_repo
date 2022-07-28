<template>
  <div class="wrapper list__wrapper">
    <div class="cards-list">
      <v-card
        class="card"
        v-for="game in pageOfItems"
        :key="game.id"
        max-width="400"
      >
        <v-img
          :src="`${game.thumbnail}`"
          gradient="0deg, rgba(0,252,255,0) 43%, rgba(0,0,0,1) 95%"
        >
          <div class="image-elements">
            <span
              v-if="game.platform.includes('PC')"
              class="fa-brands fa-windows card__platform"
            ></span>

            <span
              v-else
              class="fa-brands fa-internet-explorer card__platform"
            ></span>
            <span class="card__genre">{{ game.genre }}</span>
          </div>
        </v-img>

        <div class="card__header">
          <h1 class="card__title">{{ game.title }}</h1>
        </div>
        <div class="card__body">
          <p class="card__text">{{ game.short_description }}</p>
        </div>
      </v-card>
    </div>
    <div class="cards-footer">
      <jw-pagination
        :labels="customLabels"
        :pageSize="pageSize"
        :styles="customStyles"
        :items="gamesList"
        :maxPages="maxPages"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      customLabels,
      customStyles,
      maxPages: 4,
      pageSize: 24,
      gamesList: [],
      pageOfItems: [],
      options: {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6889109058msh56a1eb53d5b3f74p1e533ajsn6362febb3222",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      },
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },

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
  mounted() {
    this.$vuetify.theme.dark = true;
    this.fetchAll();
  },
};
</script>

<style lang="scss" scoped>
.cards-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.cards-footer {
  display: flex;
  justify-content: center;
}
.image-elements {
  padding: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
.card {
  background-color: $background_color;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(105%);
    & .v-image__image {
      background-image: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 100%
      ) !important;
    }
  }
  &__platform {
    padding: 3px;
    border-radius: 10%;
    color: $blue;
    font-weight: 600px;
    font-size: 25px;
    text-shadow: 0px 0px 8px black;
    text-align: center;
    display: inline-block;
  }
  &__genre {
    background-color: $blue;
    padding: 3px;
    border-radius: 10%;
    color: white;
    font-weight: 600px;
    text-shadow: 0px 0px 8px black;
    text-align: center;
    display: inline-block;
  }
  &__header {
    padding: 10px 10px 0;
    text-align: center;
  }
  &__body {
    padding: 10px 10px 20px;
  }
  &__text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: white;
    text-align: center;
  }
  &__title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 27px;
    color: white;
    padding: 5px;
    text-align: center;
  }
}
li:hover {
  background-color: white;
}
</style>
