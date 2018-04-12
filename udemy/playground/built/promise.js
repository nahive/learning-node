"use strict";
function asyncAdd(a, b) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (a < b) {
                res(a + b);
            }
            else {
                rej('A is bigger then B');
            }
        }, 500);
    });
}
asyncAdd(6, 5).then((result) => {
    console.log('Success:', result);
    return asyncAdd(result, 5);
}).then((result) => {
    console.log('Success2:', result);
}).catch((error) => {
    console.log('Error:', error);
});
// let promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         reject('It worked!')
//     }, 2500)
// })
// promise.then((message) => {
//     console.log('Success:', message)
// }, (error) => {
//     console.log('Error:', error)
// })
//# sourceMappingURL=promise.js.map