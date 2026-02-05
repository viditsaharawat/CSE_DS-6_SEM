import fs from 'fs';
console.log(fs);
try {
    fs.writeFileSync('data.txt', 'Hello, World!');
    console.log("Success!");
} catch (err) {
    console.error("Something went wrong:", err.message);
}
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);
try {
    const data = fs.readFileSync('data.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error("Error:", err.message);
}