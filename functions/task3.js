const checkOrder = (available, ordered) =>{

    switch(true){
        case ordered === 0 : return "Your order is empty";
        case available < ordered : return "Your order is too large, we don't have enough goods.";
        default : return "Your order is accepted";
    }
}

console.log(checkOrder(3, 4))