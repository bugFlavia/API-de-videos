'use client';
import { useEffect, useState } from 'react'; 
import Link from 'next/link';

const Videos = () => {
    const [videos, setVideos] = useState([]); 

    useEffect(()=>{

        if(typeof window !== 'undefined'){
          const listagem_videos = localStorage.getItem('videos')
          console.log(listagem_videos)
          if(listagem_videos !== null){
            try{   
              setVideos(JSON.parse(listagem_videos))
            }catch(error){
              console.log(error)
            }
          } 
       
        }
    
      }, []);
      
      return(
        <div>
          <center>
            <h1 className="font-bold text-3xl pb-10">Vídeos cadastrados:</h1>
                <section className="flex flex-col gap-6 w-full self-center max-w-2x1 mt-10">
                    {videos .map((item) => {
                      return (
                           <div className="flex-1 p-6 bg-slate-400/10 rounded-lg">
                          <Link className="pb-6 text-2xl font-semibold hover:underline" href={`Videos/${item.id}`}>{item.titulo}</Link>
                          <iframe className="pt-6"  width="300" height="200" src={item.url} title="Next.js (Renderização React no Lado Servidor) // Dicionário do Programador" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                          <p>{`From ${item.autores}`}</p>
                          
                        </div>

                        
                       
                    )
                })}

                </section>
                </center> 
        </div>
      )
    
}

export default Videos