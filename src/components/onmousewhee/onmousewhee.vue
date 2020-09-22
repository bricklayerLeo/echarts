<template>
  <div class="onmousewhee">
    <!-- <div class="lci" @click="showdia">点击</div>
    <div class="lci0" @click="removeClass(this.htmlDom,'noscroll')">点击</div>-->
    <div class="lci" @click="showdia">点击</div>
    <!-- <div class="lci0" @click="removeClass(this.htmlDom,'noscroll')">点击</div> -->
    <div class="content">
      <div v-for="(e,idx) in 60" :key="idx">手动阀手动阀</div>
    </div>
    <dialog0 v-if="show" @gg="gg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    dialog0: () => import("./dialog.vue"),
  },
  methods: {
    gg() {
      this.show = false;
      var mo = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("mousewheel", mo, false); //禁止页面滑动
      //   this.removeClass(this.htmlDom, "noscroll");
    },
    showdia() {
      this.show = true;
      //   this.htmlDom = document.getElementsByTagName("body")[0];
      //   this.addClass(this.htmlDom, "noscroll");
    },
    hasClass(el, className) {
      let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
      return reg.test(el.className);
    },

    addClass(el, className) {
      if (this.hasClass(el, className)) {
        return;
      }
      if (el.className === "") {
        el.className += className;
      } else {
        let newClass = el.className.split(" ");
        newClass.push(className);
        el.className = newClass.join(" ");
      }
    },

    removeClass(el, className) {
      console.log("sss");
      if (this.hasClass(el, className)) {
        el.className = el.className.replace(
          new RegExp("(\\s|^)" + className + "(\\s|$)"),
          ""
        );
      }
    },
  },
};
</script>

<style lang='less' >
.noscroll {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
.content {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
}
.onmousewhee {
  height: 2000px;
  background-color: gray;
  .lci {
    width: 100px;
    height: 60px;
    background-color: red;
    color: white;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lci {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    background-color: red;
    color: white;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>