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
        super(instrutorAttributes);
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

class student extends Person {
   constructor(studentAttributes) {
       super(studentAttributes);
       this.previousBackground = studentAttributes.previousBackground;
       this.className = studentAttributes.className;
       this.favSubjects = studentAttributes.favSubjects;
   }

   listSubjects() {
       for(i = 0; i < this.favSubjects.length; i++)
       {
           console.log(this.favSubjects[i]);
       }
   }

   PRAassignment(subject) {
       console.log(`${student.name} has submitted a PR for ${subject}`);
   }

   sprintChallenge(subject) {
       console.log(`${student.name} has begun sprint challenge on ${subject}`);
   }
}

class projectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUP(channel) {
         console.log(`${this.gradClassName} announces to ${channel} @channel standby times`);
    }

    debugsCode() {
        console.log(`${this.gradClassName} debugs ${student.name}'s code on ${subject}`);
    }
}