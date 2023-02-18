<template>
  <div class="container">
    <el-carousel trigger="click" height="70vh" :interval="2500">
      <el-carousel-item v-for="item in dataList" :key="item.id">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          src: "https://www.jolyson.cn/zb_users/upload/2020/12/202012251608887269136277.jpg",
          id: 100,
        },
        {
          src: "https://www.jolyson.cn/zb_users/upload/2020/12/202012251608885576896214.jpg",
          id: 101,
        },
      ],
    };
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 70vh;
  /* position: absolute;
  top: 0;
  left: 0; */
}
.container img {
  width: 100%;
  height: 100%;
}
/* @media screen and (max-width: 1100px) {
  .container {
    width: 100vw;
    height: 50vh;
  }
  .container .wrap img {
    width: 100vw;
    height: 100%;
    float: left;
  }
} */
</style>