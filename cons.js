class student{
    constructor(){
        let name;
        console.log("constructor function");
    }
    hello(){
        console.log('hello' +" "+ this.name);
    }
}
var a=new student();
a.name='Neetu sah'
a.hello()