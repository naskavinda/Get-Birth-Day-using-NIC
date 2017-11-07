
function getBirthDay() {
    var NIC = $("#NIC").val();
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