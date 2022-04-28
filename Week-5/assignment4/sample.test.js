const mathOperations=require('./sample');

let {sum,diff,product}=mathOperations;

test('addition',()=>{ 
    expect(sum(1,2)).toBe(3);
 })

 test('difference',()=>{ 
    expect(diff(23,7)).toBe(16);
 })

 test('product',()=>{ 
    expect(product(5,6)).toBe(30);
 })