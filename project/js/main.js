//Steve: final project: working with Bart GPS info into GoogleMaps
//Was very tricky to get everything for the map working in proper order

const apiKey = 'MW9S-E7SL-26DU-VV8V'
let locations
console.log('https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                '&cmd=stns&json=y')
//asynchronous call to BART API
const makeStationList = () => {
    const url = `https://api.bart.gov/api/stn.aspx?key=${apiKey}&cmd=stns&json=y`
    fetch(url)
        .then((response) => {
            // console.log(response)
            return response.json()

        }).catch((error) => {console.log(error)})
        .then((json) => {
            /*
            Here we get the longitude and latitude for each BART stations
            locations is an array that is populated by objects of latitude
            and longitude.
            the info from BART is string and muct be converted to numeric
            */
            const locations = []
            json = json.root
            json.stations.station.forEach((station) => {
              locations.push({
                lat: +station.gtfs_latitude,
                lng: +station.gtfs_longitude
            })
           console.log(locations)
            })
            /*
            Here the BART data that was put into an array of objects in order to
            form it GoogleMaps consumption. This map funtion is embedded within
            the main makeStationList function
            */
            map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng (locations[0].lat,
                  locations[0].lng),
                zoom: 12, //1-20
                mapTypeId: google.maps.MapTypeId.SATELLITE
            })
            //this is where the markers of the locations of BART stations
            //are placed onto the GoogleMap
            locations.forEach((location) => {
                console.log('Locations_markers')
                var marker = new google.maps.Marker({
                    position: location,
                    map: map   //this is necessary to invoke map which we Only
                              //do after the markers are extablished
                })
            })

          })
        }

        //let map = null     This line not neccessary

        /*
        HTML does a 'callback=initMap, which calls this. Here we convert This
        call into the main function that we use to access the BART API for station
        locations and within this function the map function now resides.
        */
        var initMap = function () {
              makeStationList()
              console.log('main_funtion_call')
            }

      /*    Eveertthinf below here is artifact
            //stationsP = json.stations.station
              console.log(json)
              json.stations.station.forEach((station) => {
              //console.log(station.name)
              //1. create the element you want to add to the DOM
              const option = document.createElement("option")
              //2. Assign data to some part of the element, 2 things here
              option.value = station.abbr
              option.innerHTML = station.name +' Departures'
              //now some new info: latitude and logitude
              //option.innerHTML += station.gtfs_latitude + ' Latitude'
              //option.innerHTML += station.gtfs_longitude + ' Longitude'

              //3. Append newly created element to the DOM
              document.getElementById('station_list').appendChild(option)

              const option = document.createElement("option")
              option.innerHTML = station.name
              document.getElementById('station_list').appendChild(option)

  {
      lat: 37.8698168,
      lng: -122.2720481

  },
  {
      lat: 37.77,
      lng: -122.43
  },
  {
      lat: 37.9,
      lng: -122.23
  },
  {
      lat: 37.8397651,
      lng: -122.278
  }
]
*/
    // var url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
    //                 '&cmd=stns&json=y'
    // map.data.loadGeoJson(url)
