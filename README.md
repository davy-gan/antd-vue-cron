# antd-vue-cron

## 依赖
- Vue 2.0.0+
- ant-design-vue 1.7.8+


## 安装方式
```
npm install vue-cron
```


## 引入方式
```javascript
//前置配置
import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


Vue.use(Antd);


//全局引入
import AntdVueCron from 'vue-cron'
Vue.use(AntdVueCron);//使用方式：<vueCron></vueCron>


//局部引入
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <a-input
      v-model="expression"
      disabled
      style="width:350px"
    >
      <span
        slot="addonAfter"
        type="primary"
        @click="showModal"
        style="cursor: pointer;"
      >
      显示corn
      </span>
    </a-input>
    <a-modal
      title="corn 表达式"
      v-model="visible"
      :footer="null"
      width="800px"
      destroyOnClose
    >
      <antd-vue-cron
        i18n="cn"
        :expression="expression"
        @change="handlerChange"
        @close="visible = false"
      />
    </a-modal>
  </div>
</template>


<script>
import Vue from 'vue'
import { Input, Modal } from 'ant-design-vue'
import { cron } from '@/components/index'


Vue.use(Modal)
export default {
  name: 'App',
  components: {
    'antd-vue-cron': cron,
    'a-input': Input,
    // 'a-icon': Icon,
    // 'a-button': Button
  },
  data () {
    return {
      visible: false,
      expression: '0 0 0 1 1 ? *'
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handlerChange (expression) {
      console.log('handlerChange', expression)
      this.expression = expression
      this.visible = false
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


```


## 参数


- i18n

    - 参数 `{String} language` 目前仅支持`en|cn`
    
    国际化支持


## 事件
- change(cronText)


    - 参数：`{String} cronText` cron表达式的值
    
    当corn表达式的值发生变化变化时触发
    
- close()


    - 参数：无
    
    当点击corn表达式选择框取消按钮时触发
    
有任何问题请发Issues,欢迎pull request  谢谢!

此库为学习使用，参考了同类的库 
[vue-cron](https://github.com/1615450788/vue-cron)