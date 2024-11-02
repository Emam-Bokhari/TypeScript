{
    // generic with interface and alias

    type Developer<T, X = null> = {
        name: string;
        computer: {
            brand: string;
            releaseYear: number;
            weight: number;
        },
        smartWatch: T;
        bike?: X;
    };

    interface CasioWatch {
        brand: string;
        weight: string;
    }

    type AppleWatch = {
        brand: string;
        releaseYear: number;
        heartbeatTrack: boolean;
        sleepTrack: boolean;
    }

    type ApacheBike = {
        brand: string;
        color: string;
    }

    const poorDeveloper: Developer<CasioWatch> = {
        name: "Emam Bokhari",
        computer: {
            brand: "Asus",
            releaseYear: 2021,
            weight: 2.5,
        },
        smartWatch: {
            brand: "Casio",
            weight: "330gm"
        }
    }

    const richDeveloper: Developer<AppleWatch, ApacheBike> = {
        name: "Moshfiqur Rahman",
        computer: {
            brand: "Macbook",
            releaseYear: 2024,
            weight: 1,
        },
        smartWatch: {
            brand: "Apple",
            releaseYear: 2024,
            heartbeatTrack: true,
            sleepTrack: true,
        },
        bike: {
            brand: "Apache",
            color: "red",
        }
    }
}