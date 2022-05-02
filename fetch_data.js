let tableHead = document.getElementById('table-head');
let tableBody = document.getElementById('table-body');


async function getData() {
    let response = await fetch('./data/staff_records.csv');

    const data = await response.text();
    // console.log(data);

    return data;
}

showData();


async function showData() {



    let data = await getData();
    var tableData = data.split(/\n/);

    tableData.slice(0, 1).forEach(row => {
        const headerRow = row.split(',');

        let headerCells = headerRow.map((cell) => {
            return `<th>${cell}</th>`
        }).join('')

        let headRow = document.createElement('tr');
        headRow.innerHTML = headerCells;
        // headerRow[2].setAttribute('data-type', 'number')
        tableHead.appendChild(headRow);
    })

    tableData.slice(1).forEach(row => {
        const extractedRow = row.split(',');

        // const firstName = extractedRow[0];
        // const lastName = extractedRow[1];
        // const age = extractedRow[2];

        let rowCells = extractedRow.map((cell) => {
            return (`<td>${cell}</td>`)
            // <td>${lastName}</td><td>${age}</td>`
        }).join('')

        let bodyRow = document.createElement('tr');
        bodyRow.className = 'table-row'
        bodyRow.innerHTML = rowCells;
        tableBody.appendChild(bodyRow);

        // console.log(tableData)




    })

    let table = document.getElementById('staff-records');

    const rows = tableBody.rows.length;
    let columns = tableBody.rows[0].cells.length;

    let clickPrev = -1;

    function sortTable(headerIndex) {

        const dataTable = [...Array(rows)].map(row => Array(columns));

        for (let rowEl = 0; rowEl < rows; rowEl++) {
            for (let colEl = 0; colEl < columns; colEl++) {
                dataTable[rowEl][colEl] = tableBody.rows[rowEl].cells[colEl].innerHTML;
            }
        }

        // const tHead = dataTable.shift();

        if (headerIndex - 1 !== clickPrev) {
            dataTable.sort(
                function (a, b) {
                    if (a[headerIndex - 1] === b[headerIndex - 1]) {
                        return 0;
                    } else {
                        return (a[headerIndex - 1] < b[headerIndex - 1]) ? -1 : 1;
                    }
                }
            );
        } else { // if the same column is headerIndex then reverse the array
            dataTable.reverse();
        }

        clickPrev = headerIndex - 1;

        // dataTable.unshift(tHead);

        for (let rowEl = 0; rowEl < rows; rowEl++) {
            for (let colEl = 0; colEl < columns; colEl++) {
                tableBody.rows[rowEl].cells[colEl].innerHTML = dataTable[rowEl][colEl];
            }
        }


    }



    const sortDataBtnOne = document.getElementById('sort-data-1');

    // const sortDataBtnTwo = document.getElementById('sort-data-2');

    // const sortDataBtnThree = document.getElementById('sort-data-3');

    // console.log(sortDataInput);


    sortDataBtnOne.addEventListener('click', function (e) {
        e.preventDefault();
        var sortDataInput = Number(prompt('Enter 1 to sort by First Name OR Enter 2 to sort by Last Name OR Enter 3 to sort by Age'));

        while (sortDataInput > 3) {
            sortDataInput = Number(prompt('Enter 1 to sort by First Name OR Enter 2 to sort by Last Name OR Enter 3 to sort by Age'));
        }
        while (sortDataInput < 0) {
            sortDataInput = Number(prompt('Enter 1 to sort by First Name OR Enter 2 to sort by Last Name OR Enter 3 to sort by Age'));
        }
        while (sortDataInput.length == 0) {
            sortDataInput = Number(prompt('Enter 1 to sort by First Name OR Enter 2 to sort by Last Name OR Enter 3 to sort by Age'));
        }
        sortTable(sortDataInput);
    })



    // console.log(tableData)
}




