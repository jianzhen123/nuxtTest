<template>
  <div>
<div class="line"></div>
<div class="tab-style"><el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1"><nuxt-link to="/mypages/begin-know/animation">动画效果</nuxt-link></el-menu-item>
    <el-menu-item index="2-2"><nuxt-link to="/mypages/begin-know/rich-text">设置富文本</nuxt-link></el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><nuxt-link to="/mypages/charts">数据可视化</nuxt-link></el-menu-item>
</el-menu></div>

<div class="button-box"><el-button type="primary" plain><nuxt-link to="/mytest/index-two">地图</nuxt-link><br /></el-button>
    <span @click="fetchSomething()">天行数据新闻头条</span>
    <input v-model="toggle" type="checkbox" true-value="yes" false-value="no" />
    {{toggle}}</div>
    <router-view></router-view>
<nuxt-child></nuxt-child>
    <!-- <nuxt :key="$route.path"/> -->
  </div>
</template>

<script>
// import { Vue, Component, Prop } from 'vue-property-decorator'

// @Component({})
// export default class Page-one extends Vue {

// }
export default {
  data: () => {
    return {
      toggle: '', activeIndex: '1',
        activeIndex2: '1'
    }
  },
  mounted: () => {
    //  this.$axios.get('toutiao/index', {
    //     params: {}
    //   }).then((res) => {
    //     this.records = res
    //   })
  },
  methods: { handleSelect(key, keyPath) {
    if(key==='1'){
      this.$router.push('/mytest/media-set');
    }
        console.log(key, keyPath);
      },
    async fetchSomething() {
      await this.$axios
        .get('toutiao/index?type=guonei&key=acc164890efe6d45761f937a643a091e')
        .then((res) => {
          console.log(res)
        })
    },
  },
}
</script>

<style lang="scss">
.tab-style{
  width: 100%;
  height: 100%;
}
.button-box{
  width: 100%;height: 100px;
}
</style>

<style>
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
