import foto1 from '../assets/istockphoto-952087226-1024x1024.jpg'
import foto2 from '../assets/istockphoto-952087226-1024x1024.jpg'
import foto3 from '../assets/istockphoto-952087226-1024x1024.jpg'


function ServicesOffered() {

    const servicos = [
        {
            foto: foto1,
            titulo: "Maquiagem para Casamentos",
            descricao: "Look impecável e duradouro para o dia mais especial da sua vida."
        },
        {
            foto: foto2,
            titulo: "Maquiagem para Festas e Eventos",
            descricao: "Make elegante para formaturas, aniversários e ocasiões especiais."
        },
        {
            foto: foto3,
            titulo: "Maquiagem para o Dia a Dia",
            descricao: "Realce sua beleza natural com leveza e sofisticação."
        }

    ]

    return (
        <section className="flex flex-col items-center gap-10 p-16 bg-white">

            <h2 className="text-4xl font-serif font-bold text-[#6c3483]">
                Serviços Oferecidos
            </h2>

            <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">

                {servicos.map((servico, index) => (

                    <div
                        key={index}
                        className="flex flex-col w-72 bg-pink-50 
                       border border-pink-200 rounded-2xl 
                       shadow-md overflow-hidden 
                       hover:scale-105 transition duration-300">

                        <img
                            src={servico.foto}
                            alt={servico.titulo}
                            className="w-full h-52 object-cover"
                        />

                        <div className="flex flex-col gap-3 p-6">

                            <h5 className="text-xl font-bold text-[#6c3483]">
                                {servico.titulo}
                            </h5>

                            <p className="text-gray-600 text-sm">
                                {servico.descricao}
                            </p>

                            <a
                                href="https://wa.me/5585996732086"
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 w-fit bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full transition duration-300"
                            >
                                Agendar
                            </a>

                        </div>

                    </div>

                ))};

            </div>

        </section>
    );
};

export default ServicesOffered