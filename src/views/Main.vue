<template>
  <div class="hud">
    <div class="header bg-dark">
      <div class="title d-flex ai-center jc-around">
        <img src="../assets/logo.svg" height="20px" style="margin-left:80px">
        <span class="text-white fs-xxl ml-3">|</span>
        <p class="text-white fs-xxl ml-3" style="margin-right:80px">打磨工位桁架安装示意</p>
      </div>
    </div>
    <!-- end of header -->
    <div class="container d-flex">
      <div class="aside d-flex flex-col px-3 pt-4">
        <ul>
          <li v-for="item in frameList" :key="item.id">
             <router-link :to="{
               name:'Detail',
               query: {
                 info: item.info
               }
               }"
               active-class="active" exact
               @click.native="onClick(item.frame)">
                <div class="menuItem mt-5">
                  <p class="fs-xxl mt-2">{{ item.title }}</p>
                </div>
                <div class="menuInfo mt-2 pt-4">
                  <p class="fs-xl text-white mt-2">{{ item.size }}</p>
                  <p class="fs-xl text-white">{{ item.material }}</p>
                </div>
             </router-link>
          </li>
        </ul>
      </div>
      <div class="main flex-1">
        <!-- 全路径Url，只要key变化了就刷新页面 -->
        <router-view :key="$route.fullPath"></router-view>
      </div>
      <div class="info px-3 pt-4">
        <div class="infoItem mt-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiSend, apiRegister } from '../ue4Player/app'
export default {
  name: 'Main',
  data () {
    return {
      frameList: [
        { id: '001', frame: 'mainFrame', title: '主桁架', size: '50mmx50mmx2mm', material: '镀锌方管', info: '主桁架由50mmx50mmx2mm镀锌方管焊接，桁架尺寸和车位对应，底部距离地面3米吊装，主桁架下方安装T5LED日光灯管（首尾相连）' },
        { id: '002', frame: 'termFrame', title: '终端桁架', size: '40mmx40mmx2mm', material: '镀锌方管', info: '终端桁架由40mmx40mmx2mm镀锌方管焊接于主桁架之上，和内侧主桁架间距1.5~2米。两根方管内空200mm，而且不能有吊架等阻碍物，以免影响吸尘管路的铺设。在安装终端的两端，需要预接气源（工作气压不低于6公斤）。' },
        { id: '003', frame: 'fix', title: '吊装方管', size: '30mmx30mmx2mm', material: '镀锌方管', info: '吊装材料为30mmx30mmx2mm镀锌方管，吊装高度保证桁架底部距离地面3米，工作前应了解整体重量，安全选用机械工具。' }
      ]
    }
  },
  mounted () {
    apiRegister('onUE4Call', (info) => {
      console.log(info)
    })
  },
  methods: {
    onClick (frame) {
      console.log(frame)
      apiSend(frame, () => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height:8vh;
    background: #000000;
    box-shadow: inset 0px -6px 4px rgba(103, 120, 255, 0.5);
  }
  .title > p {
    letter-spacing: 2px;
  }
  .title {
    width:640px;
    height: 8vh;
    background: #000000;
    box-shadow: inset 0px 0px 24px #6778FF;
    margin: 0 auto;
  }
  .container {
    height:1vh;
  }
  .menuItem {
    width:240px;
    height: 60px;
    background: #000000;
    border: 1px solid #666666;
  }
  .infoItem {
    width:200px;
    height: 48px;
  }
  .menuInfo {
    width:240px;
    height: 80px;
    background: #000000;
    box-shadow: inset 0px 0px 24px #6778FF;
    display: none;
  }
  .menuItem > P {
    line-height: 48px;
    text-align: center;
    letter-spacing: 2px;
  }
  .menuInfo > P {
    text-align: center;
    letter-spacing: 2px;
  }
  .active > .menuItem {
    border: none;
    box-shadow: inset 0px 0px 24px #6778FF;
  }

  .active > .menuItem > p {
    padding-top: 8px;
    color: #ffffff;
  }

  .active .menuInfo {
    display: block;
  }
  p {
    line-height: 18px;
  }
  .main, .info {
    pointer-events:none
  }
</style>
