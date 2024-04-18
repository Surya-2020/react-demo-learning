const listOfItems = [
    { vijaymovies: 'LEO', rating: 4, id: 1 },
    { vijaymovies: 'MASTER', rating: 4.1, id: 2 },
    { vijaymovies: 'GOAT', rating: 3, id: 3 }
];

export const MoviesList = () => {
    listOfItems.sort((a, b) => b.rating-a.rating);
    
    return (
        <>
            <h1>List of Vijay Movies</h1>
            <ul>
                {listOfItems.map((item) => (
                    <li key={item.id}>
                        <strong> Vijay Movies - {item.vijaymovies}  Rating - {item.rating}</strong>
                    </li>

                ))}

            </ul>
        </>
    );
}