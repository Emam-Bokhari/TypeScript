{
    interface IStudent {
        name: string;
        age: number;
        grades: number[];
    }

    const student: IStudent = {
        name: "Moshfiqur Rahman",
        age: 24,
        grades: [75, 80, 82, 88, 90]
    }

    const calculateAverageGrade = (value: IStudent): number => {
        return value.grades.reduce((prev, current) => prev + current, 0) / value.grades.length
    }

    const result: number = calculateAverageGrade(student)
    console.log(result)



}