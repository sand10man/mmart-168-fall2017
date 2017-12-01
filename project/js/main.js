//Steve: final project: working with Bart GPS info into GoogleMaps

const apiKey = 'MW9S-E7SL-26DU-VV8V'
let stationsP = null
const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            //Now do some godd stuff with your new data
            const locations = []
            json = json.root
            json.stations.station.forEach((station) => {
              locations.push {'Lat ' + station.gtfs_latitude,
              'Lng ' + station.gtfs_longitude}
              console.log(location[])
            })
          }
            //stationsP = json.stations.station

      /*
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


let map = null
const locations = []
  var initMap = function () {
        map = new google.maps.Map(document.getElementById('map'), {
        center: locations[0],
        zoom: 12, //1-20
        mapTypeId: google.maps.MapTypeId.SATELLITE
    })
    locations.forEach((locations) => {
        var marker = new google.maps.Marker({
            position: locations,
            map: map
        })
    })
}
