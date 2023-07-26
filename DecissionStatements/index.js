function findDaySwitchV1() {
    var value = document.getElementById('day1').value;
    let message; 

    switch (value) {
        case "1":
            message = "Pazartesi";
            break;
        case "2":
            message = "Salı";
            break;
        case "3":
            message = "Çarşamba";
            break;
        case "4":
            message = "Perşembe";
            break;
        case "5":
            message = "Cuma";
            break;
        case "6":
            message = "Cumartesi";
            break;
        case "7":
            message = "Pazar";
            break;
        default:
            message = "Geçersiz!"
            break;
    }

    document.getElementById('dayResult').innerText = message;
}

function findDaySwitchV2() {
    var value = document.getElementById('day3').value;
    let message; 

    switch (value) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            message = "Hafta içi";
            break;
        case "6":
        case "7":
            message = "Hafta Sonu";
            break;
        default:
            message = "Geçersiz!"
            break;
    }

    document.getElementById('dayResult').innerText = message;
}



function findDayIfV1() {
    var value = document.getElementById('day2').value;
    let message; 

    if (value === "1") {
        message = "Pazartesi";
    } else if (day.value === "2") {
        message = "Salı";
    } else if (day.value === "3") {
        message = "Çarşamba";
    } else if (day.value === "4") {
        message = "Perşembe";
    } else if (day.value === "5") {
        message = "Cuma";
    } else if (day.value === "6") {
        message = "Cumartesi";
    } else if (day.value === "7") {
        message = "Pazar";
    } else {
        message = "Geçersiz!"
    }

    document.getElementById('dayResult').innerText = message;
}

function findDayIfV2() {
    var value = document.getElementById('day4').value;
    let message; 
    
    if (value === "1" || value === "2" || value === "3" || value === "4" || value === "5") {
        message = "Hafta içi";
    } else if (value === "6" || value === "7") {
        message = "Hafta Sonu";
    } else {
        message = "Geçersiz bir değer girdiniz.";
    }
    
    document.getElementById('dayResult').innerText = message;
}
