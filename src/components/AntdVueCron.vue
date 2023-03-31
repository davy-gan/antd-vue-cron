<template>
  <div id="changeContab">
    <!-- <a-button
      class="language"
      type="text"
      @click="i18n=(i18n==='en'?'cn':'en')"
    >{{i18n}}</a-button> -->
    <a-tabs default-active-key="second">
      <a-tab-pane key="second">
        <span slot="tab"><a-icon type="schedule" /> {{ text.Seconds.name }}</span>
        <a-radio-group
          name="second"
          v-model="second.cronEvery"
        >
          <div class="tabBody">
            <a-row>
              <a-radio value="1">{{ text.Seconds.every }}</a-radio>
            </a-row>
            <a-row>
              <a-radio value="2">{{ text.Seconds.interval[0] }}
                <a-input-number
                  size="small"
                  v-model="second.incrementIncrement"
                  :min="1"
                  :max="60"
                ></a-input-number>
                {{ text.Seconds.interval[1] || '' }}
                <a-input-number
                  size="small"
                  v-model="second.incrementStart"
                  :min="0"
                  :max="59"
                ></a-input-number>
                {{ text.Seconds.interval[2] || '' }}
              </a-radio>
            </a-row>
            <a-row>
              <a-radio
                class="long"
                value="3"
              >{{ text.Seconds.specific }}
                <a-select
                  size="small"
                  mode="multiple"
                  v-model="second.specificSpecific"
                >
                  <a-select-option
                    v-for="val in 60"
                    :key="val"
                    :value="val - 1"
                  >{{
                    val - 1
                  }}</a-select-option>
                </a-select>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="4">{{ text.Seconds.cycle[0] }}
                <a-input-number
                  size="small"
                  v-model="second.rangeStart"
                  :min="1"
                  :max="60"
                ></a-input-number>
                {{ text.Seconds.cycle[1] || '' }}
                <a-input-number
                  size="small"
                  v-model="second.rangeEnd"
                  :min="0"
                  :max="59"
                ></a-input-number>
                {{ text.Seconds.cycle[2] || '' }}
              </a-radio>
            </a-row>
          </div>
        </a-radio-group>
      </a-tab-pane>
      <a-tab-pane key="minute">
        <span slot="tab"><a-icon type="schedule" /> {{ text.Minutes.name }}</span>
        <a-radio-group
          name="minute"
          v-model="minute.cronEvery"
        >
          <div class="tabBody">
            <a-row>
              <a-radio value="1">{{ text.Minutes.every }}</a-radio>
            </a-row>
            <a-row>
              <a-radio value="2">{{ text.Minutes.interval[0] }}
                <a-input-number
                  size="small"
                  v-model="minute.incrementIncrement"
                  :min="1"
                  :max="60"
                ></a-input-number>
                {{ text.Minutes.interval[1] }}
                <a-input-number
                  size="small"
                  v-model="minute.incrementStart"
                  :min="0"
                  :max="59"
                ></a-input-number>
                {{ text.Minutes.interval[2] || '' }}
              </a-radio>
            </a-row>
            <a-row>
              <a-radio
                class="long"
                value="3"
              >{{ text.Minutes.specific }}
                <a-select
                  size="small"
                  mode="multiple"
                  v-model="minute.specificSpecific"
                >
                  <a-select-option
                    v-for="val in 60"
                    :key="val"
                    :value="val - 1"
                  >{{
                    val - 1
                  }}</a-select-option>
                </a-select>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="4">{{ text.Minutes.cycle[0] }}
                <a-input-number
                  size="small"
                  v-model="minute.rangeStart"
                  :min="1"
                  :max="60"
                ></a-input-number>
                {{ text.Minutes.cycle[1] }}
                <a-input-number
                  size="small"
                  v-model="minute.rangeEnd"
                  :min="0"
                  :max="59"
                ></a-input-number>
                {{ text.Minutes.cycle[2] }}
              </a-radio>
            </a-row>
          </div>
        </a-radio-group>
      </a-tab-pane>
      <a-tab-pane key="hour">
        <span slot="tab"><a-icon type="schedule" /> {{ text.Hours.name }}</span>
        <a-radio-group
          name="hour"
          v-model="hour.cronEvery"
        >
          <div class="tabBody">
            <a-row>
              <a-radio value="1">{{ text.Hours.every }}</a-radio>
            </a-row>
            <a-row>
              <a-radio value="2">{{ text.Hours.interval[0] }}
                <a-input-number
                  size="small"
                  v-model="hour.incrementIncrement"
                  :min="0"
                  :max="23"
                ></a-input-number>
                {{ text.Hours.interval[1] }}
                <a-input-number
                  size="small"
                  v-model="hour.incrementStart"
                  :min="0"
                  :max="23"
                ></a-input-number>
                {{ text.Hours.interval[2] }}
              </a-radio>
            </a-row>
            <a-row>
              <a-radio
                class="long"
                value="3"
              >{{ text.Hours.specific }}
                <a-select
                  size="small"
                  mode="multiple"
                  v-model="hour.specificSpecific"
                >
                  <a-select-option
                    v-for="val in 24"
                    :key="val"
                    :value="val - 1"
                  >{{
                    val - 1
                  }}</a-select-option>
                </a-select>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="4">{{ text.Hours.cycle[0] }}
                <a-input-number
                  size="small"
                  v-model="hour.rangeStart"
                  :min="0"
                  :max="23"
                ></a-input-number>
                {{ text.Hours.cycle[1] }}
                <a-input-number
                  size="small"
                  v-model="hour.rangeEnd"
                  :min="0"
                  :max="23"
                ></a-input-number>
                {{ text.Hours.cycle[2] }}
              </a-radio>
            </a-row>
          </div>
        </a-radio-group>
      </a-tab-pane>
      <a-tab-pane key="day">
        <span slot="tab"><a-icon type="schedule" /> {{ text.Day.name }}</span>
        <a-radio-group
          name="day"
          v-model="day.cronEvery"
        >
          <div class="tabBody">
            <a-row>
              <a-radio value="1">{{ text.Day.every }}</a-radio>
            </a-row>
            <a-row>
              <a-radio value="2">{{ text.Day.intervalWeek[0] }}
                <a-input-number
                  size="small"
                  v-model="week.incrementIncrement"
                  :min="1"
                  :max="7"
                ></a-input-number>
                {{ text.Day.intervalWeek[1] }}
                <a-select
                  size="small"
                  v-model="week.incrementStart"
                >
                  <a-select-option
                    v-for="val in 7"
                    :key="val"
                    :value="val"
                  >{{
                    text.Week[val - 1]
                  }}</a-select-option>
                </a-select>
                {{ text.Day.intervalWeek[2] }}
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="3">{{ text.Day.intervalDay[0] }}
                <a-input-number
                  size="small"
                  v-model="day.incrementIncrement"
                  :min="1"
                  :max="31"
                ></a-input-number>
                {{ text.Day.intervalDay[1] }}
                <a-input-number
                  size="small"
                  v-model="day.incrementStart"
                  :min="1"
                  :max="31"
                ></a-input-number>
                {{ text.Day.intervalDay[2] }}
              </a-radio>
            </a-row>
            <a-row>
              <a-radio
                class="long"
                value="4"
              >{{ text.Day.specificWeek }}
                <a-select
                  size="small"
                  mode="multiple"
                  v-model="week.specificSpecific"
                >
                  <a-select-option
                    v-for="val in 7"
                    :key="val"
                    :value="['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][val - 1]"
                  >{{ text.Week[val - 1] }}</a-select-option>
                </a-select>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio
                class="long"
                value="5"
              >{{ text.Day.specificDay }}
                <a-select
                  size="small"
                  mode="multiple"
                  v-model="day.specificSpecific"
                >
                  <a-select-option
                    v-for="val in 31"
                    :key="val"
                    :value="val"
                  >{{
                    val
                  }}</a-select-option>
                </a-select>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="6">{{ text.Day.lastDay }}</a-radio>
            </a-row>
            <a-row>
              <a-radio value="7">{{ text.Day.lastWeekday }}</a-radio>
            </a-row>
            <a-row>
              <a-radio value="8">{{ text.Day.lastWeek[0] }}
                <a-select
                  size="small"
                  v-model="week.cronLastSpecificDomWeek"
                >
                  <a-select-option
                    v-for="val in 7"
                    :key="val"
                    :value="val"
                  >{{
                    text.Week[val - 1]
                  }}</a-select-option>
                </a-select>
                {{ text.Day.lastWeek[1] || '' }}
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="9">
                <a-input-number
                  size="small"
                  v-model="day.cronDaysBeforeEomMinus"
                  :min="1"
                  :max="31"
                ></a-input-number>
                {{ text.Day.beforeEndMonth[0] }}
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="10">{{ text.Day.nearestWeekday[0] }}
                <a-input-number
                  size="small"
                  v-model="day.cronDaysNearestWeekday"
                  :min="1"
                  :max="31"
                ></a-input-number>
                {{ text.Day.nearestWeekday[1] }}
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="11">{{ text.Day.someWeekday[0] }}
                <a-input-number
                  size="small"
                  v-model="week.cronNthDayNth"
                  :min="1"
                  :max="5"
                ></a-input-number>
                <a-select
                  size="small"
                  v-model="week.cronNthDayDay"
                >
                  <a-select-option
                    v-for="val in 7"
                    :key="val"
                    :value="val"
                  >{{
                    text.Week[val - 1]
                  }}</a-select-option>
                </a-select>
                {{ text.Day.someWeekday[1] }}
              </a-radio>
            </a-row>
          </div>
        </a-radio-group>
      </a-tab-pane>
      <a-tab-pane key="month">
        <span slot="tab"><a-icon type="schedule" /> {{ text.Month.name }}</span>
        <a-radio-group
          name="month"
          v-model="month.cronEvery"
        >
          <div class="tabBody">
            <a-row>
              <a-radio value="1">{{ text.Month.every }}</a-radio>
            </a-row>
            <a-row>
              <a-radio value="2">{{ text.Month.interval[0] }}
                <a-input-number
                  size="small"
                  v-model="month.incrementIncrement"
                  :min="0"
                  :max="12"
                ></a-input-number>
                {{ text.Month.interval[1] }}
                <a-input-number
                  size="small"
                  v-model="month.incrementStart"
                  :min="0"
                  :max="12"
                ></a-input-number>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio
                class="long"
                value="3"
              >{{ text.Month.specific }}
                <a-select
                  size="small"
                  mode="multiple"
                  v-model="month.specificSpecific"
                >
                  <a-select-option
                    v-for="val in 12"
                    :key="val"
                    :value="val"
                  >{{
                    val
                  }}</a-select-option>
                </a-select>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="4">{{ text.Month.cycle[0] }}
                <a-input-number
                  size="small"
                  v-model="month.rangeStart"
                  :min="1"
                  :max="12"
                ></a-input-number>
                {{ text.Month.cycle[1] }}
                <a-input-number
                  size="small"
                  v-model="month.rangeEnd"
                  :min="1"
                  :max="12"
                ></a-input-number>
              </a-radio>
            </a-row>
          </div>
        </a-radio-group>
      </a-tab-pane>
      <a-tab-pane key="year">
        <span slot="tab"><a-icon type="schedule" /> {{ text.Year.name }}</span>
        <a-radio-group
          name="year"
          v-model="year.cronEvery"
        >
          <div class="tabBody">
            <a-row>
              <a-radio value="1">{{ text.Year.every }}</a-radio>
            </a-row>
            <a-row>
              <a-radio value="2">{{ text.Year.interval[0] }}
                <a-input-number
                  size="small"
                  v-model="year.incrementIncrement"
                  :min="1"
                  :max="99"
                ></a-input-number>
                {{ text.Year.interval[1] }}
                <a-input-number
                  size="small"
                  v-model="year.incrementStart"
                  :min="2018"
                  :max="2218"
                ></a-input-number>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio
                class="long"
                value="3"
              >{{ text.Year.specific }}
                <a-select
                  size="small"
                  mode="multiple"
                  v-model="year.specificSpecific"
                >
                  <a-select-option
                    v-for="val in 200"
                    :key="val"
                    :value="2017 + val"
                  >{{
                    2017 + val
                  }}</a-select-option>
                </a-select>
              </a-radio>
            </a-row>
            <a-row>
              <a-radio value="4">{{ text.Year.cycle[0] }}
                <a-input-number
                  size="small"
                  v-model="year.rangeStart"
                  :min="2018"
                  :max="2218"
                ></a-input-number>
                {{ text.Year.cycle[1] }}
                <a-input-number
                  size="small"
                  v-model="year.rangeEnd"
                  :min="2018"
                  :max="2218"
                ></a-input-number>
              </a-radio>
            </a-row>
          </div>
        </a-radio-group>
      </a-tab-pane>
    </a-tabs>
    <div class="value-warp">
      <span class="value">{{ this.cron }}</span>
    </div>
    <div class="btn-wrap">
      <a-button @click="close">{{ text.Close }}</a-button>
      <a-button
        type="primary"
        @click="change"
      >{{ text.Save }}</a-button>
    </div>
  </div>
