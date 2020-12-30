<template>
<div class="container">
  <div class="box" id="app">
    <h2>以下にお答えください</h2>
    <div class="first">
      <h3>現在生命保険に加入されていますか？</h3>
      <label class="choice"><input type="radio" name="firstquestion" @click="showSecondQuestion = true">はい</label>
      <label><input type="radio" name="firstquestion" @click="showSecondQuestion = true">いいえ</label>
    </div>
    <transition name="fade">
      <div class="second" v-if="showSecondQuestion"> 
        <h3>現在入院中ですか。または、最近3ヶ月以内に医師の診察、検査の結果、入院手術を勧められたことはありますか？</h3>
        <label class="choice"><input type="radio" name="secondquestion" @click="showThirdQuestion = true" >はい</label>
        <label><input type="radio" name="secondquestion" @click="showThirdQuestion = true">いいえ</label>
      </div>
    </transition>
    <transition name="fade">
      <div class="third" v-if="showThirdQuestion">
        <h3>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか? </h3>
        <label class="choice"><input type="radio" name="thirdquestion" >はい</label>
        <label><input type="radio" name="thirdquestion">いいえ</label>
      </div>
    </transition>
  </div>
  <router-link to="./"><button class="button is-primary">前へ戻る</button></router-link>
  <router-link to="./TextArea"><button class="button is-primary">次へ進む</button></router-link>
</div>
</template>

<script>
import 'bulma/css/bulma.css';
export default {
  data: function () {
   return {
     showSecondQuestion: false,
     showThirdQuestion: false
   }
  },
}     
</script>

<style scoped>
.container {
  margin: auto;
  margin-top: 60px;
  width: 750px;
}
.box {
  padding-bottom: 60px;
  border: 1px solid paleturquoise;
}
h3 {
  color:royalblue;
  margin-bottom: 16px;
}
.first, .second, .third {
  margin-top: 16px;
  text-align: left;
  margin-left: 24px;
}
.choice {
   margin-right: 16px;
}
h2 {
  font-size: 24px;
}
.button {
  margin-right: 16px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: 1s;
}
.fade-enter-to {
  opacity: 1;
}
.choice {
  margin-left: 30px;
}
</style>