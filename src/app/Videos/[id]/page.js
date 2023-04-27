'use client';
import React, { useState } from "react";

const VideoDinamico = ({params})=>{
    
  const [video, setVideo]= useState(()=>{
    const data = JSON.parse(localStorage.getItem('videos')|| null);
    if (data){
        return data.find((item)=> item.id === params.id)
    }
    return{}
  })

  const [autor, setAutor] = useState(() => {
  const data = JSON.parse(localStorage.getItem('autores')) || null;
  if (data) {
  return data.find((item) => item.id === video.autor);}
  return{};
  }); 


  return(
    <div className="flex-1 p-6 bg-slate-400/10 rounded-lg">
      <center>
        <h1 className="font-bold text-3xl pb-10 flex justify-center">{video.titulo}</h1>
        <iframe src={video.url} title={video.titulo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <p className="pt-8">{video.descricao}</p>
        <p className="pt-8">{`Autor: ${video.autores}`}</p>
        <p className="pt-8">{`Linguagem: ${video.linguagem}`}</p>
        <p className="pt-8">Disponível em: <a className="hover:underline" href={video.url}>{video.url}</a></p>
      </center>

    </div>
  )
}

export default VideoDinamico