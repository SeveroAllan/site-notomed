'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Footer.jsx — Rodapé Oficial Noto + WhatsApp
 * Desenvolvido em estrita fidelidade ao design-system-whatsapp-calling.md:
 * - Fundo escuro oficial WhatsApp (#111B21)
 * - Tipografia oficial WhatsApp Sans (#F0F4F9, #8696A0, #667781)
 * - Botão pílula verde de CTA universal com ícone de download
 * - 5 Colunas estruturadas (O que fazemos, Quem somos, Usar o WhatsApp, Documentos legais, Precisa de ajuda?)
 * - Barra inferior com Seletor de idioma, redes sociais, dados empresariais e disclaimers regulatórios
 */

const FOOTER_SECTIONS = [
  {
    title: 'Produto',
    links: [
      { label: 'Emissão na conversa', href: '/#features' },
      { label: 'Extração automática com IA', href: '/#features' },
      { label: 'Envio de NFS-e em PDF', href: '/#features' },
      { label: 'Padrão Nacional NFS-e', href: '/#faq' },
      { label: 'Ativar emissão', href: 'https://notomed.tech' },
    ],
  },
  {
    title: 'Institucional',
    links: [
      { label: 'Sobre a Noto Med', href: '/' },
      { label: 'Para Consultórios & Clínicas', href: '/' },
      { label: 'Ética Médica & LGPD', href: '/privacidade' },
      { label: 'Segurança da Informação', href: '/termos' },
      { label: 'Contato com a Diretoria', href: 'mailto:contato@noto.com.br' },
    ],
  },
  {
    title: 'Como funciona',
    links: [
      { label: 'Integração simplificada', href: '/#features' },
      { label: 'Respostas rápidas "/"', href: '/#faq' },
      { label: 'Validação de CPF', href: '/#faq' },
      { label: 'Certificado Digital A1', href: '/#faq' },
      { label: 'Reforma Tributária (IBS/CBS)', href: '/#faq' },
    ],
  },
  {
    title: 'Documentos legais',
    links: [
      { label: 'Termos de Uso', href: '/termos' },
      { label: 'Política de Privacidade', href: '/privacidade' },
      { label: 'Termo de Consentimento', href: '/consentimento' },
      { label: 'Encarregado DPO', href: '/privacidade#s1' },
      { label: 'Segurança de Dados', href: '/privacidade#s8' },
    ],
  },
  {
    title: 'Precisa de ajuda?',
    links: [
      { label: 'Central de Suporte', href: 'mailto:suporte@noto.com.br' },
      { label: 'Atendimento ao Médico', href: 'mailto:suporte@noto.com.br' },
      { label: 'Canal do DPO (LGPD)', href: 'mailto:dpo@noto.com.br' },
      { label: 'Perguntas Frequentes (FAQ)', href: '/#faq' },
      { label: 'Status: 100% Operacional', href: '#status' },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function FooterBrand() {
  return (
    <div className="waui-footer-brand-wrap">
      <Link href="/" className="waui-footer-logo-link" aria-label="Noto Início">
        <span className="waui-footer-noto-brand">
          <svg
            width="32"
            height="32"
            viewBox="381 0 294 294"
            fill="none"
            className="waui-footer-noto-icon"
            aria-hidden="true"
          >
            <path
              d="M624.469 0H431.531C403.624 0 381 22.6236 381 50.5312V243.469C381 271.376 403.624 294 431.531 294H624.469C652.376 294 675 271.376 675 243.469V50.5312C675 22.6236 652.376 0 624.469 0Z"
              fill="#222222"
            />
            <path
              d="M572.245 161.146L583.511 216.994L636.323 187.605L572.245 161.146Z"
              fill="#7FAA00"
            />
            <path
              d="M554.149 68.4433C514.542 81.7138 433.702 112.727 433.702 112.727L445.182 148.498C449.318 161.383 459.18 171.632 471.896 176.261L583.217 216.779L554.149 68.4433Z"
              fill="#B7F20B"
            />
          </svg>
          <span className="waui-footer-noto-wordmark">noto</span>
        </span>
      </Link>
      <div className="waui-footer-badge">
        <span className="waui-footer-pulse-dot" />
        <span className="waui-footer-badge-text">Sistema operacional e seguro</span>
      </div>
    </div>
  );
}

function DownloadButton() {
  return (
    <a
      href="https://notomed.tech"
      className="waui-footer-cta-pill"
      aria-label="Ativar emissão de nota fiscal"
    >
      <span className="waui-cta-text">Ativar emissão</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="waui-cta-icon"
      >
        <path
          d="M8 2.5V11M8 11L4.5 7.5M8 11L11.5 7.5M3 13.5H13"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="waui-footer-nav-col">
      <h4 className="waui-footer-col-title">{title}</h4>
      <ul className="waui-footer-link-list">
        {links.map((link) => (
          <li key={link.label} className="waui-footer-link-item">
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="waui-footer-anchor"
              >
                <span>{link.label}</span>
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="waui-external-arrow">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <Link href={link.href} className="waui-footer-anchor">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLanguageSelector() {
  return (
    <div className="waui-footer-lang-pill" role="button" tabIndex={0} aria-label="Seletor de idioma">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="waui-lang-globe">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span className="waui-lang-label">Português (Brasil)</span>
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="waui-lang-chevron">
        <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FooterSocial() {
  return (
    <div className="waui-footer-social-group" aria-label="Redes Sociais">
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="waui-footer-social-btn"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="waui-footer" role="contentinfo">
      <div className="waui-footer-wrapper">
        {/* Faixa Superior: Logo, Status e CTA Universal */}
        <div className="waui-footer-topbar">
          <FooterBrand />
          <DownloadButton />
        </div>

        {/* Linha Divisória Superior */}
        <div className="waui-footer-divider" />

        {/* Grade de 5 Colunas de Navegação */}
        <nav className="waui-footer-grid" aria-label="Links do Rodapé">
          {FOOTER_SECTIONS.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </nav>

        {/* Linha Divisória Inferior */}
        <div className="waui-footer-divider" />

        {/* Barra Inferior: Metadados, Idioma e Redes Sociais */}
        <div className="waui-footer-bottombar">
          <div className="waui-footer-meta-block">
            <p className="waui-footer-copyright">
              © {new Date().getFullYear()} NOTO MED TECNOLOGIA LTDA. · CNPJ 33.841.732/0001-63
            </p>
            <div className="waui-footer-legal-quicklinks">
              <Link href="/termos" className="waui-footer-quicklink">
                Termos de Uso
              </Link>
              <span className="waui-bullet-dot">·</span>
              <Link href="/privacidade" className="waui-footer-quicklink">
                Privacidade
              </Link>
              <span className="waui-bullet-dot">·</span>
              <Link href="/consentimento" className="waui-footer-quicklink">
                Consentimento
              </Link>
            </div>
          </div>

          <div className="waui-footer-controls">
            <FooterLanguageSelector />
            <FooterSocial />
          </div>
        </div>

        {/* Disclaimer Regulatório */}
        <div className="waui-footer-notice-block">
          <p className="waui-footer-disclaimer-text">
            A Noto Med Tecnologia LTDA. é uma plataforma independente de tecnologia e emissão fiscal voltada a profissionais e clínicas de saúde, operando com criptografia de ponta a ponta e em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e resoluções do Conselho Federal de Medicina (CFM).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
