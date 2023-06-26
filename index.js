const d = require("date-fns/addDays");
const x = (days) => {
  let y = d(new Date(22, 7, 2020), days);
  return `${y.getDate()}-${y.getMonth() + 1}-${y.getFullYear()}`;
};
module.exports = x;
