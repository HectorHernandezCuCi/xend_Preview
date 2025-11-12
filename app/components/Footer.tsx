import Link from "next/link";
import Image from "next/image";
import xendIcon from "@/assets/icons/XEND_icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    empresa: [
      { label: "Sobre el proyecto", href: "/" },
      { label: "Interfaz (UX/UI)", href: "/design" },
      { label: "Base de datos", href: "/database" },
    ],
    recursos: [
      { label: "Documentación", href: "/docs" },
    ],
  };

  return (
    <footer className="bg-gradient-to-r from-[#152c75] to-[#1e40af] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="flex items-center space-x-3 group mb-4 w-fit"
              >
                <div className="relative w-12 h-12">
                  <Image
                    src={xendIcon}
                    alt="Xend logo"
                    fill
                    className="object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <span className="font-bold text-3xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  XEND
                </span>
              </Link>
              <p className="text-blue-100 text-sm leading-relaxed mb-6 max-w-xs">
                La plataforma académica que organiza tu vida estudiantil y conecta
                a tu comunidad universitaria.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Empresa
              </h3>
              <ul className="space-y-3">
                {footerSections.empresa.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-blue-100 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Recursos
              </h3>
              <ul className="space-y-3">
                {footerSections.recursos.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-blue-100 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 border-t border-blue-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100">
            <p>
              © {currentYear} XEND. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;