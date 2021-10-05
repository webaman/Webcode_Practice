function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
   
    console.log(this.age);
    let innerFunc = ()=> {
    console.log(this.age);
    console.log(this);
    }
    innerFunc();
    }
    }
    let x = new Person();
    x.sayName();
    