import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import ScrollToTopButton from '@/react-app/components/ScrollToTopButton';

export default function PrivacyPolicy() {
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
    document.title = 'Política de Privacidade - Grupo Inova Financeira';

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
            Política de Privacidade
          </h1>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-600 mb-0">
              <strong>Última atualização:</strong> Janeiro de 2025
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong>Grupo Inova Financeira</strong> está comprometido em proteger a privacidade e os dados pessoais 
              de nossos clientes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, 
              armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção 
              de Dados (LGPD - Lei nº 13.709/2018) e demais legislações aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Dados Coletados</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>Grupo Inova Financeira</strong> pode coletar as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Dados de identificação:</strong> nome completo, CPF, RG, data de nascimento</li>
              <li><strong>Dados de contato:</strong> endereço, telefone, e-mail</li>
              <li><strong>Dados financeiros:</strong> renda, informações bancárias, histórico de crédito</li>
              <li><strong>Dados do veículo:</strong> marca, modelo, ano, placa, documentação</li>
              <li><strong>Dados de navegação:</strong> cookies, logs de acesso, endereço IP</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalidade do Tratamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os dados pessoais são tratados pelo <strong>Grupo Inova Financeira</strong> para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Análise de crédito e avaliação de risco</li>
              <li>Formalização de contratos de crédito</li>
              <li>Cumprimento de obrigações legais e regulamentares</li>
              <li>Comunicação com clientes sobre produtos e serviços</li>
              <li>Melhoria dos serviços prestados</li>
              <li>Prevenção à fraude e segurança</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base Legal</h2>
            <p className="text-gray-700 leading-relaxed">
              O tratamento de dados pessoais pelo <strong>Grupo Inova Financeira</strong> fundamenta-se nas seguintes 
              bases legais previstas na LGPD: execução de contrato, cumprimento de obrigação legal, 
              legítimo interesse e consentimento do titular.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong>Grupo Inova Financeira</strong> pode compartilhar dados pessoais com instituições financeiras 
              parceiras, órgãos de proteção ao crédito, autoridades competentes e prestadores de serviços, 
              sempre respeitando os princípios da LGPD e mediante adequadas garantias de proteção.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Direitos do Titular</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você possui os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados tratados com consentimento</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Segurança</h2>
            <p className="text-gray-700 leading-relaxed">
              O <strong>Grupo Inova Financeira</strong> adota medidas técnicas e organizacionais adequadas para 
              proteger os dados pessoais contra acessos não autorizados, situações acidentais ou ilícitas 
              de destruição, perda, alteração, comunicação ou difusão.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Retenção de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Os dados pessoais serão mantidos pelo período necessário para o cumprimento das finalidades 
              para as quais foram coletados, respeitando os prazos legais e regulamentares aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
              entre em contato conosco:
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

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Alterações</h2>
            <p className="text-gray-700 leading-relaxed">
              Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você 
              revise regularmente esta página para se manter informado sobre nossas práticas de privacidade.
            </p>
          </section>

          <div className="bg-inova-gold/10 border-l-4 border-inova-gold p-6 rounded-r-lg mt-12">
            <p className="text-gray-700 mb-0">
              <strong>Importante:</strong> Esta Política de Privacidade é parte integrante dos nossos 
              Termos de Uso e deve ser lida em conjunto com os mesmos.
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
