(()=>{
    // Clase de ejemplo sin aplicar el principio de responsabilidad unica
    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name: string,
            public gender: string,
            public birthdate: Date,
        ){}
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super( name, gender, birthdate );
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super( email, role, name, gender, birthdate );
        }
    }

    const userSetting = new UserSettings(
        '/usr/home',
        '/home',
        'luigi@gmail.com',
        'Admin',
        'Luigi',
        'M',
        new Date('1990-07-04')
    );

    console.log(userSetting);
})();