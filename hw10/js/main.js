//Steve DeNault
const apiKey = 'MW9S-E7SL-26DU-VV8V'

const makeStationList = () => {
    const url = 'https://api.bart.gov/api/stn.aspx?key=' + apiKey +
                    '&cmd=stns&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            //Now do some godd stuff with your new data
            json = json.root
            console.log(json)
              json.stations.station.forEach((station) => {
              //console.log(station.name)
              //1. create the rlrment you want to add to the DOM
              const option = document.createElement("option")
              //2. Assign data to some part of the element, 2 things here
              option.value = station.abbr
              option.innerHTML = station.name +' Departures'
              //3. Append newly created element to the DOM
              document.getElementById('station_list').appendChild(option)
              /*
              const option = document.createElement("option")
              option.innerHTML = station.name
              document.getElementById('station_list').appendChild(option)
              */
            })

            //How o I use the ata returne from BARRT to populate my
            //dropdown meno?

            // PART III.A.: Use a loop to populate the select menu with *ALL*
            // of the stations that are returned from the BART data feed:
            /*
            const option1 = document.createElement("option")
            option1.value = 'DBRK'
            option1.innerHTML = 'Downtown Berkeley'
            document.getElementById('station_list').appendChild(option1)
            */
        })
        //.catch((err) => {
          //  console.log(err)
        }

      makeStationList()



const getArrivalTimes = () => {
    //find element Id stationlist and assign to variable
    const stationList = document.getElementById('station_list')
    // PART III.B.1: The bartStationCode should read from the list.
    //get stationList's selected values
    const bartStationCode = stationList.value
    // print value to screen
    console.log(bartStationCode)

    let url = 'https://api.bart.gov/api/etd.aspx?key=' + apiKey + '&cmd=etd' +
                '&orig=' + bartStationCode + '&json=y'
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json = json.root
            console.log('You have selected: ' + json.station[0].name)
            //0. clear existing div
            document.getElementById('results').innerHTML = ''
            //1.create new element
            const header = document.createElement("h2")
            //2. add header that shows selected station name
            header.innerHTML = json.station[0].name + ' : to'
            //3. append new element with data to DOM, some pre exixting element
            document.getElementById('results').appendChild(header)

            //4 log all train lines
            json.station[0].etd.forEach((line) => {
                console.log('line ', line)
                //print nmae of train line to p tag and append to DOM
                const trainLine = document.createElement('h3')
                trainLine.innerHTML = line.destination +
                      //add time estimate and platform and direction
                       ': Platform # ' + ' ' + line.estimate[0].platform +
                       ' (' + line.estimate[0].direction + ')' + ': Time estimates, minutes'

                //Append to DOM
                document.getElementById('results').appendChild(trainLine)

                // log all of the estimates for each train lines
                line.estimate.forEach((estimate)  => {
                    console.log('estimate ',estimate)
                    //encapsulate each time estimate into a span element
                    const departureTime = document.createElement('span')
                    departureTime.innerHTML = estimate.minutes
                    departureTime.style.background = estimate.color

                    document.getElementById('results').appendChild(departureTime)

              })
            })
        })
            /*
            const results = document.getElementById('results')
            results.innerHTML = ''
            json.station = json.station[0]
            if (!Array.isArray(json.station.etd)) {
                json.station.etd = [ json.station.etd ]
            }
            json.station.etd.forEach((trainLine => {
              let Para = document.createElement('p')
              let myText = documentTextNode('----------------------------')
              Para.appendChild(myText)
              results.appendChild(Para)

                if (!Array.isArray(trainLine.estimate)) {
                    trainLine.estimate = [ trainLine.estimate ]
                }
                // PART III.B.2: Instead of printing this info to the console,
                // output it to the DOM
                console.log('------------------------------------------------------------------------')
                console.log('FROM:', stationList.options[stationList.selectedIndex].text.toUpperCase())
                console.log('TO:', trainLine.destination.toUpperCase())
                console.log('------------------------------------------------------------------------')
                trainLine.estimate.forEach((estimate => {
                    // PART III.B.2. Instead of printing this info to the console,
                    // output it to the DOM
                    console.log(
                        ' * Direction:', estimate.direction,
                        ', Leaving: ', estimate.minutes,
                        ', Color: ', estimate.hexcolor,
                        ', Platform:', estimate.platform,
                        ', Delay?:', estimate.delay
                    )
                }))
            }))

          })
      */

    //  .catch((err) => {
      //   console.log(err)
    //    })
      }
/*
makeStationList()
*/
