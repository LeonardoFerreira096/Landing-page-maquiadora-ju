import fotoIntro from "../assets/istockphoto-952087226-1024x1024.jpg"

function Intro() {
  return (
    <section className="flex flex-row items-center justify-between p-16 gap-10">
      
      {/* Lado esquerdo - texto */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Juliana Abreu</h1>
        <p className="text-lg text-gray-500">make up</p>
        <a 
          href="https://wa.me/5585996732086" 
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded-full w-fit"
        >
          Agendar pelo WhatsApp
        </a>
      </div>

      <img 
        src={fotoIntro}
        alt="Juliana Abreu"
        className="w-80 h-80 object-cover rounded-2xl"
      />

    </section>
  )
}

export default Intro