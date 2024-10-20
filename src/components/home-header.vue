<template>
  <div class="home-header-page">
    <div class="back-home" @click="goBack" v-if="path === 'detail'">
      <img src="/assets/img/icon/back-left.png" alt="">
      返回
    </div>
    <div class="title" v-else>霎哈嘉瑜伽儿童音乐碟片</div>
    <div class="sub-title">简单 有趣 有意义！</div>
  </div>
</template>

<script setup>
import router from "../router";

const props = defineProps({
  path: {
    type: String,
    default: "home",
  },
})
const goBack = () => {
  router.push({ path: '/' });
}
</script>

<style scoped lang='scss'>
.home-header-page {
  height: 3rem;
  width: 100%;
  padding: 0 1.25rem;
  margin-bottom: 1.25rem;
  background: white;
  position: sticky;
  top: 0;
  line-height: 3rem;
  border-bottom: 1px solid #f0f2f5;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  .title {
    font-weight: 600;
    font-size: 1rem;
    color: #111418;
  }

  .sub-title {
    color: #111418;
    font-size: 0.75rem;
  }

  .back-home {
    width: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.875rem;
    justify-content: space-between;
    cursor: pointer;

    img {
      width: 1rem;
      height: 1rem;
      object-fit: contain;
    }
  }
}
</style>