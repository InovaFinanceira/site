import { MapPin, Phone, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-inova-blue text-white py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex items-start leading-none h-40 -mb-2 -ml-4 sm:-ml-6 lg:-ml-8">
              <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                <img
                  src="/logo-inova.png"
                  alt="Inova Financeira - Soluções Financeiras"
                  className="h-40 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 -mt-1">
              O Grupo Inova Financeira é referência em crédito com garantia de veículo.
              Oferecemos as melhores condições do mercado com total transparência e segurança.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <strong>CNPJ:</strong> 40.946.742/0001-29
              </p>
              <p className="text-sm text-gray-400">
                <strong>Razão Social:</strong> Grupo Inova Financeira - ME
              </p>
            </div>
          </div>

          <div className="pt-40 flex flex-col">
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4 items-start">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-inova-gold flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Porto Velho - RO
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-inova-gold flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  (83) 9 9381-2261
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-inova-gold flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  contato@grupoinovafinanceira.com
                </span>
              </div>
            </div>
          </div>

          <div className="pt-40 lg:ml-auto flex flex-col">
            <h4 className="text-lg font-semibold mb-6">Links Úteis</h4>
            <div className="space-y-3 items-start">
              <Link to="/politica-de-privacidade" className="block text-sm text-gray-300 hover:text-inova-gold transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="block text-sm text-gray-300 hover:text-inova-gold transition-colors">
                Termos de Uso
              </Link>
              <a href="https://procon.ro.gov.br/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-inova-gold transition-colors">
                Código de Defesa do Consumidor
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8" style={{borderTopColor: '#b89a5e'}}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400">
                O Grupo Inova Financeira atua como correspondente bancário autorizado, conforme <a href="https://www.bcb.gov.br/pre/normativos/res/2011/pdf/res_3954_v7_l.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-400 transition-colors">Resolução BACEN 3954</a>.
              </p>
            </div>

            <p className="text-[10px] sm:text-xs text-gray-400 self-end lg:self-center">
              © 2025 Grupo Inova Financeira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
