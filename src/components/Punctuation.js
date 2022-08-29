
exports.trimString = (stringToTrim) => {
    const newString = stringToTrim.replace(/[^\w\s]|_/g, " ");
    console.log(newString);
    return (newString);
}
    
// export default function trimString();

