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
      this.expenseList = document.getElementById("expense-list");
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
        console.log(`Eu estou pegando o 'this' keyword`);
    }
  }
  
  function eventListenters(){
      const budgetForm = document.getElementById('budget-form');
      const expenseForm = document.getElementById('expense-form');
      const expenseList = document.getElementById('expense-list');
  
      // Nova instância do UI Class
      const ui = new UI()
  
      // Submit do fórmulario do Formulário de Despesas
      budgetForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitBudgetForm();
        
      })
      // Submit do fórmulario do Formulário de uma despesa
      expenseForm.addEventListener('submit', function(event){
        event.preventDefault();
      })
      // Click do formulário de despesa
      expenseList.addEventListener('click', function(event){
  
      })
  }
  
  document.addEventListener('DOMContentLoaded', function(){
    eventListenters();
  })