<template>
  <div>
  <h2>父组件的页面的内容</h2>
  <ul>
   <!-- 进行切换子页面，写法同vue.js -->
   <li><nuxt-link to='/show-time/child-one'>child</nuxt-link></li>
   <li><nuxt-link to='/show-time/child-two'>child2</nuxt-link></li>
  </ul>
  <hr>
  <div class="box">
   <p>嵌套子页面内容区</p>
   <!-- <nuxt-child>标签在父页面组件中相当于是子页面组件的占位符；嵌套中这个不可少 -->
   <nuxt-child keep-alive :foobar="123"></nuxt-child>
  </div>
  </div>
 </template>
 <script>
 export default {

 }
 </script>
 <style scoped>
 .box{
  margin-top: 20px;
  padding: 20px;
  border: 2px solid pink;
  border-radius: 5px;
 }
 </style>
