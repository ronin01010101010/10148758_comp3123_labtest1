async function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {  
        if(!array || !Array.isArray(array)) {
            reject("Not an array");
            return;  
        }
       
        const strings = array.filter(item => typeof item === 'string');
        
        const lowerCaseArray = strings.map(str => str.toLowerCase());
        
        resolve(lowerCaseArray);  
    });
}

lowerCaseWords(["Tele", 20, true, "FIRE"])
    .then(result => console.log(result))  
    .catch(error => console.error(error));