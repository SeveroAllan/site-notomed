import React from 'react';
import Link from 'next/link';
import {
  LegalLayout,
  TableOfContents,
  Section,
  Callout,
  Field,
  DataTable,
} from './LegalLayout';

/**
 * PrivacyPolicy.jsx — Versão Next.js
 * Política de Privacidade e Proteção de Dados — NOTO MED TECNOLOGIA LTDA.
 */

const TOC_ITEMS = [
  { id: 's1', label: 'Quem somos e papéis na LGPD' },
  { id: 's2', label: 'Dados que coletamos' },
  { id: 's3', label: 'Finalidades e bases legais' },
  { id: 's4', label: 'Dados sensíveis de saúde' },
  { id: 's5', label: 'Dados via Open Finance' },
  { id: 's6', label: 'Compartilhamento de dados' },
  { id: 's7', label: 'Prazo de retenção' },
  { id: 's8', label: 'Segurança da informação' },
  { id: 's9', label: 'Direitos do titular' },
  { id: 's10', label: 'Encarregado de dados (DPO)' },
  { id: 's11', label: 'Cookies e tecnologias de rastreio' },
  { id: 's12', label: 'Transferência internacional' },
  { id: 's13', label: 'Menores de idade' },
  { id: 's14', label: 'Alterações desta política' },
  { id: 's15', label: 'Contato' },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      currentPath="privacidade"
      kicker="Documento Legal · Política de Privacidade"
      title="Política de Privacidade e Proteção de Dados"
      subtitle="NOTO MED TECNOLOGIA LTDA. — Plataforma Noto + WhatsApp"
      updatedAt="24 de setembro de 2026"
      version="1.0"
      notice={
        <>
          Este documento regula o tratamento de dados pessoais no âmbito da integração{' '}
          <strong>Noto + WhatsApp</strong>. Para o tratamento de dados sensíveis de saúde (agendamento)
          e dados financeiros, consulte também o nosso{' '}
          <Link href="/consentimento" className="waui-link-inline">
            Termo de Consentimento Específico
          </Link>.
        </>
      }
    >
      <TableOfContents items={TOC_ITEMS} />

      <Section id="s1" number={1} title="Quem somos e papéis na LGPD">
        <p>
          <strong className="waui-strong">NOTO MED TECNOLOGIA LTDA.</strong>, inscrita no CNPJ sob o nº{' '}
          <strong className="waui-strong">33.841.732/0001-63</strong> ("Empresa" ou "Noto"), desenvolve
          e opera a solução tecnológica integrada ao aplicativo WhatsApp para emissão inteligente de notas fiscais.
          Para fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — "LGPD"):
        </p>
        <ul className="waui-legal-list">
          <li>
            O <strong className="waui-strong">profissional de saúde ou clínica usuária</strong> do Serviço atua como{' '}
            <strong className="waui-strong">Controlador</strong> dos dados pessoais de seus pacientes, cabendo-lhe a
            gestão clínica e a relação direta com o paciente;
          </li>
          <li>
            A <strong className="waui-strong">Empresa</strong> atua estritamente como{' '}
            <strong className="waui-strong">Operadora</strong> dos dados dos pacientes, processando-os
            conforme as diretrizes do Controlador e exclusivamente para gerar a nota fiscal contratada;
          </li>
          <li>
            Em relação aos dados cadastrais e de cobrança do próprio profissional de saúde contratante, a Empresa atua como{' '}
            <strong className="waui-strong">Controladora</strong>.
          </li>
        </ul>
      </Section>

      <Section id="s2" number={2} title="Dados que coletamos">
        <DataTable
          columns={['Categoria', 'Exemplos Tratados', 'Origem da Coleta']}
          rows={[
            [
              'Dados cadastrais do profissional',
              'Nome completo, CPF/CNPJ, CRM/registro de classe, e-mail, telefone, certificado digital',
              'Fornecidos diretamente pelo profissional no credenciamento',
            ],
            [
              'Dados de agendamento do paciente',
              'Nome do paciente, data e horário da consulta realizada',
              'Identificados a partir da mensagem de confirmação de atendimento trocada no WhatsApp, mediante autorização e consentimento',
            ],
            [
              'Dados financeiros de pagamento',
              'Identificação do comprovante Pix/transferência, valor da consulta e data de compensação',
              'Conexão Open Finance regulamentada pelo Banco Central autorizada pelo profissional',
            ],
            [
              'Dados fiscais da nota',
              'Número da NF-e, alíquota de ISS, discriminação do serviço de saúde, código de verificação',
              'Gerados pelo sistema fiscal da Prefeitura/Receita Federal',
            ],
            [
              'Dados técnicos e telemetria',
              'Endereço IP de acesso, registros de data/hora (logs), identificadores de sessão',
              'Coletados automaticamente para garantia de segurança e cumprimento do Marco Civil da Internet',
            ],
          ]}
        />
      </Section>

      <Section id="s3" number={3} title="Finalidades e bases legais">
        <p>
          O tratamento de dados pessoais pela plataforma Noto restringe-se às seguintes finalidades essenciais:
        </p>
        <ul className="waui-legal-list">
          <li>Identificar a confirmação de consulta enviada no WhatsApp para geração do documento fiscal;</li>
          <li>Transmitir à Secretaria Municipal de Fazenda correspondente os dados da prestação de serviços de saúde;</li>
          <li>Entregar o arquivo em formato PDF da nota fiscal emitida diretamente na conversa do paciente;</li>
          <li>Cumprir obrigações fiscais e tributárias exigidas por órgãos públicos;</li>
          <li>Prevenir fraudes fiscais e assegurar a autenticidade das comunicações.</li>
        </ul>
        <p>
          As bases legais aplicadas são a execução do contrato de serviços (art. 7º, V, LGPD), o cumprimento
          de obrigação legal fiscal (art. 7º, II) e, quanto aos dados sensíveis de saúde, o consentimento
          específico e destacado manifestado pelo paciente (art. 11, I).
        </p>
      </Section>

      <Section id="s4" number={4} title="Dados sensíveis de saúde">
        <Callout tone="warn">
          <p className="waui-callout-title">Atenção à Privacidade e Sigilo Médico</p>
          A correlação entre o nome de um indivíduo e a realização de uma consulta médica é classificada
          pela LGPD como dado sensível de saúde. A plataforma Noto opera sob o princípio da minimização
          estrita (Privacy by Design): o motor automatizado processa exclusivamente a mensagem de
          confirmação fiscal, sem jamais inspecionar conversas particulares, fotos de exames, diagnósticos
          ou histórico clínico do paciente.
        </Callout>
      </Section>

      <Section id="s5" number={5} title="Dados via Open Finance">
        <p>
          A integração com a conta bancária do profissional de saúde ocorre por meio do ecossistema do
          Open Finance, sob supervisão e regulação do Banco Central do Brasil. A Noto apenas consulta as
          notificações de recebimento para confrontar o valor pago com a nota fiscal correspondente. Não
          temos autorização nem capacidade técnica para movimentar fundos ou debitar valores da conta bancária.
        </p>
      </Section>

      <Section id="s6" number={6} title="Compartilhamento de dados">
        <p>
          Os dados pessoais podem ser compartilhados unicamente com:
        </p>
        <ul className="waui-legal-list">
          <li>Sistemas tributários municipais e Receita Federal para homologação da Nota Fiscal de Serviços Eletrônica (NFS-e);</li>
          <li>Provedores de infraestrutura e computação em nuvem com certificações ISO 27001 e SOC 2;</li>
          <li>Parceiros autorizados do WhatsApp Business API (Meta Platforms, Inc.) para envio da mensagem com o anexo PDF.</li>
        </ul>
        <p>
          A Empresa não vende, não aluga e não comercializa nenhuma base de dados com corretores de dados ou redes de anunciantes.
        </p>
      </Section>

      <Section id="s7" number={7} title="Prazo de retenção dos dados">
        <p>
          Os registros fiscais e notas emitidas são mantidos em arquivo seguro pelo prazo legal de 5 (cinco)
          anos, em conformidade com o Código Tributário Nacional e normas da Receita Federal. Encerrado esse
          prazo legal, as informações são descartadas de forma definitiva e irrecuperável.
        </p>
      </Section>

      <Section id="s8" number={8} title="Segurança da informação">
        <p>
          Empregamos padrões internacionais de segurança cibernética: criptografia TLS 1.3 ponta a ponta em trânsito,
          criptografia AES-256 em repouso nos bancos de dados, chaves de autenticação rotativas, segregação lógica
          de dados e auditoria contínua de acessos.
        </p>
      </Section>

      <Section id="s9" number={9} title="Direitos do titular de dados">
        <p>
          Todo titular de dados (paciente ou médico) pode exercer integralmente os direitos previstos no art. 18 da LGPD,
          incluindo confirmação de tratamento, acesso, correção, anonimização e revogação de autorização. O canal
          exclusivo para requisições é o e-mail{' '}
          <a href="mailto:dpo@noto.com.br" className="waui-link-inline">
            dpo@noto.com.br
          </a>.
        </p>
      </Section>

      <Section id="s10" number={10} title="Encarregado de dados (DPO)">
        <p>
          Para atendimento direto e esclarecimentos sobre proteção de dados pessoais:
        </p>
        <p>
          Encarregado (DPO): <Field>Equipe de Privacidade Noto Med</Field> · Contato formal:{' '}
          <a href="mailto:dpo@noto.com.br" className="waui-link-inline">
            dpo@noto.com.br
          </a>
        </p>
      </Section>

      <Section id="s11" number={11} title="Cookies e tecnologias de sessão">
        <p>
          Utilizamos unicamente cookies estritamente técnicos e temporários para autenticação de sessão e
          prevenção de ataques CSRF. Não utilizamos rastreadores de publicidade de terceiros em nosso site institucional.
        </p>
      </Section>

      <Section id="s12" number={12} title="Transferência internacional de dados">
        <p>
          Caso os servidores de nuvem de alta disponibilidade estejam situados em centros de dados fora do território
          nacional, asseguramos que o fornecedor cumpre cláusulas padrão contratuais compatíveis com a LGPD e GDPR.
        </p>
      </Section>

      <Section id="s13" number={13} title="Menores de idade">
        <p>
          Tratamentos relacionados a atendimentos de crianças ou adolescentes exigem que o consentimento seja
          firmado pelo pai, mãe ou responsável legal formal.
        </p>
      </Section>

      <Section id="s14" number={14} title="Alterações desta política">
        <p>
          Reservamo-nos o direito de aprimorar esta Política sempre que houver evolução regulatória ou funcional.
          Quaisquer modificações substanciais serão comunicadas diretamente em nossa página inicial.
        </p>
      </Section>

      <Section id="s15" number={15} title="Canal de contato">
        <p>
          Para dúvidas, suporte ou atendimento institucional da NOTO MED TECNOLOGIA LTDA.:
        </p>
        <p>
          E-mail:{' '}
          <a href="mailto:contato@noto.com.br" className="waui-link-inline">
            contato@noto.com.br
          </a>{' '}
          · CNPJ 33.841.732/0001-63
        </p>
      </Section>
    </LegalLayout>
  );
}
