const stores = [
  "S100034474",
  "S100030679",
  "S100048330",
  "S100030073",
  "S100032976",
  "S100008998",
  "S100035062",
];

const data = [
  {
    storeid: "S100008998",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: "8",
  },
  {
    storeid: "S100030073",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: "11",
  },
  {
    storeid: "S100030679",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: "35",
  },
  {
    storeid: "S100032976",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: "115",
  },
  {
    storeid: "S100034474",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: "58",
  },
  {
    storeid: "S100035062",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: "4",
  },
  {
    storeid: "S100048330",
    alert_category: "performance",
    alert_severity: "critical",
    totalcount: "62",
  },
  {
    storeid: "S100032976",
    alert_category: "performance",
    alert_severity: "informational",
    totalcount: "1",
  },
  {
    storeid: "S100008998",
    alert_category: "performance",
    alert_severity: "resolved",
    totalcount: "9",
  },
  {
    storeid: "S100030073",
    alert_category: "performance",
    alert_severity: "resolved",
    totalcount: "11",
  },
  {
    storeid: "S100030679",
    alert_category: "performance",
    alert_severity: "resolved",
    totalcount: "35",
  },
  {
    storeid: "S100032976",
    alert_category: "performance",
    alert_severity: "resolved",
    totalcount: "115",
  },
  {
    storeid: "S100034474",
    alert_category: "performance",
    alert_severity: "resolved",
    totalcount: "61",
  },
  {
    storeid: "S100035062",
    alert_category: "performance",
    alert_severity: "resolved",
    totalcount: "4",
  },
  {
    storeid: "S100048330",
    alert_category: "performance",
    alert_severity: "resolved",
    totalcount: "63",
  },
  {
    storeid: "S100032976",
    alert_category: "performance",
    alert_severity: "warning",
    totalcount: "1",
  },
  {
    storeid: "S100034474",
    alert_category: "performance",
    alert_severity: "warning",
    totalcount: "3",
  },
  {
    storeid: "S100032976",
    alert_category: "security",
    alert_severity: "critical",
    totalcount: "2",
  },
  {
    storeid: "S100032976",
    alert_category: "security",
    alert_severity: "resolved",
    totalcount: "2",
  },
];

let obj = {};

for (let i = 0; i < data.length; i++) {
  console.log();

  if (obj[data[i].storeid]) {
    if (obj[data[i].storeid][data[i].alert_category]) {
      obj[data[i].storeid][data[i].alert_category][data[i].alert_severity] =
        data[i].totalcount;
      obj[data[i].storeid][data[i].alert_category].Total += parseInt(data[i].totalcount);
    } else {
      obj[data[i].storeid][data[i].alert_category] = {
        [data[i].alert_severity]: data[i].totalcount,
      };
      obj[data[i].storeid][data[i].alert_category].Total = parseInt(data[i].totalcount);
    }
  } else {
    obj[data[i].storeid] = { [data[i].alert_category]: {} };
    obj[data[i].storeid][data[i].alert_category][data[i].alert_severity] = data[i].totalcount;
    obj[data[i].storeid][data[i].alert_category].Total = parseInt(data[i].totalcount);
  }
}

console.log(obj);
