import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * LegalLayout.jsx — Versão Next.js
 * Shell compartilhado para as páginas legais (Termos de Uso, Política de Privacidade e Consentimento),
 * alinhado com o Design System WhatsApp Calling:
 * - Fundo Creme quente (#FCF5EB)
 * - Cabeçalho 100% de largura com o logo noto+whatsapp.svg
 * - Tipografia sem serifa moderna e limpa (sistema WAUI)
 * - Cores de texto #111B21, notas em #5E5E5E, caixas em #E6FFDA e #FFFFFF
 * - Rodapé escuro integrado (#111B21)
 */

export function LegalLayout({
  kicker,
  title,
  subtitle,
  updatedAt,
  version,
  notice,
  currentPath,
  children,
}) {
  return (
    <div className="waui-page-wrapper">
      <Header currentPath={currentPath} />

      <main className="waui-legal-main">
        <article className="waui-legal-container">
          {/* Cabeçalho do documento legal */}
          <header className="waui-legal-header">
            {kicker && <p className="waui-legal-kicker">{kicker}</p>}
            <h1 className="waui-legal-title">{title}</h1>
            {subtitle && <p className="waui-legal-subtitle">{subtitle}</p>}
            <p className="waui-legal-meta">
              Última atualização: {updatedAt} · Versão {version}
            </p>
          </header>

          {/* Aviso inicial / Contexto */}
          {notice && (
            <div className="waui-legal-notice">
              <div className="waui-legal-notice-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#103928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div className="waui-legal-notice-content">{notice}</div>
            </div>
          )}

          {/* Conteúdo das seções */}
          <div className="waui-legal-content">{children}</div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export function TableOfContents({ items }) {
  return (
    <nav className="waui-toc-box" aria-label="Sumário do documento">
      <p className="waui-toc-title">Sumário do documento</p>
      <ol className="waui-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="waui-toc-link">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Section({ id, number, title, children }) {
  return (
    <section id={id} className="waui-legal-section">
      <h2 className="waui-section-heading">
        <span className="waui-section-number">{number}.</span>
        {title}
      </h2>
      <div className="waui-section-body">{children}</div>
    </section>
  );
}

export function Callout({ tone = 'default', children }) {
  const isWarn = tone === 'warn';
  return (
    <div className={`waui-callout ${isWarn ? 'tone-warn' : 'tone-default'}`}>
      {children}
    </div>
  );
}

export function Field({ children }) {
  return <span className="waui-code-field">{children}</span>;
}

export function DataTable({ columns, rows }) {
  return (
    <div className="waui-table-container">
      <table className="waui-data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LegalLayout;
