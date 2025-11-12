interface TypographyProps {
  activeTab: string;
}

const Typography = ({ activeTab }: TypographyProps) => {
    const typography = [
        { name: 'Display', size: 'text-6xl', weight: 'font-bold', sample: 'Título Principal' },
        { name: 'Heading 1', size: 'text-5xl', weight: 'font-bold', sample: 'Encabezado Grande' },
        { name: 'Heading 2', size: 'text-4xl', weight: 'font-semibold', sample: 'Encabezado Medio' },
        { name: 'Heading 3', size: 'text-3xl', weight: 'font-semibold', sample: 'Encabezado Pequeño' },
        { name: 'Body Large', size: 'text-xl', weight: 'font-normal', sample: 'Texto de cuerpo grande' },
        { name: 'Body', size: 'text-base', weight: 'font-normal', sample: 'Texto de cuerpo normal' },
        { name: 'Caption', size: 'text-sm', weight: 'font-normal', sample: 'Texto pequeño y anotaciones' },
    ];
  return (
    <div>
       {activeTab === 'Tipografia' && (
            <div className="space-y-8">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">Tipografía</h2>
                    <p className="text-gray-600 text-lg">Sistema tipográfico escalable y legible</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 bg-gray-50">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Familia Tipográfica</h3>
                        <p className="text-gray-600">Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto</p>
                    </div>
                    
                    <div className="divide-y divide-gray-200">
                        {typography.map((type, idx) => (
                            <div key={idx} className="p-8 hover:bg-gray-50 transition-colors">
                                <div className="flex items-baseline justify-between mb-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">{type.name}</h4>
                                        <p className="text-sm text-gray-500">
                                            {type.size} • {type.weight}
                                        </p>
                                    </div>
                                </div>
                                <p className={`${type.size} ${type.weight} text-gray-900`}>
                                    {type.sample}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Typography;
