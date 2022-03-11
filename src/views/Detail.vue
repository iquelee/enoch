<template>
  <div class="main">
    <div class="installInfo px-5 py-4">
      <p class="text-primary fs-xxl mt-3 fw-9">安装说明</p>
      <p class="text-white fs-xxl mt-3 fw-2">{{ info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['info']
}
</script>

<style lang="scss" scoped>
  .main {
    width:800px;
    background: #000000;
    box-shadow: inset 0px 0px 24px #6778FF;
    margin-left:auto;
    margin-right: auto;
    margin-top: 70vh;
  }
  p {
    line-height: 32px;
  }
</style>
