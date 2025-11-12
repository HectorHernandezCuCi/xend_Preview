interface OverviewProps {
  activeTab: string;
}

const Overview = ({ activeTab }: OverviewProps) => {
  return (
    <div>
      {activeTab === 'overview' && (
        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Visión General del Proyecto
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Objetivo</h3>
                <p className="text-gray-600 leading-relaxed">
                  Crear una plataforma académica moderna e intuitiva que facilite
                  la organización estudiantil, fomentando la colaboración y
                  mejorando la experiencia de aprendizaje.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Principios de Diseño
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Claridad visual y jerarquía de contenido</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Diseño responsivo y accesible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Interacciones fluidas y microanimaciones</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Características Principales
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🎨', title: 'Diseño Moderno', desc: 'UI contemporánea y atractiva' },
                { icon: '📱', title: 'Responsivo', desc: 'Adaptado a todos los dispositivos' },
                { icon: '⚡', title: 'Performance', desc: 'Carga rápida y optimizada' },
                { icon: '🔒', title: 'Seguro', desc: 'Protección de datos robusta' },
                { icon: '🌐', title: 'Accesible', desc: 'Para todos los dispositivos' },
                { icon: '🎯', title: 'Intuitivo', desc: 'Navegación simple y clara' },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Overview;
