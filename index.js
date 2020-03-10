const fs  = require("fs");
const eol = require('os').EOL;

const args = require("minimist")(process.argv.slice(2));

const type = args._[0];
const title = args._[1]
                .replace(/\s+/, " ")
                .toLowerCase()
                .split(" ")
                .map(s => s[0].toUpperCase() + s.slice(1))
                .join(" ");

let filename = title.replace(/\s/, "_").toLowerCase() + ".md"; 
let content = "---" + eol;

content += `title: ${ title }` + eol;
content += `layout: ${type}` + eol;

if ( type === "post") {
    const date = (new Date()).toISOString().replace(/T.+/,"");

    content += `date: ${ date }` + eol;
    content += `author: ${ process.env.USER }` + eol;
    content += "featured-img: " + eol;
    content += "categories: " + eol;

    filename = `_posts/${date}-${filename}`; 
}
else {
    content += "permalink: " + eol;
}

content += "---" + eol + eol + eol;

fs.writeFile(filename, content, (err) => err ? process.exit(1) : process.exit(0));