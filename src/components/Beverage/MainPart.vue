<template>
  <div class="container">
    <el-row>
      <el-col id="col" :span="24">
        <div class="grid-content bg-purple-dark">
          <el-breadcrumb
            separator-class="el-icon-d-arrow-right"
            style="color: #dddddd"
          >
            <el-breadcrumb-item :to="{ path: '/home' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item>星巴克菜单</el-breadcrumb-item>
            <el-breadcrumb-item>饮料</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="cards">
          <ul v-for="item in dataList" :key="item">
            <li class="card">{{ item }}</li>
          </ul>
        </div>

        <div class="imgList">
          <div class="img observed" v-for="image in imageList" :key="image.id">
            <img :src="image.src" alt="" />
            <p>{{ image.intro }}</p>
          </div>
        </div>

        <div class="pagination">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>></li>
            <li>>></li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dataList: [
        "全部",
        "星巴克玩味冰调™",
        "手工调制浓缩咖啡",
        "星冰乐®",
        "茶瓦纳™",
        "经典巧克力饮品",
        "咖啡融合冰淇淋",
        "星巴克冷萃咖啡系列",
        "气致™冷萃咖啡",
      ],
      imageList: [
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608799677810461.jpg",
          id: 3435,
          intro: "气致™冷萃咖啡",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608800137269169.jpg",
          id: 55453,
          intro: "星巴克冷萃咖啡系列：轻甜奶油",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608800177671841.jpg",
          id: 839247,
          intro: "星巴克冷萃咖啡系列：冷萃冰咖啡",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608800137269169.jpg",
          id: 32482,
          intro: "咖啡融合冰淇淋：气致™冷萃浮乐朵™",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608800058137833.jpg",
          id: 32422,
          intro: "咖啡融合冰淇淋：麦芽雪冷萃™",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608799763407816.jpg",
          id: 90039,
          intro: "咖啡融合冰淇淋：阿馥奇朵™",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608799637285629.png",
          id: 34343,
          intro: "经典巧克力饮品：经典巧克力饮品（热）",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608799603839084.png",
          id: 23232,
          intro: "茶瓦纳™：橘香柚柚花草茶",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608799557367110.jpg",
          id: 4883,
          intro: "茶瓦纳™：梨光清润路芭茶",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608799763407816.jpg",
          id: 230,
          intro: "茶瓦纳™：茶瓦纳™冰摇桃桃乌龙茶",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608799481442824.jpg",
          id: 399,
          intro: "茶瓦纳™：冰摇红莓黑加仑茶",
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608799481442824.jpg",
          id: 787,
          intro: "茶瓦纳™：冰摇红莓黑加仑茶",
        },
      ],
    };
  },
  mounted() {
    var cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[0].style.color = "#111";
      cards[0].style.backgroundColor = "yellowgreen";
      cards[i].onclick = function () {
        for (let j = 0; j < cards.length; j++) {
          cards[j].style.backgroundColor = "";
          cards[j].style.color = "";
        }
        this.style.backgroundColor = "yellowgreen";
        this.style.color = "#111";
      };
    }

    var imgs = document.querySelectorAll(".observed");

    var intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showUp");
          intersectionObserver.unobserve(entry.target);
        }
      });
    });

    imgs.forEach((entry) => {
      intersectionObserver.observe(entry);
    });

      var pagination = document.querySelector('.pagination')
      var pagLis = pagination.getElementsByTagName('li')

      for(let i = 0; i < pagLis.length; i++) {
        pagLis[0].style.backgroundColor = 'yellowgreen'
        pagLis[0].style.color = '#111'
        pagLis[i].onclick = (evt) => {
          for(let j = 0; j < pagLis.length; j++) {
            pagLis[j].style.backgroundColor = ''
            pagLis[j].style.color = ''
          }
          evt.target.style.backgroundColor = 'yellowgreen'
          evt.target.style.color = '#111'
          this.$router.push('/beverage').catch(() => {})
          document.documentElement.scrollTop = 0;
        }
      }
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 0 auto;
}
data-v-0b4ff37c {
  border-bottom: 1px solid red;
}
.el-breadcrumb {
  padding: 1rem;
  border-bottom: 1px solid #aaa;
  color: #aaa;
}
.cards {
  height: 6rem;
}
.cards ul li {
  float: left;
  margin: 4rem 10px;
  border: 1px solid #aaa;
  padding: 5px;
  border-radius: 3.125rem;
  background-color: #111;
  color: #aaa;
  cursor: pointer;
  transition: 0.2s linear;
}
.cards ul li:hover {
  background-color: yellowgreen;
  color: #111;
}
.imgList {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: relative;
}
.imgList .img {
  width: 19vw;
  height: 20vw;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transform: translateY(10rem);
  opacity: 0;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s linear;
  cursor: pointer;
}
img:hover {
  transform: scale(1.1);
}
.imgList .img p {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #222;
  padding: 1rem;
  z-index: 100;
  width: 100%;
  height: 20%;
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
  font-weight: lighter;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;
  transition: all .2s linear;
}
.imgList .img p:hover {
  color: yellowgreen;
}
/* .imgList .img:first-child img {
  object-fit: cover;
} */
.pagination {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* transform: translateY(-5rem); */
  margin: 5rem auto;
}
.pagination ul li {
  font-size: .6rem;
  font-weight: lighter;
  border-radius: 50%;
  text-align: center;
  min-width: 2.1875rem;
  min-height: 2.1875rem;
  line-height: 2.1875rem;
  color: #ffffff;
  background-color: #111;
  float: left;
  margin: 2px;
  cursor: pointer;
  transition: all .2s linear;
}
.pagination ul li:hover {
  background-color: yellowgreen;
}
</style>