//Exercise 3.2

let form = document.querySelector('#form');
function generate(event) {
    /*The line below prevents the form from trying to 
    send data to a server and refreshing the page*/
    event.preventDefault();
    
    //Exercise 3.3 
    let invitee = document.querySelector('#invitee').value;
    let date = document.querySelector('#date').value;
    let sender = document.querySelector('#sender').value;
    let button = document.querySelector('#button').value;
    console.log("test");
    
    console.log(invitee, date, sender, button);

    // solution 1 
    document.querySelector('#party-invitee').textContent = invitee;
 
    document.querySelector('#party-date').textContent = date;
   
    document.querySelector('#party-host').textContent = sender;
  
    //Exercise 3.4


    /*The lines below hide the form and show the invitation*/
    this.style.display = 'none';
    document.getElementById("invitation-card").style.display = "block";
}

//Exercise 3.5

form.addEventListener("submit", generate);