<template>
<div class="container">
  <div class="box">
    <h2>お客様の情報を入力してください</h2>
    <div class="gender">
      <h3>-性別-</h3>
        <label class="man"><input type="radio" name="gender" v-model="gender" value="男性">男性</label>
        <label><input type="radio" name="gender" v-model="gender" value="女性">女性</label>
    </div>
    <div class="date">
      <h3>-生年月日-</h3>
      <div class="select">
        <select name="year" id="year" v-model="year">
          <option v-for="year in years" :key="year">{{year}}</option>
        </select>年
      </div>
      <div class="select">
        <select name="month" id="month" v-model="month">
          <option v-for="month in months" :key="month">{{month}}</option>
        </select>月
      </div>
      <div class="select">
        <select name="day" id="day" v-model="day">
          <option v-for="day in days" :key="day">{{day}}</option>
        </select>日
      </div>
    </div>
  </div>
  <div>
  <router-link to="/Questions"><button class="button is-primary">次へ進む</button></router-link>
  </div>
</div>

</template>
<script>
import 'bulma/css/bulma.css';
import {years, months, days} from '@/definition'
export default {
  data: function() {
    return {
      years,
      months,
      days
    }
  },
  computed: {
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit("updateGender", value);
      }
    },
    year: {
      get() {
        return this.$store.state.year;
      },
      set(value) {
        this.$store.commit("updateYear", value);
      }
    },
    month: {
      get() {
        return this.$store.state.month;
      },
      set(value) {
        this.$store.commit("updateMonth", value);
      }
    },
    day: {
      get() {
        return this.$store.state.day;
      },
      set(value) {
        this.$store.commit("updateDay", value);
      }
    }
  }
}
</script>
<style scoped>
.container {
  margin-top: 60px;
  text-align: center;
  width: 750px;
}
.button {
  margin-top: 20px;
}
.select {
  margin-right: 18px;
  
}
.container > h2 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.gender {
  margin-bottom: 32px;
}
.gender > h3 {
  margin-bottom: 16px;
}
.date > h3 {
  margin-bottom: 16px;
}
.man {
  margin-right: 16px;
}
.gender > h3, .date > h3 {
  color:royalblue;
}
h2 {
  font-size: 24px;
}
.box {
  padding-bottom: 60px;
  border: 1px solid paleturquoise;
}
</style>