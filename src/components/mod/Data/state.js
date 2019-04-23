let state = {
  monthNames: [
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
  monthChoice: [
    { value: "january", text: "January" },
    { value: "february", text: "February" },
    { value: "march", text: "March" },
    { value: "april", text: "April" },
    { value: "may", text: "May" },
    { value: "june", text: "June" },
    { value: "july", text: "July" },
    { value: "august", text: "August" },
    { value: "september", text: "September" },
    { value: "october", text: "October" },
    { value: "november", text: "November" },
    { value: "december", text: "December" }
  ],

  yearChoice: [
    { value: "december", text: "2010" },
    { value: "january", text: "2011" },
    { value: "february", text: "2012" },
    { value: "march", text: "2013" },
    { value: "april", text: "2014" },
    { value: "may", text: "2015" },
    { value: "june", text: "2016" },
    { value: "july", text: "2017" },
    { value: "august", text: "2018" },
    { value: "september", text: "2019" },
    { value: "october", text: "2020" },
    { value: "november", text: "2021" },
    { value: "december", text: "2022" },
    { value: "april", text: "2023" },
    { value: "may", text: "2024" },
    { value: "june", text: "2025" }
  ],
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
  day: new Date().getDay(),
  calendarDays: [],
  calendarWeeks: []
};
export default state;
