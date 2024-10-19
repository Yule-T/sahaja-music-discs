<template>
  <div class="discs-detail-page">
    <home-header></home-header>
    <div class="bottom-detail">
      <div class="left-box">
        <div class="item-1">
          <div class="discs-img-div">
            <img :src="Discs[route.query.id - 1].discsPic" alt="图片加载失败...">
            <i class="data__cover_mask"></i>
          </div>
          <div class="name-author-div">
            <div class="name-item"> {{ Discs[route.query.id - 1].discsName }}</div>
            <div class="author-item"> {{ Discs[route.query.id - 1].discsAuthor }}</div>
          </div>
        </div>
        <div class="item-2">
          <div class="content" v-if="Discs[route.query.id - 1]?.discsChinaName">
            <p>中文名称</p>
            <div>{{ Discs[route.query.id - 1].discsChinaName }}</div>
          </div>
          <div class="content">
            <p>类型语言</p>
            <div>{{ Discs[route.query.id - 1].discsTypeAndLug }}</div>
          </div>
          <div class="content">
            <p>内容</p>
            <ul>
              <li v-for="(item, index) in Discs[route.query.id - 1].discsContent" :key="index">{{ item.label }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="highly-recommended">
          <p>特别推荐给：</p>
          <ol>
            <li v-for="(item, index) in Discs[route.query.id - 1].highlyRecommended" :key="index"
              class="highly-recommended-label">{{ item.label }}</li>
          </ol>
        </div>
        <div class="main-content">
          <p>刻录版包括：</p>
          <div class="discs-content">{{ Discs[route.query.id - 1].burntVersionDetail.burnInclud }}</div>
          <div class="discs-img" v-if="Discs[route.query.id - 1].burntVersionDetail?.burnPic?.length">
            <div v-for="(item, index) in Discs[route.query.id - 1].burntVersionDetail.burnPic" :key="index">
              <img :src="item" alt="图片加载失败...">
            </div>
          </div>
        </div>
        <div class="highly-recommended">
          <p>购买须知：</p>
          <ul>
            <li>电子版45元 （ 含音乐/视频文件+歌词文件）</li>
            <li>碟片版 55元（光盘+歌词本+光盘盒），运费到付</li>
          </ul>
        </div>
      </div>
      <div class="back-home" @click="goBack">
        <img src="../assets/img/icon/back-left.png" alt="">
        返回
      </div>
    </div>
  </div>
</template>


<script setup>
import { reactive, ref, onMounted } from 'vue';
import router from "../router";
import { useRoute } from "vue-router";
import { Discs } from "../js";
import HomeHeader from "./home-header.vue";

const route = useRoute();

onMounted(() => {
  console.log(route.query.id);
})

const goBack = () => {
  router.push({ path: '/' });
}
</script>

<style lang="scss">
.discs-detail-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .bottom-detail {
    flex: 1;
    display: flex;
    padding: 0 80px;
    grid-gap: 10px;
    position: relative;

    .left-box {
      width: 60%;
      height: 100%;

      .item-1 {
        height: 96px;
        width: 100%;
        display: flex;

        .discs-img-div {
          width: 92px;
          height: 92px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .data__cover_mask {
            position: absolute;
            left: 80px;
            width: 104px;
            height: 92px;
            background: url("../assets/img/album_cover.png") 0 0 no-repeat;
            background-size: 104px 92px;
            pointer-events: none;
          }
        }

        .name-author-div {
          flex: 1;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;

          .name-item {
            font-size: 24px;
            font-weight: 600;
            text-align: center;
          }

          .author-item {
            font-size: 12px;
          }
        }
      }

      .item-2 {
        .content {
          margin-top: 15px;

          p {
            font-size: 16px;
            font-weight: 600;
            line-height: 36px;
          }

          div {
            font-size: 14px;
          }

          ul li {
            font-size: 14px;
            list-style-type: disc;
            list-style-position: inside;
          }
        }
      }
    }

    .right-box {
      flex: 1;
      height: 100%;

      .highly-recommended {
        margin-bottom: 25px;

        p {
          font-size: 16px;
          font-weight: 600;
          line-height: 36px;
        }

        ol li {
          font-size: 14px;
          list-style-type: decimal;
          list-style-position: inside;
        }

        ul li {
          font-size: 14px;
          list-style-type: disc;
          list-style-position: inside;
        }
      }

      .main-content {
        margin-bottom: 25px;

        p {
          font-size: 16px;
          font-weight: 600;
          line-height: 36px;
        }

        .discs-content {
          line-height: 22px;
          font-size: 14px;
        }

        .discs-img {
          margin-top: 10px;
          display: flex;
          grid-gap: 15px;
          overflow-x: hidden;
          flex-wrap: wrap;

          div {
            border-radius: 6px;
            overflow: hidden;

            img {
              width: 130px;
              height: 130px;
            }
          }
        }
      }
    }

    .back-home {
      position: absolute;
      width: 48px;
      height: 20px;
      top: -15px;
      left: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      justify-content: space-between;
      cursor: pointer;

      img {
        width: 16px;
        height: 16px;
        object-fit: contain;
      }
    }
  }
}
</style>