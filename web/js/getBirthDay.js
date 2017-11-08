



function getBirthDay() {
    var NIC = $("#NIC").val();
    if (isNIC(NIC)) {
        var year = getYear(NIC);
        var days = getDays(NIC);
        var i;
        for (i = 1; i <= 12; i++) {
            var daysOfMonth = daysInMonth(i, year);
            if (days <= daysOfMonth) {
//            return formatDate(new Date(year, i, days - daysOfMonth));
                alert(formatDate(new Date(year, i, days - daysOfMonth)));
                break;
            } else {
                days = days - daysOfMonth;
            }
        }
    } else {
        alert("Not a Valid NIC");
    }

}

function isNIC(NIC) {
    if (NIC.length === 10) {
        var nicNumber = NIC.substring(0, 9);
        var days = getDays(NIC);
        if (!isNaN(nicNumber) && days <= 366) {
            if (NIC.substring(9, 11) === "v" || NIC.substring(9, 11) === "x") {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function getYear(NIC) {
    var year = NIC.substring(0, 2);
    if (35 < year) {
        year = 19 + "" + year;
    } else {
        year = 20 + "" + year;
    }
    return year;
}

function getDays(NIC) {
    var year = getYear(NIC);
    var days = NIC.substring(2, 5);
    if (days > 500) {
        days = days - 500;
    }
    if (year % 4 != 0 && days > 59) {
        days = days - 1;
    }
    return days;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function formatDate(date) {
    var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}
