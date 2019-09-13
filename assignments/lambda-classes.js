// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }

    speak(){
        console.log(`Hello my is name ${this.name} I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instrutorAttributes) {
        this.speciality = instrutorAttributes.speciality;
        this.favLanguage = instrutorAttributes.favLanguage;
        this.catchPhrase = instrutorAttributes.catchPhrase;
    }

    demo(subject) {

        console.log(`Today we are learning about ${subject}`);

    }

    grade(student, subject) {
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}