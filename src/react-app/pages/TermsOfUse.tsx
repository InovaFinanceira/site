import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import ScrollToTopButton from '@/react-app/components/ScrollToTopButton';

export default function TermsOfUse() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Update document font family
    document.documentElement.style.fontFamily = 'Poppins, system-ui, sans-serif';

    // Update page title
    document.title = 'Termos de Uso - Grupo Inova Financeira';

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-inova-blue shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-white hover:text-inova-gold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Voltar</span>
              </Link>
              <div className="h-8 w-px bg-gray-400"></div>
              <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                <img
                  src="/logo-inova.png"
                  alt="Grupo Inova Financeira"
                  className="h-16 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8" style={{color: '#b89a5e'}}>
            Termos de Uso
          </h1>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 mb-0">
              <strong>Última atualização:</strong> Janeiro de 2025
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Ao acessar e utilizar os serviços do <strong>Grupo Inova Financeira</strong>, você concorda 
              em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
              parte destes termos, não deve utilizar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Sobre o Grupo Inova Financeira</h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong>Grupo Inova Financeira</strong> é uma empresa especializada em crédito com
              garantia de veículo, atuando como correspondente bancário autorizado conforme a
              Resolução BACEN 3954. Nossos serviços incluem análise de crédito, intermediação
              financeira e consultoria em soluções de crédito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Serviços Oferecidos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>Grupo Inova Financeira</strong> oferece os seguintes serviços:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Crédito com garantia de veículo (carro, moto, caminhão, ônibus)</li>
              <li>Análise de crédito e avaliação de risco</li>
              <li>Intermediação com instituições financeiras parceiras</li>
              <li>Consultoria financeira personalizada</li>
              <li>Simulação de crédito online</li>
              <li>Atendimento especializado</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Elegibilidade e Requisitos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para utilizar nossos serviços, você deve:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ser maior de 18 anos e civilmente capaz</li>
              <li>Possuir CPF válido e regularizado</li>
              <li>Ter renda comprovada</li>
              <li>Possuir veículo em seu nome para servir como garantia</li>
              <li>Fornecer documentação completa e verídica</li>
              <li>Não possuir restrições impeditivas nos órgãos de proteção ao crédito</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Obrigações do Cliente</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ao utilizar nossos serviços, você se compromete a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fornecer informações verdadeiras, precisas e atualizadas</li>
              <li>Manter seus dados pessoais e de contato atualizados</li>
              <li>Cumprir todas as obrigações contratuais assumidas</li>
              <li>Utilizar os serviços de forma legal e ética</li>
              <li>Não utilizar os serviços para atividades fraudulentas ou ilegais</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Processo de Contratação</h2>
            <p className="text-gray-700 leading-relaxed">
              O processo de contratação envolve análise de crédito, avaliação do veículo, 
              negociação de condições e formalização do contrato. O <strong>Grupo Inova Financeira</strong> 
              reserva-se o direito de aprovar ou recusar propostas com base em critérios 
              técnicos e de risco. A aprovação está sujeita à análise das instituições 
              financeiras parceiras.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Taxas e Custos</h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong>Grupo Inova Financeira</strong> não cobra taxas antecipadas. Todos os custos 
              e taxas aplicáveis serão claramente informados antes da contratação. 
              As condições financeiras (taxas de juros, prazos, valores) são definidas 
              pelas instituições financeiras parceiras e podem variar conforme o perfil 
              do cliente e análise de risco.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Garantias e Responsabilidades</h2>
            <p className="text-gray-700 leading-relaxed">
              O veículo oferecido como garantia permanece em posse do cliente, servindo 
              apenas como garantia contratual. O <strong>Grupo Inova Financeira</strong> atua como 
              intermediário e não é responsável por decisões de crédito das instituições 
              financeiras parceiras. Nossos serviços são prestados com diligência e 
              transparência, mas não garantimos aprovação de crédito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Proteção de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              O tratamento de dados pessoais segue nossa Política de Privacidade e está 
              em conformidade com a Lei Geral de Proteção de Dados (LGPD). Seus dados 
              são utilizados exclusivamente para prestação dos serviços contratados e 
              cumprimento de obrigações legais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Propriedade Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo o conteúdo do site, incluindo textos, imagens, logos, marcas e design, 
              são de propriedade do <strong>Grupo Inova Financeira</strong> ou licenciados para uso. 
              É proibida a reprodução, distribuição ou uso comercial sem autorização prévia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong>Grupo Inova Financeira</strong> não se responsabiliza por danos indiretos, 
              lucros cessantes ou prejuízos decorrentes do uso dos serviços. Nossa 
              responsabilidade limita-se aos serviços efetivamente prestados e contratados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Rescisão</h2>
            <p className="text-gray-700 leading-relaxed">
              Estes termos permanecem em vigor enquanto você utilizar nossos serviços. 
              Podemos suspender ou encerrar o acesso aos serviços em caso de violação 
              destes termos ou por motivos legais ou regulamentares.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Alterações dos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
              As alterações entrarão em vigor imediatamente após a publicação. 
              Recomendamos a revisão periódica destes termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Lei Aplicável e Foro</h2>
            <p className="text-gray-700 leading-relaxed">
              Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa 
              será resolvida no foro da comarca de Porto Velho - RO, renunciando as 
              partes a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para dúvidas sobre estes Termos de Uso ou nossos serviços, entre em contato:
            </p>
            <div className="bg-inova-blue/5 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Grupo Inova Financeira</strong>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>E-mail:</strong> contato@grupoinovafinanceira.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Telefone:</strong> (83) 9 9381-2261
              </p>
              <p className="text-gray-700">
                <strong>Endereço:</strong> Porto Velho - RO
              </p>
            </div>
          </section>

          <div className="bg-inova-gold/10 border-l-4 border-inova-gold p-6 rounded-r-lg mt-12">
            <p className="text-gray-700 mb-0">
              <strong>Importante:</strong> Ao utilizar nossos serviços, você declara ter lido, 
              compreendido e concordado com todos os termos e condições aqui estabelecidos.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-inova-blue text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-white hover:text-inova-gold transition-colors"
              >
                <ArrowLeft className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">Voltar</span>
              </Link>
              <div className="h-8 w-px bg-gray-400"></div>
              <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                <img
                  src="/logo-inova.png"
                  alt="Grupo Inova Financeira"
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-[10px] sm:text-xs self-end sm:self-center">
              © 2025 Grupo Inova Financeira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
