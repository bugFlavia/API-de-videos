export default function Home() {
  return (
    <div className="h-screen flex-col">
      <div className="flex flex-1 h-screen">
        <main className="flex-1 p-6">
          <h1 className="font-bold text-3xl pb-10">Bem vindo ao Flavia's Version, sua plataforma gratuita de vídeos de programação!</h1>
          <h2 className="text-2xl pb-8">Recomendados:</h2>
          <div className="grid grid-cols-3 gap-5">
          <iframe width="300" height="200" src="https://www.youtube.com/embed/q_ZoX98uopM" title="Next.js (Renderização React no Lado Servidor) // Dicionário do Programador" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/0zl72thBKzo" title="TUDO que você precisa saber do Next 13 (isso muda tudo)" allow="acceleromete; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/XHrbg2iYNCg?list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft" title="Curso Next.js: Introdução - #01" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/NhUr8cwDiiM" title="React JS // Dicionário do Programador" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/pDbcC-xSat4" title="COMEÇANDO NO REACT.JS EM 2022" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/FXqX7oof0I4?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO" title="Curso React: Introdução - #01" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
      </main>
      </div>
      
    </div>
  )
}
