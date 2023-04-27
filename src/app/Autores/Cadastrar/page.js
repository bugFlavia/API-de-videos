'use client';
import {useEffect, useState} from 'react'; 

const CadastroAutor = () => {
    const [autor, setAutor] = useState({});
    const [autores, setAutores] = useState([]);
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
        const listaDeAutores = localStorage.getItem('autores');
        if (listaDeAutores !== null) {
        try {
            setAutores(JSON.parse(listaDeAutores)); 
        }catch (error) {
            console .error(error);           
        }
    }
}
}, []);

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setAutor({
        ...autor,
        [id]: value
});
}

    const handleSave = (e) => {
        e.preventDefault();
        const updateAutores = [...autores];
        updateAutores.push({
        id: Math.random().toString(36).slice(2, 7),
        ...autor
    });
        setAutores (updateAutores);
        localStorage.setItem('autores', JSON.stringify(updateAutores));
        console.log(autor.nome)
        console.log(autores)
        alert(`${autor.nome} cadastrado com sucesso!` );
        setAutor({}); 
}
 
    return(
        <div className="h-screen flex-col">
        <div className="flex flex-1 h-screen">
          <main className="flex-1 p-6">
          <h1 className="font-bold text-3xl flex justify-center pb-10">Realize o seu cadastro como autor na plataforma:</h1>
          <form className="flex flex-col mb-96 shadow-2xl shadow-slate-100 rounded-lg gap-2" onSubmit={(e)=>handleSave(e)}>
            <center>
            <label htmlFor="nome" className="flex justify-center pt-4 pb-4 text-lg font-semibold">Nome completo:</label><input className="rounded text-black w-5/6 h-10" type="text" id="nome" placeholder="Digite seu nome" value={autor.nome || ''} onChange={(e)=> handleOnChange(e)} required/>
            <label htmlFor="canal" className="flex justify-center pt-4 pb-4 text-lg font-semibold">Nome do canal:</label><input className="rounded text-black w-5/6 h-10" type="text"  id="canal" placeholder="Nome do canal" value={autor.canal || ''} onChange={(e)=> handleOnChange(e)}/>
            <label htmlFor="url" className="flex justify-center pt-4 pb-4 text-lg font-semibold">URL do canal:</label><input className="rounded text-black w-5/6 h-10" type="text" id="url" placeholder="URL do canal" value={autor.url || ''} onChange={(e)=> handleOnChange(e)}/><br/>
   
           <button className="bg-white hover:bg-gray-100 text-slate-800 font-semibold py-2 px-4 mt-4 border border-gray-400 rounded shadow">Cadastrar</button>
          
          </center>
          </form>
        </main>
        </div>
        </div>
    )
}

export default CadastroAutor
