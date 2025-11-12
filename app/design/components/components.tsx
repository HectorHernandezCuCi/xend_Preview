interface ComponentsProps {
  activeTab: string;
}

const Components = ({ activeTab }: ComponentsProps) => {
  return (
    <div>
       {activeTab === 'Componentes' && (
            <div className="space-y-12">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">Componentes</h2>
                    <p className="text-gray-600 text-lg">Biblioteca de elementos reutilizables</p>
                </div>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Botones</h3>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-[#152c74] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Botones Principales
                        </button>
                        <button className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                            Botones Secundarios
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                            Gradient Button
                        </button>
                        <button className="px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                            Text Button
                        </button>
                    </div>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Cards</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">📚</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Card Title</h4>
                            <p className="text-gray-600 text-sm">Descripción del contenido de la tarjeta.</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h4 className="text-lg font-bold mb-2">Featured Card</h4>
                            <p className="text-blue-100 text-sm">Tarjeta destacada con gradiente.</p>
                        </div>
                        <div className="border-2 border-blue-600 rounded-xl p-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🎯</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">Outlined Card</h4>
                            <p className="text-gray-600 text-sm">Tarjeta con borde destacado.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Formularios</h3>
                    <div className="max-w-md space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                            <input 
                                type="email" 
                                placeholder="tu@email.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">Mensaje</label>
                            <textarea 
                                rows={4}
                                placeholder="Escribe tu mensaje..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                            />
                        </div>
                        <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Enviar
                        </button>
                    </div>
                </section>
            </div>
        )}
    </div>
  );
};

export default Components;
