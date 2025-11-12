import Image from "next/image";

interface InfoCardProps {
    image: string;
    title: string;
    description: string;
    index: number;
}

const InfoCard = ({ image, title, description, index }: InfoCardProps) => {
    const isImageRight = index % 2 === 0;
    
    return (
        <div className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100`}>
            <div className="flex-1 space-y-4">
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    Característica {index + 1}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {title}
                </h2>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto">
                <div className="relative w-full max-w-[280px] mx-auto lg:w-[320px] h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                    <Image 
                        src={image} 
                        alt={`${title} preview`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;