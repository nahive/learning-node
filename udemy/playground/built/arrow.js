let square = (x) => x * x;
console.log(square(9));
let user = {
    name: 'szymon',
    // arrow functions don't work as expected 
    //  they cant access object props
    // and use global object as parent
    hi: () => {
        console.log(arguments);
        console.log(`hi, i'm ${this.name}`);
    },
    hialt() {
        console.log(arguments);
        console.log(`hi, i'm ${this.name}`);
    }
};
user.hi(1, 2, 3);
user.hialt(1, 2, 3);
//# sourceMappingURL=arrow.js.map