const fs = require('fs');
const content = fs.readFileSync('questions.js', 'utf8');

// Match the contents of the last array-like object defined as allQuestions
const match = content.match(/const allQuestions = (\[[\s\S]*?\]);/);
if (match) {
    // We can't easily eval because of potential complex objects, 
    // but we can regex match the categories.
    const categories = [...new Set(match[1].match(/category: "[^"]+"/g))];
    console.log(categories.join('\n'));
} else {
    console.log("Not found");
}
