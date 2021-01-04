<template>
<div class="container">
  <div class="box">
    <h2>ご相談内容をご記入ください</h2>
    <p>-ご相談内容-</p>
    <div>
      <textarea class="textarea" rows="15" v-model="text"></textarea>
    </div>
  </div>
  <router-link to="./Questions"><button class="button is-primary">前へ戻る</button></router-link>
  <router-link to="./Confirm"><button class="button is-primary">次へ進む</button></router-link>
</div> 
</template>
<script>
import 'bulma/css/bulma.css';
export default {
  computed: {
    text: {
      get() {
        return this.$store.state.text;
      },
      set(value) {
        this.$store.commit("updateText", value);
      }
    }
  }
}
</script>
<style scoped>
.box {
  padding-bottom: 60px;
  border: 1px solid paleturquoise;
}
.container {
  margin: auto;
  margin-top: 60px;
  width: 750px;
}
h2 {
  font-size: 24px;
}
.button {
  margin-right: 16px;
}
.box > p {
  text-align: left;
  margin-left: 16px;
  color:royalblue;
  margin-bottom: 16px;
}
</style>