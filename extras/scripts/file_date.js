// Description: This script is used to prompt for tags from the user.
async function file_date(tp, formatString) {
    let path = tp.file.path();

    const dateMatch = path.match(/(\d{4})[/-](\d{2})[/-](\d{2})/);

    const year = parseInt(dateMatch[1], 10);
    const month = parseInt(dateMatch[2], 10);
    const day = parseInt(dateMatch[3], 10);

    const date = new Date(year, month - 1, day);

    const formattedDate = formatString
        .replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
        .replace('DD', String(date.getDate()).padStart(2, '0'))
        .replace('YYYY', String(date.getFullYear()));

    return formattedDate;
}

module.exports = file_date;
