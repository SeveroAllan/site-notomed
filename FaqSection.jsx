'use client';

import React, { useState } from 'react';

/**
 * FaqSection.jsx
 * Seção de Perguntas Frequentes (FAQ) construída fielmente no padrão WAUI do WhatsApp:
 * - Fundo branco puro (#FFFFFF) para contraste utilitário antes do rodapé
 * - Acordeão acessível (WAI-ARIA: tablist/tabpanel, aria-expanded, aria-controls)
 * - Transição suave com rotação de chevron e animação CSS
 * - Respostas claras e objetivas sobre a operação, segurança e uso prático do Noto
 */

const FAQ_ITEMS = [
  {
    id: 'o-que-e-o-noto',
    question: 'O que é o Noto?',
    answer:
      'É o jeito de emitir nota fiscal sem sair do WhatsApp. Você já combina a consulta e o valor na conversa com o paciente. O Noto usa essa mesma conversa para registrar a consulta e emitir a NFS-e, então você não preenche portal de prefeitura nem digita dados duas vezes.',
  },
  {
    id: 'aprender-mais-um-sistema',
    question: 'Vou ter que aprender mais um sistema?',
    answer:
      'Não. Você faz o cadastro uma única vez, que leva poucos minutos. Depois disso, tudo acontece no WhatsApp que você já usa. Não há painel para abrir todo dia.',
  },
  {
    id: 'recurso-nativo-whatsapp',
    question: 'Isso é um recurso nativo do WhatsApp?',
    answer:
      'Não. As respostas rápidas (os atalhos com "/") são do próprio WhatsApp e você pode usar hoje. O Noto conecta ao número do consultório como um aparelho conectado, igual ao WhatsApp Web, e faz o resto: lê a conversa, monta e emite a nota.',
  },
  {
    id: 'paciente-percebe-automatico',
    question: 'Meu paciente vai perceber que é automático?',
    answer:
      'Não. Ele recebe uma frase normal, do jeito que você escreveria, e depois o PDF da nota na mesma conversa. O Noto nunca manda mensagem de robô nem comando para o paciente.',
  },
  {
    id: 'como-sabe-valor-datas',
    question: 'Como ele sabe o valor e as datas das consultas?',
    answer:
      'Quando você envia a resposta rápida, ele lê o trecho recente da conversa e encontra a data e o valor combinados. Se o valor não aparecer, soma as consultas em aberto do paciente. Consultas de um pacote saem numa nota só, com todas as datas listadas.',
  },
  {
    id: 'paciente-sem-cpf',
    question: 'E se o paciente não me passou o CPF?',
    answer:
      'O Noto pede pelo WhatsApp, com uma frase natural: "poderia por favor me reenviar o seu CPF para emissão da nota fiscal?". Quando o paciente responde, o Noto valida o CPF e segue com a emissão. Você não precisa correr atrás.',
  },
  {
    id: 'seguranca-certificado-digital',
    question: 'É seguro entregar meu certificado digital?',
    answer:
      'O arquivo fica em armazenamento privado, nunca público. A senha fica num cofre criptografado, separada do restante dos dados. Cada médico só enxerga os próprios dados, e o certificado só é usado no momento de assinar a sua nota.',
  },
  {
    id: 'sem-certificado-digital',
    question: 'Não tenho certificado digital. E agora?',
    answer:
      'Ele é exigido por lei para emitir NFS-e, com ou sem o Noto. Se você já emite nota hoje, provavelmente já tem um. Se não tem, precisa emitir um certificado A1 antes de começar, e o Noto passa a usá-lo daí em diante.',
  },
  {
    id: 'funciona-minha-cidade',
    question: 'Funciona na minha cidade?',
    answer:
      'Funciona nas cidades que emitem no padrão nacional da NFS-e. Para saber se a sua é uma delas, basta olhar sua última nota: o Noto lê esse XML no cadastro e já aponta se é compatível. [confirmar lista/critério antes de publicar]',
  },
  {
    id: 'regime-tributario',
    question: 'Funciona para o meu regime (MEI, Simples, autônomo)?',
    answer:
      'O Noto configura tudo a partir da sua última nota emitida: regime tributário, código do serviço e alíquota. Você sobe o XML e ele preenche sozinho, sem digitar dado fiscal.',
  },
  {
    id: 'emissao-erro',
    question: 'E se a emissão der erro?',
    answer:
      'O Noto tenta de novo automaticamente, até 3 vezes. Se ainda assim não der, ou se faltar algum dado, ele avisa só você, em privado. O paciente nunca fica sabendo de um erro.',
  },
  {
    id: 'secretaria-contador-podem-usar',
    question: 'Minha secretária e meu contador podem usar?',
    answer:
      'A secretária usa o mesmo atalho no WhatsApp do consultório, sem precisar de login. O contador pode ter acesso de consulta às notas, sem mexer em nada.',
  },
  {
    id: 'reforma-tributaria-ibs-cbs',
    question: 'E a reforma tributária (IBS e CBS)?',
    answer:
      'O Noto já nasce preparado para os campos novos. Quando forem exigidos para o seu regime, a atualização é feita por nós, e você não precisa reconfigurar nada.',
  },
  {
    id: 'le-todas-conversas',
    question: 'O Noto lê todas as minhas conversas?',
    answer:
      'Ele só age quando você envia a sua resposta rápida. Nesse momento, olha o trecho recente daquela conversa para achar data, valor e CPF. Ao conectar, ele procura CPFs que pacientes já enviaram antes, para adiantar cadastros. Ele não conversa com o paciente por conta própria, e a única mensagem que envia sozinho é o pedido de CPF.',
  },
  {
    id: 'dados-protegidos-lgpd',
    question: 'Meus dados e os dos meus pacientes estão protegidos?',
    answer:
      'CPFs e senhas são criptografados. O acesso é isolado por médico, então nenhum outro usuário enxerga os seus pacientes. O login é por WhatsApp com código de confirmação, sem senha para vazar. Você é o controlador dos dados dos seus pacientes, e o Noto atua só como operador, dentro da LGPD.',
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      data-testid="waui_section"
      className="_9t2b _wauiSection__mediumWidth waui-faq-section"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="_9t2c _afhu waui-faq-container">
        {/* Cabeçalho da Seção de Dúvidas */}
        <div className="waui-faq-header">
          <span className="waui-faq-eyebrow">DÚVIDAS FREQUENTES</span>
          <h2 className="waui-faq-title">Perguntas frequentes</h2>
          <p className="waui-faq-subtitle">
            Tudo o que você precisa saber sobre a emissão de nota fiscal sem sair da conversa do WhatsApp.
          </p>
        </div>

        <article role="presentation" className="_9ta2 _9sd2 _9sdc" style={{ backgroundColor: 'transparent' }}>
          <div className="_wauiAnimationWrapper__root">
            <div className="_wauiAnimationWrapper__content _aebi _avo0 _aebq _aebp _aeb6" style={{ transitionDelay: '2ms' }}>
              <div
                className="_9vd6 _9t33 _9bir _9bj3 _9bhj _9v11 _9taw _9tay _9u6_ _9u71 _9se- _9u5w _9u5z"
                style={{ backgroundColor: 'transparent' }}
              >
                <div className="_9wm7">
                  <ul className="waui-faq-list" id="faq-list">
                    {FAQ_ITEMS.map((item) => {
                      const isOpen = openId === item.id;
                      const tabId = `${item.id}-tab`;
                      const panelId = item.id;

                      return (
                        <li key={item.id} className="_9wma _aj1w waui-faq-item">
                          <button
                            type="button"
                            className="_aily _9wm9 waui-faq-trigger"
                            aria-expanded={isOpen}
                            aria-selected={isOpen}
                            id={tabId}
                            aria-controls={panelId}
                            onClick={() => toggleItem(item.id)}
                          >
                            <svg
                              fill="none"
                              className={`_wauiIcon__chevronRight _agnt _9wmb waui-faq-chevron ${
                                isOpen ? 'waui-faq-chevron--open' : ''
                              }`}
                              viewBox="0 0 16 26"
                              aria-hidden="true"
                            >
                              <path
                                d="M0 22.945L9.89 13 0 3.055 3.045 0 16 13 3.045 26 0 22.945z"
                                fill="currentColor"
                              />
                            </svg>
                            <h3 className="_9vd5 _ad_0 _aenu _9sc- _9t31 _9wm8 waui-faq-question">
                              {item.question}
                            </h3>
                          </button>

                          <div
                            className={`_9wm6 waui-faq-panel ${isOpen ? 'waui-faq-panel--open' : ''}`}
                            aria-hidden={!isOpen}
                            role="tabpanel"
                            id={panelId}
                            aria-labelledby={tabId}
                          >
                            <div className="_9wn9 waui-faq-panel-inner">
                              <article role="presentation" className="_9ta2 _9sc- _9t31" style={{ backgroundColor: 'transparent' }}>
                                <span className="_9vg3 _9sep _aj1b" style={{ color: '#1C1E21' }}>
                                  <div className="_8l_f _52ju" style={{ boxSizing: 'border-box' }}>
                                    <p className="waui-faq-answer">{item.answer}</p>
                                  </div>
                                </span>
                              </article>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FaqSection;
