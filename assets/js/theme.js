function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

function initMap() {
  var location = {lat: 56.949582, lng: 24.105397};

  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 4,
      	center: location
    });

  var marker = new google.maps.Marker({
  	position: location,
   	map: map
	});
}

function scrollToAnchorUp(aid){
	alert("You are ussing anchor button!");
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#link").click(function() {
   scrollToAnchorUp('Up');
});

