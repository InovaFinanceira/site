export default function FinalCTASection() {
  return (
    <section className="py-20 lg:py-40 bg-gradient-to-br from-inova-blue via-inova-dark-blue to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-inova-gold/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-inova-gold/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Transforme seu veículo em <span className="text-inova-gold">oportunidade agora mesmo!</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto">
            Crédito transparente, seguro e sem complicações do jeito <strong><span className="text-inova-gold">Inova Financeira</span></strong>.
          </p>

          <div className="pt-8">
            <a
              href="https://wa.me/5583993812261?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20informações.%20Pode%20me%20ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-inova-gold hover:bg-dark-gold text-white px-12 py-6 rounded-xl text-xl lg:text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-inova-gold/50 hover:border-light-gold"
            >
              🟡 Simular meu crédito agora
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Taxa a partir de 1,49% a.m.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Receba em até 24h após a assinatura do contrato</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Contratação 100% online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
