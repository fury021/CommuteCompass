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
            console.log(place);
            console.log(place.geometry.location.lat());
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
        card.classList.add('card');
        card.style.backgroundColor = '#656565';
        card.style.marginRight = '3rem';
        card.style.cursor = 'pointer';

        card.onclick = function(event) {
            expandCard(event, i);
        };

        card.innerHTML = `
            <div class="card-content" id="card-${i}">
                <h5 class="card-title">Card ${i}</h5>
                <p class="card-text">Some text for card ${i}</p>
                <p class="card-info">Additional info for card ${i}</p>
                <div class="more-info-${i}">
                    <!-- Content for more info -->
                </div>
            </div>
        `;

        cardContainer.appendChild(card);
    }
}


function expandCard(event, cardID) {
    event.stopPropagation();

    const card = event.currentTarget;
    card.classList.toggle('expanded');
}

async function callMyFunction() {
    try {
        const response = await fetch('http://localhost:3000/myFunction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            }
            // body: JSON.stringify({
            //     param1: '1',
            //     param2: '2',
            // }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}



