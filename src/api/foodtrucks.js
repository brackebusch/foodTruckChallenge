export const fetchFoodTruckData = async (searchTerm = '') => {
  const testData = "21MFF-00115"
  const uri = `block=123`;
  const encodedUri = encodeURIComponent(uri);
  // const query = `$where=applicant like ${searchTerm} or fooditems like ${searchTerm}`
  // const query = 
  // const sqlQuery = `select * where applicant like ${searchTerm} or fooditems like ${searchTerm}`
  // const data = await fetch(`https://data.sfgov.org/resource/rqzj-sfat.json$where=${foodItems}&$where=Applicant${foodTruckName}`);
  const data = await fetch(`https://data.sfgov.org/resource/rqzj-sfat.json?$where=${encodedUri}`)
  // const data2 = await fetch('https://data.cityofchicago.org/resource/f7f2-ggz5.json?fuel_type_code=LPG')
  // console.log(data2)
  return data
}


// {
//   "message": "Query coordinator error: query.soql.no-such-column; No such column: taco; position: Map(row -> 1, column -> 313, line -> 
//   \"SELECT `objectid`, `applicant`, `facilitytype`, `cnn`, `locationdescription`, `address`, `blocklot`, `block`, `lot`, `permit`, `status`, `fooditems`, `x`, `y`, `latitude`, `longitude`, `schedule`, `dayshours`, `noisent`, `approved`, `received`, `priorpermit`, `expirationdate`, `location` WHERE `applicant` LIKE `taco` OR `fooditems` LIKE `taco`\\n                                                                                                                                                                                                                                                                                                                        ^\")",
//   "errorCode": "query.soql.no-such-column",
//   "data": {
//       "column": "taco",
//       "dataset": "foxtrot.2646",
//       "position": {
//           "row": 1,
//           "column": 313,
//           "line": "SELECT `objectid`, `applicant`, `facilitytype`, `cnn`, `locationdescription`, `address`, `blocklot`, `block`, `lot`, `permit`, `status`, `fooditems`, `x`, `y`, `latitude`, `longitude`, `schedule`, `dayshours`, `noisent`, `approved`, `received`, `priorpermit`, `expirationdate`, `location` WHERE `applicant` LIKE `taco` OR `fooditems` LIKE `taco`\n                                                                                                                                                                                                                                                                                                                        ^"
//       }
//   }
// }