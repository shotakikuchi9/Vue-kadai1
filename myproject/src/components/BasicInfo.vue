<template>
<div class="container">
  <div class="box">
    <h2>お客様の情報を入力してください</h2>
    <div class="gender">
      <h3>-性別-</h3>
        <label class="man"><input type="radio" name="gender">男性</label>
        <label><input type="radio" name="gender">女性</label>
    </div>
    <div class="date">
      <h3>-生年月日-</h3>
      <div class="select">
        <select name="year" id="year"></select>年
      </div>
      <div class="select">
        <select name="month" id="month"></select>月
      </div>
      <div class="select">
        <select name="day" id="day"></select>日
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
import definition from '@/definition'
export default {
  methods: {
    createBirthday() {
      definition.createBirthday();
    }
  },
  mounted() {
    this.createBirthday();
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