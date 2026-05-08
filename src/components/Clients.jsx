import foto1 from "../assets/IMG_0185.jpeg"
import foto2 from "../assets/IMG_0186.jpeg"
import foto3 from "../assets/IMG_0423.jpeg"
import foto4 from "../assets/IMG_0433.jpeg"
import foto5 from "../assets/IMG_0442.jpeg"
import foto6 from "../assets/IMG_0444.jpeg"

const fotos = [foto1, foto2, foto3, foto4, foto5, foto6]

function Clients() {
  return (
    <section className="flex flex-col items-center gap-10 p-16">

      <h2 className="text-4xl font-serif font-bold text-[#6c3483]">Clientes</h2>

      <div className="flex flex-row gap-6">
        {fotos.map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt={`Cliente ${index + 1}`}
            className="w-48 h-64 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>

    </section>
  );
};

export default Clients