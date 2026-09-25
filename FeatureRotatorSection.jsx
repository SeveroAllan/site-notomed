'use client';

import React, { useState, useEffect, useRef } from 'react';

const DURATION_MS = 7500; // Duração de cada slide (7.5s)

const FEATURES = [
  {
    id: 'extracao',
    title: 'Extração automática de dados',
    description:
      'O comando /agendado identifica e salva os dados do paciente para emissão da nota.',
    linkText: 'Saber como funciona',
    linkHref: '#agendado-info',
    chatMock: {
      stepTitle: 'Identificação Inteligente',
      incomingMsg: {
        text: 'Dra., confirmo minha consulta de amanhã. Seguem meus dados:\nAna Paula Silva, CPF 034.892.117-04.',
        time: '11:15',
      },
      commandMsg: {
        text: '/agendado',
        time: '11:16',
      },
      systemCard: {
        type: 'extraction',
        title: 'Dados extraídos com sucesso',
        patient: 'Ana Paula Silva',
        doc: 'CPF: 034.***.***-04',
        status: 'Pronto para emissão fiscal',
        time: '11:16',
      },
    },
  },
  {
    id: 'emissao',
    title: 'Emissão direto na conversa',
    description:
      'A mensagem rápida /emissão ativa o envio automático, a mesma frase que você já mandaria.',
    linkText: 'Ver demonstração',
    linkHref: '#emissao-info',
    chatMock: {
      stepTitle: 'Emissão em 1 clique',
      incomingMsg: {
        text: 'Acabei de fazer o PIX da consulta de R$ 350,00!',
        time: '14:31',
      },
      commandMsg: {
        text: 'Obrigado pelo comprovante, vou enviar em seguida sua nota no valor de R$ 350,00.',
        time: '14:32',
      },
      systemCard: {
        type: 'pdf',
        filename: 'nota-fiscal-0428.pdf',
        meta: '1 página · 142 kB · PDF emitido',
        text: 'Segue sua nota fiscal da última consulta. Foi enviada por e-mail também, caso precise.',
        time: '14:32',
      },
    },
  },
  {
    id: 'email',
    title: 'Envio automático por e-mail',
    description:
      'Com o Gmail conectado (opcional), a nota também é enviada ao e-mail do paciente.',
    linkText: 'Conhecer integração Gmail',
    linkHref: '#gmail-info',
    chatMock: {
      stepTitle: 'Cópia por E-mail',
      incomingMsg: {
        text: 'Pode me mandar a nota por e-mail também para o meu convênio?',
        time: '16:02',
      },
      commandMsg: {
        text: 'Já está a caminho! Emitindo cópia oficial por e-mail.',
        time: '16:03',
      },
      systemCard: {
        type: 'email',
        title: 'Enviado via Gmail Conectado',
        recipient: 'ana.paula@email.com',
        subject: 'Sua Nota Fiscal - Consulta Dra. Mariana',
        badge: 'Cópia entregue na caixa de entrada',
        time: '16:03',
      },
    },
  },
];

