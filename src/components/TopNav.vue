<template>
  <el-row>
  <el-col :span="24" style="background:rgba(255, 255, 255, 0);;">
    <div class="grid-content bg-purple-dark">
        <div class="container" style="background:rgba(170,170,170,0)">
            <div @click="toHome" class="logo">
            <img src="https://jolyson.cn/zb_system/image/logos.png" alt="">
        </div>
        <div class="List">
            <ul class="list" v-for="item in dataList" :key=item>
            <li class="option">
                {{item}}
            </li>
        </ul>
        <div class="icon">
            <i class="el-icon-search"></i>
        </div>
        </div>
        </div>
    </div>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        "首页",
        "关于我们",
        "星巴克菜单",
        "咖啡星讲堂",
        "帮助中心",
        "新闻中心",
        "加盟申请",
      ],
    };
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
  },
  mounted() {
    var cont = document.querySelector(".container");
    document.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop >= 1) {
        cont.style.backgroundColor = "rgba(0, 0, 0,0.7)";
      } else {
        cont.style.backgroundColor = "";
      }
    });
  },
};
</script>


<style scoped>
* {
  list-style: none;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0);;
}
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: 0.3s linear;
  background-color: rgba(255, 255, 255, 0);
}
.List {
  /* margin-right: 6rem; */
  color: #aaaaaa;
}
.list {
  float: left;
}
.list li {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  margin: 0 1.1rem;
  cursor: pointer;
  float: left;
}
.container .logo {
  height: 5rem;
  float: left;
  display: flex;
  align-items: center;
  cursor: pointer;
}
img {
  width: 13.125rem;
  height: 3.125rem;
}
.icon {
  height: 3rem;
  line-height: 3rem;
  float: left;
  cursor: pointer;
}
</style>