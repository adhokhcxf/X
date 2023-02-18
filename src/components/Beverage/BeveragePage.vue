<template>
    <el-container>
    <el-header style="height: auto;">
      <header-part></header-part>
      </el-header>
    <el-main style="height: auto;">
      <main-part />
    </el-main>
    <el-footer style="height: auto;">
      <footer-part />
    </el-footer>
  </el-container>
</template>

<script>
import HeaderPart from "@/components/Beverage/HeaderPart.vue";
import MainPart from "@/components/Beverage/MainPart.vue";
import FooterPart from "@/components/Beverage/FooterPart.vue";

export default {
    components: {
        HeaderPart,
        MainPart,
        FooterPart
    }
}
</script>

<style scoped>
.el-header, .el-main, .el-footer {
    min-width: 100vw;
    padding: 0 !important;
}
</style>