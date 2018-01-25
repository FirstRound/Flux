
            function init() {
                var options = {
                    types: ['(regions)']
                };
                var inputFrom = document.getElementById('locationTextFieldFrom');
                var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom,options);

                var inputTo = document.getElementById('locationTextFieldTo');
                var autocompleteTo = new google.maps.places.Autocomplete(inputTo,options);
            }

            google.maps.event.addDomListener(window, 'load', init);