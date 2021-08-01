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

 * With the results from this request, inside "content", 
 * list every maintainer and each package name that they maintain,
 * return an array with the following shape:
[
    ...
    {
        username: "a-username",
        packageNames: ["a-package-name", "another-package"]
    }
    ...
]
 * NOTE: the parent array and each "packageNames" array should 
 * be in alphabetical order.
 */

const axios = require('axios');

module.exports = async function organiseMaintainers() {

  const config = {
     url: "https://api.npms.io/v2/search/suggestions?q=react",
    method: "GET",
     return_payload: true
   }

  let response = await axios(config)

 let test = response.data.map(e=>e.package).forEach(e=> console.log(e.maintainers)).map(e=>e.username)
    
 let test2 = response.data.map(e=>e.package.name).forEach().push(test)
  

  console.log(test2)
  //console.log(test2)

  return maintainers
};
