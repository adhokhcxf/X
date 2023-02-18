<template>
  <div style="max-width: 1920px">
    <router-view />
  </div>
</template>

<script>
import OBSERVER from "@/components/IntersectionObserver";

export default {
  components: {},
  mounted() {
    OBSERVER(document.querySelectorAll(".observed"));
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
:root {
  font-size: 16px;
  overflow-x: hidden !important;
}
body {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden !important;
  background-color: #333;
}
.observed {
  transform: translateY(15rem);
  opacity: 0;
}
.showUp {
  transition: all 0.7s cubic-bezier(0.02, -0.06, 0.74, 1.1);
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.seeMore {
  transition: all 0.2s linear;
  width: 8rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 0.8rem;
  margin: 6rem auto;
  text-align: center;
  border-radius: 2.5rem;
  background-color: #111;
  color: gray;
  cursor: pointer;
}
.seeMore:hover {
  background-color: yellowgreen;
  color: #000;
}

@media (min-width: 1024px) {
  :root {
    font-size: 14px;
  }
}

@media (min-width: 1100px) {
  :root {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  :root {
    font-size: 14px;
  }
}

@media (min-width: 1366px) {
  :root {
    font-size: 16px;
  }
}

@media (min-width: 1440px) {
  :root {
    font-size: 16px !important;
  }
}

@media (min-width: 1680px) {
  :root {
    font-size: 18px;
  }
}
@media (min-width: 1920px) {
  :root {
    font-size: 20px;
  }
}
</style>