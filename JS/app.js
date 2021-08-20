// Classes
class Budget{
    constructor(budget){
        this.budget=budget;
        this.leftBudget=budget;
    }
    subtractFromBudget(amount){
        return this.leftBudget-=amount;
    }
}
// everything related to HTML
class HTML{
    insertAmount(amount){
        let leftBudgetBtn=document.querySelector('.left-budget-btn') ;
        leftBudget.innerHTML=amount;
    }
    printMessage(message,className){
        const div=document.createElement('div');
        div.classList.add("alert" , "text-center", className);
        div.innerText=message;
        const errorSection=document.querySelector('.error-section');
        errorSection.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 2000);
    }

    insertExpense(name,amount){
        const expenses=document.querySelector('#expenses ul');
        let li=document.createElement('li');
        li.className="expense-added";
        li.innerHTML=`
        ${name}
        <span class="badge rounded-pill bg-primary">${amount} تومان </span> 
        `
        expenses.appendChild(li);
        addExpenseForm.reset()
    }

    trackAmount(amount){
        const budgetLeftTomans=budget.subtractFromBudget(amount);
        leftBudget.innerHTML=`${budgetLeftTomans}`;
         
        if ((budget.budget/4)>budgetLeftTomans) {
            insertButtns.children[1].classList.remove('left-budget-btn')
            insertButtns.children[1].classList.add('left-budget-btn-danger')
            
        }
        else if((budget.budget/2)>budgetLeftTomans){
            // insertButtns.firstElementChild.classList.replace(left-budget-btn,left-budget-btn-warning)
            insertButtns.children[1].classList.remove('left-budget-btn')
            insertButtns.children[1].classList.add('left-budget-btn-warning')
        }
    }
}

// Variables
let budget;
let userBudget;
const addExpenseForm=document.querySelector('#add-expense');
let addBudgetBtn=document.querySelector('.add-budget-btn');
let leftBudget=document.querySelector('span#left');
let leftBudgetBtn=document.querySelector('.left-budget-btn');
let insertButtns=document.querySelector('.insert-budget-btns');

const html=new HTML()

// EventListeners
eventListeners()
function eventListeners(){

    addBudgetBtn.addEventListener('click',function(e){
        e.preventDefault()
        userBudget=prompt('لطفا مقدار بودجه هفته را وارد کنید');
        

        // Validate User Budget
        if (userBudget==null || userBudget=='' || userBudget=='0') {
            location.reload();
        }
        else{
            budget=new Budget(userBudget);
            html.insertAmount(budget.budget)
        }
    })

    // Get Value of inputs
    addExpenseForm.addEventListener('submit',function(e){
        e.preventDefault();
        const expenses=document.querySelector('#expense').value;
        const amount=document.querySelector('#amount').value;

        if (expenses==='' || amount==='') {
            html.printMessage('لطفا فیلد ها را به درستی تکمیل کنید' , 'alert-danger')
        }else{
            html.insertExpense(expenses,amount);
            html.trackAmount(amount);
        }
    })
    
     
}