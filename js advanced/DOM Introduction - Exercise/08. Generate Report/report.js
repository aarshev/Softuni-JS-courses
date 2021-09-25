function generateReport() {
    let inputHeadings = Array.from(document.querySelectorAll('thead th'));
    let objHeadings = {};
    
    for(let i = 0; i < inputHeadings.length; i++){
        if(inputHeadings[i].children[0].checked){
            if(!objHeadings[i]){
                objHeadings[i] = {"name" : inputHeadings[i].textContent.trim()}
            }
        }
    }
    let headIndexes = Object.keys(objHeadings).map(Number);

    let inputRows = Array.from(document.querySelectorAll('tbody tr'));
    let resultArr = []

    for(let i = 0; i < inputRows.length; i++){
        let cellsArr = Array.from(inputRows[i].children);
        let tempObj = {}
        for(let y = 0; y < cellsArr.length; y++){
            if(headIndexes.includes(y)){
                tempObj[objHeadings[y]["name"].toLowerCase()] = cellsArr[y].textContent
            }
        }
        resultArr.push(tempObj)
    }

    document.getElementById("output").value = JSON.stringify(resultArr)
}