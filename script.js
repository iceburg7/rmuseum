$(document).ready(function(){

	
	
	
	//Set things up to be able to use local images in the extension:
	
	
	var i = function(y){
	
		//function to get the Extension ID
		
		var imgurl = chrome.extension.getURL('images/testlol.png');
		console.log(imgurl);
		var imgid = imgurl.substring(0, (imgurl.length - 11));
		console.log(imgid);
	
		
		//Put the ID into a new local image URL
	
		var z = "url('" + imgid + y + ".png')";
		console.log(z);
		return z;
	};
	
	
	//We now have a function that gives the image location of the image.  It must be a png image.
	
	console.log(i("testlol"));
	
	
	
	
	
	
	
	$(".content").append("<p>test</p>");
	
	$(".content").append('<div class="test"></div>');
	
	
	var m = "testlol";
	$(".test").css("backgroundImage", i(m));
	
	
	
	
	
	
	
	
	
});
