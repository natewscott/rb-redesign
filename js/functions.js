            $(document).ready(function() {
            var headerHeight = $("header.hero").outerHeight();
            var $logo = $("div#second-logo");
            
            $(window).scroll(function () {
            console.log("scrollTop: " + $(window).scrollTop());
            console.log("headerHeight: " + headerHeight);
            if ($(window).scrollTop() > headerHeight) {
            $("body").addClass('nav-fixed-top');
            $logo.addClass('nav-fixed-top');
            } else {
            $("body").removeClass('nav-fixed-top');
            $logo.removeClass('nav-fixed-top');
            }
            });
            });
            // </script>
            // <script>
            $(document).ready(function() {
            var headerHeight = $("header.hero").outerHeight();
            var $nav = $("nav.nav");
            
            $(window).scroll(function () {
            console.log("scrollTop: " + $(window).scrollTop());
            console.log("headerHeight: " + headerHeight);
            if ($(window).scrollTop() > headerHeight) {
            $("body").addClass('nav-fixed-top');
            $nav.addClass('nav-fixed-top', 'fixed-logo');
            } else {
            $("body").removeClass('nav-fixed-top', 'fixed-logo');
            $nav.removeClass('nav-fixed-top', 'fixed-logo');
            }
            });
            });
 (function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
      $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');
          $(this).closest('.accordion').find('p').not(dropDown).slideUp();
          if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        } else {
          $(this).closest('.accordion').find('a.active').removeClass('active');
          $(this).addClass('active');
        }
      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
  });
})(jQuery);

<<<<<<< HEAD
=======
function initMap() {
 // Create a map object and specify the DOM element for display.
        var bakersfield = {lat: 35.309836, lng: -119.061677};
        var chico = {lat: 39.746870, lng: -121.892495};
        var fresno = {lat: 36.658369, lng: -119.713567};
        var manteca = {lat: 37.784114, lng: -121.210043};
        var oakley = {lat: 38.004746, lng: -121.744987};
        var redwoodCity = {lat: 37.486457, lng: -122.212388};
        var sacramento = {lat: 38.560174, lng: -121.576380};
        var salinas = {lat: 36.776008, lng: -121.670174};
        var sanJose = {lat: 37.365146, lng: -121.894817};
        var sanJoseCorp = {lat: 37.364019, lng: -121.894037};
        var sanJoseFusion = {lat: 37.362051, lng: -121.893044};
        var santaRosa = {lat: 38.386019, lng: -122.712378};
        
        var map = new google.maps.Map(document.getElementById('locations-hero'), {
              center: {lat: 37.365146, lng: -121.894817},
              // center: {lat: 36.778259, lng: -119.417931},
              zoom: 6,
              draggable: false,
              scrollwheel: false,
              mapTypeControl: false
        });
         // Add a style-selector control to the map.
          var styleControl = document.getElementById('style-selector-control');
          map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

          // Set the map's style to the initial value of the selector.
          var styleSelector = document.getElementById('style-selector');
          map.setOptions({styles: styles[styleSelector.value]});

          // Apply new JSON when the user selects a different style.
          styleSelector.addEventListener('change', function() {
            map.setOptions({styles: styles[styleSelector.value]});
          })

        var marker = new google.maps.Marker({
          position: bakersfield,
          map: map,
          title: 'R&amp;B Bakersfield'
          });
        var marker = new google.maps.Marker({
          position: chico,
          map: map,
          title: 'R&amp;B Chico'
          });
        var marker = new google.maps.Marker({
          position: fresno,
          map: map,
          title: 'R&amp;B Fresno'
          });
        var marker = new google.maps.Marker({
          position: manteca,
          map: map,
          title: 'R&amp;B Manteca'
          });
        var marker = new google.maps.Marker({
          position: oakley,
          map: map,
          title: 'R&amp;B Oakley'
          });
        var marker = new google.maps.Marker({
          position: redwoodCity,
          map: map,
          title: 'Redwood City'
          });
        var marker = new google.maps.Marker({
          position: sacramento,
          map: map,
          title: 'R&amp;B Sacramento'
          });
        var marker = new google.maps.Marker({
          position: salinas,
          map: map,
          title: 'R&amp;B Salinas'
          });
        var marker = new google.maps.Marker({
          position: sanJose,
          map: map,
          title: 'R&amp;B San Jose'
          });
        var marker = new google.maps.Marker({
          position: sanJoseCorp,
          map: map,
          title: 'R&amp;B San Jose Corp'
          });
        var marker = new google.maps.Marker({
          position: sanJoseFusion,
          map: map,
          title: 'R&amp;B San Jose Fusion'
          });
        var marker = new google.maps.Marker({
          position: santaRosa,
          map: map,
          title: 'R&amp;B Santa Rosa'
          });
 };
 var styles = {
  default: null,
};
>>>>>>> 3b0e7b3db9cf5659d99381b3dc5abcb22da760a0
