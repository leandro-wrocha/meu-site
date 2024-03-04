import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full p-4">
      <header className="flex justify-end">
        <button>
          ENG
        </button>
      </header>

      <main className="flex flex-col items-center">
        <div className="h-[340px] w-[340px] rounded-full bg-color3 flex justify-center items-center drop-shadow-8xl">
          <Image className="h-[310px] w-[310px] rounded-full object-cover" src="/profile.png" width={310} height={310} alt="avatar-profile"/>
        </div>

        <div className="mt-7 text-center">
          <h2 className="text-5xl text-color6 font-semibold">Leandro Rocha</h2>
          <h5 className="text-xl text-color7 italic">Desenvolvedor Web/Backend</h5>
        </div>

        <div id="tabs-about" className="mt-[118px] flex gap-16">
          <div className="w-[310px] h-[115px] bg-color5 border-2 border-color2 drop-shadow-8xl rounded">
            Solicite orçamentos
          </div>

          <div className="w-[310px] h-[115px] bg-color5 border-2 border-color2 drop-shadow-8xl rounded">
            Minha Agenda
          </div>
        </div>
      </main>

      <footer className="flex justify-center mt-[118px] p-4">
        <span className="text-sm text-color7 text-center align-middle">&#169; Leandro Rocha</span>
      </footer>
    </div>
  );
}
