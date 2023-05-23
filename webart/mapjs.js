//map
function mapLoad() {
  //the map is pointing at an abandoned place near UChicago, which was called a black hole.

  //Define the lat lon coordinate of blackhole
  var latLng = [41.794103, -87.618494];

  var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW9uYXJ1bmUiLCJhIjoiY2xoaWRkanU0MDZvdTNrcGJ3cmN2M3IwaSJ9.RNWJNKBSODnGGAS00uHBOQ';

  var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
  var streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
  // map id in html div obj.
  var map = L.map('map', {
    center: latLng,
    //default zoom
    zoom: 16,
    //default layer
    layers: [grayscale]
  });
  //switch layers
  var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
  };

  L.control.layers(baseLayers).addTo(map);

  L.marker(latLng).addTo(map)
    .bindPopup("<b>BlackHole</b>").openPopup();

  //Click event create a leaflet popup "L"
  var popup = L.popup();

  function onMapClick(e) {
    //set the new latlong, set new note of the new latlong, open on the map.
    popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
  }
  //go to the html id on click will run the function of onMapClick.
  map.on('click', onMapClick);
}

//pop-ups

var sentences = ["This site is an online performance by artist user199810n/a.", "What is a Black Hole?", "Why Soil?", "Do not look.", "Why do I have to care about “东北下岗潮”", "South Side Chicago", "Why having your work showing in an art museum, when you can simply show it in a science museum", "Why 神女赋 matters to you?", "Is Northern Art Group a failure?", "Fan Debiao is such a cultural specific person.", "Who is your audience?", "Why the black soil matters?","Sing the song of the black soil","nothing behind me", "Why art?"];
function openWindows() {
  var count = 0;

  function createPopup() {
    var randomIndex = Math.floor(Math.random() * sentences.length);
    var randomSentence = sentences[randomIndex];
    var randomSize = Math.floor(Math.random() * 200) + 100;
    var randomTop = Math.floor(Math.random() * (screen.height - randomSize));
    var randomLeft = Math.floor(Math.random() * (screen.width - randomSize));

    var popup = window.open("", "", "width=" + randomSize + ",height=" + randomSize + ",top=" + randomTop + ",left=" + randomLeft);
    popup.document.write(`<h2 style="color: black">${randomSentence}</h2>`);
    //popup.document.body.style.backgroundColor = "black";
    count++;
    if (count < 10) {
      setTimeout(createPopup, 300); // delay the creation of the next window by _ ms
    }
  }

  createPopup();
}

//wiki
function wikiAPI() {

  var searchTerm = document.getElementById('searchTerm').value;
  var connect = new XMLHttpRequest();
  var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

  connect.open('GET', url);
  connect.onload = function () {
    var wikiObject = JSON.parse(this.response);
    var pages = wikiObject.query.pages;
    var existingDiv = document.getElementById("wiki");

    // Check if content already exists
    var contentExists = existingDiv.querySelector('.row.h4');

    if (contentExists) {
      // Content exists, clear existing content
      existingDiv.innerHTML = "";
    }

    for (var i in pages) {
// url challange
      var pageURL ="https://en.wikipedia.org/?curid="
      var newAnchor = document.createElement('a');
      newAnchor.href = pageURL+pages[i].pageid;
      newAnchor.className ='d-block';
      newAnchor.innerText = pages[i].title;
      existingDiv.appendChild(newAnchor);

     // var newDiv = document.createElement("div");
   //   newDiv.setAttribute('class', 'row h4');
     // newDiv.innerText = pages[i].title;

      //existingDiv.appendChild(newDiv);
    }
  }

  connect.send();


}