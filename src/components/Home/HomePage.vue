<template>
    <el-container>
  <el-header style="height:auto; padding:0;">
    <div class="topNav">
        <top-nav />
    </div>
    <div>
        <swiper-vue />
    </div>
  </el-header>
  <el-main style="height:auto; padding:0;">
    <main-part />
  </el-main>
  <el-footer style="height:auto; padding:0;">

  </el-footer>
</el-container>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import SwiperVue from '@/components/Home/SwiperVue.vue';
import MainPart from '@/components/Home/MainPart.vue';

export default {
    components: {
        TopNav,
        SwiperVue,
        MainPart,
    }
}
</script>

<style scoped>
.topNav {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1000;
}
</style>