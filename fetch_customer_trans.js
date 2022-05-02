let tableHead3 = document.getElementById('table-head3');
let tableBody3 = document.getElementById('table-body3');


async function getTransData() {
    let res = await fetch('./data/customer_account_transaction.csv');

    const data = await res.text();

    return data;
}

showTransData();


async function showTransData() {



    let transData = await getTransData();
    var tableTransData = transData.split(/\n/);

    tableTransData.slice(0, 1).forEach(row => {
        const headerRow3 = row.split(',');

        let headerCells3 = headerRow3.map((cell) => {
            return `<th>${cell}</th>`
        }).join('')

        let headRow3 = document.createElement('tr');
        headRow3.innerHTML = headerCells3;
        tableHead3.appendChild(headRow3);


    })

    tableTransData.slice(1).forEach(row => {
        const extractedRow = row.split(',');

        let rowCells3 = extractedRow.map((cell) => {
            return (`<td>${cell}</td>`)
            // <td>${lastName}</td><td>${age}</td>`
        }).join('')

        let bodyRow3 = document.createElement('tr');
        bodyRow3.className = 'table-row'
        bodyRow3.innerHTML = rowCells3;
        tableBody3.appendChild(bodyRow3);



    })

}




