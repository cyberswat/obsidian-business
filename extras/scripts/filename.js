// Description: This script is used to rename and move a file to a new location.
// The path varialbe is a template literal that uses {output} to capture the 
// users response to the prompt.
async function filename(tp, prompt, pathStr, defaultOutput = "") {
    let title = tp.file.title;

    if (title.startsWith("Untitled")) {
        // Prompt the user for a title.
        let output = await tp.system.prompt(prompt);
        if (output === null) {
            output = "";
        }
        // remove any non-alphanumeric characters except hyphens and spaces from output
        output = output.replace(/[^a-zA-Z0-9 -]/g, '');

        // Grab a portion of the path based on today's date. This let's
        // the calling template pass in something like "/notes/${datePath} ${output}"
        // as a path if they want to use it.

        // Use defaultOutput if we didn't receive anything from the user.
        if (output.length === 0) {
            output = defaultOutput;
        }

        // We don't know what to name the file so throw an error.
        if (output.length === 0) {
            alert("Invalid user input. Can't determine a filename. Aborting with an error.");
            throw new Error("Invalid user input. Can't determine a filename.");
        }

        let datePath = await tp.user.datepath(tp, pathStr);

        // Evaluate the passed in path to replace tokens.
        let path = eval('`' + pathStr + '`');

        // Check if the file already exists
        let fileExists = await tp.file.exists(path + ".md");

        if (fileExists) {
            alert("A file with this name already exists. Aborting with an error.");
            throw new Error("A file with this name already exists.");
        } else {
            await tp.file.rename(output);
            await tp.file.move(path);
            title = output;
        }
    }
    return title;
}

module.exports = filename;
