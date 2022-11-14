<template>
  <div class="main">
    <div class="left">
      <van-tabs title-active-color="#0C0C0C" background="#f2efef" color="#F02615" class="tab" duration="0"
        v-model:active="active">
        <template v-for="(item, index) in tabList" :key="index">
          <div>
            <van-tab class="tabs" :title="item.name">

            </van-tab>
          </div>
        </template>
      </van-tabs>
    </div>
    <div class="right">
      <img src="https://s3.bmp.ovh/imgs/2022/11/14/ae04cdab5b1e3a49.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(1);
const tabList = ref([
  {
    name: "关注",
  },
  {
    name: "推荐",
  },
  {
    name: "声音广场",
  },
  {
    name: "亲子",
  },
  {
    name: "情感",
  },
  {
    name: "睡前减压",
  },
  {
    name: "有声书",
  },
  {
    name: "搞笑",
  },
  {
    name: "文学",
  },
])

</script>

<style lang="scss">
.main {
  @apply flex;
  
  .left {
    width: 346px;
    
    overflow: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }

    .tab {
      color: #777777 !important;
      
      .tabs {
        margin-left: 21px;
        padding-left: 34px;
      }

      .van-tabs__line {
        top: 35px;
      }

      .van-tab--active {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  .right {
    position: relative;
    width: 82px;
    height: 63px;
    padding: 11.5px 21px;

    img {
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
    }
  }
}
</style>