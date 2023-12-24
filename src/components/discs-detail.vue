<template>
  <div class="discs-detail-page">
    <el-container>
      <el-header style="padding: 0;">
        <div class="page-header">
          <el-page-header @back="goBack">
            <template #content>
              <div class="flex items-center">
                <span class="text-large font-600 mr-3">{{Discs[route.query.id - 1].discsName}}</span>
                <span class="text-sm mr-2" style="color: var(--el-text-color-regular); font-size: 12px;">
                  {{Discs[route.query.id - 1].discsChinaName}}
                </span>
              </div>
            </template>
          </el-page-header>
        </div>
      </el-header>
      <el-main style="padding: 0 40px;">
        <el-container>
          <el-header style="display: flex; height: 200px;">
            <div style="width: 200px; height: 200px; overflow: hidden;">
              <img style="width: 100%; height: 100%; object-fit: cover;"
               :src="Discs[route.query.id - 1].discsPic" alt="图片加载失败...">
            </div>
            <div>
             <p>{{ Discs[route.query.id - 1].discsName }}</p>
             <p>{{ Discs[route.query.id - 1].discsChinaName }}</p>
             <p>制作者：{{ Discs[route.query.id - 1].discsAuthor }}</p>
             <p>类型语言：{{ Discs[route.query.id - 1].discsTypeAndLug }}</p>
            </div>
          </el-header>
          <el-container>
            <el-main>
              <div>
                <p>特别推荐给：</p>
                <div v-for="(item ,index) in Discs[route.query.id - 1].highlyRecommended" :key="index">
                  <span>{{ item.label }}</span>
                </div>
              </div>
              <div>
                <p>刻录版包括：</p>
                <div v-for="(item ,index) in Discs[route.query.id - 1].burntVersionDetail" :key="index">
                  <span>{{ item.burnInclud }}</span>
                  <div style="width: 150px; height: 150px;">
                    <img style="width: 100%; height: 100%; object-fit: cover;"
                      :src="item.burnPic" alt="图片加载失败...">
                  </div>
                </div>
              </div>
            </el-main>
            <el-aside width="200px">
              <p>内容：</p>
              <div v-for="(item ,index) in Discs[route.query.id - 1].discsContent" :key="index">
                <span>{{ item.label }}</span>
              </div>
            </el-aside>
          </el-container>
        </el-container>
      </el-main>
      <el-footer style="padding: 0; height: 80px; text-align: center;">
        <p>霎哈嘉瑜伽儿童音乐 简单 有趣  有意义！</p>
        <p>电子版45元 （ 含音乐/视频文件+歌词文件）</p>
        <p>碟片版 55元（光盘+歌词本+光盘盒），运费到付</p>
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
  // background: linear-gradient(to bottom , #74759b, #abaedc);
  display: flex;
  .page-header {
    width: 100%;
    height: 40px;
    background: rgb(235, 235, 235);
    .el-page-header__header {
      line-height: 40px;
    }
  }
}

</style>