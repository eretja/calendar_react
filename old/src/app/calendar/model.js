
let model = {
  today: new Date(),

  actDate: null,
  currentMonth: null,
  currentYear: null,

  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  dom: {
    selectYear: document.getElementById("year"),
    selectMonth: document.getElementById("month")
  }
};
model.actDate = model.today;
model.currentMonth = model.today.getMonth();
model.currentYear = model.today.getFullYear();

export {
  model
}
