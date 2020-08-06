class Student{
    // class ar nam borohater letter diya likta hoy
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolomunnesa school"
    }
}
const Student1 = new Student(12, "kalu")
const Student2 = new Student(22, "kalu2")
console.log(Student1, Student2);