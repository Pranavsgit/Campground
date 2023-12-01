mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: campground.geometry.coordinates,
    zoom: 8
});
map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker({ color: 'black', rotation: 45 })
    .setLngLat(campground.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML(
            `<h3>${campground.title}</h3>
            <p>${campground.location}</P>`
        )
    )
    .addTo(map);



