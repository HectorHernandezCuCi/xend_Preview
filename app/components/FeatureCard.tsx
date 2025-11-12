import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  footnote?: string;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  footnote 
}: FeatureCardProps) => {
  return (
    <div
      className="
        relative bg-white rounded-3xl shadow-md hover:shadow-2xl
        transition-all duration-300 border border-gray-100 
        overflow-hidden group p-6 sm:p-8 flex flex-col justify-between
        hover:scale-[1.03]
      "
    >
      <div className="flex items-center mb-4 sm:mb-6">
        <div
          className="
            relative flex items-center justify-center
            w-14 h-14 sm:w-16 sm:h-16 
            bg-gradient-to-br from-blue-100 to-purple-100 
            rounded-full flex-shrink-0
            transition-transform duration-300 group-hover:scale-110
          "
        >
          <Image
            src={icon}
            alt={`${title} icon`}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <h3
          className="
            ml-4 text-xl sm:text-2xl font-bold 
            text-gray-900 leading-snug
          "
        >
          {title}
        </h3>
      </div>

      <p
        className="
          text-gray-600 text-base sm:text-sm 
          leading-relaxed mb-4 sm:mb-6
        "
      >
        {description}
      </p>

      {footnote && (
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">{footnote}</p>
        </div>
      )}

      <div
        className="
          absolute inset-0 bg-gradient-to-br 
          from-blue-50 to-purple-50 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 -z-10
        "
      />
    </div>
  );
};

export default FeatureCard;
