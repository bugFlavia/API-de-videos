'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Autores = () =>{
    const [autores, setAutores] = useState([]); 

    useEffect(()=>{

        if(typeof window !== 'undefined'){
          const listagem_autores = localStorage.getItem('autores')  
          console.log(listagem_autores)
          if(listagem_autores !== null){
            try{
              setAutores(JSON.parse(listagem_autores))
            }catch(error){
              console.log(error)
            }
          }
        }
        }, []);

        return(
            <div>

                <h1 className="font-bold text-3xl pb-10 flex justify-center">Autores cadastrados:</h1>
                <section className="flex flex-col gap-6 w-full self-center max-w-2x1 mt-10">
                    {autores .map((item) => {
                      return (
                        <div className="flex-1 p-6 bg-slate-400/10 rounded-lg">
                        <Link className="pb-6 text-2xl font-semibold hover:underline flex justify-center" href={`Autores/${item.id}`}>{item.nome}</Link>
                        <p className='flex justify-center'>{`By ${item.canal}`}</p>
                       </div>
                    )
                })}

                </section> 

            </div>
        )

}

export default Autores