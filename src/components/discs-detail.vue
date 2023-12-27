<template>
  <div class="discs-detail-page">
    <el-container>
      <el-header style="padding: 0;">
        <div class="page-header">
          <el-page-header @back="goBack">
            <template #content>
              <div class="flex items-center">
                <span class="text-large font-600 mr-3">{{Discs[route.query.id - 1].discsName}}</span>&nbsp;
                <span class="text-sm mr-2" style="color: var(--el-text-color-regular); font-size: 12px;">
                  {{Discs[route.query.id - 1].discsChinaName}}
                </span>
              </div>
            </template>
          </el-page-header>
        </div>
      </el-header>
      <el-main class="detail-main-box">
        <el-container>
          <el-header class="detail-main-header">
            <div class="main-header-div">
              <img :src="Discs[route.query.id - 1].discsPic" alt="图片加载失败...">
              <i class="data__cover_mask"></i>
            </div>
            <div class="main-header-text">
              <p class="header-discsName-text">{{ Discs[route.query.id - 1].discsName }}</p>
              <p v-if="Discs[route.query.id - 1].discsChinaName" class="header-discsChinaName-text">{{ Discs[route.query.id - 1].discsChinaName }}</p>
              <ul class="data__info">
                <li class="data_info__item_song">制作者：{{ Discs[route.query.id - 1].discsAuthor }}</li>
                <li class="data_info__item_song">类型语言：{{ Discs[route.query.id - 1].discsTypeAndLug }}</li>
              </ul>
            </div>
          </el-header>
          <el-container>
            <el-main class="detail-main-container-main">
              <div class="main-content">
                <p>内容：</p>
                <div v-for="(item ,index) in Discs[route.query.id - 1].discsContent" :key="index">
                  <span class="discs-content">{{ item.label }}</span>
                </div>
              </div>
              <div class="main-content">
                <p>刻录版包括：</p>
                <div v-for="(item ,index) in Discs[route.query.id - 1].burntVersionDetail" :key="index"
                  style="align-items: center;">
                  <div class="discs-content">{{ item.burnInclud }}</div>
                  <div v-if="item.burnPic">
                    <img style="width: 90px; height: 90px;" :src="item.burnPic" alt="图片加载失败...">
                  </div>
                </div>
              </div>
            </el-main>
            <el-aside class="detail-main-container-aside">
              <div class="highly-recommended">
                <p>特别推荐给：</p>
                <div v-for="(item ,index) in Discs[route.query.id - 1].highlyRecommended" :key="index">
                  <span class="highly-recommended-label">{{ item.label }}</span>
                </div>
              </div>
            </el-aside>
          </el-container>
        </el-container>
      </el-main>
      <el-footer class="detail-main-fotter">
        <div>
          <p>霎哈嘉瑜伽儿童音乐 简单 有趣  有意义！</p>
          <p>电子版45元 （ 含音乐/视频文件+歌词文件）</p>
          <p>碟片版 55元（光盘+歌词本+光盘盒），运费到付</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
  

<script setup>
import { reactive, ref, onMounted } from 'vue';
import router from "../router";
import { useRoute } from "vue-router";
import { Discs } from "../js";

const route = useRoute();

onMounted (() => {
  // const routeId = router.currentRoute.value.query.id
  //     console.log(routeId);
  console.log(route.query.id);
})

const goBack = () => {
  router.push({ path: '/'});
}
</script>

<style lang="scss">
.discs-detail-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #f8f7f7;
  .page-header {
    width: 100%;
    height: 40px;
    background: #f9f9f9;
    .el-page-header__header {
      line-height: 40px;
    }
  }
  .detail-main-box {
    padding: 0 40px;
    .detail-main-header {
      display: flex;
      height: 200px;
      align-items: center;
      position: relative;
      .main-header-div {
        width: 200px; 
        height: 100%; 
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .data__cover_mask {
          position: absolute;
          left: 20px;
          width: 226px;
          height: 200px;
          background: url("../assets/img/album_cover.png") 0 0 no-repeat;
          background-size: 226px 200px;
          pointer-events: none;
        }
      }
      .main-header-text {
        height: 100px;
        margin-left: 50px;
        .header-discsName-text {
          font-size: 31px;
          line-height: 50px;
          font-weight: 400;
        }
        .header-discsChinaName-text {
          font-size: 16px;
          height: 24px;
          color: #333;
        }
        .data__info {
          width: 520px;
          overflow: hidden;
          .data_info__item_song {
            float: left;
            width: 166px;
            margin-right: 10px;
            line-height: 27px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
          }
          .data_info__item_song:nth-child(odd) {
            width: 250px;
          }
        }
      }
    }
    .detail-main-container-aside {
      .highly-recommended {
        p {
          font-size: 20px;
        }
        .highly-recommended-label {
          font-size: 14px;
        }
      }
    }
    .detail-main-container-main {
      width: 290px;
      padding-bottom: 0;
      .main-content {
        p {
          font-size: 20px;
          font-weight: 400;
          line-height: 46px;
        }
        .discs-content {
          line-height: 22px;
          font-size: 14px;
        }
      }
    }
  }
  .detail-main-fotter {

    display: flex;
    padding: 0;
    background-color: #f9f9f9;
    height: 50px;
    text-align: center;
    align-items: center;
    font-size: 12px;
    font-family: "宋体";
    div {
     margin: auto;
    }
  }
}

</style>