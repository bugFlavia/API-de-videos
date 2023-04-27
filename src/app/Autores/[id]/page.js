'use client';
import Link from 'next/link';
import React, { useState } from 'react'; 

const AutorDinamico = ({ params }) => {
    const [autor, setAutor] = useState(() => {
    const data = JSON.parse(localStorage.getItem('autores')) || null;
    if (data !== null){
    return data.find((item) => item.id === params.id);
    }
    return {};
});

return(
    <div className="flex-1 p-6 bg-slate-400/10 rounded-lg">
        <h1 className="font-bold text-3xl pb-10 flex justify-center">{autor.nome}</h1>
        <p className="flex justify-center text-lg">{`by: ${autor.canal} - `}<a className="hover:underline" href={autor.url}> {autor.url}</a></p>
    </div>
)

}

export default AutorDinamico
