const { Daycare } = require('../models');

const daycareData = [
  {
    Name: "Educara Montessori Child Care",
    Age_Group:"Toddler",// remove or add
    City: 'Ottawa',
    Address: " 275 Tartan Dr, Nepean, ON K2J 3T1",
    Phone_Number:"1613702116",
    Email:"info@educara.ca",
    Details:"https://educara.ca/" //weblink
  },
  {
    Name: "Educara Montessori Child Care",
    Age_Group:"Toddler",// remove or add
    City: 'Ottawa',
    Address: " 275 Tartan Dr, Nepean, ON K2J 3T1",
    Phone_Number:"1613702116",
    Email:"info@educara.ca",
    Details:"https://educara.ca/" //weblink
  },
  {
    Name: "Educara Montessori Child Care",
    Age_Group:"Toddler",// remove or add
    City: 'Ottawa',
    Address: " 275 Tartan Dr, Nepean, ON K2J 3T1",
    Phone_Number:"1613702116",
    Email:"info@educara.ca",
    Details:"https://educara.ca/" //weblink
  }
  
    
];
const seedDaycare = () => Daycare.bulkCreate(daycareData);

module.exports = seedDaycare;
  
  
  