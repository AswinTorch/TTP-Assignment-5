let cells = 1;
function addNewRows() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for(let i = 0; i < cells; i++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
        cell.textContent = "1";
    }
}
