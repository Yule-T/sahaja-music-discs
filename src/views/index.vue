<template>
  <div class="index-page">
    <home-header path="home"></home-header>
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
/* 当视口宽度小于600px时，适用于手机 */
@media (max-width: 600px) {
  .index-page {
    .discs-box {
      .index-page-discs-box {
        justify-content: center;
      }
    }
  }
}

::-webkit-scrollbar {
  display: none;
}

.index-page {
  width: 100vw;

  .discs-box {
    padding: 0.625rem 5rem;

    .index-page-discs-box {
      display: flex;
      grid-gap: 0.9375rem;
      overflow-x: hidden;
      flex-wrap: wrap;
    }
  }
}
</style>