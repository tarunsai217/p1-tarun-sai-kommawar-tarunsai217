var Person=function(){}

Person.prototype.initialize=function(name,age){
  this.name=name;
  this.age=age;
}

Person.prototype.teach = function(subject) {
  console.log(subject);
}

var teacher = new Person();
teacher.teach('math');