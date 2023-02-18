<template>
  <div
    class="container"
    style="width: 80vw; height:auto; margin:0 auto; color: #aaa"
  >
    <div style="width: 100%; display: flex; justify-content: space-around">
      <div v-for="item in dataList" :key="item.id">
        <div class="observed">
          <img
            :src="item.src"
            alt=""
            style="width: 38vw; height: 30vw; cursor: pointer"
          />
        </div>
        <div class="observed">
          <p
            style="
              width: 100%;
              text-align: center;
              margin-top: 2rem;
              font-size: 1rem;
            "
          >
            {{ item.intro }}
          </p>
        </div>
      </div>
    </div>

    <div class="observed seeMore">查看更多 +</div>
  </div>
</template>

<script>
import OBSERVER from "@/components/IntersectionObserver";

export default {
  data() {
    return {
      dataList: [
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608793148789745.jpg",
          intro: "咖啡品尝",
          id: 1,
        },
        {
          src: "https://jolyson.cn/zb_users/upload/2020/12/202012241608796196643410.jpg",
          intro: "冰咖啡 vs. 冰美式",
          id: 2,
        },
      ],
    };
  },
  mounted() {
    OBSERVER(document.querySelectorAll(".observed"));
  },
};
</script>
