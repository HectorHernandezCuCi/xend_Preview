interface ColorsProps {
  activeTab: string;
}

const Colors = ({ activeTab }: ColorsProps) => {
    const colors = [
        { name: 'Principal', hex: '#152c75', rgb: 'rgba(21, 44, 117)', usage: 'Botones principales, Header, Fondos' },
        { name: 'Secundario', hex: '#304572', rgb: 'rgba(48, 69, 114)', usage: 'Botones' },
        { name: 'Exito', hex: '#10B981', rgb: 'rgb(16, 185, 129)', usage: 'Confirmaciones, éxito' },
        { name: 'Alerta', hex: '#F59E0B', rgb: 'rgb(245, 158, 11)', usage: 'Alertas, advertencias' },
        { name: 'Error', hex: '#EF4444', rgb: 'rgb(239, 68, 68)', usage: 'Errores, eliminaciones' },
        { name: 'Negro', hex: '#1F2937', rgb: 'rgb(31, 41, 55)', usage: 'Textos principales' },
        { name: 'Blanco', hex: '#F9FAFB', rgb: 'rgb(249, 250, 251)', usage: 'Fondos, cards' },
        { name: 'Gris', hex: '#6B7280', rgb: 'rgb(107, 114, 128)', usage: 'Textos secundarios' },
    ];
  return (
    <div>
       {activeTab === 'Colores' && (
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">Paleta de Colores</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {colors.map((color, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div 
                                className="h-40 w-full"
                                style={{ backgroundColor: color.hex }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{color.name}</h3>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">
                                        <span className="font-semibold">HEX:</span> {color.hex}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">RGB:</span> {color.rgb}
                                    </p>
                                    <p className="text-gray-500 text-xs mt-3 pt-3 border-t border-gray-200">
                                        {color.usage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  );
};

export default Colors;
