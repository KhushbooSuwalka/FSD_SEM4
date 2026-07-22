const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");

// 1. CREATE / WRITE FILE
fs.writeFile(filePath, "Hello, this is a Node.js file\n", (err) => {
    if (err) throw err;
    console.log("✔ File created and written");

    // 2. APPEND DATA
    fs.appendFile(filePath, "Appending some more content...\n", (err) => {
        if (err) throw err;
        console.log("✔ Data appended");

        // 3. READ FILE
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) throw err;
            console.log("✔ File content:\n", data);

            // 4. RENAME FILE
            const newPath = path.join(__dirname, "renamed.txt");
            fs.rename(filePath, newPath, (err) => {
                if (err) throw err;
                console.log("✔ File renamed");

                // 5. LIST DIRECTORY FILES
                fs.readdir(__dirname, (err, files) => {
                    if (err) throw err;
                    console.log("✔ Files in directory:", files);

                    // 6. DELETE FILE
                    // fs.unlink(newPath, (err) => {
                    //     if (err) throw err;
                    //     console.log("✔ File deleted");

                    // });
                });
            });
        });
    });
});