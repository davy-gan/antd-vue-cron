<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <a-input
      v-model="expression"
      disabled
      style="width: 350px"
    >
      <span
        slot="addonAfter"
        type="primary"
        @click="showModal"
        style="cursor: pointer"
      >
        显示cron
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
// import {cron} from '../lib/antdVueCron.umd.min.js'

Vue.use(Modal)
export default {
  name: 'App',
  components: {
    'antd-vue-cron': cron,
    'a-input': Input
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
  padding-top: 60px;
}
</style>
