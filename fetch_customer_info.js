let tableHead2 = document.getElementById('table-head2');
let tableBody2 = document.getElementById('table-body2');


async function getInfoData() {
    let res = await fetch('./data/customer_account_info.csv');

    const data = await res.text();
    console.log(data);

    return data;
}

showInfoData();


async function showInfoData() {



    let infoData = await getInfoData();
    var tableInfoData = infoData.split(/\n/);

    tableInfoData.slice(0, 1).forEach(row => {
        const headerRow2 = row.split(',');

        let headerCells2 = headerRow2.map((cell) => {
            return `<th>${cell}</th>`
        }).join('')

        let headRow2 = document.createElement('tr');
        headRow2.innerHTML = headerCells2;
        tableHead2.appendChild(headRow2);


    })

    tableInfoData.slice(1).forEach(row => {
        const extractedRow = row.split(',');

        let rowCells2 = extractedRow.map((cell) => {
            return (`<td>${cell}</td>`)
            // <td>${lastName}</td><td>${age}</td>`
        }).join('')

        let bodyRow2 = document.createElement('tr');
        bodyRow2.className = 'table-row'
        bodyRow2.innerHTML = rowCells2;
        tableBody2.appendChild(bodyRow2);

        // console.log(tableData)


    })

}




