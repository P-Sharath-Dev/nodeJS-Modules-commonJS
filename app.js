// import the required module here
const {sum, mean} = require('./utils.js');
const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    console.log(`The sum is ${sum(nums)}`);
    console.log(`The mean is ${mean(nums)}`);
};
Solution();
