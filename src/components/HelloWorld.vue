<template>
  <div class="hello">
    <div class="bg">
      <div id="pic1" :style="{width: '100%', height: '100%'}"></div>
    </div>
    <div class="top">
      <h1>黄颍-数据可视化{{time}}</h1>
      <div class="showtime"></div>
    </div>
    <div class="center">
      <div class="column">
        <div class="panel bar">
          <h2>柱形图-就业行业</h2>
          <div class="chart">
            <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
          </div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>柱形图-就业行业</h2>
          <div class="chart">图标</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>柱形图-就业行业</h2>
          <div class="chart">图标</div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
              <li>104563</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <!-- 地图模块 -->
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chart">地图模块</div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar">
          <h2>柱形图-就业行业</h2>
          <div class="chart">图标</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>柱形图-就业行业</h2>
          <div class="chart">图标</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>柱形图-就业行业</h2>
          <div class="chart">图标</div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      time: "",
    };
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      var images = new Image();
      images.src = require("../assets/logo.png");
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      myChart.setOption({
        backgroundcolor: {
          image: images,
        },
        color: ["#2f89cf"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        //修改图表的大小
        grid: {
          left: "0%",
          right: "0%",
          bottom: "4%",
          top: "10px",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
            //修改刻度标签相关央视
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
              // }
            },
            //x轴样式不显示
            axisLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            //y轴文字标签样式
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12",
              // }
            },
            //y轴线条样式
            axisLine: {
              // show: false,
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            //    y轴分割线
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        //y轴分割线
        // splitLine: {
        //   lineStyle: {
        //     color: "rgba(255,255,255,.1)",
        //   },
        // },
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "35%",
            data: [10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
              barBorderRadius: 5,
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                color: "#2EBFF4",
                verticalAlign: "middle",
                backgroundColor: {
                  image: images,
                  repeat: "norepeat",
                  width: 30,
                  height: 30,
                },
                lineHeight: 56,
                // rich: {
                //   b: {
                //     backgroundColor: {
                //       image: images,
                //       height: 10,
                //     },
                //     height: 10,
                //     lineHeight: 10,
                //   },
                // },
              },
            },
          },
        ],
      });
    },
  },
  mounted() {
    var myCharts1 = this.$echarts.init(document.getElementById("pic1"));
    var images = new Image();
    var total = 50;
    images.src = require("../assets/logo.png");
    var option1 = {
      backgroundcolor: {
        image: images,
      },
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
        data: [
          // "未开工" + preBuild + "%",
          // "竣工" + finishPercent + "%",
          // "在建" + inBuild + "%",
        ], //图例的名字需要和饼图的name一致，才会显示图例
      },
      series: [
        {
          name: "在建" + "%",
          type: "pie",
          radius: ["35%", "30%"], //环的位置
          label: {
            normal: {
              position: "inner",
              color: "#2EBFF4",
              verticalAlign: "middle",
              backgroundColor: {
                image: images,
                repeat: "norepeat",
                width: 30,
                height: 30,
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 10, //需要显示的数据
              itemStyle: {
                normal: {
                  color: "#dc1439",
                },
              },
            },
            {
              value: total - 10, //不需要显示的数据，颜色设置成和背景一样
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
              value: 30,
              itemStyle: {
                normal: {
                  color: "#e6b600",
                },
              },
            },
            {
              value: total - 30,
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
              value: 20,
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
    myCharts1.setOption(option1);
    this.drawLine();
    var t = null;
    t = setTimeout(time, 1000); //開始运行
    function time() {
      clearTimeout(t); //清除定时器
      var dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
      var h = dt.getHours(); //获取时
      var m = dt.getMinutes(); //获取分
      var s = dt.getSeconds(); //获取秒
      document.querySelector(".showtime").innerHTML =
        "当前时间：" +
        y +
        "年" +
        mt +
        "月" +
        day +
        "-" +
        h +
        "时" +
        m +
        "分" +
        s +
        "秒";
      this.time =
        "当前时间：" +
        y +
        "年" +
        mt +
        "月" +
        day +
        "-" +
        h +
        "时" +
        m +
        "分" +
        s +
        "秒";
      t = setTimeout(time, 1000); //设定定时器，循环运行
    }
  },
};
</script>

<style lang='less' scoped>
.bg {
  width: 600px;
  height: 600px;
  background-image: url("../assets/logo.png") no-repeat center;
  background-size: 100% 100%;
  border: 1px solid red;
}
li {
  list-style: none;
}
.top {
  height: 1.25rem;
  background: url("../assets/head_bg.png") no-repeat center;
  background-size: 100% 100%;
  position: relative;
  h1 {
    font-size: 0.4375rem;
    color: white;
    text-align: center;
    line-height: 1rem;
  }
  .showtime {
    position: absolute;
    top: 0;
    right: 0.375rem;
    color: white;
    line-height: 0.875rem;
    font-size: 0.25rem;
  }
}
.hello {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: url("../assets/bg.jpg") no-repeat center;
  background-size: 100% 100%;
  line-height: 1.15;
}
.center {
  min-width: 1024px;
  max-width: 1920px;
  height: 300px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .column {
    flex: 3;
    &:nth-of-type(2) {
      flex: 5;
      margin: 0 0.125rem 0.1875rem;
    }
    .panel {
      height: 3.875rem;
      border: 1px solid rgba(25, 186, 139, 0.17);
      background: url("../assets/line(1).png") rgba(255, 255, 255, 0.04);
      padding: 0 0.1875rem 0.5rem;
      margin-bottom: 0.1875rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-left: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-right: 2px solid #02a6b5;
        border-top: 2px solid #02a6b5;
      }
      .panel-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 10px;
          height: 10px;
          border-left: 2px solid #02a6b5;
          border-bottom: 2px solid #02a6b5;
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #02a6b5;
          border-bottom: 2px solid #02a6b5;
        }
      }
      h2 {
        height: 0.6rem;
        color: white;
        line-height: 0.6rem;
        font-size: 0.25rem;
        text-align: center;
        font-weight: 400;
      }
      .chart {
        height: 3rem;
        // background-color: pink;
      }
    }
    .no {
      background-color: rgba(101, 132, 226, 0.1);
      padding: 0.1875rem;
      .no-hd {
        border: 1px solid rgba(25, 186, 139, 0.17);
        position: relative;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          content: "";
          width: 30px;
          height: 10px;
          border-top: 2px solid #02a6b5;
          border-left: 2px solid #02a6b5;
        }
        &::after {
          position: absolute;
          bottom: 0;
          right: 0;
          content: "";
          width: 30px;
          height: 10px;
          border-bottom: 2px solid #02a6b5;
          border-right: 2px solid #02a6b5;
        }
        ul {
          display: flex;
          li {
            flex: 2;
            height: 1rem;
            font-size: 0.875rem;
            color: #ffeb7b;
            text-align: center;
            font-family: "electronicFont";
            position: relative;
          }
          li:nth-of-type(1)::after {
            content: "";
            position: absolute;
            top: 25%;
            right: 0;
            height: 50%;
            width: 1px;
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }
      .no-bd {
        ul {
          display: flex;
          li {
            flex: 1;
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.225rem;
            line-height: 0.5rem;
            padding-top: 0.125rem;
          }
        }
      }
    }
    .map {
      height: 10.125rem;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      position: relative;
      .map1 {
        width: 6.475rem;
        height: 6.475rem;
        background: url("../assets/map.png") no-repeat center;
        background-size: 100% 100%;
        opacity: 0.3;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .map2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8.0375rem;
        height: 8.0375rem;
        background: url("../assets/lbx.png") no-repeat center;
        background-size: 100% 100%;
        animation: identifier 15s linear infinite;
        opacity: 0.8;
      }
      .map3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 7.075rem;
        height: 7.075rem;
        background: url("../assets/jt.png") no-repeat center;
        background-size: 100% 100%;
        animation: identifier1 15s linear infinite;
        opacity: 0.8;
      }
      .chart {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10.125rem;
        // background-color: pink;
      }
      @keyframes identifier {
        form {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
      @keyframes identifier1 {
        form {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }
    }
  }
}
</style>
