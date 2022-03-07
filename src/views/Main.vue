<template>
  <div class="hud">
    <div class="header bg-dark">
      <div class="title d-flex ai-center">
        <img src="../assets/logo.svg" height="20px" class="ml-5">
        <span class="text-white fs-xl ml-3">|</span>
        <p class="text-white fs-xl ml-3">打磨工位桁架安装示意</p>
      </div>
    </div>
    <!-- end of header -->
    <div class="container d-flex">
      <div class="aside d-flex flex-col px-3 pt-4">
        <router-link to="/mainFrame"  active-class="active">
          <div class="menuItem mt-4" @click='onClickMain()'>
            <p class="fs-xl">主桁架</p>
          </div>
          <div class="menuInfo mt-2 pt-4">
            <p class="fs-s text-white">50mmx50mmx2mm</p>
            <p class="fs-s text-white">镀锌方管</p>
          </div>
        </router-link>
        <router-link to="/termFrame" active-class="active">
          <div class="menuItem mt-4" @click='onClickTerm()'>
            <p class="fs-xl text-grey">终端桁架</p>
          </div>
          <div class="menuInfo mt-2 pt-4">
            <p class="fs-s text-white">40mmx40mmx2mm</p>
            <p class="fs-s text-white">镀锌方管</p>
          </div>
        </router-link>
        <router-link to="/doorFrame" active-class="active">
          <div class="menuItem mt-4">
            <p class="fs-xl text-grey">门楣桁架</p>
          </div>
          <div class="menuInfo mt-2 pt-4">
            <p class="fs-s text-white">40mmx40mmx2mm</p>
            <p class="fs-s text-white">镀锌方管</p>
          </div>
        </router-link>
        <router-link to="/fix" active-class="active">
          <div class="menuItem mt-4">
            <p class="fs-xl text-grey">吊装钢筋</p>
          </div>
          <div class="menuInfo mt-2 pt-4">
            <p class="fs-s text-white">∅20mm</p>
            <p class="fs-s text-white">螺纹钢</p>
          </div>
        </router-link>
      </div>
      <div class="main flex-1">
        <router-view></router-view>
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
  mounted () {
    apiRegister('onUE4Call', (info) => {
      console.log(info)
    })
  },
  methods: {
    onClickMain () {
      apiSend('mainFrame', () => {
      })
    },
    onClickTerm () {
      apiSend('termFrame', () => {
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
    width:460px;
    height: 8vh;
    background: #000000;
    box-shadow: inset 0px 0px 24px #6778FF;
    text-align: center;
    margin: 0 auto;
  }
  .container {
    height:92vh;
  }
  .menuItem {
    width:180px;
    height: 48px;
    background: #000000;
    border: 1px solid #666666;
  }
  .infoItem {
    width:180px;
    height: 48px;
  }
  .menuInfo {
    width:180px;
    height: 64px;
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
    color: #ffffff;
  }

  .active .menuInfo {
    display: block;
  }
</style>
