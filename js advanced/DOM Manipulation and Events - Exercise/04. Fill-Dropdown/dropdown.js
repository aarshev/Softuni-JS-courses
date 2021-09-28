function addItem() {
    let dropDownText = document.getElementById("newItemText");
    let dropDownValue = document.getElementById("newItemValue");

    let optionEl = document.createElement('option');
    optionEl.value = dropDownValue.value;
    optionEl.textContent = dropDownText.value;

    document.getElementById("menu").appendChild(optionEl);
    dropDownText.value = ""
    dropDownValue.value = ""
}