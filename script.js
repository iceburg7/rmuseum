
$(document).ready(function(){

	
	
	
	//Get browser size
	
	var size = {
		width: window.innerWidth || document.body.clientWidth,
		height: window.innerHeight || document.body.clientHeight
	}
	console.log(size);
	
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
	
	
	
	
	
	//test for loading text and images
	
//	$("body").append("<p>test</p>");
	
//	$("body").append('<div class="test"></div>');
	
	
//	var m = "testlol";
//	$(".test").css("backgroundImage", i(m));
	
	
	
	//Add a wrapper with the background image
	
	
	
	
	$("body").append('<div class="wrapper"><div class="wall"></div></div>');
	
//	if(size.height < 650) {
//		$(".wrapper").css("backgroundImage", i("background500"));
//	}else if(size.height < 800) {
		$(".wrapper").css("backgroundImage", i("background7002"));
//	}else{
//		$(".wrapper").css("backgroundImage", i("background"));
//	};
	
	$(".wrapper").css("backgroundRepeat", "no-repeat");
	$(".wrapper").css("backgroundPosition", "top");
	
	
	var postNumber = localStorage.getItem("post");
	
	if (postNumber > 0) {
		var postNumber = localStorage.getItem("post");
		console.log("pN was true");
		console.log(postNumber);
	}else{
		localStorage.setItem("post", 1);
		var postNumber = 1;
		console.log("pN was false");
		console.log(postNumber);
	};
	
	
	
	$(".linklisting").appendTo(".wall");
	$(".linklisting").css("backgroundImage", i("frame1"));
	$(".linklisting").children().addClass("hide");
	$(".linklisting").children(":nth-child(" + postNumber + ")").removeClass("hide");
	

	
	$(".wall").append('<div class="firstNav"></div><div class="previousNav"></div><div class="nextNav"></div>');
	$(".firstNav").css("backgroundImage", i("first"));
	$(".previousNav").css("backgroundImage", i("previous"));
	$(".nextNav").css("backgroundImage", i("next"));
	
	$(".nextNav").click(function(){
		
		localStorage.setItem("post", (Number(postNumber) + 2) );
		postNumber = localStorage.getItem("post");
		console.log(postNumber);
		$(".linklisting").children().addClass("hide");
		$(".linklisting").children(":nth-child(" + postNumber + ")").removeClass("hide");
		
	});
	
	$(".firstNav").click(function(){
		
		localStorage.setItem("post", 1 );
		postNumber = localStorage.getItem("post");
		console.log(postNumber);
		$(".linklisting").children().addClass("hide");
		$(".linklisting").children(":nth-child(" + postNumber + ")").removeClass("hide");
		
	});
	
	$(".previousNav").click(function(){
		
		localStorage.setItem("post", (Number(postNumber) - 2) );
		postNumber = localStorage.getItem("post");
		console.log(postNumber);
		$(".linklisting").children().addClass("hide");
		$(".linklisting").children(":nth-child(" + postNumber + ")").removeClass("hide");
		
	});
	
	
	
	
	
	
	
	
	
	

//	var testget = $(".linklisting").get(0);
//	console.log(testget);
//	console.log( $("#siteTable")[3] );
//	var testget2 = $("#siteTable").get(0);
//	console.log(testget2);
//	
//	$(".linklisting").children(":nth-child(1)").addClass("1");
//	console.log($(".linklisting").children(":nth-child(1)"));
//	
//	var testget = $(".1").get(0);
	
	
	

	$("wall").append('<div><iframe src="http://www.reddit.com/r/funny/" id="serverurl" width="300" height="300"></iframe></div>');
	
	
	//	$(".linklisting").children().each(function(index) {
//		console.log(index, $(this));
//	});
	
//	var posts = $(".linklisting")
//	console.log(posts);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
