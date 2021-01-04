import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    gender: "",
    text: "",
    year: "",
    month: "",
    day: "",
    firstQuestion: "",
    secondQuestion: "",
    thirdQuestion: "",
  },
  mutations: {
    updateGender (state, newGender) {
      state.gender = newGender;
    }, 
    updateText (state, newText) {
      state.text = newText;
    },
    updateYear (state, newYear) {
      state.year = newYear;
    },
    updateMonth (state, newMonth) {
      state.month = newMonth;
    },
    updateDay (state, newDay) {
      state.day = newDay;
    },
    updateFirstQuestion (state, answer) {
      state.firstQuestion = answer;
    },
    updateSecondQuestion (state, answer) {
      state.secondQuestion = answer;
    },
    updateThirdQuestion (state, answer) {
      state.thirdQuestion = answer;
    },
   
  }
})