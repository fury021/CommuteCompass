function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 49.8954, lng: -97.1385} 
    });

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });

     
    var routeInfo = {
        
            number: 1,
            times: {
              start: "2024-02-23T20:27:00",
              end: "2024-02-23T21:51:00",
              durations: {
                total: 84,
                walking: 8,
                waiting: 20,
                riding: 55,
              },
            },
            segments: [
              {
                type: "walk",
                times: {
                  start: "2024-02-23T20:27:00",
                  end: "2024-02-23T20:32:00",
                  durations: {
                    total: 5,
                    walking: 5,
                  },
                },
                from: {
                  origin: {
                    address: {
                      key: 28415,
                      "street-number": 1,
                      street: {
                        key: 3375,
                        name: "Snow Street",
                        type: "Street",
                      },
                      centre: {
                        utm: {
                          zone: "14U",
                          x: 632954,
                          y: 5519004,
                        },
                        geographic: {
                          latitude: "49.80874",
                          longitude: "-97.15211",
                        },
                      },
                    },
                  },
                },
                bounds: {
                  maximum: {
                    lat: "49.80965",
                    lng: "-97.15143",
                  },
                  minimum: {
                    lat: "49.80871",
                    lng: "-97.1547",
                  },
                },
                to: {
                  stop: {
                    key: 60124,
                    name: "Westbound Markham at Pembina",
                    centre: {
                      utm: {
                        zone: "14U",
                        x: 632767,
                        y: 5519002,
                      },
                      geographic: {
                        latitude: "49.80876",
                        longitude: "-97.1547",
                      },
                    },
                  },
                },
              },
              {
                type: "ride",
                times: {
                  start: "2024-02-23T20:32:00",
                  end: "2024-02-23T20:55:00",
                  durations: {
                    total: 23,
                    riding: 23,
                  },
                },
                route: {
                  key: "BLUE",
                  number: "BLUE",
                  "customer-type": "regular",
                  coverage: "rapid transit",
                  "badge-label": "B",
                  "badge-style": {
                    "class-names": {
                      "class-name": [
                        "badge-label",
                        "rapid-transit",
                      ],
                    },
                    "background-color": "#0060a9",
                    "border-color": "#0060a9",
                    color: "#ffffff",
                  },
                },
                variant: {
                  key: "BLUE-1-D",
                  name: "BLUE to Downtown",
                },
                bounds: {
                  maximum: {
                    lat: "49.89334",
                    lng: "-97.13231",
                  },
                  minimum: {
                    lat: "49.80783",
                    lng: "-97.17076",
                  },
                },
                bus: {
                  key: 387,
                  "bike-rack": "false",
                  wifi: "false",
                },
              },
              {
                type: "transfer",
                times: {
                  start: "2024-02-23T20:55:00",
                  end: "2024-02-23T21:09:00",
                  durations: {
                    total: 14,
                    walking: 1,
                    waiting: 13,
                  },
                },
                from: {
                  stop: {
                    key: 10612,
                    name: "Westbound Graham at Garry (Wpg Square)",
                    centre: {
                      utm: {
                        zone: "14U",
                        x: 633608,
                        y: 5528372,
                      },
                      geographic: {
                        latitude: "49.89281",
                        longitude: "-97.13979",
                      },
                    },
                  },
                },
                bounds: {
                  maximum: {
                    lat: "49.89295",
                    lng: "-97.13897",
                  },
                  minimum: {
                    lat: "49.89277",
                    lng: "-97.13979",
                  },
                },
                to: {
                  stop: {
                    key: 10611,
                    name: "Eastbound Graham at Fort (Wpg Square)",
                    centre: {
                      utm: {
                        zone: "14U",
                        x: 633667,
                        y: 5528384,
                      },
                      geographic: {
                        latitude: "49.8929",
                        longitude: "-97.13897",
                      },
                    },
                  },
                },
              },
              {
                type: "ride",
                times: {
                  start: "2024-02-23T21:09:00",
                  end: "2024-02-23T21:32:00",
                  durations: {
                    total: 23,
                    riding: 23,
                  },
                },
                route: {
                  key: 45,
                  number: 45,
                  name: "Route 45 Talbot",
                  "customer-type": "regular",
                  coverage: "regular",
                  "badge-label": 45,
                  "badge-style": {
                    "class-names": {
                      "class-name": [
                        "badge-label",
                        "regular",
                      ],
                    },
                    "background-color": "#ffffff",
                    "border-color": "#d9d9d9",
                    color: "#000000",
                  },
                },
                variant: {
                  key: "45-0-K",
                  name: "Talbot to Kildonan Place",
                },
                bounds: {
                  maximum: {
                    lat: "49.90932",
                    lng: "-97.06803",
                  },
                  minimum: {
                    lat: "49.89295",
                    lng: "-97.13917",
                  },
                },
                bus: {
                  key: 876,
                  "bike-rack": "false",
                  wifi: "false",
                },
              },
              {
                type: "transfer",
                times: {
                  start: "2024-02-23T21:32:00",
                  end: "2024-02-23T21:41:00",
                  durations: {
                    total: 9,
                    walking: 1,
                    waiting: 8,
                  },
                },
                from: {
                  stop: {
                    key: 40645,
                    name: "Eastbound Reenders at Panet",
                    centre: {
                      utm: {
                        zone: "14U",
                        x: 638729,
                        y: 5529649,
                      },
                      geographic: {
                        latitude: "49.90312",
                        longitude: "-97.06807",
                      },
                    },
                  },
                },
                bounds: {
                  maximum: {
                    lat: "49.90318",
                    lng: "-97.06755",
                  },
                  minimum: {
                    lat: "49.90304",
                    lng: "-97.06807",
                  },
                },
                to: {
                  stop: {
                    key: 40662,
                    name: "Westbound Reenders at Lagimodiere West",
                    centre: {
                      utm: {
                        zone: "14U",
                        x: 638767,
                        y: 5529647,
                      },
                      geographic: {
                        latitude: "49.9031",
                        longitude: "-97.06755",
                      },
                    },
                  },
                },
              },
              {
                type: "ride",
                times: {
                  start: "2024-02-23T21:41:00",
                  end: "2024-02-23T21:50:00",
                  durations: {
                    total: 9,
                    riding: 9,
                  },
                },
                route: {
                  key: 77,
                  number: 77,
                  name: "Route 77 Crosstown North",
                  "customer-type": "regular",
                  coverage: "regular",
                  "badge-label": 77,
                  "badge-style": {
                    "class-names": {
                      "class-name": [
                        "badge-label",
                        "regular",
                      ],
                    },
                    "background-color": "#ffffff",
                    "border-color": "#d9d9d9",
                    color: "#000000",
                  },
                },
                variant: {
                  key: "77-0-G",
                  name: "Crosstown North to Garden City Centre",
                },
                bounds: {
                  maximum: {
                    lat: "49.92714",
                    lng: "-97.05313",
                  },
                  minimum: {
                    lat: "49.90303",
                    lng: "-97.06886",
                  },
                },
                bus: {
                  key: 366,
                  "bike-rack": "false",
                  wifi: "false",
                },
              },
              {
                type: "walk",
                times: {
                  start: "2024-02-23T21:50:00",
                  end: "2024-02-23T21:51:00",
                  durations: {
                    total: 1,
                    walking: 1,
                  },
                },
                from: {
                  stop: {
                    key: 40294,
                    name: "Westbound McLeod at London",
                    centre: {
                      utm: {
                        zone: "14U",
                        x: 638939,
                        y: 5532333,
                      },
                      geographic: {
                        latitude: "49.9272",
                        longitude: "-97.06419",
                      },
                    },
                  },
                },
                bounds: {
                  maximum: {
                    lat: "49.92721",
                    lng: "-97.06419",
                  },
                  minimum: {
                    lat: "49.92675",
                    lng: "-97.06479",
                  },
                },
                to: {
                  destination: {
                    monument: {
                      key: 7230,
                      name: "Guru Nanak Darbar",
                      categories: [
                        "Community: Places of Worship",
                      ],
                      address: {
                        key: 37849,
                        "street-number": 900,
                        street: {
                          key: 2427,
                          name: "McLeod Avenue",
                          type: "Avenue",
                        },
                        centre: {
                          utm: {
                            zone: "14U",
                            x: 638897,
                            y: 5532282,
                          },
                          geographic: {
                            latitude: "49.92675",
                            longitude: "-97.06479",
                          },
                        },
                      },
                    },
                  },
                },
              },
            ],
          
    };

    var request = {
      origin: {lat: 49.80874, lng:-97.15211}, 
      destination: {lat: 49.92675, lng:-97.06479}, 
      travelMode: 'TRANSIT'
    };

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
        var route = result.routes[0].overview_path;
        var polyline = new google.maps.Polyline({
          path: route,
          geodesic: true,
          strokeColor: '#FF0000', 
          strokeOpacity: 1.0,
          strokeWeight: 2 
        });
        polyline.setMap(map);
      }
    });

    
    routeInfo.segments.forEach(function(segment) {
        if (segment.type === 'walk' || segment.type === 'transfer') {
            // Handle walking and transfer segments
            var request = {
                origin: {lat: parseFloat(segment.from.stop.centre.geographic.latitude), lng: parseFloat(segment.from.stop.centre.geographic.longitude)},
                destination: {lat: parseFloat(segment.to.stop.centre.geographic.latitude), lng: parseFloat(segment.to.stop.centre.geographic.longitude)},
                travelMode: 'WALKING'
            };
            directionsService.route(request, function(result, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(result);
                }
            });
        } else if (segment.type === 'ride') {
            // Handle riding segments
            var request = {
                origin: {lat: parseFloat(segment.from.stop.centre.geographic.latitude), lng: parseFloat(segment.from.stop.centre.geographic.longitude)},
                destination: {lat: parseFloat(segment.to.stop.centre.geographic.latitude), lng: parseFloat(segment.to.stop.centre.geographic.longitude)},
                travelMode: 'TRANSIT'
            };
            directionsService.route(request, function(result, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(result);
                }
            });
        }
        
    });
   
    // CODE FOR MAPPING THE BUS STOPS
    var stops = routeInfo.segments.filter(function(segment) {
      return segment.type === 'transfer';
    }).map(function(segment) {
      return {
        name: segment.from.stop.name,
        lat: parseFloat(segment.from.stop.centre.geographic.latitude),
        lng: parseFloat(segment.from.stop.centre.geographic.longitude)
      };
    });
    console.log(stops)

    // Adding markers for each stop
    stops.forEach(function(stop) {
      var marker = new google.maps.Marker({
        position: {lat: stop.lat, lng: stop.lng},
        map: map,
        title: stop.name
      });
    });
}

  