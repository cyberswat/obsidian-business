
function tag(tag) {
    tag = makeCompliantTag(tag);
    return tag;
}

// Function to convert numbers to their written form
function numberToWords(number) {
    if (number === 0) {
        return 'zero';
    }

    const numStr = number.toString();
    const wordsArray = numStr.split('').map(digit => digitToWord(parseInt(digit)));

    return wordsArray.join(' ');
}
function digitToWord(digit) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return words[digit] || '';
}


// Function to make a tag compliant
function makeCompliantTag(inputTag) {
    if (typeof inputTag === 'number') {
        // Convert the number to its written form
        return numberToWords(inputTag);
    }
    // Define a regular expression pattern for valid characters
    const validCharPattern = /^[a-zA-Z0-9_\-/]+$/;

    // Remove any invalid characters from the tag and ensure it's not empty
    const cleanedTag = inputTag.replace(/[^a-zA-Z0-9_\-/]/g, '').trim();

    // Ensure that the cleaned tag does not start or end with '/'
    let compliantTag = cleanedTag.startsWith('/') || cleanedTag.endsWith('/')
        ? cleanedTag.substring(1, cleanedTag.length - 1)
        : cleanedTag;

    // Check if the tag is a number and convert it to written form
    if (/^\d+$/.test(compliantTag)) {
        compliantTag = numberToWords(parseInt(compliantTag));
    }

    return compliantTag.replace(/\s+/g, ''); // Remove spaces
}
module.exports = tag;
