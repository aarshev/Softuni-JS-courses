window.addEventListener('load', solve);

function solve() {
    let addBtn = document.getElementById('add');
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let finalPrice = document.getElementsByClassName('total-price')[0];

    addBtn.addEventListener("click", addToTable)


    function addToTable(event){
        event.preventDefault();
        let furnitureList = document.getElementById(`furniture-list`);
        let priceValue = Number(price.value)
        let yearValue = Number(year.value)
        if(model.value != "" && description.value != "" && priceValue > 0 && yearValue >0){
            let tr = document.createElement('tr');
            tr.classList.add("info")
            let trH = document.createElement('tr');
            trH.classList.add("hide")


            tr.innerHTML += `<td>${model.value}</td>
                            <td>${priceValue.toFixed(2)}</td>
                            <td>
                            <button class="moreBtn">More Info</button>
                            <button class="buyBtn">Buy it</button>
                            </td>`

            trH.innerHTML += `<td>Year: ${yearValue}</td>
                            <td colspan="3">Description: ${description.value}</td>
                            `
            furnitureList.appendChild(tr);
            furnitureList.appendChild(trH);

            model.value = ""
            year.value = ""
            description.value = ""
            price.value = ""


            const moreBtn = tr.querySelectorAll(`button`)[0];
            const buyBtn = tr.querySelectorAll(`button`)[1];

            moreBtn.addEventListener("click", moreBtnFn)
            buyBtn.addEventListener("click", buyBtnFn)
        }
    }


    function moreBtnFn(e){
        let arrHidden = Array.from(document.getElementsByClassName("hide"));
        if(e.target.textContent == "More Info"){
            e.target.textContent = "Less Info"
            for(let el of arrHidden){
                if(el.rowIndex == e.target.parentNode.parentNode.rowIndex + 1){
                    el.style.display = "contents";
                }
            }
        }else{
            e.target.textContent = "More Info"
            for(let el of arrHidden){
                if(el.rowIndex == e.target.parentNode.parentNode.rowIndex + 1){
                    el.style.display = "none";
                }
            }
        }
    }

    function buyBtnFn(e){
        let price = Number(e.target.parentNode.parentNode.querySelectorAll("td")[1].textContent)
        finalPrice.textContent = (Number(finalPrice.textContent) + price).toFixed(2);
        arrHidden = Array.from(document.getElementsByClassName("hide"));
        for(let el of arrHidden){
            if(el.rowIndex == e.target.parentNode.parentNode.rowIndex + 1){
                el.remove()
                break;
            }
        }
        e.target.parentNode.parentNode.remove()
    }
}
