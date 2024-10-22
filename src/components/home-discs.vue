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
    width: 10.8125rem;
    height: 15.9375rem;
    background: rgb(255, 255, 255);

    .discs-pic {
      // background: rgb(135, 135, 135);
      background: url("https://foruda.gitee.com/images/1729603613155166711/0f8f02f3_13838675.png") 0 0 no-repeat;
      background-size: contain;
      width: 10.8125rem;
      height: 10.8125rem;
      overflow: hidden;
      border-radius: 0.75rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 10.4375rem;
        height: 10.4375rem;
        object-fit: contain;
        transition: all 0.5s;
      }

      img:hover {
        cursor: pointer;
        transform: scale(1.03);
      }
    }

    .discs-name {
      margin-top: 0.625rem;
      line-height: 1.375rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: #111418;

      span:hover {
        cursor: pointer;
      }
    }

    .discs-author {
      font-size: 0.75rem;
      line-height: 1.375rem;
      color: #60758a;
    }
  }
}
</style>