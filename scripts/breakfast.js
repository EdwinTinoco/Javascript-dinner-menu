firstOpEnMe = () => {
    var entreeCb1 = document.getElementById('entreeCb1');            
    var entreeComment = document.getElementById("entree-comment");
    let entreeMenuWaitressComments = [
        "You have a good taste Sr.!",
        "That's my favorite meal.",
        "Do you want spicy sauce?",
        "It's a nice day to enjoy a nice entree plate.",
        "I prefer this meal than the other one!"
    ]
    
    randomComment = (entreeMenuWaitressComments) => {
        let idxComment = Math.floor(Math.random() * entreeMenuWaitressComments.length);
        return entreeMenuWaitressComments[idxComment];
    }

    if (entreeCb1.checked){                   
        entreeComment.innerHTML += `- ${randomComment(entreeMenuWaitressComments)}. You have two sides choices included in your meal!<br/>`;                    
    }           
}

secondOpEnMe = () => {
    var entreeCb2 = document.getElementById('entreeCb2');
    var entreeComment = document.getElementById("entree-comment");
    let entreeMenuWaitressComments = [
        "You have a good taste Sr.!",
        "That's my favorite meal.",
        "Do you want spicy sauce?",
        "It's a nice day to enjoy a nice entree plate.",
        "I prefer this meal than the other one!"
    ]
    
    randomComment = (entreeMenuWaitressComments) => {
        let idxComment = Math.floor(Math.random() * entreeMenuWaitressComments.length);
        return entreeMenuWaitressComments[idxComment];
    }         

    if (entreeCb2.checked){                   
        entreeComment.innerHTML += `- ${randomComment(entreeMenuWaitressComments)}. You have two sides choices included in your meal!<br/>`;                    
    } 
}

thirdOpEnMe = () => {
    var entreeCb3 = document.getElementById('entreeCb3');
    var entreeComment = document.getElementById("entree-comment");
    let entreeMenuWaitressComments = [
        "You have a good taste Sr.!",
        "That's my favorite meal.",
        "Do you want spicy sauce?",
        "It's a nice day to enjoy a nice entree plate.",
        "I prefer this meal than the other one!"
    ]
    
    randomComment = (entreeMenuWaitressComments) => {
        let idxComment = Math.floor(Math.random() * entreeMenuWaitressComments.length);
        return entreeMenuWaitressComments[idxComment];
    }           

    if (entreeCb3.checked){                   
        entreeComment.innerHTML += `- ${randomComment(entreeMenuWaitressComments)}. You have two sides choices included in your meal! <br/>`;                    
    } 
}

fourthOpEnMe = () => {
    var entreeCb4 = document.getElementById('entreeCb4');
    var entreeComment = document.getElementById("entree-comment");
    let entreeMenuWaitressComments = [
        "You have a good taste Sr.!",
        "That's my favorite meal.",
        "Do you want spicy sauce?",
        "It's a nice day to enjoy a nice entree plate.",
        "I prefer this meal than the other one!"
    ]
    
    randomComment = (entreeMenuWaitressComments) => {
        let idxComment = Math.floor(Math.random() * entreeMenuWaitressComments.length);
        return entreeMenuWaitressComments[idxComment];
    }         

    if (entreeCb4.checked){                   
        entreeComment.innerHTML += `- ${randomComment(entreeMenuWaitressComments)}. You have two sides choices included in your meal!<br/>`;                    
    } 
}

firstOpSiMe = () => {
    var sideCb1 = document.getElementById('sideCb1');            
    var sideComment = document.getElementById("side-comment");
    let sideMenuWaitressComments = [
        "I love that side!",
        "Good side choice.",
        "This side taste good with everything."
    ]  
    
    randomComment = (sideMenuWaitressComments) => {
        let idxComment = Math.floor(Math.random() * sideMenuWaitressComments.length);
        return sideMenuWaitressComments[idxComment];
    }
    
    if (sideCb1.checked){
        sideComment.innerHTML += `- ${randomComment(sideMenuWaitressComments)}.<br/>`;                    
    } 
}

secondOpSiMe = () => {
    var sideCb2 = document.getElementById('sideCb2');
    var sideComment = document.getElementById("side-comment");
    let sideMenuWaitressComments = [
        "I love that side!",
        "Good side choice.",
        "This side taste good with everything."
    ]  
    
    randomComment = (sideMenuWaitressComments) => {
        let idxComment = Math.floor(Math.random() * sideMenuWaitressComments.length);
        return sideMenuWaitressComments[idxComment];
    }
    
    if (sideCb2.checked){
        sideComment.innerHTML += `- ${randomComment(sideMenuWaitressComments)}.<br/>`;                    
    } 
}

