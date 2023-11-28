
let  groupsdiv=document.querySelector(".groups");


let url="http://api.football-data.org/v4/competitions/2000/standings";
let token="33cae465963e4dcd86cce3fdd45ca561";
axios.get(url, {
    headers : {
        "X-Auth-Token":token
    }
})
.then(function (response) {
  // en cas de réussite de la requête
  console.log(response.data);
  console.log(response.data.standings[0].group); 

  let i=0;
