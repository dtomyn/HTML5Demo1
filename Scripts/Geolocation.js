        function getLocation() {
            if (navigator.geolocation) {
                // The watchPosition() function has the same structure as getCurrentPosition()
                navigator.geolocation.getCurrentPosition(updateLocation, handleLocationError, {
                    timeout: 1000000,
                    maximumAge: 1000,
                    enableHighAccuracy: false
                });
            }
            else {
                document.getElementById("supportstatus").innerHTML = "HTML5 Geolocation is <strong>not</strong> supported in your browser.";
            }
        }

        function updateLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var timeTaken = new Date(position.timestamp);

            if (!latitude || !longitude) {
                document.getElementById("supportstatus").innerHTML = "HTML5 Geolocation is supported in your browser, but location is currently not available.";
                return;
            }

            document.getElementById("latitude").innerHTML = latitude;
            document.getElementById("longitude").innerHTML = longitude;
            document.getElementById("timestamp").innerHTML = timeTaken;
        }

        function handleLocationError(error) {
            switch (error.code) {
                case 0: // UNKNOWN_ERROR
                    updateStatus("There was an error while retrieving your location: " + error.message);
                    break;
                case 1: // PERMISSION_DENIED
                    updateStatus("The user prevented this page from retrieving a location.");
                    break;
                case 2: // POSITION_UNAVAILABLE
                    updateStatus("The browser was unable to determine your location: " + error.message);
                    break;
                case 3: // TIMEOUT
                    updateStatus("The browser timed out before retrieving the location.");
                    break;
            }
            displayError(error);
        }

        function updateStatus(message) {
            document.getElementById("errorstatus").innerHTML = message;
        }

        function displayError(error) {
            var errors = {
                0: 'Unknown error',
                1: 'Permission denied',
                2: 'Position unavailable',
                3: 'Request timeout'
            };
            alert("Error: " + errors[error.code]);
        }

        function showMap() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showMapLocation, handleLocationError, {
                    timeout: 1000000,
                    maximumAge: 1000,
                    enableHighAccuracy: true
                });
            }
            else {
                document.getElementById("supportstatus").innerHTML = "HTML5 Geolocation is <strong>not</strong> supported in your browser.";
            }
        }

        function showMapLocation(position) {
            var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var myOptions = {
                zoom: 16,
                center: latlng,
                mapTypeControl: false,
                navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("mapView"), myOptions);

            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: "You are here! (Accuracy: " + position.coords.accuracy + " meter radius)"
            });
        }
