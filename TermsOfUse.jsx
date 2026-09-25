import React from 'react';
import Link from 'next/link';
import {
  LegalLayout,
  TableOfContents,
  Section,
  Callout,
  Field,
} from './LegalLayout';

/**
 * TermsOfUse.jsx — Versão Next.js
 * Página de Termos de Uso — NOTO MED TECNOLOGIA LTDA.
 */

const TOC_ITEMS = [
  { id: 's1', label: 'Aceitação dos termos' },
  { id: 's2', label: 'Quem pode usar o serviço' },
  { id: 's3', label: 'Descrição do serviço' },
  { id: 's4', label: 'Cadastro e conta' },
  { id: 's5', label: 'Integração com WhatsApp' },
  { id: 's6', label: 'Integração via Open Finance' },
  { id: 's7', label: 'Emissão de notas fiscais' },
  { id: 's8', label: 'Obrigações do usuário' },
  { id: 's9', label: 'Obrigações da empresa' },
  { id: 's10', label: 'Propriedade intelectual' },
  { id: 's11', label: 'Planos, pagamento e cancelamento' },
  { id: 's12', label: 'Limitação de responsabilidade' },
  { id: 's13', label: 'Suspensão e encerramento' },
  { id: 's14', label: 'Alterações destes termos' },
  { id: 's15', label: 'Lei aplicável e foro' },
  { id: 's16', label: 'Contato' },
];

