import AntdVueCron from './AntdVueCron.vue'

export const cron = AntdVueCron

export default {
  install(Vue) {
    Vue.component(AntdVueCron.name, AntdVueCron)
  }
}