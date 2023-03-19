<template>
  <div class="page-box">ewtewg
    <div class="header-box">
      a
      <!-- <slot name="header-box"/> -->
    </div><Nuxt /><nuxt></nuxt>
    <div class="body-box">
      <div class="left-sider">
        b
        <!-- <slot name="left-sider"/> -->
      </div>
      <div class="body-content">
        c
        <!-- <slot name="body-content"/> -->
      </div>
    </div>xvsbf
  </div>
</template>

<style>
.page-box {
  display: flex;
  flex-direction: column;
}
.header-box {
  width: 100%;
  height: 100px;
  display: flex;
  background-color: red;
}
.body-box {
  width: 100%;
  display: flex;
  flex-flow: row;
}
.left-sider {
  width: 400px;
  height: calc(100vh - 100px);
  background: yellow;
  overflow: auto;
}
.body-content {
  flex: 1;
  height: calc(100vh - 100px);
  background-color: blue;
  overflow: auto;
}
.sider-content {
  height: 1300px;
  width: 200px;
  background-color: black;
}
</style>
