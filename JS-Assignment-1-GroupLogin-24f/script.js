var teamNumber = prompt("Please provide your team number:");
switch (teamNumber){
    case '5':
        var firstName = prompt("Please privide your first name:");
        switch (firstName){
            case "Audrey": alert("Welcome "+ firstName +" Chung!");
            break;
            case "Jishan": alert("Welcome "+ firstName +" Saha!");
            break;
            case "Adil": alert("Welcome "+ firstName +" Surve!");
            break;
            case "Himani": alert("Welcome "+ firstName +" Bansal!");
            break;
            default: alert("Access Denied!");
        }
        break;
        default: alert("Access Denied!");
}

