let cells = 1;
let selectedColor = "red";
let coloring = false;

// Function to add rows to table
function addNewRows() {
  let table = document.getElementById("table");
  let row = document.createElement("tr");
  row.classList.add("row");
  table.appendChild(row);
  for (let i = 0; i < cells; i++) {
    let cell = document.createElement("td");
    helperFunction(cell);
    row.appendChild(cell);
  }
}

// Function to add new columns to table
function addNewCells() {
  cells++;
  let rows = document.getElementsByClassName("row");
  tr = Array.from(rows);
  for (let i = 0; i < tr.length; i++) {
    let cell = document.createElement("td");
    helperFunction(cell);
    tr[i].appendChild(cell);
  }
}

// Function to remove rows from table
function removeRow() {
  let rows = document.getElementsByClassName("row");
  tr = Array.from(rows);
  if (tr.length == 0) {
    return;
  }
  tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
  if (tr.length == 1) {
    cells = 1;
  }
}

// Function to remove columns from table
function removeCells() {
  if (cells == 1) {
    return;
  }
  cells--;
  let rows = document.getElementsByClassName("row");
  tr = Array.from(rows);
  for (let i = 0; i < tr.length; i++) {
    tr[i].removeChild(tr[i].lastChild);
  }
}

// Function to select color and save in variable for later use
const selectColor = (color) => {
  selectedColor = color;
};

// Helper function to add onlick method to all cells in table
function helperFunction(cell) {
  cell.addEventListener("click", changeColor);

  cell.addEventListener("mousedown", (e) => {
    coloring = true;
  });
  cell.addEventListener("mousemove", (e) => {
    if (coloring) {
      cell.style.backgroundColor = selectedColor;
    }
  });
  cell.addEventListener("mouseup", (e) => {
    if (coloring) {
      coloring = false;
    }
  });
}

// Changes the color of the cell that is clicked
function changeColor() {
  this.style.backgroundColor = selectedColor;
}
