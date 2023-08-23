$(document).ready(()=>{
    $('section').load('pages/home.html')

    $('#menuHome').click(()=>{
        $('section').load('pages/home.html')
    })
    $('#menuSobre').click(()=>{
        $('section').load('pages/sobre.html')
    })
    $('#menuProdutos').click(()=>{
        $('section').load('pages/produtos.html')
    })
    $('#menuContato').click(()=>{
        $('section').load('pages/contato.html')
    })
    
})

let data = [];

    function addEntry() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        

        if (name && email && phone) {
            const entry = { name, email, phone };
            data.push(entry);
            updateTable();
            clearForm();
        }
    }
    function updateTable() {
        const dataTable = document.getElementById("dataTable");

        dataTable.innerHTML = `
            <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>
        `;
        data.forEach(entry => {
            const row = dataTable.insertRow();
            const nameCell = row.insertCell(0);
            const emailCell = row.insertCell(1);
            const phoneCell = row.insertCell(2);

            nameCell.textContent = entry.name;
            emailCell.textContent = entry.email;
            phoneCell.textContent = entry.phone;
        });
    }