import Button from '../packages/Button'
import Icon from '../packages/Icon'
import Layout from '../packages/Layout'
import Three from '../packages/Three'
import Dialog from '../packages/Dialog'
import Input from '../packages/Input'
import Switch from '../packages/Switch'
import Radio from '../packages/Radio'

import '../packages/Theme/index.css'
import '../packages/Theme/transition.css'
import {
  setCdn
} from '../packages/Jsx'


// 组件列表
const components = [
  ...Button,
  ...Icon,
  ...Layout,
  ...Three,
  ...Dialog,
  ...Input,
  ...Switch,
  ...Radio
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  setCdn('//at.alicdn.com/t/font_1928386_31nk2gpx3k7.js')

  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}