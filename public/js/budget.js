class UI {
    constructor() {
      this.budgetFeedback = document.querySelector(".budget-feedback");
      this.expenseFeedback = document.querySelector(".expense-feedback");
      this.budgetForm = document.getElementById("budget-form");
      this.budgetInput = document.getElementById("budget-input");
      this.budgetAmount = document.getElementById("budget-amount");
      this.expenseAmount = document.getElementById("expense-amount");
      this.balance = document.getElementById("balance");
      this.balanceAmount = document.getElementById("balance-amount");
      this.expenseForm = document.getElementById("expense-form");
      this.expenseInput = document.getElementById("expense-input");
      this.amountInput = document.getElementById("amount-input");
      this.expenseList = document.getElementById("expenses");
      this.itemList = [];
      this.itemID = 0;
    }
    // Submit do método da Despesas
    submitBudgetForm(){
        const value = this.budgetInput.value;
        if(value==="" || value <0){
            this.budgetFeedback.classList.add("showItem");
            this.budgetFeedback.innerHTML = `<p>Valor não pode ser vazio ou negativo</p>`;
            const selfFeedback = this;
            setTimeout(function(){
                selfFeedback.budgetFeedback.classList.remove("showItem");

            },4000)
        }
        else{
            this.budgetAmount.textContent = value;
            this.budgetInput.value = "";
            this.showBalance();
        }
    }
    // Mostrar balanço
    showBalance(){
        const expense = this.totalExpense();
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.textContent = total;
        if(total < 0){
            this.balance.classList.remove("showGreen", "showBlack");
            this.balance.classList.add("showRed");
        }
        else if(total > 0){
            this.balance.classList.remove("showRed", "showBlack");
            this.balance.classList.add("showGreen");
        }
        else if(total === 0){
            this.balance.classList.remove("showRed", "showGreen");
            this.balance.classList.add("showBlack");
        }
    }
    // Submit do formulário de Despesas
    submitExpenseForm(){
        const expenseValue = this.expenseInput.value;
        const amountValue = this.amountInput.value;
        if(expenseValue === "" || amountValue === "" || amountValue < 0){
            this.expenseFeedback.classList.add("showItem");
            this.expenseFeedback.innerHTML = `<p> Valores não podem ser vazio ou negativo</p>`
            const selfFeedback = this;
            setTimeout(function(){
                selfFeedback.expenseFeedback.classList.remove("showItem")
            },4000);
        }
        else{
            let amount = parseInt(amountValue);
            this.expenseInput.value = "";
            this.amountInput.value = "";

            let expense = {
                id: this.itemID,
                title: expenseValue,
                amount: amount,
            }
            this.itemID++;
            this.itemList.push(expense);
            this.addExpense(expense);
            // Mostrar balanço
            this.showBalance();
        }
    }
    // Adicionando despesa
    addExpense(expense){
        const div = document.createElement("tr");
        div.classList.add("expense");
        div.innerHTML = `
        <tr class="expense-item">
        <td class="expense-title">${expense.title}</td>
        <td class="expense-amount list-item">${expense.amount}</td>
            <td>
            <a href="#" class="edit-icon" data-id="${expense.id}">
                <i class="icone-editar">Editar</i>
            </a>
            <a href="#" class="delete-icon" data-id="${expense.id}">
                <i class="icone-deletar">Deletar</i>
            </a>
            </td>
        
    </tr>
        `;
        this.expenseList.appendChild(div);
    }
    // Total das despesas
    totalExpense(){
        let total = 0;
        if(this.itemList.length > 0){
            total = this.itemList.reduce(function(accumulate,current){
                accumulate += current.amount
                return accumulate;
            },0)
        }
        this.expenseAmount.textContent = total;
        return total;
    }
    // Editar Despesa
    editExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement;
        // Removendo do DOM 
        this.expenseList.removeChild(parent);
        // Removendo da DOM da lista
        let expense = this.itemList.filter(function(item){
            return item.id === id;
        })
        // Mostrando valor
        this.expenseInput.value = expense[0].title;
        this.amountInput.value = expense[0].amount;
        // Removendo da lista
        let tempList = this.itemList.filter(function(item){
            return item.id != id;
        })
        this.itemList = tempList;
        this.showBalance()
    }
    // Deletar Despesa
    deleteExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement;
        // Removendo do DOM 
        this.expenseList.removeChild(parent);
        // Removendo da lista
        let tempList = this.itemList.filter(function(item){
            return item.id != id;
        });
        this.itemList = tempList;
        this.showBalance();
    }
  }
  
  function eventListenters(){
      const budgetForm = document.getElementById('budget-form');
      const expenseForm = document.getElementById('expense-form');
      const expenseList = document.getElementById('expense-list');
  
      // Nova instância do UI Class
      const ui = new UI()
  
      // Submit do fórmulario de Ganho
      budgetForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitBudgetForm();
        
      })
      // Submit do Formulário de Despesas
      expenseForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitExpenseForm();
      })
      // Click do formulário de Despesas
      expenseList.addEventListener('click', function(event){
        if(event.target.parentElement.classList.contains("edit-icon")){
            ui.editExpense(event.target.parentElement)
        }
        else if(event.target.parentElement.classList.contains("delete-icon")){
            ui.deleteExpense(event.target.parentElement)
        }
      })
  }
  
  document.addEventListener('DOMContentLoaded', function(){
    eventListenters();
  })