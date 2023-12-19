<template>
  <div class="index-page">
    <div class="discs-box">
      <div class="discs-pic">
        <img src="../assets/img/a-day-in-borotin.png" alt="" @click="imgClick">
      </div>
      <div class="discs-name">
        <span>A Day in Borotin </span>
      </div>
      <div class="discs-author">
        <span>捷克Borotin幼儿园</span>
      </div>
    </div>
  </div>
</template>



<script setup>
import router from "../router/index.js";
import { reactive, ref, onMounted } from 'vue';

onMounted(() => {
  console.log(`the component is now mounted.`)
})


function imgClick() {
  router.push({ path: '/detail-page' });
}
</script>






<style scoped lang='scss'>
.index-page {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom , #74759b, #abaedc);
    display: flex;
    .discs-box {
      margin: 20px;
      width: 250px;
      height: 315px;
      background: white;
      border: 1px solid red;
      padding: 0 5px;
      .discs-pic {
        width: 100%;
        height: 250px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s;
        }
        img:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
      .discs-name {
        margin-top: 10px;
        span:hover {
          cursor: pointer;
        }
      }
      .discs-author {
        margin-top: 5px;
        font-size: 14px;
        color: grey;
      }
    }
}
</style>