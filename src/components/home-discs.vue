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
onMounted(() => {
  console.log(discsData.discsPic);
})

function imgClick(index) {
  router.push({ path: '/detail-page', query: { id: index + 1 } });
}
</script>

<style scoped lang='scss'>
.home-discs-page {
  .discs-box {
    width: 173px;
    height: 255px;
    background: rgb(255, 255, 255);

    .discs-pic {
      // background: rgb(135, 135, 135);
      background: url("/assets/img/contain.png") 0 0 no-repeat;
      background-size: contain;
      width: 173px;
      height: 173px;
      overflow: hidden;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 167px;
        height: 167px;
        object-fit: contain;
        transition: all 0.5s;
      }

      img:hover {
        cursor: pointer;
        transform: scale(1.03);
      }
    }

    .discs-name {
      margin-top: 10px;
      line-height: 22px;
      font-size: 14px;
      font-weight: 600;
      color: #111418;

      span:hover {
        cursor: pointer;
      }
    }

    .discs-author {
      font-size: 12px;
      line-height: 22px;
      color: #60758a;
    }
  }
}
</style>