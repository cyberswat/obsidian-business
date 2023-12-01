
async function property_text(tp, prompt) {
    let output = await tp.system.prompt(prompt);
    if (output === null) {
        output = "";
    }
    output.replace(/['"]+/g, '');
    return output;
}

module.exports = property_text;
