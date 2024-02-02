'use client'

interface PrimeiroComponentProps{
    mensagem: string
}

export const PrimeiroComponent: React.FC<PrimeiroComponentProps> = (props: PrimeiroComponentProps) => {
    
    function handleClick(){
        console.log("Cliquei no botão")
    }
    
    return(
        <div>
            {props.mensagem}

            <button onClick={handleClick}>Clique aqui</button>
        </div>
    )
}