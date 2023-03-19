<template>
  <div>
    6666{{ one }}
    <nuxt></nuxt>
    7777{{ userList }}
    <div :class="one">
      colorSet<NuxtLogo
        ><template #itsolt="{ two }">
          <p>{{ two }}</p>
        </template></NuxtLogo
      >
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData() {
    console.log('asyncData') // 验证 async asyncData ()这句话是在服务端执行的
    // axios.get  返回的是一个响应对象，里面有一个属性 data ，data是服务器返回的真实数据
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return {
      userList: data,
    }
  },
  data() {
    return {
      one: ['red', { pink: true, gold: true }],
    }
  },
  head() {
    return {
      title: '二',
    }
  },
  activated() {
    console.log('asyncData')
  },
}
</script>
<style lang="scss" scoped>
.pink {
  background: skyblue;
  color: pink;
}
.gold + .pink {
  color: gold;
}
.red /deep/ span {
  color: blue;
}
</style>
