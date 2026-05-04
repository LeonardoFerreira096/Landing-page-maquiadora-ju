

function AboutMe() {
    return (
        <section className="bg-pink-200 px-10 py-16 flex flex-col md:flex-row items-center gap-10">


            <div className="flex-1 flex flex-col gap-6 ">

                <h1 className="text-2xl font-serif font-bold text-[#6c3483] ">Sobre Mim: </h1>
                <p className="text-gray-600 text-base leading-relaxed">
                    Juliana Abreu é maquiadora profissional em Fortaleza, <br />
                    dedicada a valorizar a beleza única de cada cliente.<br />
                </p>

                <a href="https://wa.me/5585996732086" target="_blank" className="bg-green-500 text-white px-6 py-3 rounded-full w-fit"
                >Agendar pelo WhatsApp
                </a>
            </div>

           


        </section>
    );
};

export default AboutMe