/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */

 const axios = require('axios');

module.exports = async function oldestPackageName() {

  const config = {
    url: "https://api.npms.io/v2/search/suggestions?q=react",
    method: "GET",
    return_payload: true
  }

  let response = await axios(config)
 

  let findOldest = response.data.map(e=> e.package).sort(function (a,b){
    if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
  })
    
let name = findOldest[0].name

console.log(name)

  return name
};
