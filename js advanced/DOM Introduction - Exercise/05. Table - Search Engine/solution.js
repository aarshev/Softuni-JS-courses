function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let dataRows = Array.from(document.querySelectorAll('tbody > tr'));
      let searchField = document.getElementById("searchField").value;
         dataRows.map(e => {
            e.classList.remove('select');
            if (e.innerText.includes(searchField)) {
                e.className = 'select';
            }
        });
        searchField.value = '';

   }
}