const axios  =  require('axios');

const app_id = 'AbpMlscxuETlDHg91GGV';
const app_code='UYMXPafUbKIDewS_23tY7g';
const token  = '11384968a33eb9cefd66bdd04b77da59c1'
const jenkinsUrl = 'http://localhost:8080/job/DemoJob/build?token='
const requestHelper =  {};
 const getLocation =  async (suggestionKey) => {
    console.log('revived suggesttion key', suggestionKey)
     try{
      //   const mapUri =  `https://places.cit.api.here.com/places/v1/autosuggest
      //   ?at=22.572645,88.363892`
      //   const suggestions  =  await axios.get(mapUri+`&q=${suggestionKey}&app_id=${app_id}&app_code=${app_code}`);
       await axios.get(`${jenkinsUrl}${token}`);
        return `build started for ${suggestionKey}`;
     }catch(e){
        console.log('error response', e)
     }
   
}


const sendLocation = async (payload) => {


const result  =  await axios.post(postUri+'/location', payload);
return result;

}

const showUrbanLayer = async () => {
   const postUri =  'http://localhost:9000';
   const result  =  await axios.post(postUri+'/urbanLayer', {});
}

const jenkinsJobBuilder = async (slotValue) => {
   // await axios.post("url", {});
   return `job created for ${slotValue}`;
}

const testFunction = async (suggestionkey) => {
const result  =   await getLocation(suggestionkey);
// console.log(result, 'result');
const send  = await sendLocation(result);
// console.log('received result', send)
}
requestHelper.getSuggetion =  getLocation;
requestHelper.sendSuggetion =  sendLocation;
requestHelper.showUrbanLayer = showUrbanLayer;
requestHelper.jenkinsJobBuilder =  jenkinsJobBuilder;
// testFunction('cognizant');
module.exports =  requestHelper;