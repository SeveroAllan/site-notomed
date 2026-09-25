'use client';

import React from 'react';
import WhatsAppHeader from './WhatsAppHeader';
import NotaFiscalDemo from './NotaFiscalDemo';
import FeatureRotatorSection from './FeatureRotatorSection';
import Footer from './Footer';

/**
 * Home.jsx
 * Réplica fiel da página com o design system do WhatsApp:
 * - Fundo creme claro #F5EDE4 contínuo no Hero
 * - Cabeçalho full-width com logo Noto + WhatsApp e botões alinhados às extremidades
 * - Hero de 2 colunas com mockup interativo em React da emissão de nota fiscal
 * - Seção #E6FFDA com carrossel rotativo e abas acordeão (Extração, Emissão, E-mail)
 * - Rodapé oficial no padrão escuro #111B21
 */
export default function Home() {
  return (
    <div className="wac-page-root">
      {/* 1. Header Fino Full-Width */}
      <WhatsAppHeader />

      {/* 2. Seção Hero */}
      <main className="wac-hero-main">
        <section className="wac-hero-section">
          <div className="wac-hero-container">
            {/* Coluna Esquerda (~48% da largura) */}
            <div className="wac-hero-left">
              {/* Kicker acima em letras garrafais, 16px */}
              <div className="wac-hero-eyebrow">
                Nova função para profissionais da saúde
              </div>

              <h1 className="wac-hero-title">
                Emissão de nota<br />
                fiscal direto<br />
                na conversa
              </h1>

              <div className="wac-hero-body">
                <p>
                  Ao final do atendimento, a mensagem de confirmação já enviada ao paciente passa a acionar a emissão da nota. Os dados da consulta e do paciente são identificados automaticamente, e o PDF é entregue na mesma conversa. Nenhuma mudança na rotina de atendimento. Disponível por convite.
                </p>
              </div>

              {/* Botão Pílula Verde "Ativar emissão" */}
              <div className="wac-hero-cta-wrapper">
                <button
                  type="button"
                  className="wac-hero-download-btn"
                  aria-label="Ativar emissão"
                >
                  <span className="wac-btn-text">Ativar emissão</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="wac-download-icon"
                  >
                    <path
                      d="M8 2.5V11M8 11L4.5 7.5M8 11L11.5 7.5M3 13.5H13"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Coluna Direita (~52% da largura) — Celular interativo com emissão de nota */}
            <div className="wac-hero-right">
              <NotaFiscalDemo />
            </div>
          </div>
        </section>

        {/* 3. Seção Rotativa / Acordeão #E6FFDA com os 3 Recursos */}
        <FeatureRotatorSection />
      </main>

      {/* 4. Rodapé Integrado */}
      <Footer />
    </div>
  );
}
