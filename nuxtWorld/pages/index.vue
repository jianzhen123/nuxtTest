<template>
  <Tutorial />
</template>

<script>
export default {
  name: 'IndexPage',
  middleware({ store, route, redirect, params, query, req, res }) {
    redirect('/mypages/home') // 默认跳转页面的路由
  },
}
</script>
