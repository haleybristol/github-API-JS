var getRepos = require('./../js/back-end.js').getRepos;


$(document).ready(function(){
  $('#locateUser').submit(function(event){
    event.preventDefault();

    console.log(getRepos(user));
  })
})