thirdOpSiMe = () => {
    var sideCb3 = document.getElementById('sideCb3');
    var sideComment = document.getElementById("side-comment");
    let sideMenuWaitressComments = [
        "I love that side!",
        "Good side choice.",
        "This side taste good with everything."
    ]  
    
    randomComment = (sideMenuWaitressComments) => {
        let idxComment = Math.floor(Math.random() * sideMenuWaitressComments.length);
        return sideMenuWaitressComments[idxComment];
    }
    
    if (sideCb3.checked){
        sideComment.innerHTML += `- ${randomComment(sideMenuWaitressComments)}.<br/>`;                    
    } 
}

clearValues = () => {
    if (confirm("Do you want to clear all the values in the Breakfast Menu?")) {
        var entreeCb1 = document.getElementById('entreeCb1');
        var entreeCb2 = document.getElementById('entreeCb2');
        var entreeCb3 = document.getElementById('entreeCb3');
        var entreeCb4 = document.getElementById('entreeCb4');
        var sideCb1 = document.getElementById('sideCb1');
        var sideCb2 = document.getElementById('sideCb2');
        var sideCb3 = document.getElementById('sideCb3');
        var sideComment = document.getElementById("side-comment");
        var entreeComment = document.getElementById("entree-comment");
        const totalUp = document.getElementById("total");  

        entreeComment.innerHTML = "";
        sideComment.innerHTML = "";
        totalUp.innerHTML = "$0";
        if (entreeCb1.checked){
            entreeCb1.checked = false;              
        }
        if (entreeCb2.checked){
            entreeCb2.checked = false;              
        }
        if (entreeCb3.checked){
            entreeCb3.checked = false;              
        }
        if (entreeCb4.checked){
            entreeCb4.checked = false;              
        }
        if (sideCb1.checked){
            sideCb1.checked = false;              
        } 
        if (sideCb2.checked){
            sideCb2.checked = false;              
        } 
        if (sideCb3.checked){
            sideCb3.checked = false;              
        } 
    }
}

function orders(){
    const breakfastEntreePrices = {
        1: 13.99,
        2: 12.99,
        3: 10.99,
        4: 11.99
    }

    const breakfastSidePrices = {
        1: 2.99,
        2: 1.99,
        3: 3.99
    }

    function entreeClientOrders(){
    var entreeCb1 = document.getElementById('entreeCb1');
    var entreeCb2 = document.getElementById('entreeCb2');
    var entreeCb3 = document.getElementById('entreeCb3');
    var entreeCb4 = document.getElementById('entreeCb4');
    var comment = document.getElementById("m-comment");
    let orders = [];

        if (entreeCb1.checked){
            orders.push(1);
        }

        if (entreeCb2.checked){
            orders.push(2);
        }

        if (entreeCb3.checked){
            orders.push(3);
        }

        if (entreeCb4.checked){
            orders.push(4);
        }

        return orders
    }

    function sideClientOrders(){
    var sideCb1 = document.getElementById('sideCb1');
    var sideCb2 = document.getElementById('sideCb2');
    var sideCb3 = document.getElementById('sideCb3'); 
    let orders = [];
        
        if (sideCb1.checked){
            orders.push(1);
        }
        
        if (sideCb2.checked){
            orders.push(2);
        }
        
        if (sideCb3.checked){
            orders.push(3);
        }
        
        return orders
    }


    class clientOrders{
        constructor(entreePrices, sidePrices, entreeClientOrders, sideClientOrders){
            this.entreePrices = entreePrices;
            this.sidePrices = sidePrices;
            this.entreeClientOrders = entreeClientOrders;
            this.sideClientOrders = sideClientOrders;
        }

        totalCalculating = () => {
            let entreeTotal = 0;
            let sideTotal = 0;
            let total = 0;
            const totalUp = document.getElementById("total");        
            
            for (const entreeKey in this.entreePrices){       
                for (const i in this.entreeClientOrders){
                    if (parseInt(entreeKey) === this.entreeClientOrders[i]){                    
                        entreeTotal += this.entreePrices[entreeKey];
                    }
                }
            } 
            
            for (const sideKey in this.sidePrices){       
                for (const j in this.sideClientOrders){
                    if (parseInt(sideKey) === this.sideClientOrders[j]){                    
                        sideTotal += this.sidePrices[sideKey];
                    }
                }
            }

            total = entreeTotal + sideTotal;
            totalUp.innerHTML = `$${total}`;        
        }
    }

    const clientOne = new clientOrders(breakfastEntreePrices, breakfastSidePrices, entreeClientOrders(), sideClientOrders());
    clientOne.totalCalculating();
}   

