<template>
    <div>
        <van-search v-model="value" background="#F2EFEF" 
        shape="round" placeholder="搜索主播、声音、直播、播单" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

</script>

<style lang="scss" scoped>
.van-search{
    padding-left: 25px;
    padding-right: 20px;
}
.van-search__field {
    background-color: #DDDCDC;
    .van-cell{
        background: #DDDCDC;
    }
}
</style>