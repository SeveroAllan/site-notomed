'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Header.jsx — Alinhado fielmente à barra de navegação do WhatsApp Calling:
 * - 100% de largura
 * - Fundo Creme exato da página (#FCF5EB), sem corte visual
 * - Lado Esquerdo: Logo noto + whatsapp
 * - Centro: "NOVIDADE" com tipografia refinada
 * - Canto Direito: Botão pílula verde WhatsApp ("Ativar emissão automática")
 */
export function Header({ currentPath = 'home', onOpenModal }) {
  const isHome = currentPath === 'home' || currentPath === '/';

  return (
    <header className="waui-header">
      <div className="waui-header-container">
        {/* Lado Esquerdo: Logo noto + whatsapp */}
        <div className="waui-header-left">
          <Link
            href="/"
            className="waui-header-logo-link"
            aria-label="Noto + WhatsApp - Página Inicial"
          >
            <img
              src="/assets/noto+whatsapp.svg"
              alt="Noto + WhatsApp"
              className="waui-header-logo-img"
            />
          </Link>
        </div>

        {/* Centro: NOVIDADE */}
        <div className="waui-header-center">
          <span className="waui-header-novidade">
            NOVIDADE
          </span>
        </div>

        {/* Lado Direito: Ativar emissão */}
        <div className="waui-header-actions">
          {!isHome && (
            <Link href="/" className="waui-nav-link-subtle">
              ← Início
            </Link>
          )}
          {onOpenModal ? (
            <button
              type="button"
              onClick={onOpenModal}
              className="waui-header-pill-cta"
            >
              <span>Ativar emissão</span>
            </button>
          ) : (
            <a
              href="https://notomed.tech"
              className="waui-header-pill-cta"
            >
              <span>Ativar emissão</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
