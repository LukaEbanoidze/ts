import { teachers } from "./teacher"

interface Student {
    id: number,
    name: string,
    lastName: string,
    class: number,
    subjectsStudies: {subjectName: string; mark: number}[] 
}

const student: Student[] = [
    {
        id: 1,
        name: 'Luka',
        lastName: 'Ebanoidze',
        class: 11,
        subjectsStudies: [{subjectName: 'Math', mark: 10}]
    }
]

function addToClass(student: Student[], teachers: object): void {
    console.log(teachers.firstName)
}