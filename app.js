function filterOutFalsy(str1, str2) {
    return !str1 === true ? str1 : str2
}

console.log(filterOutFalsy(0, 5));
