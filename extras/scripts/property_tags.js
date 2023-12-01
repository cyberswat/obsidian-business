
async function property_tags(tp, prompt, defaultValue = "") {
    output = await tp.system.prompt(prompt);
    if (output === null) {
        output = "";
    }
    if (defaultValue !== "") {
        defaultValue = tp.user.tag(defaultValue);
        if (defaultValue.length === 0) {
            defaultValue = "invalidTag";
        }

        output = defaultValue + " " + output;
    }

    let validTags = validateTags(output);
    while (!validTags) {
        output = await tp.system.prompt(`Invalid format. ${prompt}`);
        if (output === null) {
            output = "";
        }
        if (defaultValue !== "") {
            output = defaultValue + " " + output;
        }
        validTags = validateTags(output);
    }
    output = convertToBulletedList(output);
    return output;
}
function convertToBulletedList(tagString) {
    // Split the input string into tags
    const tags = tagString.trim().split(' ');

    // Create a bulleted list string
    const bulletedList = `\n${tags.map(tag => `  - ${tag}`).join('\n')}`;

    return bulletedList;
}
function validateTags(tagString) {
    // Split the input string into tags
    const tags = tagString.trim().split(' ');

    // Check if each tag follows the allowed characters pattern
    const validCharPattern = /^[a-zA-Z0-9_\-/]+$/;

    for (const tag of tags) {
        if (!validCharPattern.test(tag) || /^\d+$/.test(tag) || tag.startsWith('/') || tag.endsWith('/')) {
            return false; // Tag doesn't meet the criteria
        }
    }

    return true; // All tags are valid
}

module.exports = property_tags;
