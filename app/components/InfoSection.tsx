import MenuHome from "@/assets/gifs/MenuHome.gif"
import PhoneGif from "@/assets/gifs/PhoneGif.gif"
import ChatGif from "@/assets/gifs/ChatGif.gif"
import GroupGif from "@/assets/gifs/GroupGif.gif"
import InfoCard from "./InfoCard";
const InfoSection = () => {
    const cardItems = [
        {
            image: MenuHome,
            title: "XEND: la nueva forma de comunicarte en el aula.",
            description: "XEND es una aplicación de mensajería académica con una interfaz moderna, limpia e intuitiva. Está diseñada para mejorar la comunicación entre alumnos, docentes y escuelas, eliminando el desorden de los chats tradicionales.",
        },
        {
            image: PhoneGif ,
            title: "Tu identidad académica, en un solo perfil.",
            description: "Crea tu perfil académico con tu foto, descripción y datos escolares. Conecta con tus compañeros enviando o aceptando solicitudes de amistad.",
        },
        {
            image: ChatGif,
            title: "Comunica, comparte y colabora con facilidad.",
            description: "En XEND, la comunicación es completa y eficiente. Los usuarios pueden enviar mensajes de texto, imágenes, archivos y enlaces relevantes a los chats, manteniendo la información académica siempre organizada y accesible.",
        },
        {
            image: GroupGif,
            title: "XEND: organiza tus materias y controla tu espacio educativo",
            description: "En XEND, los grupos se generan automáticamente con base en las materias que cada estudiante tiene registradas, lo que facilita la comunicación organizada entre compañeros y docentes. Además, los usuarios pueden crear sus propios grupos, decidir quién puede unirse y personalizar el nombre y la descripción para adaptarlo a sus necesidades académicas.",
        },
    ];

    return (
        <section className="w-full py-16 lg:py-24 px-4 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 lg:mb-20 space-y-6">
                    <div className="inline-block px-6 py-2 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-4">
                        ✨ Descubre las funcionalidades
                    </div>
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
                        La verdadera app que organiza tu{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            vida académica
                        </span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                        Todas las herramientas que necesitas para gestionar tus estudios en un solo lugar
                    </p>
                </div>

                <div className="space-y-12 lg:space-y-16">
                    {cardItems.map((item, index) => (
                        <InfoCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;