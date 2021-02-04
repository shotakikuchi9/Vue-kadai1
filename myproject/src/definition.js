  export const years = [];
  export const months = [];
  export const days = [];
  function setYear () {
    for (let i = 1950; i < 2020; i++) {
      years.push(i);
    }
  }
  function setMonth () {
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
  }
  function setDay(){
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
  }
  setDay();
  setMonth();
  setYear();