
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $("#street").val();
	var cityStr = $("#city").val();
	var address = streetStr + "," + cityStr;

	$greeting.text("So you want to live at " + address + "?");
	
	var streetviewUrl = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + address;
	$body.append('<img class = "bgimg" src = "' + streetviewUrl + '">');
		
	var nytimesURL ="http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+cityStr+"&sort=newest&api-key=c033c16b1d1348299cffccf39e572b60" ;
	//"https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ cityStr + "&api-key=c033c16b1d1348299cffccf39e572b60";
	$getJSON(nytimesURL,function(data){
		$("#nytHeaderElem").text("New York Times Article about "+ cityStr);
		articles = data.response.docs;
		for(var i=0;i<articles.length;i++){
			var article = articles[i];
			$nytElem.append('<li class="article">'+'<a href= "'+article.web_url+'">'+article.headline.main+'</a>'+'</li>');
		};
	})

	return false;
}
		

$('#form-container').submit(loadData);
