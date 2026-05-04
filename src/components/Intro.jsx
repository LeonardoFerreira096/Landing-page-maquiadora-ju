import fotoIntro from "../assets/MAK.jpeg"

function Intro() {
  return (
    <section className="flex flex-row items-center justify-between p-16 gap-10">

      <div className="flex flex-col gap-6 max-w-lg">
        <h1 className="text-6xl font-serif font-bold leading-tight">
          <span className="bg-[#9b59b6] text-white px-2">Maquiagem</span> realça sua<br />
          <span className="text-[#6c3483]">beleza única</span>
        </h1>

        <p className="text-gray-500 text-base leading-relaxed">
          Especialista em make artístico e maquiagem para noivas.<br />
          Anos de experiência transformando olhares em Fortaleza<br />
          com técnicas exclusivas e produtos premium.
        </p>

        <a
          href="https://wa.me/5585996732086"
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded-full w-fit"
        >
          Agendar pelo WhatsApp
        </a>
      </div>

      <div className="relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-xl px-4 py-2 text-center z-10">
          <p className="text-[#9b59b6] font-semibold text-sm">Juliana Abreu</p>
          <p className="text-gray-400 text-xs uppercase tracking-widest">Make Artist</p>
        </div>

        <img
          src={fotoIntro}
          alt="Juliana Abreu"
          className="w-72 h-96 object-cover rounded-2xl"
        />
      </div>

    </section>
  );
};

export default Intro