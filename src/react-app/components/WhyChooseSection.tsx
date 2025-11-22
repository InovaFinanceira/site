import { DollarSign, Clock, FileX, Car, Users } from 'lucide-react';

export default function WhyChooseSection() {

  const benefits = [
    {
      icon: DollarSign,
      title: "Taxas a partir de 1,49% ao mês",
      description: "As menores taxas do mercado para crédito com garantia"
    },
    {
      icon: Clock,
      title: "Após aprovação e assinatura do contrato",
      description: "Você recebe o crédito em sua conta em até 24h"
    },
    {
      icon: FileX,
      title: "Sem burocracia e sem custos antecipados",
      description: "Sem cobranças de taxas antecipadas ou seguro"
    },
    {
      icon: Car,
      title: "Você continua usando seu veículo normalmente",
      description: "O veículo serve apenas como garantia contratual"
    },
    {
      icon: Users,
      title: "Atendimento humano e personalizado",
      description: "Equipe especializada para tirar todas suas dúvidas"
    }
  ];

  return (
    <section className="py-20 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Inova Financeira é referência em <span className="text-inova-gold">crédito com garantia de veículo</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow group">
                <div className="w-16 h-16 bg-inova-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-inova-gold/20 transition-colors">
                  <Icon className="w-8 h-8 text-inova-gold" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
