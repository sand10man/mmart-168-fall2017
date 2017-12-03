//Steve: final project: working with Bart GPS info into GoogleMaps
//Was very tricky to get everything for the map working in proper order

const apiKey = 'MW9S-E7SL-26DU-VV8V'
let locations
console.log('https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                '&cmd=stns&json=y')
const makeStationList = () => {
    const url = `https://api.bart.gov/api/stn.aspx?key=${apiKey}&cmd=stns&json=y`
    fetch(url)
        .then((response) => {
            // console.log(response)
            return response.json()

        }).catch((error) => {console.log(error)})
        .then((json) => {
            //Now do some godd stuff with your new data
            // console.log(json)
            const locations = []
            json = json.root
            json.stations.station.forEach((station) => {
              locations.push({
                lat: +station.gtfs_latitude,
                lng: +station.gtfs_longitude
            })
           console.log(locations)
            })
            map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng (locations[0].lat,
                  locations[0].lng),
                zoom: 12, //1-20
                mapTypeId: google.maps.MapTypeId.SATELLITE
            })
            locations.forEach((location) => {
                console.log('nowhere')
                var marker = new google.maps.Marker({
                    position: location,
                    map: map
                })
            })

          })
        }

        let map = nul
        var initMap = function () {
              makeStationList()
              console.log('gothere')
            }
      /*
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
              */

//const locations = [
  /*
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
