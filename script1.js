
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
  for(i=0;i<8;i++){
    groupsdiv.innerHTML += `
    <table>
    <tr class="groupname"> <th colspan="6">${response.data.standings[i].group}</th></tr>
