// Description: Change the start date (YYYY-MM-DD) by the number of days specified
function date_change(start, days) {
    // Convert the start date to a Date object
    let date = new Date(start);

    // Add two weeks (14 days) to the date
    date.setDate(date.getDate() + days);

    // Formatting the new date back to "YYYY-MM-DD" format
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth() is zero-based
    let day = date.getDate();

    // Ensure the month and day are in two-digit format
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
}

module.exports = date_change;
