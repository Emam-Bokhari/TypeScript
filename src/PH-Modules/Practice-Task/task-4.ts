{
    interface Book {
        id: number;
        name: string;
        author: string;
        publishedDate: string;
    };

    interface Magazine {
        id: number;
        name: string;
        publisher: string;
    }

    type BookOrMagazine = Book | Magazine;

    type BookAndMagazine = Book & Magazine;

    const myBookAndMagazine: BookAndMagazine = {
        id: 2111,
        name: "Tech",
        author: "Emam Bokhari",
        publishedDate: "21-Oct-2024",
        publisher: "Dreams Inc"

    }

    const myBookOrMagazine:BookOrMagazine={
        id:2222,
        name:"It",
        publisher:"Dreams Inc"
    }

}