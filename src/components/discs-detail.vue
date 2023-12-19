<template>
  <div class="discs-detail-page">
    <div class="page-header">
      <el-page-header @click="goBack">
        <template #content>
          <div class="flex items-center">
            <span class="text-large font-600 mr-3"> A Day in Borotin </span>
            <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
              （中文：Borotin 幼儿园的一天）
            </span>
          </div>
        </template>
      </el-page-header>
    </div>
  </div>
</template>
  

<script setup>
import router from "../router/index.js";

const goBack = () => {
  router.go(-1);
}
</script>

<style lang="scss">
.discs-detail-page {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom , #74759b, #abaedc);
  display: flex;
  .page-header {
    width: 100%;
    height: 40px;
    background: white;
    .el-page-header__header {
      line-height: 40px;
    }
  }
}

</style>