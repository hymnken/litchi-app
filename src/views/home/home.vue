<template>
  <div class="home">
    <nut-button type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button type="success">成功按钮</nut-button>
    <NavHeader></NavHeader>
  </div>
</template>

<script setup>
import NavHeader from "./components/NavHeader.vue";

</script>

<style lang="less" scoped>

</style>