let vehicle1={
    name:'alto',
    topSpeed:70,
    color:'red',
    engineCC:250,
    printSpecifications(){
        console.log(`${this.name} is ${this.color} in color with ${this.engineCC} cc engine having top speed of ${this.topSpeed} km/hr`)    },
    printExtraDetails(cost,stepni){
        console.log(`${this.name} is ${this.color} in color with ${this.engineCC} cc engine having top speed of ${this.topSpeed} km/hr). It was bought for ${cost} rupees and came along with ${stepni} stepni tyres`)
    }
}

let vehicle2={
    name:'desire',
    topSpeed:90,
    color:'black',
    engineCC:300
}

vehicle1.printSpecifications.call(vehicle2)
vehicle1.printSpecifications.call(vehicle2,10000,4)
vehicle1.printSpecifications.apply(vehicle2,[100000,4]);
let vehicle2binded=vehicle1.printSpecifications.bind(vehicle2);
vehicle2binded(10000,4)

//call,apply and bind are used either to 
// To borrow another object’s methods or
// To create a custom value of this

// Both  call  and  apply  invoke a function. 
// Their only difference is that  call  accepts arguments in a comma-separated fashion while  apply  requires arguments to be passed as an array or an array-like object.
// whereas bind returns a function with this keyword setup