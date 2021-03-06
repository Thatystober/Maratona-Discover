const modal = {
    open(){
        document.querySelector('.modal-overlay')
        .classList.add('active');
    },
    close(){
        document.querySelector('.modal-overlay')
        .classList.remove('active');
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2022'
    },
    {
        id: 2,
        description: 'WebSite',
        amount: -500000,
        date: '23/01/2022'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2022'
    },
]

const transaction = {
    incomes(){
        // somar as entradas
    },
    expenses(){
        // somar as saídas
    },
    total(){

    }
}

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);

        DOM.transactionsContainer.appendChild(tr);
    },
    innerHTMLTransaction(transaction){

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html
    }
}

transactions.forEach((transaction) => {
    DOM.addTransaction(transaction);
})