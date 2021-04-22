
const p1 = new Promise((resolve, reject) => {
    //async work
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
        //reject(new Error('message'));
    }, 2000);

});

const p2 = new Promise((resolve, reject) => {
    //async work
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
        //reject(new Error('message'));
    }, 2000);

});

Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err));