<template>
  <div class="bigwrap">
    <main-header />
    <section class="dinamic-view">
      <router-view></router-view>
    </section>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter.vue";
export default {
  components: { MainHeader, MainFooter },
};
</script>

<style lang="scss" scoped>
.dinamic-view {
  padding-top: 100px;
  background: linear-gradient(
    356deg,
    rgba(0, 0, 0, 0.46) 20%,
    rgba(0, 0, 0, 0.45702030812324934) 71%
  );
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  padding-bottom: 50px;
}
</style>
