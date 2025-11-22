import { Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-inova-blue via-inova-dark-blue to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-20 lg:pb-40">
        <div className="flex items-center justify-center min-h-[60vh] lg:min-h-[50vh]">
          <div className="max-w-6xl w-full">
            {/* Logo alinhado com o conteúdo */}
            <div className="mb-6 lg:mb-8 lg:-ml-6">
              <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                <img
                  src="/logo-inova.png"
                  alt="Inova Financeira - Soluções Financeiras"
                  className="h-28 sm:h-36 lg:h-48 w-auto"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Levante capital usando o seu <span className="text-inova-gold">veículo como garantia</span>
              </h1>
              <p className="text-base text-gray-200 leading-relaxed">
                Converta seu carro, moto ou caminhão em um recurso disponível,
                com <strong className="text-inova-gold">ótimas condições e análise rápida</strong>.
              </p>
              <p className="text-base text-gray-300">
                Uma solução segura, transparente e feita para quem precisa agilizar a vida financeira
                sem abrir mão do patrimônio. Receba uma proposta personalizada em poucos minutos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5548996863470?text=Olá%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Inova%20Financeira."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-inova-gold hover:bg-dark-gold text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
              >
                🟡 Simule agora gratuitamente
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="relative">
                <div className="relative w-full aspect-[7/8] bg-gradient-to-br from-inova-blue/95 via-inova-dark-blue/90 to-inova-blue/95 rounded-xl overflow-hidden">
                  <video
                    ref={videoRef}
                    src="/promo-video-inova.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-contain rounded-xl"
                    poster="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  >
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>

                <button
                  onClick={toggleMute}
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg z-20"
                  aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6" />
                  ) : (
                    <Volume2 className="w-6 h-6" />
                  )}
                </button>

              </div>
              
              <div className="absolute -top-4 -right-4 bg-inova-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Taxa a partir de 1,49% a.m.
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-inova-gold/30 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-inova-gold/20 rounded-full blur-xl"></div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
