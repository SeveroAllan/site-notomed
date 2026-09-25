'use client';

import React, { useState } from 'react';

/**
 * WhatsAppCallMockup.jsx
 * Mockup de alta fidelidade do smartphone exibindo uma chamada de vídeo do WhatsApp:
 * - Moldura realista com cantos ultra-arredondados (44px)
 * - Barra de status superior (12:30, punch-hole, wifi, bateria)
 * - Header translúcido com "End-to-end Encrypted Call" e botões circulares
 * - Foto principal da videochamada em tela cheia (família sorrindo)
 * - Miniatura PiP no canto inferior direito com botões de alternar câmera e filtros
 * - Barra inferior flutuante tipo pílula com 5 controles de chamada
 */
export default function WhatsAppCallMockup() {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="wac-phone-wrapper">
      <div className="wac-phone-device">
        {/* Barra de Status do Sistema */}
        <div className="wac-phone-status-bar">
          <span className="wac-status-time">12:30</span>
          <div className="wac-punch-hole" aria-hidden="true" />
          <div className="wac-status-icons" aria-hidden="true">
            {/* Sinal Celular */}
            <svg width="15" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z" opacity="0.3" />
              <path d="M12 6c-3.31 0-6 2.69-6 6 0 1.45.52 2.78 1.38 3.82L12 18.5l4.62-2.68C17.48 14.78 18 13.45 18 12c0-3.31-2.69-6-6-6z" />
            </svg>
            {/* Wi-Fi */}
            <svg width="15" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
            </svg>
            {/* Bateria */}
            <svg width="18" height="13" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="7" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="4" y="9" width="13" height="6" rx="1" />
              <path d="M22 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Tela da Chamada de Vídeo */}
        <div className="wac-call-screen">
          {/* Foto Principal (Família na videochamada) */}
          <img
            src="/assets/call_family.jpg"
            alt="Pessoas em chamada de vídeo no WhatsApp"
            className="wac-call-bg-img"
          />

          {/* Gradiente superior sutil para legibilidade dos controles */}
          <div className="wac-gradient-top" />

          {/* Header Superior da Chamada */}
          <div className="wac-call-header">
            {/* Botão Minimizar */}
            <button
              type="button"
              className="wac-circle-btn wac-btn-blur"
              aria-label="Minimizar chamada"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 14 10 14 10 20" />
                <polyline points="20 10 14 10 14 4" />
                <line x1="14" y1="10" x2="21" y2="3" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>

            {/* Label Central: End-to-end Encrypted Call */}
            <div className="wac-encryption-badge">
              <span>End-to-end Encrypted Call</span>
            </div>

            {/* Botão Adicionar Pessoa */}
            <button
              type="button"
              className="wac-circle-btn wac-btn-blur"
              aria-label="Adicionar pessoa"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
            </button>
          </div>

          {/* Miniatura PiP (Picture in Picture) */}
          <div className="wac-pip-container">
            <img
              src="/assets/call_grandma_pip.jpg"
              alt="Você na videochamada"
              className="wac-pip-img"
            />
            {/* Botões sobrepostos na PiP */}
            <div className="wac-pip-actions">
              {/* Trocar Câmera */}
              <button
                type="button"
                className="wac-pip-action-btn"
                aria-label="Trocar de câmera"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                </svg>
              </button>

              {/* Filtros / Efeitos */}
              <button
                type="button"
                className="wac-pip-action-btn"
                aria-label="Efeitos de vídeo"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Barra de Controles Inferior Flutuante */}
          <div className="wac-controls-bar">
            {/* 1. Mais Opções */}
            <button
              type="button"
              className="wac-control-btn wac-btn-secondary"
              aria-label="Mais opções"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="12" r="2.5" />
                <circle cx="12" cy="12" r="2.5" />
                <circle cx="19" cy="12" r="2.5" />
              </svg>
            </button>

            {/* 2. Câmera de Vídeo */}
            <button
              type="button"
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`wac-control-btn ${isVideoOff ? 'wac-btn-off' : 'wac-btn-secondary'}`}
              aria-label={isVideoOff ? 'Ligar câmera' : 'Desligar câmera'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
            </button>

            {/* 3. Alto-falante */}
            <button
              type="button"
              onClick={() => setIsSpeakerOn(!isSpeakerOn)}
              className={`wac-control-btn ${isSpeakerOn ? 'wac-btn-speaker-active' : 'wac-btn-secondary'}`}
              aria-label={isSpeakerOn ? 'Desativar alto-falante' : 'Ativar alto-falante'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </button>

            {/* 4. Mudo / Microfone */}
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className={`wac-control-btn ${isMuted ? 'wac-btn-off' : 'wac-btn-secondary'}`}
              aria-label={isMuted ? 'Ativar microfone' : 'Silenciar microfone'}
            >
              {isMuted ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="1" y1="1" x2="23" y2="23" />
                  <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
                  <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              )}
            </button>

            {/* 5. Encerrar Chamada (Vermelho) */}
            <button
              type="button"
              className="wac-control-btn wac-btn-end-call"
              aria-label="Encerrar chamada"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 9c-3.14 0-6.04.99-8.42 2.68-.42.3-.54.88-.28 1.33l1.86 3.19c.27.46.85.64 1.34.41l2.84-1.34c.38-.18.63-.57.63-1v-2.73c.65-.2 1.34-.34 2.03-.34s1.38.14 2.03.34v2.73c0 .43.25.82.63 1l2.84 1.34c.49.23 1.07.05 1.34-.41l1.86-3.19c.26-.45.14-1.03-.28-1.33C18.04 9.99 15.14 9 12 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Traço Indicador do Carrossel abaixo do Celular */}
      <div className="wac-carousel-dash" aria-hidden="true" />
    </div>
  );
}
