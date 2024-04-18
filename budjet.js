let body = document.body;
let calcule = document.querySelector(".calcule");
let border_un = document.querySelector(".border_un");
let card_none = document.querySelector(".card_none");
let input_un_screen = document.querySelector(".input_un");
let numberVert = document.querySelector(".vert");
let numberVerte = document.querySelector(".verte");
let reset_Buttone = document.querySelector(".reset_Button");
let setting_icon = document.querySelector(".setting_icon");
let notification = document.querySelector(".notification");
let input_deux_screen = document.querySelector(".input_deux");
let input_trois_screen = document.querySelector(".input_trois");
let botton_expence = document.querySelector(".add_expense");
let numberRouge = document.querySelector(".rouge");
let tbody = document.querySelector("#tbody");
let delete_icon = document.querySelector('.delete_icon')
let edity_icon = document.querySelector('.edity')
let conte_un = document.querySelector('b')
let tbody_history = document.getElementById('tbody_history')
let tableau_history = document.querySelector('.tableau_history')
console.log(conte_un);
conte_un.addEventListener('click', function() {
  tableau_history.setAttribute("style", "display: block");

})


let total = 0;
let arrLabels = [];
let arrData = [];
//utilisation de botton reset 
reset_Buttone.addEventListener('click', function() {
  localStorage.clear();
  document.location.reload();
});
//Ajoute le localStorage du budget

let budget = 0;
if (!localStorage.getItem("budget")) {
  localStorage.setItem("budget", JSON.stringify(budget));
}//mise à jour de localStorage de budget
budget = JSON.parse(localStorage.getItem('budget'));


let showExpense = 0;
if (!localStorage.getItem("showExpense")) {
  localStorage.setItem("showExpense", JSON.stringify(showExpense));
}//mise à jour de localStorage de budget
showExpense = JSON.parse(localStorage.getItem('showExpense'))

//Ajoute le localStorage du balance
let balance = 0;
if (!localStorage.getItem("balance")) {
  localStorage.setItem("balance", JSON.stringify(balance));
}//mise à jour de localStorage de balance
balance = JSON.parse(localStorage.getItem('balance'))
//Ajoute le localStorage du table push

let array = [];
if (!localStorage.getItem("arrayExpense")) {
  localStorage.setItem("arrayExpense", JSON.stringify(array));
}//mise à jour de localStorage de array
array = JSON.parse(localStorage.getItem("arrayExpense"));

