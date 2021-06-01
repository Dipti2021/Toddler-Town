const { Daycare } = require('../models');

const daycareData = [
    
     
    {
      Day_Care: "Devonshire School Age Program",
      Age_Group:"Toddler",
      City:'Ottawa',
      Address:"3350 Fallowfield Rd, Nepean, ON K2J 5L1",
      Phone_Number:"(613) 722-6969",
      Email:"devonshireccc@bellnet.ca",
      Details:"http://www.devonshireccc.ca/"
    },
    {
      Day_Care: "Andrew Fleck Children’s Services",
      Age_Group:"Toddler",
      City:'Ottawa',
      Address:"100 Breezehill Ave N, Ottawa, ON K1Y 2H5",
      Phone_Number:"613-736-5355",
      Email:"admin@afchildrensservices.ca",
      Details:"http://www.afchildrensservices.ca/"
    },
    {
      Day_Care: "Fairview Child Care Centre",
      Age_Group:"Toddler",
      City:'Ottawa',
      Address:"600-700 Industrial Ave, Ottawa, ON K1G 0Y9",
      Phone_Number:"613-749-2556",
      Email:"fairviewchildcare@bellnet.ca",
      Details:"http://fairviewchildcare.ca/"
    },
    {
      Day_Care: "Children’s Village of Ottawa Carleton",
      Age_Group:"Pre-School",
      City:'Ottawa',
      Address:"437 Donald Street, Ottawa. ON K1K 1L8",
      Phone_Number:"(613) 725-2040",
      Email:"reception@childrensvillage.on.ca",
      Details:"https://childrensvillage.on.ca/"
    },

    {
      Day_Care: "Muppets Private Home Daycare Agency",
      Age_Group:"Toddler",
      City:'Ottawa',
      Address:"333 Churchill Ave N, Ottawa, ON K1Z 5B8",
      Phone_Number:"(416) 694-7888",
      Email:"mph@victoriavillage.com",
      Details:"https://www.muppetsprivatehomedaycare.com/"
    },
    {
      Day_Care: "Metro Hall Early Learning & Child Care Centre",
      Age_Group:"Toddler",
      City:'Toronto',
      Address:"316 Main St, Toronto, ON M4C 4X7",
      Phone_Number:"(613) 722-6969",
      Email:"mph@victoriavillage.com",
      Details:"http://www.devonshireccc.ca/"
    },
    {
      Day_Care: "Kidz Kare Daycare Toronto Inc.",
      Age_Group:"Pre-School",
      City:'Toronto',
      Address:"15 York St 3rd Floor, Toronto, ON M5J 0A3",
      Phone_Number:" (416) 900-1060",
      Email:"kare@kidzkare.ca",
      Details:"https://kidzkare.ca/"
    }
  
    
];
const seedDaycare = () => Daycare.bulkCreate(daycareData);

module.exports = seedDaycare;
  
  
  