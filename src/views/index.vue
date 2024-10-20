<template>
  <div class="index-page">
    <home-header></home-header>
    <div class="discs-box">
      <div class="index-page-discs-box">
        <div class="discs-box-min-box" v-for="(item, index) in Discs" :key="index">
          <home-discs :discsData="item" :index="index"></home-discs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeHeader from "../components/home-header.vue";
import HomeDiscs from "../components/home-discs.vue";
import { Discs } from "../js"
</script>

<style scoped lang='scss'>
.index-page {
  width: 100vw;

  .discs-box {
    padding: 0.625rem 5rem 0;

    .index-page-discs-box {
      display: flex;
      grid-gap: 0.9375rem;
      overflow-x: hidden;
      flex-wrap: wrap;
    }
  }
}
</style>