export default function FeatureRotatorSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());
  const animationFrameRef = useRef(null);

  // Controle de rotação automática com barra de progresso suave
  useEffect(() => {
    if (!isPlaying) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progress / 100) * DURATION_MS;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / DURATION_MS) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setActiveIndex((prev) => (prev + 1) % FEATURES.length);
        setProgress(0);
        startTimeRef.current = Date.now();
      } else {
        animationFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [activeIndex, isPlaying]);

  const handleSelectTab = (idx) => {
    setActiveIndex(idx);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    handleSelectTab((activeIndex + 1) % FEATURES.length);
  };

  const handlePrev = () => {
    handleSelectTab((activeIndex - 1 + FEATURES.length) % FEATURES.length);
  };

  const currentFeature = FEATURES[activeIndex];

  return (
    <section className="waui-rotator-section" aria-label="Recursos em Destaque">
      <div className="waui-rotator-container">
        {/* Cabeçalho de Seção Centralizado */}
        <header className="waui-rotator-header">
          <h2 className="waui-rotator-title">
            Emissão inteligente e sem esforço
          </h2>
          <p className="waui-rotator-subtitle">
            Mantenha suas conversas organizadas, identifique pacientes e emita notas fiscais na própria rotina do WhatsApp.
          </p>
        </header>

        {/* Grid Principal: Celular à Esquerda, Abas com Progresso à Direita */}
        <div className="waui-rotator-grid">
          {/* Coluna Esquerda: Smartphone Moderno Flutuante */}
          <div className="waui-phone-display-col">
            <div className="waui-phone-mockup">
              {/* Wallpaper Doodles do WhatsApp */}
              <div className="waui-phone-screen">
                {/* Topbar WhatsApp minimalista */}
                <div className="waui-phone-topbar">
                  <div className="waui-phone-user">
                    <img
                      src="/assets/avatar_ana_paula.jpg"
                      alt="Paciente"
                      className="waui-phone-avatar"
                    />
                    <div className="waui-phone-user-text">
                      <b className="waui-phone-username">Ana Paula (Paciente)</b>
                      <span className="waui-phone-userstatus">online</span>
                    </div>
                  </div>
                  <div className="waui-phone-badge-feature">
                    {currentFeature.chatMock.stepTitle}
                  </div>
                </div>

                {/* Área da Conversa Dinâmica */}
                <div className="waui-phone-chat" key={currentFeature.id}>
                  {/* Mensagem recebida da paciente */}
                  <div className="waui-bubble in animate-fade-in">
                    <p className="waui-bubble-msg">
                      {currentFeature.chatMock.incomingMsg.text}
                    </p>
                    <span className="waui-bubble-time in">
                      {currentFeature.chatMock.incomingMsg.time}
                    </span>
                  </div>

                  {/* Mensagem / comando enviado pelo profissional */}
                  <div className="waui-bubble out animate-fade-in" style={{ animationDelay: '150ms' }}>
                    <p className="waui-bubble-msg">
                      {currentFeature.chatMock.commandMsg.text}
                    </p>
                    <div className="waui-bubble-meta">
                      <span className="waui-bubble-time">
                        {currentFeature.chatMock.commandMsg.time}
                      </span>
                      <svg width="15" height="10" viewBox="0 0 16 11" fill="none">
                        <path d="M10.8 1.2L5.4 6.7L4.3 5.6" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.8 1.2L9.4 6.7L8 5.3" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.2 5.6L4.5 8.9L9.4 4" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Card do Sistema (Extração / PDF / Gmail) */}
                  {currentFeature.chatMock.systemCard.type === 'extraction' && (
                    <div className="waui-system-card animate-fade-in" style={{ animationDelay: '300ms' }}>
                      <div className="waui-card-header">
                        <span className="waui-card-icon">⚡</span>
                        <b>{currentFeature.chatMock.systemCard.title}</b>
                      </div>
                      <div className="waui-card-body">
                        <div>
                          <span>Paciente:</span> <b>{currentFeature.chatMock.systemCard.patient}</b>
                        </div>
                        <div>
                          <span>Documento:</span> <b>{currentFeature.chatMock.systemCard.doc}</b>
                        </div>
                      </div>
                      <div className="waui-card-footer">
                        <span className="waui-badge-green">✓ {currentFeature.chatMock.systemCard.status}</span>
                        <span className="waui-card-time">{currentFeature.chatMock.systemCard.time}</span>
                      </div>
                    </div>
                  )}

                  {currentFeature.chatMock.systemCard.type === 'pdf' && (
                    <div className="waui-bubble out pdf-bubble animate-fade-in" style={{ animationDelay: '300ms' }}>
                      <div className="waui-pdf-snippet">
                        <div className="waui-pdf-icon-bg">
                          <svg width="22" height="26" viewBox="0 0 24 28" fill="none">
                            <path d="M2 3a2 2 0 0 1 2-2h11l7 7v17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z" fill="#EA4335" />
                            <path d="M15 1v7h7" fill="#C5221F" />
                            <text x="11.5" y="21" textAnchor="middle" fontSize="7" fontWeight="800" fill="#FFFFFF">PDF</text>
                          </svg>
                        </div>
                        <div className="waui-pdf-snippet-info">
                          <b className="waui-pdf-snippet-name">{currentFeature.chatMock.systemCard.filename}</b>
                          <span>{currentFeature.chatMock.systemCard.meta}</span>
                        </div>
                      </div>
                      <p className="waui-pdf-snippet-msg">
                        {currentFeature.chatMock.systemCard.text}
                      </p>
                      <div className="waui-bubble-meta">
                        <span className="waui-bubble-time">{currentFeature.chatMock.systemCard.time}</span>
                        <svg width="15" height="10" viewBox="0 0 16 11" fill="none">
                          <path d="M10.8 1.2L5.4 6.7L4.3 5.6" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14.8 1.2L9.4 6.7L8 5.3" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1.2 5.6L4.5 8.9L9.4 4" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {currentFeature.chatMock.systemCard.type === 'email' && (
                    <div className="waui-system-card email-card animate-fade-in" style={{ animationDelay: '300ms' }}>
                      <div className="waui-card-header">
                        <span className="waui-card-icon">✉️</span>
                        <b>{currentFeature.chatMock.systemCard.title}</b>
                      </div>
                      <div className="waui-card-body">
                        <div>
                          <span>Para:</span> <b>{currentFeature.chatMock.systemCard.recipient}</b>
                        </div>
                        <div>
                          <span>Assunto:</span> {currentFeature.chatMock.systemCard.subject}
                        </div>
                      </div>
                      <div className="waui-card-footer">
                        <span className="waui-badge-blue">✓ {currentFeature.chatMock.systemCard.badge}</span>
                        <span className="waui-card-time">{currentFeature.chatMock.systemCard.time}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Composer Estático WhatsApp Novo */}
                <div className="waui-phone-dock">
                  <div className="waui-phone-pill">
                    <span className="waui-phone-dock-icon">😊</span>
                    <span className="waui-phone-dock-placeholder">Mensagem</span>
                    <span className="waui-phone-dock-icon">📎</span>
                    <span className="waui-phone-dock-icon">📷</span>
                  </div>
                  <div className="waui-phone-mic-btn">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Abas com Linha de Progresso e Acordeão */}
          <div className="waui-accordion-col">
            <ul className="waui-accordion-list" role="tablist">
              {FEATURES.map((item, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <li
                    key={item.id}
                    className={`waui-accordion-item ${isActive ? 'is-active' : ''}`}
                  >
                    {/* Barra de Progresso no topo de cada item */}
                    <div className="waui-track-bar" aria-hidden="true">
                      {isActive && (
                        <div
                          className="waui-fill-progress"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>

                    {/* Cabeçalho da Aba */}
                    <div
                      className="waui-item-header"
                      onClick={() => handleSelectTab(idx)}
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={0}
                    >
                      <h4 className="waui-item-title">{item.title}</h4>

                      {/* Botões Play/Pause no item ativo */}
                      {isActive && (
                        <button
                          type="button"
                          className="waui-play-pause-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePlay();
                          }}
                          aria-label={isPlaying ? 'Pausar rotação' : 'Reproduzir rotação'}
                        >
                          {isPlaying ? (
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                              <rect x="2" y="2" width="4" height="12" rx="1" />
                              <rect x="10" y="2" width="4" height="12" rx="1" />
                            </svg>
                          ) : (
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M4 2.5v11l9-5.5-9-5.5z" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Conteúdo Expandido do Acordeão */}
                    <div className={`waui-item-expand ${isActive ? 'is-open' : ''}`}>
                      <p className="waui-item-desc">{item.description}</p>
                      <a href={item.linkHref} className="waui-item-learn-more">
                        <span>{item.linkText}</span>
                        <svg width="8" height="13" viewBox="0 0 10 18" fill="none">
                          <path d="M0.88 13.05L6.41 7.5L0.88 1.95L2.58 0.25L9.83 7.5L2.58 14.75L0.88 13.05Z" fill="currentColor" />
                        </svg>
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Controles de Navegação Anterior / Próximo no Rodapé */}
            <div className="waui-accordion-footer-nav">
              <div className="waui-nav-arrows">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="waui-arrow-btn"
                  aria-label="Item anterior"
                >
                  <svg width="9" height="15" viewBox="0 0 10 18" fill="none">
                    <path d="M9.12 4.95L3.59 10.5L9.12 16.05L7.42 17.75L0.17 10.5L7.42 3.25L9.12 4.95Z" fill="currentColor" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="waui-arrow-btn"
                  aria-label="Próximo item"
                >
                  <svg width="9" height="15" viewBox="0 0 10 18" fill="none">
                    <path d="M0.88 13.05L6.41 7.5L0.88 1.95L2.58 0.25L9.83 7.5L2.58 14.75L0.88 13.05Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
