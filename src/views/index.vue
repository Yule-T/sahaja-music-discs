<template>
  <div class="index-page">
    <home-header></home-header>
    <div class="index-page-discs-box">
      <div class="discs-box-min-box" v-for="(item, index) in Discs" :key="index">
        <home-discs :discsData="item" :index="index"></home-discs>
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
  background: linear-gradient(to bottom , #74759b, #abaedc);
  .index-page-discs-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    // background: red;
    float: left;
  }
}
</style>