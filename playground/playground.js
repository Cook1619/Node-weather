// setTimeout(() => {
//   console.log("Two seconds callback");
// }, 2000);

// const names = ["Matt", "Danelle", "Bill", "Ted"];

// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// console.log(shortNames);

// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       long: 0,
//     };
//     callback(data)
//   }, 5000);
// };

// geoCode("Minneapolis", (data) => {
//     console.log(data)
// });
const add = (num1, num2, callback) => {
    setTimeout(() => {
        sum = num1 + num2
        callback(sum)
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum);
})
