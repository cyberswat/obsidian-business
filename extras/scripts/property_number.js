
async function property_number(tp, prompt, defaultValue = "") {
    let validDate = false;
    output = await tp.system.prompt(prompt);
    while (!validDate) {
        if (output === "") {
            output = defaultValue;
        }
        if (!isNaN(output) && !isNaN(parseFloat(output))) {
            validDate = true;
        } else {
            output = await tp.system.prompt(`Invalid format. ${prompt}`);
        }
    }
    return output;
}


module.exports = property_number;
