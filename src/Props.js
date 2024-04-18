export const Props = ({count, handleClick}) => {
    return (
        <>
            <button onClick={handleClick}> Counter updates together {count} </button>
        </>

    )
}