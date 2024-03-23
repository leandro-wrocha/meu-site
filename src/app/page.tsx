'use client';

export default function Home() {
  return (
    <div className="h-full p-4">
      <main className="flex flex-col items-center">
        <img src="/profile.png" alt="Leandro Rocha" className="rounded-full w-[210px] h-[210px] mt-4"/>
        
        <div className="mt-4 flex flex-col items-center">
          <h1 className="text-3xl font-bold">Leandro Rocha</h1>
          <h3 className="text-sm italic">Desenvolvedor Web/Backend</h3>
          <br/>
          <span className="font-light text-lg">Bora resolver problema de código?</span>
        </div>

        <div className="flex justify-center max-w-[700px] mt-8">
          <ul className="grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2">
            <li 
              className="border-2 border-[#333] rounded-md p-2 max-w-[340px] cursor-pointer hover:border-colorHover hover:text-hoverColor hover:shadow-2xl"
              onClick={() => window.open('https://wa.link/xcqmnz')}
            >
              <h1 className="font-bold">Orçamentos</h1>

              <p className="font-medium text-justify mt-2 text-sm">
                Para suporte ou implementação de novas funcionalidades, contenho conhecimento em PHP e Typescript. Entre em contato comigo.
              </p>
            </li>

            <li className="border-2 border-colorDefault rounded-md p-2 max-w-[340px] cursor-pointer hover:border-colorHover hover:text-hoverColor hover:shadow-2xl">
              <span className="font-bold">MinhaAgenda</span>

              <p className="font-medium text-justify mt-2 text-sm">
                Este é um projeto pessoal no qual estou trabalhando duro para torná-lo uma realidade. Clique aqui para dar uma olhada no progresso atual e fique atento para futuras atualizações!
              </p>
            </li>

            <li 
              className="border-2 border-colorDefault rounded-md p-2 max-w-[340px] cursor-pointer hover:border-colorHover hover:text-hoverColor hover:shadow-2xl"
              onClick={() => window.open('https://github.com/leandro-wrocha', '_blank')}
            >
              <span>Github</span>

              <p className="font-medium text-justify mt-2 text-sm">
                Este é meu portifólio como desenvolvedor, e aqui podemos acompanhar minha evolução como desenvolvedor backend.
              </p>
            </li>
          </ul>
        </div>
      </main>
      
      <footer className="flex justify-center mt-[118px] p-4">
        <span className="text-sm text-center align-middle">&#169; Leandro Rocha</span>
      </footer>
    </div>
  );
}
