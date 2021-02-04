<template>
<div class="container">
  <div class="box">
    <h2>以下の内容をご確認ください</h2>
    <div>
      <h3>-性別-</h3>
      <p>{{gender}}</p>
    </div>
    <div>
      <h3>-生年月日-</h3>
      <p>{{year}}年{{month}}月{{day}}日</p>
    </div>
    <div>
      <h3>-現在生命保険に加入されていますか？-</h3>
      <p>{{firstQuestion}}</p>
    </div>
    <div>
      <h3>-現在入院中ですか。または、最近3ヶ月以内に医師の診察、検査の結果、入院手術を勧められたことはありますか？-</h3>
      <p>{{secondQuestion}}</p>
    </div>
    <div>
      <h3>-過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか?- </h3>
      <p>{{thirdQuestion}}</p>
    <div>
    </div>
      <h3>-ご相談内容-</h3>
      <p>{{text}}</p>
    </div>
  </div>
  <router-link to="./TextArea"><button class="button is-primary">前へ戻る</button></router-link>
  <button class="button is-primary">送信</button>
</div>
  
</template>
<script> 
import 'bulma/css/bulma.css';
export default {
  data: function() {
    return{
     text: this.$store.state.text,
     gender: this.$store.state.gender,
     year: this.$store.state.year,
     month: this.$store.state.month,
     day: this.$store.state.day,
     firstQuestion: this.$store.state.firstQuestion,
     secondQuestion: this.$store.state.secondQuestion,
     thirdQuestion: this.$store.state.thirdQuestion,
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
.box {
  padding-bottom: 60px;
  border: 1px solid paleturquoise;
}
h2 {
  font-size: 24px;
}
.button {
  margin-right: 16px;
}
h3 {
  text-align: left;
  margin-left: 16px;
  color:royalblue;
  margin-bottom: 16px;
}
p {
  text-align: left;
  margin-left: 16px;
  margin-bottom: 16px;
}
</style>