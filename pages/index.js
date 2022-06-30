import {useState} from 'react'

function Home() {
    return <div>
        <h2>Home</h2>
        <contador />
        
        </div>
}

function contador() {
    const [contador, setcontador] = useState (1)

function adicionarcontador (){

}
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarcontador}></button>
        </div>
    )
}

export default Home