import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import foto1 from '../assets/IMG_0185.jpeg'
import foto2 from '../assets/IMG_0186.jpeg'
import foto3 from '../assets/IMG_0423.jpeg'

function AboutMe() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])
  const fotos = [foto1, foto2, foto3]

  return (
    <section className="bg-pink-200 px-10 py-16 flex flex-col md:flex-row items-center gap-10">

      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-2xl font-serif font-bold text-[#6c3483]">Sobre Mim:</h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Juliana Abreu é maquiadora profissional em Fortaleza, <br />
          dedicada a valorizar a beleza única de cada cliente.
        </p>
        <a href="https://wa.me/5585996732086" target="_blank" className="bg-green-500 text-white px-6 py-3 rounded-full w-fit">
          Agendar pelo WhatsApp
        </a>
      </div>

      <div className="flex-1">
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {fotos.map((foto, index) => (
              <div className="min-w-full" key={index}>
                <img src={foto} alt={`Foto ${index + 1}`} className="w-full h-[500px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutMe