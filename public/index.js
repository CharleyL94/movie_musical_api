var title;
var url;
var films = ['Chicago', 'Les Misérable', 'Perfect Pitch'];

var requestComplete = function(){
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  response = JSON.parse(jsonString);
  console.log(response);

  var movie = function(movieName){
    for(var movie in movies){
      if (movie.name === movieName){
        return movie;
      }
    }
  }

  var sumbit = document.querySelector('#inputText');
  button.onclick = function(){

  }

}
var printMovieName = function(movieName){
  var movieNameText = document.getElementById('watching');
  movieNameText.innerText = watching;
}
var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var app = function(){
  var url = "http://localhost:3000";
  var button = document.querySelector('button');
  button.onclick = function(){
    var input = document.getElementById('inputText'.value);
    movieName = input;
    makeRequest(url, requestComplete)
  }
  



window.onload = app;