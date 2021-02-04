import Vue from "vue";
import Router from "vue-router";
import BasicInfo from "./components/BasicInfo"
import Questions from "./components/Questions"
import TextArea from "./components/TextArea"
import Confirm from "./components/Confirm"
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BasicInfo
    },
    {
      path: '/questions',
      component: Questions
    },
    {
      path: '/TextArea',
      component: TextArea
    },
    {
      path: '/Confirm',
      component: Confirm
    }
  ]
});