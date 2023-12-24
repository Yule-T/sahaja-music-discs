<template>
  <div class="home-discs-page">
    <div class="discs-box">
      <div class="discs-pic">
        <img :src="discsData.discsPic" alt="图片加载失败..." @click="imgClick(index)">
      </div>
      <div class="discs-name">
        <span @click="imgClick(index)">{{ discsData.discsName }}</span>
      </div>
      <div class="discs-author">
        <span>{{ discsData.discsAuthor }}</span>
      </div>
    </div>
  </div>
</template>



<script setup>
import router from "../router/index.js";
import { reactive, ref, onMounted } from 'vue';
import { defineProps } from "vue";

const { discsData, index } = defineProps({
  discsData: {
    type: Object,
    default: {},
  },
  index: {
    type: Number,
  }
})
onMounted (() => {
  console.log(discsData.discsPic);
})

function imgClick(index) {
  router.push({ path: '/detail-page',query: {id: index+1} });
}
</script>






<style scoped lang='scss'>
.home-discs-page {
    // background: rgb(152, 184, 143);
    .discs-box {
      margin: 5px 20px;
      width: 250px;
      height: 330px;
      background: white;
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