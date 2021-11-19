const converterPromise = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === "string")) {
            const arrUpperCase = arr.map(item => item.toLocaleUpperCase('hu-HU'));
            resolve(arrUpperCase)
        } else {
            reject('Error: Not all elements are string type!')
        }
    });
}

converterPromise(['tibi', 4, 'illés']).then(console.log)

export default converterPromise;