const { Daycare } = require('../models');

const daycareData = [
  {
    Name: "Educara Montessori Child Care",
    Age_Group:"Toddler",// remove or add
    City: 'Ottawa',
    Address: " 275 Tartan Dr, Nepean, ON K2J 3T1",
    Phone_Number:"1613702116",
    Email:"info@educara.ca",
    Details:"https://educara.ca/" //weblink
  },
  {
    Name: "Wee Watch Licensed Child care Agency",
    Age_Group:"PreSchool",// remove or add
    City: 'Ottawa',
    Address: "808 Clearbrook Dr, Nepean, ON K2J 0H5",
    Phone_Number:"6134820526",
    Email:"nepean@weewatch.com",
    Details:"https://www.weewatch.com/location/ottawa/" //weblink
  },
  {
    Name: "Tiny Hoppers Daycare",
    Age_Group:"Toddler",// remove or add
    City: 'Ottawa',
    Address: "3023 Cedarview Rd, Nepean, ON K2J 4A8",
    Phone_Number:"6134408507",
    Email:"info@tinyhoppers.ca",
    Details:"https://www.tinyhoppers.ca/" //weblink
  },
  {
    Name: "Kids & Company",
    Age_Group:"Toddler",// remove or add
    City: 'Ottawa',
    Address: "3350 Fallowfield Rd, Nepean, ON K2J 5L1",
    Phone_Number:"6138257529",
    Email:" info@kidsandcompany.com",
    Details:"https://kidsandcompany.com/" //weblink
  },
  {
    Name: "Devonshire School Age Program",
    Age_Group:"School Age",// remove or add
    City: 'Ottawa',
    Address: "100 Breezehill Ave N, Ottawa, ON K1Y 2H5",
    Phone_Number:"6137226969",
    Email:"devonshireccc@bellnet.ca",
    Details:"http://www.devonshireccc.ca/" //weblink
  },
  {
    Name: "Andrew Fleck Children’s Services",
    Age_Group:"School Age",// remove or add
    City: 'Ottawa',
    Address: "Andrew Fleck Children’s Services",
    Phone_Number:"6137365355",
    Email:"admin@afchildrensservices.ca",
    Details:"http://www.afchildrensservices.ca/" //weblink
  },
  {
    Name: "Fairview Child Care Centre",
    Age_Group:"Toddler",// remove or add
    City: 'Ottawa',
    Address: "437 Donald Street, Ottawa. ON K1K 1L8",
    Phone_Number:"6137492556",
    Email:"fairviewchildcare@bellnet.ca",
    Details:"http://fairviewchildcare.ca/" //weblink
  },
  {
    Name: "Children’s Village of Ottawa Carleton",
    Age_Group:"Toddler",// remove or add
    City: 'Ottawa',
    Address: "333 Churchill Ave N, Ottawa, ON K1Z 5B8",
    Phone_Number:"6137252040",
    Email:"reception@childrensvillage.on.ca",
    Details:"https://childrensvillage.on.ca/" //weblink
  },
  {
    Name: "Amana's Home Daycare for Teachers",
    Age_Group:"School Age",// remove or add
    City: 'Ottawa',
    Address: "Picasso Drive, Ottawa, ON, CA",
    Phone_Number:"6135586626",
    Email:"info@amanahomecare.ca",
    Details:"https://daycare4teacherskids.ca/" //weblink
  },
  {
    Name: "Child Care Providers Resource Network",
    Age_Group:"Infants",// remove or add
    City: 'Ottawa',
    Address: "30 Colonnade Rd N, Nepean, ON K2E 7J6",
    Phone_Number:"6137495211",
    Email:"childcare@ccprn.com",
    Details:"https://ccprn.com/" //weblink
  },
  // daycares of Toronto
  {
    Name: "Muppets Private Home Daycare Agency",
    Age_Group:"Toddler",// remove or add
    City: 'Toronto',
    Address: "316 Main St, Toronto, ON M4C 4X7",
    Phone_Number:"4166947888",
    Email:"mph@victoriavillage.com",
    Details:"https://www.muppetsprivatehomedaycare.com/ " //weblink
  },
  {
    Name: "New Toronto Daycare",
    Age_Group:"Toddler",// remove or add
    City: 'Toronto',
    Address: "145 Sixth St, Etobicoke, ON M8V 3A6",
    Phone_Number:"4162559235",
    Email:"newtorontodaycare@gmail.com",
    Details:"https://newtorontodaycare.wixsite.com/website" //weblink
  },
  {
    Name: "West End Parents Daycare",
    Age_Group:"PreSchool",// remove or add
    City: 'Toronto',
    Address: "375 Dovercourt Rd, Toronto, ON M6J 3E5",
    Phone_Number:"4165346761",
    Email:"wepdc@rogers.com",
    Details:"https://westendparentsdaycare.com/" //weblink
  },
  {
    Name: "Childspace Daycare",
    Age_Group:"PreSchool",// remove or add
    City: 'Toronto',
    Address: "690 Carlaw Ave, Toronto, ON M4K 3K7",
    Phone_Number:" 4164690560",
    Email:"childcare@ccprn.com",
    Details:"https://ccprn.com/" //weblink
  },
  {
    Name: "Network Child Care Services",
    Age_Group:"Toddler",// remove or add
    City: 'Toronto',
    Address: "756 Ossington Ave, Toronto, ON M6G 3T9",
    Phone_Number:"4165300722",
    Email:"reception@networkchildcare.com",
    Details:"https://networkchildcare.com/" //weblink
  },
  {
    Name: "Unicorn Day Care Centre (Toronto) Inc",
    Age_Group:"Infants",// remove or add
    City: 'Toronto',
    Address: "454 Avenue Road, Toronto, ON M4V 2J1",
    Phone_Number:"4169296841",
    Email:"info@unicorndaycare.com",
    Details:"http://www.unicorndaycare.com/" //weblink
  },
  {
    Name: "Queen's Park Child Care",
    Age_Group:"School Age",// remove or add
    City: 'Toronto',
    Address: "7 Queen's Park Cres E, Toronto, ON M7A 1Y7",
    Phone_Number:"4169729979",
    Email:"na@example.com",
    Details:"https://www.qpccc.ca/" //weblink
  },
  {
    Name: "St. Lawrence Co-Operative Day Care Inc.",
    Age_Group:"Toddler",// remove or add
    City: 'Toronto',
    Address: "4 Market St., Toronto, ON M5E 1M6",
    Phone_Number:"4163635989",
    Email:"infant@stlawrencedaycare.com",
    Details:"https://stlawrencedaycare.com/" //weblink
  },

  {
    Name: "Sunnyside Day Care - Roncesvalles",
    Age_Group:"PreSchool",// remove or add,Schoolage, infant
    City: 'Toronto',
    Address: "10 High Park Blvd, Toronto, ON M6R 1M4",
    Phone_Number:"4165389654",
    Email:"na@example.com",
    Details:"https://sunnysidedaycare.com/" //weblink
  },
  {
    Name: "Allenby Daycare",
    Age_Group:"Toddler",// remove or add
    City: 'Toronto',
    Address: "391 St Clements Ave, Toronto, ON M5N 1M2",
    Phone_Number:"4164877800",
    Email:"allenbydaycareinc@gmail.com",
    Details:"https://allenbydaycare.com/" //weblink
  },
  //FROM MONTREAL
  {
    Name: "Centre éducatif Sunflower Child Care Centre",
    Age_Group:"infants",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:"700 Montreal Rd, Ottawa, ON K1A 0P7",
    Phone_Number: "6137482268",
    Email:"admin@afchildrensservices.ca",
    Details:"https://www.afchildrensservices.ca/licensed-child-care/sunflower-child-care-centre/" //weblink
  },
  {
    Name: "Academini Private Daycare",
    Age_Group:"Toddler",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:" 2330 Notre-Dame St W #100, Montreal, Quebec H3J 2Y2",
    Phone_Number: " 5149455111",
    Email:"info@academini.ca",
    Details:"https://academini.ca/" //weblink
  },
  {
    Name: "Happy Kidz Daycare",
    Age_Group:"School Age",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:"905 Avenue Ogilvy, Montréal, QC H3N 1P2",
    Phone_Number: "5144958640",
    Email:"happykidz@videotron.ca",
    Details:"http://happykidzdaycare.ca/" //weblink
  },
  {
    Name: "Garderie Rainbow",
    Age_Group:"PreSchool",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:"2005 Rue Saint-Jacques, Montréal, QC H3J 1H3",
    Phone_Number: "5145592600",
    Email:"admin@garderierainbow.com",
    Details:"https://www.garderierainbow.com/" //weblink
  },
  {
    Name: "Garderie Daycare Sunnyside",
    Age_Group:"Toddler",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:"4950 Rue Fulton, Montréal, QC H3W 1V5",
    Phone_Number: "5146616750",
    Email:"admin@garderierainbow.com",
    Details:"https://www.garderierainbow.com/" //weblink
  },
  {
    Name: "Cote Des Neiges Day Care Ctr",
    Age_Group:"infants",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:"4810 Ave Van Horne, Montreal, Quebec H3W 1J3",
    Phone_Number: "5147331397",
    Email:"na@example.com",
    Details:"https://www.afchildrensservices.ca/licensed-child-care/sunflower-child-care-centre/" //weblink
  },
  {
    Name: "Maison Kinder Montreal",
    Age_Group:"Toddler",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:"1825 René-Lévesque Blvd W, Montreal, Quebec H3H 1R4",
    Phone_Number: "5149329333",
    Email:"info@maisonkindermontreal.com",
    Details:"https://www.maisonkinder.com/montreal-en/about/" //weblink
  },
  {
    Name: "Sima Home Daycare",
    Age_Group:"School Age",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:"5175 Prince of Wales Ave, Montreal, Quebec H4V 2N2",
    Phone_Number: "5146998373",
    Email:"na@example.com",
    Details:"https://www.facebook.com/shomedaycare/" //weblink
  },
  {
    Name: "River's Edge Daycare",
    Age_Group:"Toddler",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:"5565 Chemin de la Côte-Saint-Antoine, Montréal, QC H4A 1R4",
    Phone_Number: "4383861777",
    Email:"na@example.com",
    Details:"http://riversedgedaycare.com/en/home/" //weblink
  },
  {
    Name: "Garderie Le Nid De Namur",
    Age_Group:"infants",// remove or add,Schoolage, infant
    City: 'Montreal',
    Address:" 4987 Pare St, Montreal, Quebec H4P 1P4",
    Phone_Number: "5147393999",
    Email:"garderie@niddenamur.com",
    Details:"http://niddenamur.com/" //weblink
  },

  //daycares in vancouver
  {
    Name: "Sunset Child Care Society",
    Age_Group:"PreSchool",// remove or add,Schoolage, infant
    City: 'Vancouver',
    Address:" 8064 Buscombe St, Vancouver, BC V5X 3S1",
    Phone_Number: "6043253817",
    Email:"sunsetdaycarebc@gmail.com",
    Details:"http://sunsetdaycare.ca/" //weblink
  },
  {
    Name: "West Point Grey Daycare",
    Age_Group:"PreSchool",// remove or add,Schoolage, infant
    City: 'Vancouver',
    Address:" 1708 W 16th Ave, Vancouver, BC V6J 2M1",
    Phone_Number: "6045689002",
    Email:"westpointgreydaycare@yahoo.com",
    Details:"https://westpointgreydaycare.com/" //weblink
  },
  {
    Name: "Blackbird Academy Occasional Daycare",
    Age_Group:"Toddler",// remove or add,Schoolage, infant
    City: 'Vancouver',
    Address:"1019 Cambie St, Vancouver, BC V6B 5L7",
    Phone_Number: " 6048016699",
    Email:"info@blackbirdkids.ca",
    Details:"https://www.blackbirdkids.ca/" //weblink
  },
  {
  Name: "Bright Beginning Childcare Center vancouver",
  Age_Group:"infants",// remove or add,Schoolage, infant
  City: 'Vancouver',
  Address:" 266 E 55th Ave, Vancouver, BC V5X 1M9",
  Phone_Number: "7783788470",
  Email:"na@example.ca",
  Details:"https://www.brightbeginnings.ca/" //weblink
},
{
  Name: "Appu Child Care- Vancouver Daycarer",
  Age_Group:"School Age",// remove or add,Schoolage, infant
  City: 'Vancouver',
  Address:" 616 E 48th Ave, Vancouver, BC V5W 2E6",
  Phone_Number: "6043227433",
  Email:"appuchildcare@gmail.com",
  Details:"http://www.appuchildcare.com/" //weblink
},
{
  Name: "Little Munchkin Daycare",
  Age_Group:"infant",// remove or add,Schoolage, infant
  City: 'Vancouver',
  Address:"1319 W 52nd Ave, Vancouver, BC V6P 1L1",
  Phone_Number: " 6046551895",
  Email:"info@littlemunchkindaycare.ca",
  Details:"https://www.komelsdaycare.com/" //weblink
},
//Calgary day cares
{
  Name: "Calgary Childcare Centre",
  Age_Group:"infant",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:"830 1 Ave NE #201, Calgary, AB T2E 0C3",
  Phone_Number: " 5877166030",
  Email:"info@calgarychildcarecentre.com",
  Details:"https://www.calgarychildcarecentre.com/" //weblink
},
{
  Name: "Little Stars Daycare and Preschool",
  Age_Group:"PreSchool",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:"3730 Westwinds Drive Northeast #100th, Calgary, AB T3J 5H3",
  Phone_Number: " 4034577787",
  Email:"iinfo@littlestarscalgary.com",
  Details:"https://littlestarscalgary.com/" //weblink
},
{
  Name: "Bow Valley Child Care Centre",
  Age_Group:"School Age",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:"255 5 Ave SW #320, Calgary, AB T2P 3G6",
  Phone_Number: "4032691719",
  Email:"bvccc@telus.net",
  Details:"https://www.bvccc.ca/" //weblink
},
{
  Name: "BrightPath Whitehorn",
  Age_Group:"infant",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:"3704 Whitehorn Dr NE, Calgary, AB T1Y 5C4",
  Phone_Number: "4032854533",
  Email:"na@example.com",
  Details:"https://brightpathkids.com/locations/whitehorn/" //weblink
},
{
  Name: "Chapter1 Daycare and Preschool",
  Age_Group:"PreSchool",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:"197 1 St SW Unit 128, Calgary, AB T2P 4M4",
  Phone_Number: "4037759236",
  Email:"info@chapter1daycare.com",
  Details:"https://chapter1daycare.com/" //weblink
},
{
  Name: "Kids U - Bridgeland",
  Age_Group:"Toddler",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:" 985 McPherson Rd NE, Calgary, AB T2E 4H7",
  Phone_Number: "4034579810",
  Email:"na@example.com",
  Details:"https://www.kidsu.ca/bridgeland/?utm_source=GMB_Bridgeland&utm_medium=Organic" //weblink
},
{
  Name: "BrightPath McKenzie Towne",
  Age_Group:"Toddler",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:"97 McKenzie Towne Blvd SE, Calgary, AB T2Z 3S7",
  Phone_Number: "4037263156",
  Email:"info@example.com",
  Details:"https://brightpathkids.com/locations/mckenzie-towne/" //weblink
},
{
  Name: "2000 Days Daycare",
  Age_Group:"infants",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:" 5728 1 St SW, Calgary, AB T2H 0E2",
  Phone_Number: "4033192332",
  Email:"admin@2000days.net",
  Details:"https://2000daysdaycare.ca/?utm_source=Google&utm_medium=GMB" //weblink
},
{
  Name: "Rockabye Daycare",
  Age_Group:"Toddler",// remove or add,Schoolage, infant
  City: 'Calgary',
  Address:"1204 Renfrew Dr NE, Calgary, AB T2E 5J5",
  Phone_Number: "4034753176",
  Email:"support@rockabyedaycare.ca",
  Details:"https://www.wecaredaycare.ca/" //weblink
}
    
];
const seedDaycare = () => Daycare.bulkCreate(daycareData);

module.exports = seedDaycare;
  
  
  
