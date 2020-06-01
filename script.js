let cells = 1;
let selectedColor = "lightgrey";

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
    if (tr.length == 0) {
        return;
    }
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
    if(tr.length == 1) {
        cells = 1;
    }
}


function removeCells() {
    if(cells == 1) {
        return;
    }
    cells--;
    let rows = document.getElementsByClassName("row");
    tr = Array.from(rows);
    for(let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }

 const selectColor = (colorDiv) => {
    selectedColor = colorDiv.id;
    document.getElementById("color-span").innerText = selectedColor.toUpperCase();
    console.log(selectedColor)
 }