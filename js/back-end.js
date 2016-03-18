var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  var user = $('#user').val();
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    $('#pic').html('<img src=' + response[0].owner.avatar_url + '>');
    // var followers = response.followers;
    // var repos = response[].archive_url;
    for (var i = 0; i < response.length; i += 1) {
      $('#userInfo').append('<div class="row"><strong>Repository:</strong> ' + response[i].name + '<div class="col-xs-6"><strong>Description: </strong> ' + response[i].description + '</div></div><br>');
    }
  });
    $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
      console.log(response);
      $('#name').html('<div class="name"><strong>Name: ' + response.name + '</strong></div>');
      $('#email').html('<div class="email"><strong>E-mail: ' + response.email + '</strong></div>');
      $('#followers').html('<div class="follow"><strong> Followers: ' + response.followers +'</strong></div><br>');
    })

    // $('#email').html(email);
    .fail(function(error){
    console.log(error.responseJSON.message);
  });
  };
