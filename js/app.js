var apiKey = APIKEY;
var userId = USERID;
var tag = 'colors';
var perPage = '9';
var showOnPage = '50';

$(function cycle() {
  
      $.getJSON('https://api.flickr.com/services/rest/?format=json&method='+
        'flickr.photos.search&api_key=' + apiKey + '&user_id=' + userId + 
        '&tags=' + tag + '&per_page=' + perPage + '&jsoncallback=?', 
    
    function(data){
        $.each(data.photos.photo, function(i, rPhoto){
          var photoLink = 'http://farm' + rPhoto.farm + '.static.flickr.com/'
            + rPhoto.server + '/' + rPhoto.id + '_' + rPhoto.secret;            
            var photo = photoLink + '.jpg';            
            var photoStringStart = '<a ';
            var photoStringEnd = 'title="' + rPhoto.title + '" href="'+ 
                photo +'"><img src="' + photo + '" alt="' + 
                rPhoto.title + '"/></a>;'                
            var photoString = (i < showOnPage) ? 
                photoStringStart + photoStringEnd : 
                photoStringStart + photoStringEnd;                                   
            $(photoString).appendTo("#flickr");
        }); 
    });  
});

$( "#nextbutton" ).click(function() {
    $( "#flickr" ).empty();
    //$("#flickr").html("");
$(function cycle() {
    
      $.getJSON('https://api.flickr.com/services/rest/?format=json&method='+
        'flickr.photos.search&api_key=' + apiKey + '&user_id=' + userId + 
        '&tags=' + tag + '&per_page=' + perPage + '&jsoncallback=?', 
    
    function(data){
        $.each(data.photos.photo, function(i, rPhoto){
          var photoLink = 'http://farm' + rPhoto.farm + '.static.flickr.com/'
            + rPhoto.server + '/' + rPhoto.id + '_' + rPhoto.secret;            
            var photo = photoLink + '.jpg';            
            var photoStringStart = '<a ';
            var photoStringEnd = 'title="' + rPhoto.title + '" href="'+ 
                photo +'"><img src="' + photo + '" alt="' + 
                rPhoto.title + '"/></a>;'                
            var photoString = (i < showOnPage) ? 
                photoStringStart + photoStringEnd : 
                photoStringStart + photoStringEnd;
                                        
            $(photoString).appendTo("#flickr");
        });
    });  
});   
});       
    
$( "#smallbutton" ).click(function() {
    $("img").width(120);
    $("img").height(100);
});

$( "#medbutton" ).click(function() {
    $("img").width(240);
    $("img").height(200);
});

$( "#lgbutton" ).click(function() {
    $("img").width(480);
    $("img").height(400);
});
