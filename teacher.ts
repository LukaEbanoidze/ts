interface Teacher {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    subjectsTeaches: string[]
    classes: {studentsList: string[]; studentsCount: number}[]
}

export const teachers: Teacher[] = [
    {
        id: 123,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 30,
        email: 'jane.doe@gmail.com',
        subjectsTeaches: ['Math', 'English'],
        classes: [{
            studentsList:['Jane Smith', 'Luka Ebanoidze'],
            studentsCount: 1
        }]
    }
];

