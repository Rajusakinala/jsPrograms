const stores = ["S100032976", "S100032976", "S100030679"];

const data = [
  {
    storeid: "S100032976",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: 11,
  },

  {
    storeid: "S100032976",
    alert_category: "performance",
    alert_severity: "warning",
    totalcount: 115,
  },

  {
    storeid: "S100030679",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: 35,
  },
];

let obj = {};

for (let i = 0; i < data.length; i++) {
  console.log();

  if (obj[data[i].storeid]) {
    if (obj[data[i].storeid][data[i].alert_category]) {
      obj[data[i].storeid][data[i].alert_category][data[i].alert_severity] =
        data[i].totalcount;
    } else {
      obj[data[i].storeid][data[i].alert_category] = {
        [data[i].alert_severity]: data[i].totalcount,
      };
    }
  } else {
    obj[data[i].storeid] = { [data[i].alert_category]: {} };
    obj[data[i].storeid][data[i].alert_category][data[i].alert_severity] =
      data[i].totalcount;
  }
}

console.log(obj);
