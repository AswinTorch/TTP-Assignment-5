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

function addNewCells() {
    cells++;
    let rows = document.getElementsByClassName("row");
    tr = Array.from(rows);
    //console.log(tr);
    for(let i = 0; i < tr.length; i++) {
        let cell = document.createElement("td");
        tr[i].appendChild(cell);
        cell.textContent = "1";
    }
}

function removeRow() {
    let rows = document.getElementsByClassName("row");
    tr = Array.from(rows);
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}
