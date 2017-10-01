var mymap = L.map('map').setView([37.1572788, -3.6020432,15], 15);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 15,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	L.marker([37.1572788, -3.6020432,15]).addTo(mymap)
		.bindPopup("<b> Bar Porras</b><br />37.159101 -3.6020432,15").openPopup();

	L.marker([37.155790, -3.593677]).addTo(mymap)
                .bindPopup("<b> Cervecería ECU</b><br />37.155790 -3.593677").openPopup();
	
	L.marker([37.160383, -3.596956]).addTo(mymap)
                .bindPopup("<b> Trending Tapas</b><br />37.160383, -3.596956").openPopup();

	L.marker([37.153528, -3.598293]).addTo(mymap)
                .bindPopup("<b> Mar de Tapas</b><br />37.153528 -3.598293").openPopup();

	L.marker([37.156673, -3.603373]).addTo(mymap)
                .bindPopup("<b> Mesón La Loma</b><br />37.156673 -3.603373").openPopup();

	L.marker([37.153712, -3.591892]).addTo(mymap)
                .bindPopup("<b> La Cueva 1900</b><br />37.153712 -3.591892").openPopup();

	L.marker([37.153471, -3.597990]).addTo(mymap)
                .bindPopup("<b> Restaurante, Cafetería Almudena</b><br />37.153471 -3.597990").openPopup();

	L.marker([37.153348, -3.597654]).addTo(mymap)
                .bindPopup("<b> Cervecería Alhambra</b><br />37.153348 -3.597654").openPopup();


	L.marker([37.155320, -3.593274]).addTo(mymap)
                .bindPopup("<b> Restaurante Madraza</b><br />37.155320 -3.593274").openPopup();



	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);