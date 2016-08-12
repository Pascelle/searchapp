$(function(){
	
//	$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data) {
//		console.log(data);
//	});

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyB1uS8omdog6pPYGQHdB9hcTiCSuNmRASs',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}

function showResults(results){  //this fcn should parse the data and send the desired info to the console/window
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
     $('#search-results').html(html);
  });
 
}


});