const table = document.querySelector(`table`);

function sortTable(index, type) {
    const sortedRows = Array.from(table.rows).slice(1);
    switch (type) {
        case `str`:
        case `interger`:
            sortedRows.sort((rowA, rowB) => rowA.cells[index].textContent - rowB.cells[index].textContent);
            table.tBodies[0].append(...sortedRows);
            break;

        case `name`:
        case `type`:
            sortedRows.sort((rowA, rowB) => rowA.cells[index].textContent > rowB.cells[index].textContent ? 1 : -1)
            table.tBodies[0].append(...sortedRows);
            break;
    }
}

table.addEventListener(`click`, (e) => {
    const el = e.target;
    if (el.tagName !== `TH`) return;
    const cellNum = el.cellIndex;
    const id = el.id;
    console.log(id, cellNum);
    sortTable(cellNum, id);
});
