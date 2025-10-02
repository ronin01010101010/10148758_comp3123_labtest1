const resolvedPromise = () => {
   return new Promise((resolve) => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'};
        console.log(success);  
        resolve(success);
    }, 500);
   });  
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!');
            } catch(e) {
                console.error(e);
                reject(e);
            }
        }, 500);
    });  
};

resolvedPromise()
    .then((value) => console.log(value))
    .catch((error) => console.error(error));

rejectedPromise()
    .then((value) => console.log(value))
    .catch((error) => console.error(error));
