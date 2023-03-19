<template>
  <div class="home">
<div class="button-box"><el-button type="primary" plain><nuxt-link to="/mypages/begin-know">开始了解</nuxt-link><br /></el-button>
    <span @click="fetchSomething()">天行数据新闻头条</span>
    <input v-model="toggle" type="checkbox" true-value="yes" false-value="no" />
    {{toggle}}</div>

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
      toggle: ''
    }
  },
  mounted: () => {
    //  this.$axios.get('toutiao/index', {
    //     params: {}
    //   }).then((res) => {
    //     this.records = res
    //   })
  },
  methods: {
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
