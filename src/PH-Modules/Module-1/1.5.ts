{
    // # object, optional, literal types, readonly

    const patientsInfo: {
        id: number;
        name: string;
        age: number;
        weight: number;
        medicalReport?: string; // optional types
        address: string;
        doctorName: string;
        hospitalName: "Dreams Care Health Clinic Ltd", // literel types
        readonly diagnonisticCenter: "Dreams Care Diagonistic Center" // readonly
        status: boolean;
    } = {
        id: 1001,
        name: "Moshfiqur Rahman",
        age: 24,
        weight: 50,
        address: "Brahmanbaria,Bangladesh",
        doctorName: "Abdur Rahman",
        hospitalName: "Dreams Care Health Clinic Ltd",
        diagnonisticCenter: "Dreams Care Diagonistic Center",
        status: true,
    }


}