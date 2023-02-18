// Define mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYXlvdWIyMjExIiwiYSI6ImNsM3o2N3U2dzBreHkza3F3dm8yMnRkaTgifQ.QcyJ9B6_e5S93W3EgInZyQ';

// Create an empty array to store the map data
let mapData = [];

// Create a new Mapbox GL JS map
let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-122.4194, 37.7749],
	zoom: 12
});

// Add click event listener to the map to get latitude and longitude
map.on('click', function(e) {
	let lat = e.lngLat.lat;
	let lng = e.lngLat.lng;

	document.getElementById('latitude').value = lat;
	document.getElementById('longitude').value = lng;
});

// Function to add marker to the map
function addMarker() {
	// Get form data
	let latitude = document.getElementById('latitude').value;
	let longitude = document.getElementById('longitude').value;
	let name = document.getElementById('name').value;
	let description = document.getElementById('description').value;

	// Create a new marker and add it to the map
	let marker = new mapboxgl.Marker()
		.setLngLat([longitude, latitude])
		.addTo(map);

	// Add data to the map data array
	mapData.push({
		latitude: latitude,
		longitude: longitude,
		name: name,
    description: description
	});

	// Add a popup to the marker
	let popup = new mapboxgl.Popup()
		.setHTML(`
			<h3>${name}</h3>
			<p>${description}</p>
		`);

	marker.setPopup(popup);
}
