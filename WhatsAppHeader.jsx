'use client';

import React from 'react';
import Link from 'next/link';

/**
 * WhatsAppHeader.jsx
 * Réplica do cabeçalho oficial do WhatsApp Calling:
 * - Full-width sobre o mesmo fundo bege (#F5EDE4)
 * - Esquerda: Logo oficial (ícone balão + wordmark WhatsApp)
 * - Centro: 6 itens de navegação (2 dropdowns ⌵, 2 links externos ↗)
 * - Direita: 2 botões pílula lado a lado (Outline branco/preto "Iniciar sessão >" + Verde sólido "Descarregar ↓")
 */
export default function WhatsAppHeader() {
  return (
    <header className="wac-header">
      <div className="wac-header-container">
        {/* Esquerda: Logo Noto + WhatsApp */}
        <div className="wac-header-logo-area">
          <Link href="/" className="wac-logo-link" aria-label="Noto + WhatsApp Página Inicial">
            <img
              src="/assets/noto+whatsapp.svg"
              alt="Noto + WhatsApp"
              className="wac-logo-img"
            />
          </Link>
        </div>

        {/* Centro: Menu Horizontal com 6 Itens */}
        <nav className="wac-header-nav" aria-label="Navegação principal">
          <ul className="wac-nav-list">
            {/* 1. Funcionalidades (com dropdown) */}
            <li className="wac-nav-item">
              <button type="button" className="wac-nav-link wac-dropdown-btn">
                <span>Funcionalidades</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="wac-dropdown-icon">
                  <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>

            {/* 2. Privacidade */}
            <li className="wac-nav-item">
              <Link href="/privacidade" className="wac-nav-link">
                Privacidade
              </Link>
            </li>

            {/* 3. Blogue */}
            <li className="wac-nav-item">
              <a href="#blog" className="wac-nav-link">
                Blogue
              </a>
            </li>

            {/* 4. Apps */}
            <li className="wac-nav-item">
              <a href="#apps" className="wac-nav-link">
                Apps
              </a>
            </li>

            {/* 5. Centro de Ajuda (Link externo ↗) */}
            <li className="wac-nav-item">
              <a href="https://faq.whatsapp.com" target="_blank" rel="noopener noreferrer" className="wac-nav-link">
                <span>Centro de Ajuda</span>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="wac-external-icon">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>

            {/* 6. Para Empresas (Link externo ↗) */}
            <li className="wac-nav-item">
              <a href="https://business.whatsapp.com" target="_blank" rel="noopener noreferrer" className="wac-nav-link">
                <span>Para Empresas</span>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none" className="wac-external-icon">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* Direita: Botões em formato Pílula lado a lado */}
        <div className="wac-header-actions">
          {/* Botão 1: Outline branco/preto com ícone de seta */}
          <button type="button" className="wac-pill-btn-outline">
            <span>Iniciar sessão</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Botão 2: Preenchido em verde com Ativar emissão */}
          <button type="button" className="wac-pill-btn-green" aria-label="Ativar emissão">
            <span>Ativar emissão</span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 2.5V11M8 11L4.5 7.5M8 11L11.5 7.5M3 13.5H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
