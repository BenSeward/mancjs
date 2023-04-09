interface ButtonProps {
    handleClick: (params: any) => any
}

export const Button = ({handleClick}: ButtonProps ) => {
   
    return (
        <button data-testid="button" onClick={handleClick}>
            Test
        </button>
    )
}