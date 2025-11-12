import Image from 'next/image';
import MenuHome from "@/assets/gifs/MenuHome.gif";
import PhoneGif from "@/assets/gifs/PhoneGif.gif";
import ChatGif from "@/assets/gifs/ChatGif.gif";
import GroupGif from "@/assets/gifs/GroupGif.gif";
import ChatsViewGif from "@/assets/gifs/ChatsViewGif.gif"
import UserEditGif from "@/assets/gifs/UserEditGif.gif"

interface ScreensProps {
  activeTab: string;
}

const Screens = ({ activeTab }: ScreensProps) => {
  const screens = [
    { 
      name: 'Home', 
      desc: 'Pantalla principal con dashboard y navegación', 
      gif: MenuHome,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Crear Cuenta', 
      desc: 'Gestión de perfil de usuario y configuración', 
      gif: PhoneGif,
      color: 'from-purple-500 to-pink-500'
    },
    { 
        name: 'Inicio de Sesión', 
        desc: 'Accede de forma rápida y segura a tu cuenta personal en cualquier momento.', 
        gif: PhoneGif,
        color: 'from-purple-500 to-pink-500'
    },
    { 
        name: 'Vista de todos tus chats', 
        desc: 'Mantén tus conversaciones académicas siempre a la vista y bien organizadas.', 
        gif: ChatsViewGif,
        color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Mensajes', 
      desc: 'Sistema de mensajería y comunicación en tiempo real', 
      gif: ChatGif,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Grupos', 
      desc: 'Vista de grupos, comunidades y colaboración', 
      gif: GroupGif,
      color: 'from-green-500 to-emerald-500'
    },
    { 
        name: 'Edita tu perfil', 
        desc: 'Personaliza tu información, agrega una foto y muestra quién eres dentro de la comunidad académica.', 
        gif: UserEditGif,
        color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <div>
      {activeTab === 'screens' && (
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Pantallas del Proyecto
            </h2>
            <p className="text-gray-600 text-lg">
              Vistas principales de la aplicación
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {screens.map((screen, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[9/16] max-h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${screen.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative flex items-center justify-center w-full h-full p-4">
                    <div className="relative w-full max-w-[280px] h-[90%] rounded-xl overflow-hidden shadow-2xl bg-black">
                      <Image
                        src={screen.gif}
                        alt={`${screen.name} screen preview`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">
                      {screen.name}
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {screen.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${screen.color} text-white`}>
                      Demo
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {screen.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Muestra
                </h4>
                <p className="text-blue-800">
                  Los GIFs animados muestran la interfaz real de la aplicación en acción, 
                  demostrando flujos de navegación, interacciones y funcionalidades clave.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Diseño Responsivo</h4>
              <p className="text-sm text-gray-600">Optimizado para todos los dispositivos</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Animaciones Fluidas</h4>
              <p className="text-sm text-gray-600">Transiciones suaves y naturales</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">UI Moderna</h4>
              <p className="text-sm text-gray-600">Interfaz intuitiva y atractiva</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Screens;