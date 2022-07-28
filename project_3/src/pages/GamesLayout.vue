<template>
  <div class="bigwrap">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
export default {
  components: { MainHeader },
};
</script>

<style lang="scss" scoped>
.bigwrap {
  background-image: url("../assets/bg.png");
  background-size: cover;
  background-attachment: fixed;
}
</style>
