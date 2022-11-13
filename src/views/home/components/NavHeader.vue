<template>
  <div class="tab">
    <van-tabs duration="0" v-model:active="active">
    <template v-for="(item,index) in tabList" :key="index">
      <div class="tabs">
          <van-tab :title="item.name">
              {{ item.name }}
          </van-tab>
      </div>
    </template>
  </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(0);
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

<style lang="scss" scoped>
.tab{

}
</style>