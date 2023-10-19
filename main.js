//Exercise 3.2

function generate(event) {
    /*The line below prevents the form from trying to 
    send data to a server and refreshing the page*/
    event.preventDefault();

    //Exercise 3.3 
    
    
    //Exercise 3.4


    /*The lines below hide the form and show the invitation*/
    this.style.display = 'none';
    document.getElementById("invitation-card").style.display = "block";
}

//Exercise 3.5