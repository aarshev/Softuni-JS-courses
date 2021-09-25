function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputValue = JSON.parse(document.querySelector("#inputs textarea").value)
      let obj = {};
      for(let el of inputValue){
         let [restaurant, ...workers] = el.split(" - ");
         workers = workers[0].split(", ");
         for(let elem of workers){
            let [name, salary] = elem.split(" ");
            salary = Number(salary);
            if(!obj[restaurant]){
               obj[restaurant] = {}
            }
            if(!obj[restaurant]["sumSalary"]){
               obj[restaurant]["sumSalary"] = 0;
            }
            if(!obj[restaurant]["countWorkers"]){
               obj[restaurant]["countWorkers"] = 0;
            }

            if(!obj[restaurant]["avgSalary"]){
               obj[restaurant]["avgSalary"] = 0;
            }

            if(!obj[restaurant]["topSalary"]){
               obj[restaurant]["topSalary"] = salary;
            }

            obj[restaurant][name] = salary
            obj[restaurant]["sumSalary"] += salary;
            obj[restaurant]["countWorkers"] += 1;
            obj[restaurant]["avgSalary"] =  obj[restaurant]["sumSalary"] / obj[restaurant]["countWorkers"];
            if(obj[restaurant]["topSalary"] < salary){
               obj[restaurant]["topSalary"] = salary
            }
            
         }
      }

      let entries = Object.entries(obj);
      sorted = entries.sort(function(a, b) {return b[1]["avgSalary"] - a[1]["avgSalary"]});

     
      let entriesTop = Object.entries(sorted[0][1]);
      let sortedTop = entriesTop.sort((a,b) => b[1] - a[1]);
      
      let str = ""
      for(let el of sortedTop){
         if(el[0] != "avgSalary" && el[0] != "sumSalary" && el[0] != "topSalary" && el[0] != "countWorkers"){
            str += `Name: ${el[0]} With Salary: ${el[1]} `
         }
      }

      document.querySelector('#bestRestaurant p').textContent = `Name: ${sorted[0][0]} Average Salary: ${(sorted[0][1]["avgSalary"]).toFixed(2)} Best Salary: ${(sorted[0][1]["topSalary"]).toFixed(2)}`
      document.querySelector('#workers p').textContent = str.trim();
   }
}