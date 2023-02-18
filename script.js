// Create an array to store the data that will be displayed on the map
let mapData = [];

// Create a form to capture user input
let form = document.createElement('form');
form.innerHTML = `
    <label for="lat">Latitude:</label>
    <input type="number" id="lat" name="lat" required>
    <label for="lng">Longitude:</label>
    <input type="number" id="lng" name="lng" required>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="description">Description:</label>
    <textarea id="description" name="description" required></textarea>
    <button type="button" onclick="addMarker()">Add Marker</button>
`;

// Add the form to the page
document.body.appendChild(form);

// Create a new Mapbox GL JS map
mapboxgl.accessToken = 'pk.eyJ1IjoiYXlvdWIyMjExIiwiYSI6ImNsM3o2N3U2dzBreHkza3F3dm8yMnRkaTgifQ.QcyJ9B6_e5S93W3EgInZyQ';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-122.4194, 37.7749],
    zoom: 12
});

// Add a click event listener to the map
map.on('click', function(e) {
    // Get the latitude and longitude of the clicked location
    let lat = e.lngLat.lat;
    let lng = e.lngLat.lng;

    // Set the latitude and longitude values in the form
    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
});

// Function to add a marker to the map
function addMarker() {
    // Get the form data
    let lat = document.getElementById('lat').value;
    let lng = document.getElementById('lng').value;
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;

    // Add the data to the mapData array
    mapData.push({
        lat: lat,
        lng: lng,
        name: name,
        description: description
    });

    // Create a new marker
    let marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);

    // Add a popup to the marker
    let popup = new mapboxgl.Popup()
        .setHTML(`
            <h3>${name}</h3>
            <p>${description}</p>
        `);

    marker.setPopup(popup);
}
