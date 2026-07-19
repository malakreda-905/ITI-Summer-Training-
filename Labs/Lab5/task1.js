var n = Number(prompt("Enter the number of elements in the array:"));
var arr = [];

for (var i = 0; i < n; i++) {
    var element = Number(prompt("Enter element " + (i + 1) + ":"));
    arr.push(element);
}

var sortedArrAsc = arr.slice().sort(function(a, b) {
    return a - b;
});
console.log("Sorted array (ascending): " + sortedArrAsc);

var sortedArrDesc = arr.slice().sort(function(a, b) {
    return b - a;
});
console.log("Sorted array (descending): " + sortedArrDesc);