export default function TermsOfUse() {
  return (
    <LegalLayout
      currentPath="termos"
      kicker="Documento Legal · Termos de Uso"
      title="Termos de Uso da Plataforma"
      subtitle="NOTO MED TECNOLOGIA LTDA. — Integração Noto + WhatsApp"
      updatedAt="24 de setembro de 2026"
      version="1.0"
      notice={
        <>
          Estes Termos regulam a contratação e uso da funcionalidade de emissão automatizada de
          notas fiscais diretamente no WhatsApp para profissionais da área de saúde. Antes de
          iniciar a operação, consulte também a nossa{' '}
          <Link href="/privacidade" className="waui-link-inline">
            Política de Privacidade
          </Link>{' '}
          e o{' '}
          <Link href="/consentimento" className="waui-link-inline">
            Termo de Consentimento
          </Link>.
        </>
      }
    >
      <TableOfContents items={TOC_ITEMS} />

      <Section id="s1" number={1} title="Aceitação dos termos">
        <p>
          Estes Termos de Uso ("Termos") regulam a utilização da plataforma tecnológica integrada{' '}
          <Field>Noto + WhatsApp</Field> ("Plataforma", "Serviço"), operada pela{' '}
          <strong className="waui-strong">NOTO MED TECNOLOGIA LTDA.</strong>, pessoa jurídica de
          direito privado, inscrita no CNPJ sob o nº{' '}
          <strong className="waui-strong">33.841.732/0001-63</strong> ("Empresa", "nós").
        </p>
        <p>
          Ao solicitar o convite, conectar sua conta ou enviar o comando de emissão, o profissional
          de saúde ("Usuário", "você") declara ter lido, compreendido e concordado integralmente
          com todas as condições aqui estipuladas.
        </p>
      </Section>

      <Section id="s2" number={2} title="Quem pode usar o serviço">
        <p>
          O Serviço é destinado exclusivamente a médicos, psicólogos, fisioterapeutas, terapeutas
          e demais profissionais da saúde legalmente habilitados junto aos seus respectivos
          conselhos de classe (CRM, CRP, CREFITO etc.), bem como pessoas jurídicas (clínicas e
          consultórios médicos).
        </p>
        <p>
          É terminantemente vedado o uso da solução para fins estranhos ao exercício regular da
          profissão em saúde ou com terceiros que não mantenham relação profissional legítima.
        </p>
      </Section>

      <Section id="s3" number={3} title="Descrição da funcionalidade">
        <p>
          A Noto oferece uma ponte inteligente de automação que processa a confirmação de consulta
          enviada pelo profissional ao paciente no WhatsApp ("Obrigado pelo comprovante, vou enviar
          em seguida sua nota no valor de R$ [valor]"), correlaciona o pagamento recebido via
          Open Finance, gera o documento fiscal eletrônico junto à Prefeitura e entrega o PDF da
          nota na mesma conversa.
        </p>
        <Callout tone="default">
          <p className="waui-callout-title">Sem alteração na rotina clínica</p>
          O profissional não precisa acessar sistemas governamentais burocráticos ou preencher
          formulários repetitivos: o processo é acionado a partir da própria mensagem de atendimento já
          enviada no dia a dia.
        </Callout>
      </Section>

      <Section id="s4" number={4} title="Cadastro, conta e credenciais">
        <p>
          Para habilitar a emissão, o Usuário fornecerá suas informações fiscais (inscrição municipal,
          certificado digital quando necessário) e manterá sob estrito sigilo suas chaves e
          dispositivos de acesso ao WhatsApp. A responsabilidade por operações disparadas com as
          credenciais do Usuário é pessoal e intransferível.
        </p>
      </Section>

      <Section id="s5" number={5} title="Integração com WhatsApp">
        <p>
          O Usuário autoriza o processamento técnico das mensagens pertinentes no canal de atendimento
          indicado, limitado exclusivamente à identificação do nome do paciente, data da consulta
          e valor. A Noto adota arquitetura de isolamento e nunca armazena o teor clínico das conversas.
        </p>
        <p>
          O profissional compromete-se a apresentar o Termo de Consentimento ao paciente antes da
          primeira emissão automatizada, salvaguardando a conformidade com a LGPD.
        </p>
      </Section>

      <Section id="s6" number={6} title="Integração via Open Finance">
        <p>
          A verificação de liquidação financeira ocorre por meio do ecossistema Open Finance regulado
          pelo Banco Central. O consentimento concedido pelo profissional permite unicamente a leitura
          de recebimentos e conferência de valores, sem permissão para transacionar ou transferir recursos.
        </p>
      </Section>

      <Section id="s7" number={7} title="Emissão de notas fiscais">
        <p>
          A plataforma executa a geração da NFS-e conforme as regras da municipalidade do profissional.
          Caso haja divergência entre o comprovante e o valor configurado, o sistema suspende a emissão
          e solicita confirmação manual na conversa, garantindo segurança tributária.
        </p>
      </Section>

      <Section id="s8" number={8} title="Obrigações do profissional de saúde">
        <ul className="waui-legal-list">
          <li>Manter regulares seu registro profissional e situação cadastral tributária;</li>
          <li>Fornecer aos pacientes acesso claro a este documento e ao Termo de Consentimento;</li>
          <li>Não submeter dados falsos ou simulados para fins de sonegação ou fraude;</li>
          <li>Conferir periodicamente os relatórios fiscais consolidados gerados em sua área.</li>
        </ul>
      </Section>

      <Section id="s9" number={9} title="Obrigações da Empresa">
        <ul className="waui-legal-list">
          <li>Manter a infraestrutura com alta disponibilidade e conformidade de segurança da informação;</li>
          <li>Garantir a privacidade dos dados nos termos de Operadora perante a LGPD;</li>
          <li>Disponibilizar canal de suporte técnico para esclarecimento de dúvidas e solução de eventuais inconsistências.</li>
        </ul>
      </Section>

      <Section id="s10" number={10} title="Propriedade intelectual">
        <p>
          Todos os códigos-fonte, algoritmos de automação, fluxos conversacionais, interfaces e marcas
          pertencem com exclusividade à NOTO MED TECNOLOGIA LTDA. Não é concedida qualquer licença de
          cópia, reprodução ou descompilação da solução.
        </p>
      </Section>

      <Section id="s11" number={11} title="Planos, tarifas e cancelamento">
        <p>
          A utilização da funcionalidade segue o modelo acordado no ato do convite. O cancelamento da
          assinatura pode ser efetuado a qualquer momento, sem fidelidade obrigatória, cessando
          as emissões automáticas futuras.
        </p>
      </Section>

      <Section id="s12" number={12} title="Limitação de responsabilidade">
        <p>
          A Noto não se responsabiliza por eventuais instabilidades originadas nos servidores da
          Prefeitura, do Banco Central ou da Meta (WhatsApp), empenhando os melhores esforços técnicos
          para reprocessamento imediato assim que os serviços externos forem restabelecidos.
        </p>
      </Section>

      <Section id="s13" number={13} title="Suspensão do serviço">
        <p>
          A Empresa poderá suspender preventivamente o serviço caso identifique tentativas de abuso,
          mensagens fraudulentas ou uso em desacordo com as diretrizes do CFM e da legislação vigente.
        </p>
      </Section>

      <Section id="s14" number={14} title="Atualização destes termos">
        <p>
          Eventuais melhorias contratuais serão informadas através de notificação formal aos
          profissionais cadastrados com pelo menos 15 dias de antecedência.
        </p>
      </Section>

      <Section id="s15" number={15} title="Legislação aplicável e foro">
        <p>
          Aplica-se ao presente instrumento a legislação brasileira. As partes elegem o foro da Comarca
          de São Paulo/SP para dirimir eventuais litígios oriundos deste contrato.
        </p>
      </Section>

      <Section id="s16" number={16} title="Canal de suporte e contato">
        <p>
          Para suporte operacional, dúvidas ou informações contratuais:
        </p>
        <p>
          E-mail:{' '}
          <a href="mailto:contato@noto.com.br" className="waui-link-inline">
            contato@noto.com.br
          </a>{' '}
          · NOTO MED TECNOLOGIA LTDA.
        </p>
      </Section>
    </LegalLayout>
  );
}
