export default { createBirthday }
function createBirthday () {
   const year = document.getElementById('year');
   const month = document.getElementById('month');
   const day = document.getElementById('day');
  function set_year () {
    for (let i = 1950; i < 2020; i++){
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      year.appendChild(option);
    }
  }
  function set_month () {
    for (let i = 1; i <= 12; i++){
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      month.appendChild(option);
    }
  }
  function set_day(){
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      day.appendChild(option);
    }
  }
  set_day();
  set_month();
  set_year();
}
