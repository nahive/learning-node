function getUser(id, callback) {
    let user = {
        id: id,
        name: 'szymon'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
}
getUser('31', (user) => {
    console.log(user);
});
//# sourceMappingURL=callbacks.js.map