//utilisation de button de calculate
calcule.addEventListener("click", function () {
  if (input_un_screen.value == "") {
    afficheNotificationRouge(
      notification,
      "Please enter your budget",
      "Votre budget na pas été ajouter réessayer "
    );
  } else {
    budget = parseInt(budget) + parseInt(input_un_screen.value);
    localStorage.setItem("budget", JSON.stringify(budget));
    balance = parseInt(balance) + parseInt(input_un_screen.value);
    localStorage.setItem("balance", JSON.stringify(balance));
    afficheBudget();
    afficheNotification(
      notification,
      "Ajout de budget",
      "Votre budget à été ajouter avec success"
    );
    input_un_screen.value = "";
  }
});
//Calcule la valeur du budget dans le localStorage
function afficheBudget() {
  numberVert.textContent = budget + " F";
  numberVerte.textContent = balance + " F";
}
afficheBudget();
//La troixième partie de mon body
//partie 1
function afficheNotification(divNotification, hearder, contenu) {
  divNotification.classList.remove("border");
  divNotification.innerHTML = `
     <div class="notification">
          <div class="card_none">
            <h3 class="ajout">${hearder}</h3>
            <br>
              <p class="votre">${contenu}</p>
        </div>
      </div>
  `;
  setTimeout(() => {
    divNotification.classList.add("border");
  }, 5000);
}
//partie 2
function afficheNotificationRouge(divNotificationrouge, hearder, contenu) {
  divNotificationrouge.classList.remove("border");
  divNotificationrouge.innerHTML = `
     <div class="notification">
          <div class="card_nonerouge">
            <h3 class="notificationRouge">${hearder}</h3>
            <br>
              <p class="votreRouge">${contenu}</p>
        </div>
      </div>
  `;
  setTimeout(() => {
    divNotificationrouge.classList.add("border");
  }, 5000);
}
/* ==================================================================== */
//Afficher les valeur du tableau 
function afficheExpense() {
  tbody.innerHTML = "";
  array.forEach((el) => {
    tbody.innerHTML += `
    <tr>
    <td>${el.text}</td>
    <td>${el.numbre +" F"}</td>
    <div class="ligne"></div>
    <td class="center"><strong class="setting_icon "><i class="fa-solid fa-pen-to-square edity"></i> <i class="fa-solid fa-trash delete_icon"></i></strong></td>
    </tr>
    `;
  });
}
afficheExpense();
// affiche les valeur du table dans la troixieme colone
function afficheHistory() {
  tbody_history.innerHTML = "";
  array.forEach((element, index) =>{
    tbody_history.innerHTML += `
    <tr>
    <td>${index + 1}</td>
    <td>${element.text}</td>
    <td>${element.numbre + " F"}</td>
    <div class="ligne"></div>
    </tr>
    
    `;

  })
}
afficheHistory()
// utilisation du button add expense
botton_expence.addEventListener("click", function () {
  if (input_trois_screen.value == "") {
    afficheNotificationRouge(notification, "Please enter your depense", "Votre depense na pas été ajouter réessayer"
    );
  }
  if (input_deux_screen.value == "") {
    alert("Please Enter Your Expense");
  }
  else {
    balance = parseInt(balance) - parseInt(input_trois_screen.value);
    localStorage.setItem("balance", JSON.stringify(balance));
    afficheNotification(notification, "Ajout de la depense", "Votre depense à été ajouté avec success"
    );
    const valeur = {
      text: input_deux_screen.value,
      numbre: input_trois_screen.value
    };
    array.push(valeur);
    localStorage.setItem("arrayExpense", JSON.stringify(array));
    afficheExpense();
    input_deux_screen.value = "";
    input_trois_screen.value = "";
    expense()
    document.location.reload()
    //Afficher les valeur de l'input dans la chart circle
    function affichelabel() {
      valeur.push(input_deux_screen.value)
    }
    affichelabel()
// Utilisation de l'icon Modification
edity_icon.addEventListener('click', edityTaske);
edity_icon.input_deux_screen = [index].input_deux_screen;
// Utilisation de l'icon delete
delete_icon.addEventListener('click', deleteTaske);
delete_icon.input_deux_screen = [index].input_deux_screen;
function deleteTaske(event) {
  debugger;
}
function edityTaske(event) {
  debugger;
}
  }
});

// donner la valeur de input_trois à la paragraphe de l'icon expense
function expense() {
  total = 0;
let expense = JSON.parse(localStorage.getItem("arrayExpense"))
localStorage.setItem("arrayExpense", JSON.stringify(array));
expense.forEach(element => {
  total = total + parseInt(element.numbre); 
});
showExpense = total;
  localStorage.setItem("showExpense", JSON.stringify(showExpense));
numberRouge.textContent = showExpense + " F";
}
expense()

function creatColor() {
  let color = "0123456789ABCDEF";
  let htag = "#";
  console.log(htag);
  for (let i = 0; i < 6; i++) {
    htag += color[Math.floor(Math.random() * 16)];
  }
  return htag;
}
 /* ====================================colone troix====== */
//// chart 
document.addEventListener("DOMContentLoaded", function(){
    const ctx = document.getElementById("myChart");
    let varChart =  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [
    ],
      datasets: [
        {
          // label: "# of Votes",
          data: [ 
          ],
          backgroundColor: [
          ],
          borderWidth: 2
        },
      ],
    },
  });
function chartElement() {
  let arr = array;
  varChart.data.labels = [];
  varChart.data.datasets[0].data = [];
  varChart.data.datasets[0].backgroundColor = [];
  arr.forEach((element) => {
    varChart.data.labels.push(element.text);
    varChart.data.datasets[0].data.push(element.numbre);
    varChart.data.datasets[0].backgroundColor.push(creatColor())
  })
}
  chartElement();
})


 


