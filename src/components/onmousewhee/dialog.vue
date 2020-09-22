<template>
  <!-- <div class="bg" @click="gg"> -->
  <div class="bg" @mousewheel.prevent="scroll($event)">
    <div class="content" @mousewheel.prevent="scrollscroll($event)">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          @mousewheel.prevent="scrollscroll($event)"
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
        {
          value: "选项13",
          label: "黄金糕",
        },
        {
          value: "选项22",
          label: "双皮奶",
        },
        {
          value: "选项31",
          label: "蚵仔煎",
        },
        {
          value: "选项44",
          label: "龙须面",
        },
        {
          value: "选项55",
          label: "北京烤鸭",
        },
        {
          value: "选项16",
          label: "黄金糕",
        },
        {
          value: "选项26",
          label: "双皮奶",
        },
        {
          value: "选项36",
          label: "蚵仔煎",
        },
        {
          value: "选项46",
          label: "龙须面",
        },
        {
          value: "选项54",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  methods: {
    gg() {
      this.$emit("gg");
    },
    scrollscroll(e) {
      console.log("333", e);
    },
    scroll(e) {
      console.log("222", e);
    },
  },
};
</script>

<style lang='less'>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    position: relative;
    width: 600px;
    height: 600px;
    background: white;
  }
}
</style>