</template>
<script>
import { Row, Radio, InputNumber, Select, Button, Tabs, Icon, Input } from 'ant-design-vue'

import Language from '../language/index'
export default {
  name: 'AntdVueCron',
  props: ['i18n', 'expression'],
  components: {
    'a-row': Row,
    'a-radio': Radio,
    'a-radio-group': Radio.Group,
    'a-input-number': InputNumber,
    'a-select': Select,
    'a-select-option': Select.Option,
    'a-button': Button,
    'a-tabs': Tabs,
    'a-tab-pane': Tabs.TabPane,
    'a-icon': Icon,
    // eslint-disable-next-line vue/no-unused-components
    'a-input': Input
  },
  data () {
    return {
      exps: [
        { type: 'second', expression: '' },
        { type: 'minute', expression: '' },
        { type: 'hour', expression: '' },
        { type: 'day', expression: '' },
        { type: 'month', expression: '' },
        { type: 'Week', expression: '' },
        { type: 'year', expression: '' }
      ],
      second: {
        cronEvery: '3',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 0,
        specificSpecific: [0]
      },
      minute: {
        cronEvery: '3',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 0,
        specificSpecific: [0]
      },
      hour: {
        cronEvery: '1',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: '1',
        rangeEnd: 0,
        specificSpecific: []
      },
      day: {
        cronEvery: '1',
        incrementStart: 1,
        incrementIncrement: 1,
        rangeStart: 1,
        rangeEnd: 0,
        specificSpecific: [],
        cronLastSpecificDomDay: 1,
        cronDaysBeforeEomMinus: 1,
        cronDaysNearestWeekday: ''
      },
      week: {
        cronEvery: '1',
        incrementStart: 1,
        incrementIncrement: 1,
        specificSpecific: [],
        cronNthDayDay: 1,
        cronNthDayNth: 1,
        cronLastSpecificDomWeek: 1
      },
      month: {
        cronEvery: '1',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 12,
        specificSpecific: []
      },
      year: {
        cronEvery: '1',
        incrementStart: 2018,
        incrementIncrement: 1,
        rangeStart: 2018,
        rangeEnd: 2018,
        specificSpecific: []
      },
      output: {
        second: '',
        minute: '',
        hour: '',
        day: '',
        month: '',
        Week: '',
        year: ''
      }
    }
  },
  watch: {
    // data: {
    //   immediate: true,
    //   deep: true,
    //   handler(newValue, oldValue) {
    //     this.rest(this.$data);
    //   }
    // },
    expression: {
      immediate: true,
      deep: true,
      handler () {
        this.resolveExpression()
      }
    }
  },
  computed: {
    text () {
      return Language[this.i18n || 'cn']
    },
    secondsText () {
      let seconds = ''
      let cronEvery = this.second.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          seconds = '*'
          break
        case '2':
          seconds = this.second.incrementStart + '/' + this.second.incrementIncrement
          break
        case '3':
          this.second.specificSpecific.map(val => {
            seconds += val + ','
          })
          seconds = seconds.slice(0, -1)
          break
        case '4':
          seconds = this.second.rangeStart + '-' + this.second.rangeEnd
          break
      }
      return seconds
    },
    minutesText () {
      let minutes = ''
      let cronEvery = this.minute.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          minutes = '*'
          break
        case '2':
          minutes = this.minute.incrementStart + '/' + this.minute.incrementIncrement
          break
        case '3':
          this.minute.specificSpecific.map(val => {
            minutes += val + ','
          })
          minutes = minutes.slice(0, -1)
          break
        case '4':
          minutes = this.minute.rangeStart + '-' + this.minute.rangeEnd
          break
      }
      return minutes
    },
    hoursText () {
      let hours = ''
      let cronEvery = this.hour.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          hours = '*'
          break
        case '2':
          hours = this.hour.incrementStart + '/' + this.hour.incrementIncrement
          break
        case '3':
          this.hour.specificSpecific.map(val => {
            hours += val + ','
          })
          hours = hours.slice(0, -1)
          break
        case '4':
          hours = this.hour.rangeStart + '-' + this.hour.rangeEnd
          break
      }
      return hours
    },
    daysText () {
      let days = ''
      let cronEvery = this.day.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          break
        case '2':
        case '4':
        case '8':
        case '11':
          days = '?'
          break
        case '3':
          days = this.day.incrementStart + '/' + this.day.incrementIncrement
          break
        case '5':
          this.day.specificSpecific.map(val => {
            days += val + ','
          })
          days = days.slice(0, -1)
          break
        case '6':
          days = 'L'
          break
        case '7':
          days = 'LW'
          break
        // case '8':
        //   days = this.day.cronLastSpecificDomDay + 'L';
        //   break;
        case '9':
          days = 'L-' + this.day.cronDaysBeforeEomMinus
          break
        case '10':
          days = this.day.cronDaysNearestWeekday + 'W'
          break
      }
      return days
    },
    weeksText () {
      let weeks = ''
      let cronEvery = this.day.cronEvery
      switch (cronEvery.toString()) {
        case '1':
        case '3':
        case '5':
          weeks = '?'
          break
        case '2':
          weeks = this.week.incrementStart + '/' + this.week.incrementIncrement
          break
        case '4':
          this.week.specificSpecific.map(val => {
            weeks += val + ','
          })
          weeks = weeks.slice(0, -1)
          break
        case '6':
        case '7':
        case '9':
        case '10':
          weeks = '?'
          break
        case '8':
          weeks = this.week.cronLastSpecificDomWeek + 'L'
          break
        case '11':
          weeks = this.week.cronNthDayDay + '#' + this.week.cronNthDayNth
          break
      }
      return weeks
    },
    monthsText () {
      let months = ''
      let cronEvery = this.month.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          months = '*'
          break
        case '2':
          months = this.month.incrementStart + '/' + this.month.incrementIncrement
          break
        case '3':
          this.month.specificSpecific.map(val => {
            months += val + ','
          })
          months = months.slice(0, -1)
          break
        case '4':
          months = this.month.rangeStart + '-' + this.month.rangeEnd
          break
      }
      return months
    },
    yearsText () {
      let years = ''
      let cronEvery = this.year.cronEvery
      switch (cronEvery.toString()) {
        case '1':
          years = '*'
          break
        case '2':
          years = this.year.incrementStart + '/' + this.year.incrementIncrement
          break
        case '3':
          this.year.specificSpecific.map(val => {
            years += val + ','
          })
          years = years.slice(0, -1)
          break
        case '4':
          years = this.year.rangeStart + '-' + this.year.rangeEnd
          break
      }
      return years
    },
    cron () {
      return `${this.secondsText || '*'} ${this.minutesText || '*'} ${this.hoursText || '*'} ${this.daysText || '*'
        } ${this.monthsText || '*'} ${this.weeksText || '?'} ${this.yearsText || '*'}`
    }
  },
  methods: {
    getValue () {
      return this.cron
    },
    change () {
      this.$emit('change', this.cron)
      this.close()
    },
    close () {
      this.$emit('close')
    },
    rest (data) {
      console.log(data)
      for (let i in data) {
        if (data[i] instanceof Object) {
          this.rest(data[i])
        } else {
          switch (typeof data[i]) {
            case 'object':
              data[i] = []
              break
            case 'string':
              data[i] = ''
              break
          }
        }
      }
    },
    // 反向解析表达式
    resolveExpression () {
      if (!this.expression || !this.expression.length) return
      let expList = this.expression.split(' ')
      if (expList.length < 7) {
        new Error('表达式格式不正确')
      }
      for (let i = 0; i < expList.length; i++) {
        this.exps[i].expression = expList[i]
      }
      this.exps.forEach(exp => {
        this.output[exp.type] = exp.expression
        switch (exp.type) {
          case 'year':
          case 'month':
          case 'hour':
          case 'minute':
          case 'second':
            this.commonParser(this[exp.type], exp.expression)
            return
          case 'Week':
            this.resolveWeek(exp.expression)
            return
          case 'day':
            this.resolveDay(exp.expression)
            return
        }
      })
    },
    // 年，月，时，分，秒
    commonParser (expressionType, str) {
      if (str == '*') {
        this.resolveStar(expressionType)
      } else if (str.indexOf('-') >= 0) {
        this.resolveLine(expressionType, str)
      } else if (str.indexOf('/') >= 0) {
        this.resolveSlash(expressionType, str)
      } else {
        this.resolveComma(expressionType, str)
      }
    },
    resolveWeek (str) {
      if (str.indexOf('/') >= 0) {
        this.day.cronEvery = '2'
        this.resolveSlash(this.week, str)
      } else if (str.indexOf(',') >= 0) {
        this.day.cronEvery = '4'
        this.resolveComma(this.week, str)
      } else if (/\dL/.test(str)) {
        this.day.cronEvery = '8'
        this.week.cronLastSpecificDomWeek = Number(str.match(/(\d)L/)[1])
      } else if (str.indexOf('#') >= 0) {
        this.day.cronEvery = '11'
        let range = str.split('#')
        this.Week.cronNthDayDay = range[0]
        this.Week.cronNthDayNth = range[1]
      }
    },
    resolveDay (str) {
      if (str == '*') {
        this.resolveStar(this.day)
      } else if (str.indexOf('/') >= 0) {
        this.resolveSlash(this.day, str, '3')
      } else if (str == 'L') {
        this.day.cronEvery = '6'
      } else if (str == 'LW') {
        this.day.cronEvery = '7'
        // } else if (/\dL/.test(str)) {
        //   this.day.cronEvery = "8";
        //   this.day.cronLastSpecificDomDay = Number(str.match(/(\d)L/)[1]);
      } else if (/L-\d+/.test(str)) {
        this.day.cronEvery = '9'
        this.day.cronDaysBeforeEomMinus = Number(str.match(/L-(\d+)/)[1])
      } else if (/\d+W/.test(str)) {
        this.day.cronEvery = '10'
        this.day.cronDaysNearestWeekday = Number(str.match(/(\d+)W/))[1]
      } else {
        this.resolveComma(this.day, str, '5')
      }
    },
    resolveStar (expressionObj, type = '1') {
      expressionObj.cronEvery = type
    },
    resolveSlash (expressionObj, expression, type = '2') {
      expressionObj.cronEvery = type
      let range = expression.split('/')
      expressionObj.incrementStart = Number(range[0])
      expressionObj.incrementIncrement = Number(range[1])
    },
    resolveLine (expressionObj, expression, type = '4') {
      expressionObj.cronEvery = type
      let range = expression.split('-')
      expressionObj.rangeStart = Number(range[0])
      expressionObj.rangeEnd = Number(range[1])
    },
    resolveComma (expressionObj, expression, type = '3') {
      expressionObj.cronEvery = type
      expressionObj.specificSpecific = expression.split(',').map(item => {
        return Number(item)
      })
    }
  },
  mounted () {
    // this.resolveExpression();
  }
}
</script>
<style lang="less">
#changeContab {
  .language {
    position: absolute;
    right: 25px;
    z-index: 1;
  }
  // .ant-tabs-tabpane {
  //   padding: 20px;
  // }
  .tabBody {
    .ant-row {
      margin: 15px 0;
      .long {
        .ant-select {
          width: 350px;
        }
      }
      .ant-input-number {
        width: 110px;
      }
      .ant-select {
        width: 350px;
      }
    }
  }

  .value-warp {
    width: 100%;
    text-align: center;
    padding: 15px;
    position: relative;
    border-top: 1px solid #e8e8e8;
    .value {
      font-size: 18px;
      vertical-align: middle;
      margin-right: 20px;
    }
    .ant-btn + .ant-btn {
      margin-left: 10px;
    }
  }
  .btn-wrap {
    padding-top: 15px;
    border-top: 1px solid #e8e8e8;
    text-align: right;
    .ant-btn + .ant-btn {
      margin-left: 10px;
    }
  }
}
</style>
