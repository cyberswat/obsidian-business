//Generate a path string in the format 2023/01-January/2023-01-01
async function datepath(tp, prompt) {
    let dateStr = "";
    let date = new Date();
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let dateInput = await tp.system.prompt(`${prompt} Enter a date in the format ${year}-${month}-${day} or leave blank to use today.`);
    if (dateInput === null) {
        dateInput = "";
    }
    let validDate = false;
    while (!validDate) {
        if (dateInput === "") {
            validDate = true;
        } else if (isValidDate(dateInput)) {
            validDate = true;
        } else {
            dateInput = await tp.system.prompt(`Invalid format. Enter a date in the format ${year}-${month}-${day} or leave blank to use today.`);
        }
    }

    if (dateInput.length > 0) {
        let dateParts = dateInput.split("-");
        year = dateParts[0];
        month = dateParts[1];
        day = dateParts[2];
    }

    dateStr = `${year}-${month}-${day}`;

    return dateStr
}

function isValidDate(dateString) {
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) return false;

    let tempDate = new Date(dateString);
    return tempDate instanceof Date && !isNaN(tempDate);
}

module.exports = datepath;