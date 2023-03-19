// import Vue from 'vue';
// import {
//   Container,
//   Header,
//   Aside,
//   Main,
//   Menu,
//   MenuItem,
//   Button,
//   Form,
//   FormItem,
//   Input,
//   Col,
//   Row
// } from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'

// const components = [
//   Container,
//   Header,
//   Aside,
//   Main,
//   Menu,
//   MenuItem,
//   Button,
//   Form,
//   FormItem,
//   Input,
//   Col,
//   Row
// ];

// const Element = {
//   install(Vue) {
//     components.forEach(component => {
//       Vue.component(component.name, component)
//     })
//   }
// }

// Vue.use(Element, {
//   locale
// })

// 上面的按需引入需要在这里写引入的组件名称比较麻烦，这是我练手用的项目我就全部引入了,实际项目中最好是按上面的写法来，提高性能
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
