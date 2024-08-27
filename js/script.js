"use strict";

(function ($) {
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    $(".gallery-controls ul li").on("click", function () {
      $(".gallery-controls ul li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".gallery-filter").length > 0) {
      var containerEl = document.querySelector(".gallery-filter");
      var mixer = mixitup(containerEl);
    }

    $(".blog-gird").masonry({
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
    });
  });

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  $(".header-section .nav-menu .mainmenu ul li").on("mousehover", function () {
    $(this).addClass("active");
  });
  $(".header-section .nav-menu .mainmenu ul li").on("mouseleave", function () {
    $(".header-section .nav-menu .mainmenu ul li").removeClass("active");
  });

  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  $(".image-popup").magnificPopup({
    type: "image",
  });

  $(".show-result-select").niceSelect();

  /*------------------
       Timetable Filter
    --------------------*/
  $(".timetable-controls ul li").on("click", function () {
    var tsfilter = $(this).data("tsfilter");
    $(".timetable-controls ul li").removeClass("active");
    $(this).addClass("active");

    if (tsfilter == "all") {
      $(".classtime-table").removeClass("filtering");
      $(".ts-item").removeClass("show");
    } else {
      $(".classtime-table").addClass("filtering");
    }
    $(".ts-item").each(function () {
      $(this).removeClass("show");
      if ($(this).data("tsmeta") == tsfilter) {
        $(this).addClass("show");
      }
    });
  });
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // AOS ANIMATION
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  // SMOOTHSCROLL NAVBAR
  $(function () {
    $(".navbar a, .hero-text a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
})(jQuery);

var map = tt.map({
  key: '3YzQxwAFHF8yAMWxHfKrjbNN1U3WHarx',
  container: 'map',
  center: [0, 0], // Initial center coordinates, can be changed later
  zoom: 14
});

map.addControl(new tt.NavigationControl());

let currentRouteLayerId = null;

// Function to create a marker
function createMarker(lngLat, color, popupText, onClick) {
  var marker = new tt.Marker({
      color: color
  }).setLngLat(lngLat)
    .setPopup(new tt.Popup().setText(popupText))
    .addTo(map);

  if (onClick) {
      marker.getElement().addEventListener('click', function() {
          onClick(lngLat);
      });
  }
}

// Function to create a route
function createRoute(start, end) {
  // Remove the existing route if there is one
  if (currentRouteLayerId) {
      map.removeLayer(currentRouteLayerId);
      map.removeSource(currentRouteLayerId);
  }

  tt.services.calculateRoute({
      key: '3YzQxwAFHF8yAMWxHfKrjbNN1U3WHarx',
      traffic: false,
      locations: [start, end]
  })
  .then(function (routeData) {
      var geojson = routeData.toGeoJson();
      currentRouteLayerId = 'route-' + start.join('-') + '-' + end.join('-');

      map.addLayer({
          'id': currentRouteLayerId,
          'type': 'line',
          'source': {
              'type': 'geojson',
              'data': geojson
          },
          'layout': {
              'line-cap': 'round',
              'line-join': 'round'
          },
          'paint': {
              'line-color': '#000000', // Change the route color here
              'line-width': 6
          }
      });

      // Zoom to fit the route
      var bounds = new tt.LngLatBounds();
      geojson.features[0].geometry.coordinates.forEach(function(coord) {
          bounds.extend(coord);
      });
      map.fitBounds(bounds, { padding: 20 });
  })
  .catch(function (error) {
      console.error("Error creating route: ", error);
  });
}

// Get the user's location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
      var userLocation = [position.coords.longitude, position.coords.latitude];
      console.log("User location: ", userLocation);
      map.setCenter(userLocation);

      // Add a marker for the user's location
      createMarker(userLocation, 'blue', 'You are here');

      // Define nearby locations (e.g., gyms, yoga places)
      var nearbyLocations = [
          { lng: userLocation[0] + 0.01, lat: userLocation[1] + 0.01, name: 'Urban Yoga Studio' },
          { lng: userLocation[0] - 0.01, lat: userLocation[1] - 0.01, name: 'Yogastha Studio' },
          { lng: userLocation[0] + 0.015, lat: userLocation[1] + 0.015, name: 'Sri Vedic Yogs Studio' },
          { lng: userLocation[0] - 0.015, lat: userLocation[1] + 0.015, name: 'Yoga Center' },
          { lng: userLocation[0] + 0.02, lat: userLocation[1] - 0.02, name: 'Health & Yoga' },
          { lng: userLocation[0] - 0.02, lat: userLocation[1] - 0.02, name: 'Yoga & Meditate' },
          { lng: userLocation[0] + 0.025, lat: userLocation[1] + 0.025, name: 'Your Yoga Class' },
          { lng: userLocation[0] - 0.025, lat: userLocation[1] + 0.025, name: 'Delhi Yoga School' },
          { lng: userLocation[0] + 0.03, lat: userLocation[1] - 0.03, name: 'Yoga Studio' },
          { lng: userLocation[0] - 0.03, lat: userLocation[1] - 0.03, name: 'Yoga Vedanta' }
      ];

      var bounds = new tt.LngLatBounds();
      nearbyLocations.forEach(function (location) {
          var position = [location.lng, location.lat];
          console.log("Nearby location: ", position, location.name);
          bounds.extend(position);
          createMarker(position, 'red', location.name, function(targetLocation) {
              // Create route when marker is clicked
              createRoute(userLocation, targetLocation);
          });
      });

      map.fitBounds(bounds, { padding: 20 });

  }, function (error) {
      console.error("Error getting user location: ", error);
  });
} else {
  console.error("Geolocation is not supported by this browser.");
}