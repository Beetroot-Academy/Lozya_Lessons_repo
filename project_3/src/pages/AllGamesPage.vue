<template>
  <div class="wrapper lol__wrapper">
    <button class="button button--primary" @click="tryVar">TRY ME</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gamesList: [],
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
    tryVar() {
      console.log(this.gamesList);
    },
    async Lolly() {
      await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        this.options
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => console.log(data))
        .then((data) => (this.gamesList = data))
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    this.Lolly();
    console.log(this.Lolly());
  },
};
</script>

<style lang="scss" scoped></style>
