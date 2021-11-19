const sorterPromise = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === "string")) {
            const arrUpperCase = arr.sort((a, b) => {
                if (a < b) return -1;
                else return 1;
                return 0
            });
            resolve(arrUpperCase)
        } else {
            reject('Error: Not all elements are string type!')
        }
    });
}
export default sorterPromise;