<template>
  <div class="discs-detail-page">
    <home-header path="detail"></home-header>
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
    </div>
    <div class="write" @click="write">
      <div class="icon">
        <img src="/assets/img/icon/intention.png" alt="">
      </div>
      <div class="text">
        碟片<br />意向</div>
    </div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue';
import { useRoute } from "vue-router";
import { Discs } from "../js";
import HomeHeader from "./home-header.vue";

const route = useRoute();

const write = () => {
  window.open("https://l9pcwe0zos.feishu.cn/share/base/form/shrcnDfbSNB3lVLjYpoei3QrTph", "_blank")
};

onMounted(() => {
  console.log(route.query.id);
})
</script>

<style lang="scss">
/* 当视口宽度小于690px时 */
@media (min-width: 371px) and (max-width: 690px) {
  .discs-detail-page {
    .bottom-detail {
      flex-direction: column;
      padding: 0 1.25rem !important;

      .left-box {
        width: auto !important;

        .item-1 {
          .discs-img-div {
            .data__cover_mask {
              left: 1.25rem !important;
            }
          }
        }
      }
    }
  }
}

/* 当视口宽度小于370px时 */
@media (max-width: 370px) {
  .discs-detail-page {
    .bottom-detail {
      flex-direction: column;
      padding: 0 1.25rem !important;

      .left-box {
        width: auto !important;

        .item-1 {
          flex-direction: column;
          align-items: center;

          .discs-img-div {
            overflow: visible !important;
            margin-bottom: 0.3125rem;

            .data__cover_mask {
              left: calc(50% - 2.875rem) !important;
            }
          }
        }
      }
    }
  }
}

::-webkit-scrollbar {
  display: none;
}

.discs-detail-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  .bottom-detail {
    flex: 1;
    display: flex;
    padding: 0 5rem;
    grid-gap: 0.625rem;
    position: relative;
    overflow: auto;

    .left-box {
      width: 60%;
      height: 100%;

      .item-1 {
        width: 100%;
        display: flex;

        .discs-img-div {
          width: 5.75rem;
          height: 5.75rem;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .data__cover_mask {
            position: absolute;
            left: 5rem;
            width: 6.5rem;
            height: 5.75rem;
            background: url("/assets/img/album_cover.png") 0 0 no-repeat;
            background-size: 6.5rem 5.75rem;
            pointer-events: none;
          }
        }

        .name-author-div {
          flex: 1;
          margin-left: 0.625rem;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;

          .name-item {
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
          }

          .author-item {
            font-size: 0.75rem;
          }
        }
      }

      .item-2 {
        .content {
          margin-top: 0.9375rem;

          p {
            font-size: 1rem;
            font-weight: 600;
            line-height: 2.25rem;
          }

          div {
            font-size: 0.875rem;
          }

          ul li {
            font-size: 0.875rem;
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
        margin-bottom: 1.5625rem;

        p {
          font-size: 1rem;
          font-weight: 600;
          line-height: 2.25rem;
        }

        ol li {
          font-size: 0.875rem;
          list-style-type: decimal;
          list-style-position: inside;
        }

        ul li {
          font-size: 0.875rem;
          list-style-type: disc;
          list-style-position: inside;
        }
      }

      .main-content {
        margin-bottom: 1.5625rem;

        p {
          font-size: 1rem;
          font-weight: 600;
          line-height: 2.25rem;
        }

        .discs-content {
          line-height: 1.375rem;
          font-size: 0.875rem;
        }

        .discs-img {
          margin-top: 0.625rem;
          display: flex;
          grid-gap: 0.9375rem;
          overflow-x: hidden;
          flex-wrap: wrap;

          div {
            border-radius: 0.375rem;
            overflow: hidden;

            img {
              height: 8.125rem;
            }
          }
        }
      }
    }
  }

  .write {
    position: absolute;
    background: #ffc0b7b8;
    right: 0;
    bottom: 20%;
    border-radius: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    .icon {
      height: 2rem;
      width: 2rem;
      overflow: hidden;

      img {
        height: 2.25rem;
        width: 2.25rem;
        position: absolute;
        right: -0.1875rem;
      }
    }

    .text {
      font-size: 0.75rem;
      margin: 0.125rem 0 0.3125rem;
      display: flex;
      justify-content: center;
    }
  }
}
</style>