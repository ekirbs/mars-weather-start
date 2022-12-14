var parkApiKey = 'amkrsfXuAU5bolqQY0bTMOV4h2mBIOTqrRvrJVsd';

var weatherApiKey = "3044316f6126db93462603440b6cd43c";


var parks = [
  {
    parkName: 'Yellowstone',
    parkCode: "YELL",
  },
  {
    parkName: 'Acadia',
    parkCode: 'ACAD',
  },
  {
    parkName: 'The Grand Canyon',
    parkCode: 'GLCA'
  },
  {
    parkName: 'Rocky Mountain',
    parkCode: 'ROMO'
  },
  {
    parkName: 'Arches',
    parkCode: 'ARCH'
  },
  {
    parkName: 'Glacier',
    parkCode:'GLAC'
  },
  {
    parkName:'Yosemite',
    parkCode:'YOSE'
  },
  {
    parkName:'Sequoia',
  parkCode:'SEKI'
  },

  {
    parkName:'Redwood',
    parkCode:'REDW'

  },
{
  parkName: 'Everglade',
  parkcode: 'EVER'
},

{
  parkName: 'Denali',
  parkCode: 'DENA'
},

]
// var selectEl;
// for(var i = 0; i<parks.length; i++) {
//   var optionEl = document.createElement('option');
//   var optionId = parks[i].parkCode;
//   optionEl.setAttribute('id', optionId);
//   optionEl.textContent = parks[i].parkName;
//   selectEl.appendChild(optionEl);
// }

var park;
var city;

function displayChosenPark() {
  
  // var parkCode = 'ACAD';

  var parkApiURL = `https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${parkApiKey}`;

  fetch(parkApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

        // var activities = response.activities;
        $("#park-info").empty();

        var featureCard = $("<div>");

        var description = data.data[0].description;
        console.log(description);
        

        var streetName = data.data[0].addresses[0].line1;
        var city = data.data[0].addresses[0].city;
        var zip = data.data[0].addresses[0].postalCode;
        var state = data.data[0].addresses[0].stateCode;
        console.log(streetName + ' ' + city + ' ,' + zip + ' ,' + state);
        


        var directions = data.data[0].directionsInfo;
        console.log(directions);
        

        // var activities = data.data[0].activities[0].name;
        // console.log(activities);

        var hours = data.data[0].operatingHours[0].standardHours;
        console.log(hours);

        featureCard.append("<br/>" + description);
        featureCard.append("<br/>" + streetName + ' ' + city + ' ,' + zip + ' ,' + state);
        featureCard.append("<br/>" + directions);
        featureCard.append("<br/>" + hours);

        $("#park-info").append(featureCard);

        var images = data.data[0].images;
        console.log(images);
        var imagesLength = images.length;

        for (var i = 0; i < images.length; i++) {
          var slideContainer = $('<div class="mySlides fade">')

          var numberDiv = $('<div class="numbertext">').text(`${i + 1}/${imagesLength}`) // give this an actual # in the area (i + 1/images.length)
          slideContainer.append(numberDiv);

          var img = $('<img src')  // how to source the images from the data?
          slideContainer.append(img);

          var capName = data.data[0].images.name;
          var textDiv = $('<div class="text">').text(`${capName}`);
          slideContainer.append(textDiv);

          $('slideshowContainer').append(slideContainer);

          var dotSpan = $('<span class="dot" onclick="currentSlide[i = 1]">')
          $('#dotContainer').append(dotSpan);

        }
        

    });

}

// getParkApi();

function displayChosenCity() {
  
var units = "imperial";
var lang = 'en';

  var weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=${units}&lang=${lang}`;

  fetch(weatherApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

        $("#weather").empty();
        
        var featureCard = $("<div>");

      var temperature = data.list[0].main.temp
      // var tempToF = ((temperature - 273.15) * 9/5 + 32).toFixed();
      

      console.log((temperature - 273.15) * 9/5 + 32);

      var windSpeed = data.list[0].wind.speed;

      console.log(windSpeed);

      var humidity = data.list[0].main.humidity;

      console.log(humidity + '%');

      featureCard.append("<br/>" + temperature + " degrees F");
      featureCard.append("<br/>" + windSpeed + " mph");
      featureCard.append("<br/>" + humidity + "% humidity");

      $("#weather").append(featureCard);


});

}

$("#acadia").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = 'ACAD';
  city = 'Bar Harbor, Maine';

  displayChosenPark();
  displayChosenCity();

  let div = document.createElement("div")
  let p = document.createElement("p")
  div.append("Some text", p)

console.log(div.childNodes) // NodeList [ #text "Some text", <p>
  // cities.push(cityName);

  // renderCards();
});

$("#yellow").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "YELL";
  city = "Gardiner, Montana";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#grand").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "GLCA";
  city = "Tusayan, Arizona";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#rockies").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "ROMO";
  city = "Denver, Colorado";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});



$("#arches").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "ARCH";
  city = "Moab,Utah";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});


$("#glacier").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "GLAC";
  city = "Columbia Falls, Montana";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#yosemite").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "YOSE";
  city = "Mariposa, California";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#sequoia").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "SEKI";
  city = "Visalia,California";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#redwood").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "REDW";
  city = "Crescent City, California";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#everglades").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "EVER";
  city = "Everglades City, Florida";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#denali").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "DENA";
  city = "Healy, Alaska";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.dropdown-trigger');
//   var instances = M.Dropdown.init(elems, options);
// });

// Or with jQuery

$('.dropdown-trigger').dropdown();

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// $(document).ready(function(){
//   $('.dropdown-button2').dropdown({
//       inDuration: 300,
//       outDuration: 225,
//       constrain_width: false, // Does not change width of dropdown to that of the activator
//       hover: true, // Activate on hover
//       gutter: ($('.dropdown-content').width()*3)/2.5 + 2, // Spacing from edge
//       belowOrigin: false, // Displays dropdown below the button
//       alignment: 'left' // Displays dropdown with edge aligned to the left of button
//     }
//   );
 
// });














// function getWeatherApi();


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

// $(".search-btn").on("click", function (event) {
//   event.preventDefault();
//   console.log("button is working");

//   var cityName = $("#search-input").val().trim();

//   displayChosenCity();
//   displayChosenPark();

//   // cities.push(cityName);

//   // renderCards();
// });

// $(document).on('click', '#search-btn #search-history', displayChosenCity);
// $(document).on("click", ".search-btn", displayChosenCity);

// $(document).on("click", ".search-btn", displayChosenPark);

// acadia ACAD
// yellowstone YELL
// grand canyon GLCA
// rocky mountain ROMO

// for (var i = 0; i < images.length; i++) {
  
// }