'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LegalLayout, Section, Callout, Field } from './LegalLayout';

/**
 * ConsentTerm.jsx — Versão Next.js
 * Termo de Consentimento Específico — Tratamento de Dados Sensíveis de Saúde e Financeiros
 * NOTO MED TECNOLOGIA LTDA.
 */
export default function ConsentTerm({ patientName: initialName = '', onAccept }) {
  const [readCheck, setReadCheck] = useState(false);
  const [authorizeCheck, setAuthorizeCheck] = useState(false);
  const [patientName, setPatientName] = useState(initialName);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = readCheck && authorizeCheck && patientName.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    
    setSubmitted(true);
    onAccept?.({
      patientName: patientName.trim(),
      acceptedAt: new Date().toISOString(),
      channel: 'whatsapp',
    });
  };

  return (
    <LegalLayout
      currentPath="consentimento"
      kicker="Documento Legal · Termo de Consentimento Específico"
      title="Tratamento de Dados Sensíveis de Saúde e Financeiros"
      subtitle="NOTO MED TECNOLOGIA LTDA. — Integração Noto + WhatsApp"
      updatedAt="24 de setembro de 2026"
      version="1.0"
      notice={
        <>
          Este termo deve ser apresentado ao <strong>paciente</strong> pelo profissional de saúde
          (Controlador) no momento do agendamento ou confirmação via WhatsApp, antes de qualquer
          tratamento de dados para emissão automática de nota fiscal. Documento elaborado em estrita
          observância ao art. 11 da LGPD (Lei nº 13.709/2018).
        </>
      }
    >
      <Section id="s1" number={1} title="O que este termo autoriza">
        <p>
          Ao aceitar este Termo, você (paciente ou responsável legal) autoriza expressamente que seu
          profissional ou clínica de saúde, com o suporte tecnológico da plataforma{' '}
          <Field>Noto + WhatsApp</Field>, operada pela{' '}
          <strong className="waui-strong">NOTO MED TECNOLOGIA LTDA.</strong>, realize o tratamento dos
          seguintes dados estritamente necessários para a emissão e entrega de sua nota fiscal:
        </p>
        <ul className="waui-legal-list">
          <li>
            <strong className="waui-strong">Dado sensível de saúde (agendamento):</strong> a correlação entre
            seu nome completo e a data/horário da consulta médica ou psicológica realizada, identificada a
            partir da mensagem de confirmação do atendimento enviada na conversa do WhatsApp.
          </li>
          <li>
            <strong className="waui-strong">Dado financeiro (comprovante/pagamento):</strong> a confirmação do
            valor do serviço e do pagamento efetuado, vinculada à transação confirmada pelo profissional de saúde
            via integração bancária segura Open Finance.
          </li>
        </ul>
      </Section>

      <Section id="s2" number={2} title="O que NÃO é feito com seus dados">
        <Callout tone="default">
          <p className="waui-callout-title">Garantia de Privacidade Clínica Absoluta</p>
          <ul className="waui-legal-list" style={{ marginTop: '8px' }}>
            <li>
              <strong>Nenhum prontuário ou histórico médico é acessado:</strong> a plataforma Noto nunca lê,
              processa ou armazena conversas clínicas, diagnósticos, sintomas, áudios ou fotos trocadas com o profissional.
            </li>
            <li>
              <strong>Sem uso para marketing ou anúncios:</strong> seus dados jamais serão utilizados para ofertas,
              perfilamento comportamental ou disparos publicitários.
            </li>
            <li>
              <strong>Sem venda ou repasse a terceiros:</strong> os dados são transmitidos unicamente à autoridade
              fiscal competente (Secretaria de Fazenda / Prefeitura) para cumprimento de dever legal tributário.
            </li>
          </ul>
        </Callout>
      </Section>

      <Section id="s3" number={3} title="Sua autorização é opcional e revogável">
        <p>
          A autorização para emissão automática é facultativa. Caso opte por não concordar, o seu atendimento
          médico ou terapêutico continuará normalmente, e o profissional emitirá sua nota fiscal pelo meio tradicional manual.
        </p>
        <p>
          Você pode revogar este consentimento a qualquer momento, sem qualquer penalidade, bastando enviar uma
          mensagem solicitando o cancelamento ao próprio profissional no WhatsApp ou pelo e-mail{' '}
          <a href="mailto:dpo@noto.com.br" className="waui-link-inline">
            dpo@noto.com.br
          </a>.
        </p>
      </Section>

      <Section id="s4" number={4} title="Base Legal (LGPD)">
        <p>
          O tratamento aqui previsto fundamenta-se no consentimento específico e em destaque fornecido pelo
          titular (art. 11, inciso I, da Lei nº 13.709/2018), em harmonia com o cumprimento de obrigação legal
          e regulatória tributária pelo profissional (art. 7º, II e art. 11, II, "a").
        </p>
      </Section>

      <Section id="s5" number={5} title="Seus direitos como titular">
        <p>
          Em consonância com o art. 18 da LGPD, você possui o direito de confirmar a existência de tratamento,
          acessar seus dados cadastrais, solicitar correções, revogar o consentimento e requisitar a eliminação
          dos dados após o decurso do prazo legal de guarda fiscal (5 anos, conforme Código Tributário Nacional).
        </p>
      </Section>

      <Section id="s6" number={6} title="Registro formal de aceite">
        {submitted ? (
          <div className="waui-consent-success">
            <div className="waui-consent-success-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#103928" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h4 className="waui-consent-success-title">Consentimento Registrado com Sucesso!</h4>
              <p className="waui-consent-success-desc">
                Paciente: <strong>{patientName}</strong> · Canal: WhatsApp · Data: {new Date().toLocaleDateString('pt-BR')}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="waui-pill-button secondary-pill"
                style={{ marginTop: '12px' }}
              >
                Revisar ou alterar dados
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="waui-consent-form">
            <label className="waui-checkbox-label">
              <input
                type="checkbox"
                checked={readCheck}
                onChange={(e) => setReadCheck(e.target.checked)}
                className="waui-custom-checkbox"
                required
              />
              <span>
                Li e compreendi as informações acima sobre o tratamento dos meus dados de identificação e
                agendamento para a finalidade exclusiva de emissão de nota fiscal médica.
              </span>
            </label>

            <label className="waui-checkbox-label">
              <input
                type="checkbox"
                checked={authorizeCheck}
                onChange={(e) => setAuthorizeCheck(e.target.checked)}
                className="waui-custom-checkbox"
                required
              />
              <span>
                Autorizo expressamente o processamento para geração do PDF da nota e seu envio diretamente
                na conversa do WhatsApp, ciente de que posso revogar esta autorização quando desejar.
              </span>
            </label>

            <div className="waui-form-field-group">
              <label htmlFor="patientName" className="waui-form-label">
                Nome completo do paciente ou responsável
              </label>
              <input
                id="patientName"
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Ex.: Ana Paula da Silva"
                className="waui-form-input"
                required
              />
            </div>

            <div className="waui-form-actions">
              <button
                type="submit"
                disabled={!canSubmit}
                className="waui-pill-button primary-pill waui-submit-btn"
              >
                Confirmar aceite do termo
              </button>
            </div>

            <p className="waui-form-disclaimer">
              Canal de registro: WhatsApp Web/Mobile · Endereço IP e carimbo de data/hora serão gravados de forma segura para fins de auditoria e conformidade LGPD.
            </p>
          </form>
        )}
      </Section>
    </LegalLayout>
  );
}
