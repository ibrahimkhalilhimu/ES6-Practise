class Child{
    constructor(name){
        this.name = name
    }
}
const baby = new Child("khalad")
const baby2 = new Child("javad")
console.log(baby,baby2);

// PARAENT pawar jonno

class Parent{
    constructor(){
        this.fatherName = "kobir";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name
        
    }
}
const baby = new Child("khalad");
const baby2 = new Child("javad");
console.log(baby);
console.log(baby2);


// function o use kora jay

class Parent{
    constructor(){
        this.fatherName = "kobir";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;   
    }
    getFullName(){
        return this.name +" " + this.fatherName
    }
}
const baby = new Child("khalad");
const baby2 = new Child("javad");
console.log(baby.getFullName());
console.log(baby2 .getFullName())


// 

// Encapsulation
// Encapsulation is the mechanism of hiding of data implementation by restricting access to public methods. Instance variables are kept private and accessor methods are made public to achieve this.
// For example, we are hiding the name and dob attributes of person class in the below code snippet.
// public class Employee {
    // private String name;
    // private Date dob;
    // public String getName() {
    //     return name;
    // }
    // public void setName(String name) {
    //     this.name = name;
    // }
    // public Date getDob() {
    //     return dob;
    // }
    // public void setDob(Date dob) {
    //     this.dob = dob;
    // }


//     Inheritance
// Inheritances expresses “is-a” and/or “has-a” relationship between two objects. Using Inheritance, In derived classes we can reuse the code of existing super classes. In Java, concept of “is-a” is based on class inheritance (using extends) or interface implementation (using implements).
// For example, FileInputStream "is-a" InputStream that reads from a file.

// It means one name many forms. It is further of two types — static and dynamic. Static polymorphism is achieved using method overloading and dynamic polymorphism using method overriding. It is closely related to inheritance. We can write a code that works on the superclass, and it will work with any subclass type as well.