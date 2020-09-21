<template>
  <div class="bg">
    <div class="aaaaa">
      <div id="pic1" :style="{width: '100%', height: '100%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var myCharts1 = this.$echarts.init(document.getElementById("pic1"));
    var images = new Image();
    var total = 50;
    images.src = require("../assets/logo.png");
    window.addEventListener("resize", function () {
      myCharts1.resize();
    });
    var option = {
      //   backgroundColor: {
      //     image: images,
      //     type: "pattern",
      //     repeat: "no-repeat",
      //   },
      tooltip: {
        show: false, //防止鼠标移到不需要的数据上弹出label
        trigger: "item",
        formatter: "{a} : {c} ({d}%)",
      },
      color: ["#dc1439", "#e6b600", "#053afe"],
      legend: {
        orient: "vertical",
        x: "30%",
        top: "19%",
        itemHeight: 10, //图例的高度
        itemGap: 5, //图例之间的间距
        data: ["未开工" + "%", "竣工" + "%", "在建" + "%"], //图例的名字需要和饼图的name一致，才会显示图例
      },
      series: [
        {
          name: "在建" + "%",
          type: "pie",
          radius: ["35%", "30%"], //环的位置

          label: {
            normal: {
              position: "inner",
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 50, //需要显示的数据
              itemStyle: {
                normal: {
                  color: "#dc1439",
                },
              },
            },
            {
              value: total - 1, //不需要显示的数据，颜色设置成和背景一样
              itemStyle: {
                normal: {
                  color: "transparent",
                },
              },
            },
          ],
        },
        {
          name: "竣工" + "%",
          type: "pie",
          radius: ["40%", "45%"],

          label: {
            normal: {
              position: "inner",
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 50,
              itemStyle: {
                normal: {
                  color: "#e6b600",
                },
              },
            },
            {
              value: total - 2,
              itemStyle: {
                normal: {
                  color: "transparent",
                },
              },
            },
          ],
        },
        {
          name: "未开工" + "%",
          type: "pie",
          radius: ["55%", "50%"],

          label: {
            normal: {
              position: "inner",
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 50,
              itemStyle: {
                normal: {
                  color: "#053afe",
                },
              },
            },
            {
              value: total - 20,
              itemStyle: {
                normal: {
                  color: "transparent",
                },
              },
            },
          ],
        },
      ],
    };
    myCharts1.setOption(option);
  },
};
</script>

<style>
.bg {
  width: 7.5rem;
  height: 7.5rem;
  background: url("../assets/logo.png") no-repeat center;
  background-size: 80% 80%;
  border: 1px solid red;
  z-index: -1;
  position: relative;
}
.aaaaa {
  width: 100%;
  height: 100%;
}
</style>