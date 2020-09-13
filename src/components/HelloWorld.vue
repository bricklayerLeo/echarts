<template>
  <div class="hello">
    <div class="top">
      <h1>黄颍-数据可视化{{time}}</h1>
      <div class="showtime"></div>
    </div>
    <div class="center">
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
  mounted() {
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
  background: url("../assets/bg.jpg") no-repeat center;
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
        background-color: pink;
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
