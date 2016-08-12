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
  var params = {                             //these you get from the API host
    part: 'snippet',
    key: 'AIzaSyB1uS8omdog6pPYGQHdB9hcTiCSuNmRASs',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
  	console.log(data);  // inspect data
    showResults(data.items);   //you get this from examining the objects sent back 
  });
}

function showResults(items){  //this fcn should parse the data and send the desired info to the console/window
  var html = "";
  $.each(items, function(index,item){  // ex: 0: Object
  	var video = item.snippet;
    html += '<p>' + video.title + '</p>';
    console.log(video.title);
     $('#search-results').html(html);
  });
 
}


});