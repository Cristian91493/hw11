// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// // -----date-----
var datefilter = d3.select('#datetime')
  
function handleChangeDate() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.datetime==filterValue
    }

    var filteredTable=tableData.filter(selectData)
    filteredTable.forEach((entry)=> {
        var row = tbody.append('tr')
        Object.entries(entry).forEach(([key,value]) => {
            var cell = row.append('td')
            cell.text(value)
        })
    })

    if(filterValue==''){
        tableData.forEach((entry)=> {
            var row = tbody.append('tr')
            Object.entries(entry).forEach(([key,value]) => {
                var cell = row.append('td')
                cell.text(value)
            })
        })
    }
    
}

datefilter.on('change',handleChangeDate)

// // -----city-----
var cityfilter = d3.select('#city')
  
function handleChangeCity() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.city==filterValue
    }

    var filteredTable=tableData.filter(selectData)
    filteredTable.forEach((entry)=> {
        var row = tbody.append('tr')
        Object.entries(entry).forEach(([key,value]) => {
            var cell = row.append('td')
            cell.text(value)
        })
    })

    if(filterValue==''){
        tableData.forEach((entry)=> {
            var row = tbody.append('tr')
            Object.entries(entry).forEach(([key,value]) => {
                var cell = row.append('td')
                cell.text(value)
            })
        })
    }
    
}

cityfilter.on('change',handleChangeCity)

// // -----state-----
var statefilter = d3.select('#state')
  
function handleChangeState() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.state==filterValue
    }

    var filteredTable=tableData.filter(selectData)
    filteredTable.forEach((entry)=> {
        var row = tbody.append('tr')
        Object.entries(entry).forEach(([key,value]) => {
            var cell = row.append('td')
            cell.text(value)
        })
    })

    if(filterValue==''){
        tableData.forEach((entry)=> {
            var row = tbody.append('tr')
            Object.entries(entry).forEach(([key,value]) => {
                var cell = row.append('td')
                cell.text(value)
            })
        })
    }
    
}

statefilter.on('change',handleChangeState)

// // -----country-----
var countryfilter = d3.select('#country')
  
function handleChangeCountry() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.country==filterValue
    }

    var filteredTable=tableData.filter(selectData)
    filteredTable.forEach((entry)=> {
        var row = tbody.append('tr')
        Object.entries(entry).forEach(([key,value]) => {
            var cell = row.append('td')
            cell.text(value)
        })
    })

    if(filterValue==''){
        tableData.forEach((entry)=> {
            var row = tbody.append('tr')
            Object.entries(entry).forEach(([key,value]) => {
                var cell = row.append('td')
                cell.text(value)
            })
        })
    }
    
}

countryfilter.on('change',handleChangeCountry)

// // -----shape-----
var shapefilter = d3.select('#shape')
  
function handleChangeShape() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.shape==filterValue
    }

    var filteredTable=tableData.filter(selectData)
    filteredTable.forEach((entry)=> {
        var row = tbody.append('tr')
        Object.entries(entry).forEach(([key,value]) => {
            var cell = row.append('td')
            cell.text(value)
        })
    })

    if(filterValue==''){
        tableData.forEach((entry)=> {
            var row = tbody.append('tr')
            Object.entries(entry).forEach(([key,value]) => {
                var cell = row.append('td')
                cell.text(value)
            })
        })
    }
    
}

shapefilter.on('change',handleChangeShape)

// Change the filter names to corespond to what they are changing