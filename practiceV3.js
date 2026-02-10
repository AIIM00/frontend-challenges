const name = document.getElementById('name');
const age = document.getElementById('age');
const year = document.getElementById('year');
const btn = document.getElementById('addbtn');
const tableBody = document.getElementById('tableBody');

btn.addEventListener('click', function() {
    event.preventDefault();
    const nameValue = name.value;
    const ageValue = age.value;
    const yearValue = year.value;
    //td is table data / th is table header
    tableBody.innerHTML += `
                            <td>${nameValue}</td>
                            <td>${ageValue}</td>
                            <td>${yearValue}</td>
                            `;
})