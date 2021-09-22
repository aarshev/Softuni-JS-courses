function solve(arr){
    arr.shift();
    let result = [];
    for(let el of arr){
        let [town, lat, lon] = el.split(" | ");
        town = town.split("| ")[1];
        lon = lon.split(" |")[0];
        
        result.push({"Town":town, "Latitude": Number(Number(lat).toFixed(2)), "Longitude": Number(Number(lon).toFixed(2))})
    }

    console.log(JSON.stringify(result))
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']

)

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)