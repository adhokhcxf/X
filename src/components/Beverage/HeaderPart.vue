<template>
  <el-row>
    <el-col :span="24" style="background: #aaaaaa">
      <div class="grid-content bg-purple-dark">
        <div class="container" style="background: rgba(170, 170, 170, 0)">
          <div @click="toHome" class="logo">
            <img src="https://jolyson.cn/zb_system/image/logos.png" alt="" />
          </div>
          <div class="List">
            <ul class="list" v-for="item in dataList" :key="item">
              <li class="option">
                {{ item }}
              </li>
            </ul>
            <div class="icon">
              <i class="el-icon-search"></i>
            </div>
          </div>
        </div>
        <div class="intro">
          <h1 class="data-v-56bcb650">追求艺术与商业的完美结合</h1>
          <p class="">
            The pursuit of the perfect combination of art and Commerce.
          </p>
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
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    var cont = (cont = document.querySelector(".container"));
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
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  transition: 0.3s linear;
}
.List {
  margin-right: 6rem;
  color: #aaaaaa;
}
.list {
  float: left;
}
.list li {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  margin: 0 1.5rem;
  cursor: pointer;
  float: left;
}
.container .logo {
  width: 40vw;
  height: 5rem;
  float: left;
  display: flex;
  align-items: center;
  cursor: pointer;
}
img {
  width: 13.125rem;
  height: 3.125rem;
  margin-left: 6rem;
}
.icon {
  height: 3rem;
  line-height: 3rem;
  float: left;
  cursor: pointer;
}
.intro {
  width: 100vw;
  height: 12.5rem;
  margin-top: 2rem;
  text-align: center;
}
.data-v-56bcb650 {
  text-align: center;
  font-weight: lighter;
  font-size: 2rem;
}
*[data-v-56bcb650] {
  text-align: center;
}
</style>