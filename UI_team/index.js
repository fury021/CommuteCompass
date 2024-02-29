
const fetch = require("node-fetch");
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14 // Zoom in to show more detail around the user's location
    });

    var inputFrom = document.getElementById('fromInput');
    var inputTo = document.getElementById('toInput');
    var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom);
    var autocompleteTo = new google.maps.places.Autocomplete(inputTo);

    // Customize the display of the Autocomplete results
    autocompleteFrom.setFields(['place_id', 'name']);
    autocompleteTo.setFields(['place_id', 'name']);

    // Add event listeners to handle when a place is selected
    autocompleteFrom.addListener('place_changed', function() {
        var place = autocompleteFrom.getPlace();
        if (place) {
            // Extract only the name from the full address
            inputFrom.value = place.name.split(',')[0]; // Get the first part before the comma
        }
    });

    autocompleteTo.addListener('place_changed', function() {
        var place = autocompleteTo.getPlace();
        if (place) {
            inputTo.value = place.name.split(',')[0]; // Similarly for the "to" input
        }
    });

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Bias the autocomplete object to the user's geographical location
            var bounds = new google.maps.Circle({
                center: pos,
                radius: 10000 // Adjust the radius as needed to cover a larger or smaller area
            }).getBounds();

            autocompleteFrom.setBounds(bounds);
            autocompleteTo.setBounds(bounds);

            map.setCenter(pos);

            // Show user's location using the built-in blue dot provided by Google Maps
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Your Location',
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" // URL of the blue dot icon
                }
            });
        }, function() {
            handleLocationError(true, map.getCenter(), map);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter(), map);
    }
}

function handleLocationError(browserHasGeolocation, pos, map) {
    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}




function generateCards(cardCount) {
    const cardContainer = document.getElementById('cardContainer');
    // Clear previous cards
    cardContainer.innerHTML = '';

    for (let i = 1; i <= cardCount; i++) {
        const card = document.createElement('div');
        card.classList.add('card', 'col-12'); // Each card occupies 12 columns on all devices

        card.innerHTML = `
            <h5 class="card-title">Card ${i}</h5>
            <p class="card-text">Some text for card ${i}</p>
            <p class="card-info">Additional info for card ${i}</p>
            <div class="more-info-${i}">
                <!-- Content for more info -->
            </div>
            <i class="fas fa-arrow-circle-down card-arrow"></i> <!-- Arrow icon -->
            <div class="card-content" id="cardContent${i}">
                <p>Expanded content for card ${i}</p>
            </div>
        `;
        card.onclick = function() {
            toggleCardExpansion(card);
        };

        cardContainer.appendChild(card);
    }
}

function toggleCardExpansion(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card !== selectedCard) {
            card.classList.remove('expanded');
        }
    });
    selectedCard.classList.toggle('expanded');
}


click()