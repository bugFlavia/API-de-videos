import Link from "next/link";
import {Home as HomeIcon, ListVideo, UserCheck, FileVideo2 , UserPlus} from 'lucide-react'

export default function nav(){
    return(
        <nav className="flex-col text-slate-50 space-y-6 fixed">
            <Link className="flex itens-center font-bold py-8" href="/"><HomeIcon className="w-60 h-11"/></Link>
            <Link className="flex itens-center font-bold hover:underline pl-3 gap-2" href="/Videos"><ListVideo/>Vídeos</Link>
            <Link className="flex itens-center font-bold hover:underline pl-3 gap-2" href="/Videos/Cadastrar"><FileVideo2/>Cadastrar vídeo</Link>
            <Link className="flex itens-center font-bold hover:underline pl-3 gap-2" href="/Autores"><UserCheck/>Autores</Link>
            <Link className="flex itens-center font-bold hover:underline pl-3 gap-2" href="/Autores/Cadastrar"><UserPlus/>Cadastrar Autor</Link>
          </nav>
    )
}