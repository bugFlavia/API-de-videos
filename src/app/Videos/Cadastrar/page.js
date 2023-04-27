'use client';
import Link from "next/link"
import { useState, useEffect } from "react"
import {Home as HomeIcon, ListVideo, UserCheck} from 'lucide-react'

const CadastroVideo=()=>{

  const [video, setVideo]= useState({});
  const [videos, setVideos]= useState([]);
  const [autores, setAutores]= useState([]);

  useEffect(()=>{

    if(typeof window !== 'undefined'){
      const listagem_videos = localStorage.getItem('videos')
      const listagem_autores = localStorage.getItem('autores')  
    
      if(listagem_autores !== null){
        try{
          setAutores(JSON.parse(listagem_autores))
        }catch(error){
          console.log(error)
        }
      }
      if(listagem_videos !== null){
        try{
          setVideos(JSON.parse(listagem_videos))
        }catch(error){
          console.log(error)
        }
      }

   
    }

  }, []);
    
  
    const hadleOnChange = (e)=>{
      const {id, value} = e.target;
      setVideo({
        ...video,
        [id]:value
      });
    };
  
    const handleSave = (e) =>{
      e.preventDefault();
      const atualizar = [...videos];
      atualizar.push({
        id:Math.random().toString(36).slice(2, 7),
        ...video
      });
      setVideos(atualizar);
      localStorage.setItem('videos', JSON.stringify(atualizar));
      console.log(video.titulo)
      console.log(videos)
      alert(`${video.titulo} cadastrado!`);
      setVideo({});
    }
  
    return(
        <div className="h-screen flex-col">
        <div className="flex flex-1 h-screen">
          <main className="flex-1 p-6">
          <h1 className="font-bold text-3xl flex justify-center pb-10">Cadastre o seu vídeo na nossa plataforma:</h1>
          <form className="flex flex-col mb-96 shadow-2xl shadow-slate-100 rounded-lg gap-2" onSubmit={(e)=>handleSave(e)}>
            <center><label htmlFor="titulo" className="flex justify-center pt-4 pb-4 text-lg font-semibold">Título do Vídeo:</label><input className="rounded text-black w-5/6 h-10" type="text" id="titulo" placeholder="Título do vídeo" value={video.titulo || ''} onChange={(e)=> hadleOnChange(e)} required/>
            <label htmlFor="descricao" className="flex justify-center pt-4 pb-4 text-lg font-semibold">Descrição do Vídeo:</label><textarea  className="rounded text-black w-5/6" id="descricao" placeholder="Descrição do vídeo" cols="30" rows="5" value={video.descricao || ''} onChange={(e)=> hadleOnChange(e)} required></textarea>
            <label htmlFor="url" className="flex justify-center pt-4 pb-4 text-lg font-semibold">URL do vídeo:</label><input className="rounded text-black w-5/6 h-10" type="text" id="url" placeholder="URL do vídeo" value={video.url || ''} onChange={(e)=> hadleOnChange(e)} required/><br/>
            <label htmlFor="autores" className="flex justify-center pt-4 pb-4 text-lg font-semibold">Selecione o autor do vídeo:</label>
            <select  className="rounded text-gray-400 w-5/6 h-10" id="autores" placeholder="Endereço da foto do video no Youtube" value={video.autores || ''} onChange={(e) => hadleOnChange(e)} required>
            <option value="" disabled> Selecione um autor/canal</option>
            {autores .map((item) => {
                  return (
                    <option key={item.id} value={item.nome}>{item.nome}</option>
            )})}</select> 
            
            <label className="flex justify-center pt-4 pb-4 text-lg font-semibold">Linguagem:</label>
            
            <select className="rounded text-gray-400 w-5/6 h-10" id="linguagem" placeholder="Linguagem de programação do vídeo" value={video.linguagem || ''} onChange={(e) => hadleOnChange(e)} required>
            <option value="" disabled> Selecione a linguagem, framework ou biblioteca</option>
            <option value="html">JavaScript</option>
            <option value="css">Python</option>
            <option value="typescript">TypeScript</option>
            <option value="reactjs">Reac.js</option>
            <option value="nextjs">Next.js</option>
            </select> <br/>

            
   
           <button className="bg-white hover:bg-gray-100 text-slate-800 font-semibold py-2 px-4 mt-4 border border-gray-400 rounded shadow">Cadastrar</button></center>

          </form>
        </main>
        </div>
        </div>

    )
}

export default CadastroVideo