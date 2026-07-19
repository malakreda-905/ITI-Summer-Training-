function showAddr(addrObj) {
    var today = new Date();

    today = today.toLocaleDateString('en-GB'); 
    
    return addrObj.buildingNum + " " + addrObj.street + ", " + addrObj.city + " city registered in " + today;
}

var addrObj = {
    street: "Baker st.",
    buildingNum: 221,
    city: "London"
};

console.log(showAddr(addrObj));