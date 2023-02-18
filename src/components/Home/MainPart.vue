<template>
  <div class="container">
    <div
      style="
        width: 100%;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div class="observedStart">
        <p
          style="color: #fff; font-size: 2rem; width: 100%; text-align: center"
        >
          我们的服务
        </p>
        <p
          style="color: gray; width: 100%; font-size: 1rem; text-align: center"
        >
          OUR SERVICE
        </p>
        <p
          style="
            color: gray;
            width: 100%;
            font-size: 0.8rem;
            text-align: center;
          "
        >
          提供专业的设计，制作，售后服务集中解决方案
        </p>
        <hr size="0.5" color="gray" style="width: 3rem; margin: 1.1rem auto" />
      </div>
    </div>
    <!-- <div style="width:100%; height:30vh;"></div> -->

    <div class="service observed" style="transform: translateY(15rem)">
      <div
        class="hover"
        v-for="item in dataList"
        :key="item.id"
        style="
          width: 16rem;
          height: 8rem;
          background: #333;
          display: flex;
          aligm-items: center;
          flex-direction: column;
        "
      >
        <div class="observer">
          <div style="width: 8rem; height: 8rem; margin: 0 auto">
            <img class="img" :src="item.src" alt="" />
          </div>
          <div></div>
          <p
            style="
              font-size: 1rem;
              width: 100%;
              text-align: center;
              color: #aaa;
              margin: 1rem auto;
            "
          >
            {{ item.title }}
          </p>
          <p
            style="
              font-size: 0.4rem;
              width: 100%;
              text-align: center;
              color: gray;
            "
          >
            {{ item.intro }}
          </p>
        </div>
      </div>
    </div>

    <div class="beverage" style="margin-top: 40vh; width: 100vw">
      <div style="width: 100%" class="observed">
        <p
          style="
            width: 100%;
            font-size: 1.8rem;
            color: #ccc;
            text-align: center;
          "
        >
          <span @click="toBeverage" class="toBev">饮料</span>
        </p>
        <p
          style="
            width: 100%;
            color: gray;
            font-size: 1.1rem;
            text-align: center;
          "
        >
          BEVERAGE
        </p>
        <p
          style="
            width: 100%;
            color: gray;
            font-size: 0.8rem;
            text-align: center;
          "
        >
          星巴克咖啡:提供最新的星巴克饮料介绍详情.星巴克将咖啡传承与独特的咖啡体验带给我们的顾客。
        </p>
      </div>
    </div>

    <div
      class="beverageImgs"
      style="
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        v-for="item in beverageList"
        :key="item.id"
        style="
          display: flex;
          flex-direction: column;
          width: 20vw;
          height: 15vw;
          margin: 2rem 1rem;
          transform: translateY(15rem);
        "
        class="imgs observed"
      >
        <div style="width: 100%; height: 100%">
          <img style="width: 100%; height: 100%" :src="item.src" alt="" />
        </div>
        <div style="width: 100%; height: 100%">
          <p
            style="
              font-size: 1rem;
              color: #bbb;
              width: 100%;
              height: 4rem;
              line-height: 4rem;
              text-align: center;
            "
          >
            {{ item.intro }}
          </p>
        </div>
      </div>
    </div>

    <div class="observed seeMore" @click="toBeverage">查看更多 +</div>

    <div style="width: 100vw; margin-top: 12rem">
      <p
        class="observed"
        style="
          width: 100%;
          color: #aaa;
          height: 2rem;
          line-height: 2rem;
          font-size: 1.8rem;
          text-align: center;
          transform: translateY(15rem);
          opacity: 0;
        "
      >
        <span style="margin: 0 auto; cursor: pointer">咖啡星讲堂</span>
      </p>
      <p
        class="observed"
        style="
          width: 100%;
          height: 2rem;
          line-height: 2rem;
          color: gray;
          font-size: 0.8rem;
          text-align: center;
          transform: translateY(15rem);
          opacity: 0;
          cursor: text;
        "
      >
        星巴克咖啡:提供最新的星巴克咖啡星讲堂介绍详情.星巴克将咖啡传承与独特的咖啡体验带给我们的顾客。
      </p>
      <hr
        class="observed"
        size="0.5"
        color="gray"
        style="width: 3rem; margin: 1rem auto"
      />
    </div>
    <div style="margin: 0 auto">
      <post-imgs />
    </div>

    <div>
      <div style="width: 100%; height: auto; background-color: #111;">
        <news-center />
      </div>
    </div>
  </div>
</template>

<script>
import OBSERVER from "@/components/IntersectionObserver";
import PostImgs from "@/components/Home/PostImgs.vue";
import NewsCenter from "@/components/Home/NewsCenter.vue";

export default {
  data() {
    return {
      dataList: [
        {
          src: "https://www.jolyson.cn/zb_users/upload/2020/12/202012251608884043769355.png",
          title: "精益求精",
          intro: "披星戴月，传承工匠精神，用敬业的态度对待每一个客户",
          id: 3224,
        },
        {
          src: "https://www.jolyson.cn/zb_users/upload/2020/12/202012251608884099353353.png",
          title: "售后保障",
          intro: "完善的售后服务确保及时、高效，时刻为您的店铺保驾护航",
          id: 3225,
        },
        {
          src: "https://www.jolyson.cn/zb_users/upload/2020/12/202012251608883894432878.png",
          title: "专注品质",
          intro:
            "星巴克于1991年1月，在北京中国国际贸易中心开设中国内地第一家门店",
          id: 3226,
        },
        {
          src: "https://www.jolyson.cn/zb_users/upload/2020/12/202012251608883949562244.png",
          title: "用心服务",
          intro: "专业的商业服务团队，提供更全面、更强大的实时服务支持",
          id: 3227,
        },
      ],
      beverageList: [
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
      ],
    };
  },
  components: {
    PostImgs,
    NewsCenter,
  },
  methods: {
    toBeverage() {
      this.$router.push("/beverage");
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    var serviceHovered = document.querySelectorAll(".observed");

    OBSERVER(serviceHovered);

    var observedStart = document.querySelector(".observedStart").childNodes;

    OBSERVER(observedStart);

    var beverage = document.querySelectorAll(".observed");

    OBSERVER(beverage);

    // var beverageImgs = document.querySelectorAll(".imgs");

    // OBSERVER(beverageImgs);
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: auto;
  background-color: #333;
  position: relative;
  box-sizing: border-box;
}
.service {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 80%;
  opacity: 0;
}
.service .img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background: #222;
  cursor: pointer;
  transition: all 0.4s linear;
}
.service .hover:hover .img {
  background-color: yellowgreen;
}
.toBev {
  cursor: pointer;
  transition: all 0.2s linear;
}
.toBev:hover {
  color: yellowgreen !important;
}
.beverage > * {
  transform: translateY(15rem);
  opacity: 0;
}
.beverage p {
  margin: 0.4rem auto;
}
.observedStart p {
  transform: translateY(6rem);
  opacity: 0;
}
/* .beverageImgs > * {
  width: 100%;
} */
</style>