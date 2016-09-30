var title;
var url;
var films = ['Chicago', 'Les Misérable', 'Perfect Pitch'];

var requestComplete = function(){
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  response = JSON.parse(jsonString);
  console.log(response);

}

var makeRequest = function(url, callback){

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var app = function(){
  title = films[Math.floor(Math.random()*films.length)];
      url = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";
      makeRequest(url, requestComplete); 



window.onload