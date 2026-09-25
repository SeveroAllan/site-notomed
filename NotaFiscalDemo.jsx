'use client';

import React, { useEffect, useState } from "react";

/* ---------- Conteúdo da demo ---------- */
const COMMAND = "/emissão";
const VALUE = "350,00";
const NOTE_NUMBER = "0428";

const SENT = { id: "sent", kind: "tpl", value: VALUE, time: "14:32" };
const PDF = { id: "pdf", kind: "pdf", time: "14:32" };
const EMPTY = { mode: "empty", cmd: "", value: "" };

/* ---------- Subcomponentes visuais ---------- */
function DoubleCheck() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="wac-checks" aria-hidden="true">
      <path d="M10.8 1.2L5.4 6.7L4.3 5.6" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.8 1.2L9.4 6.7L8 5.3" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.2 5.6L4.5 8.9L9.4 4" stroke="#53BDEB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Message({ m }) {
  if (m.kind === "tpl") {
    return (
      <div className="wac-msg-row out">
        <div className="wac-bubble out">
          <div className="wac-bubble-tail out" aria-hidden="true" />
          <p className="wac-bubble-text">
            Obrigado pelo comprovante, vou enviar em seguida sua nota no valor de{" "}
            <strong>R$&nbsp;{m.value}</strong>.
          </p>
          <div className="wac-meta-out">
            <span className="wac-bubble-time">{m.time}</span>
            <DoubleCheck />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wac-msg-row out">
      <div className="wac-auto-badge">⚡ Resposta automática</div>
      <div className="wac-bubble out wac-pdf-bubble">
        <div className="wac-bubble-tail out" aria-hidden="true" />
        
        {/* Cartão do PDF no padrão WhatsApp */}
        <div className="wac-pdf-card">
          <div className="wac-pdf-icon-box">
            <svg width="26" height="30" viewBox="0 0 24 28" fill="none" aria-hidden="true">
              <path d="M2 3a2 2 0 0 1 2-2h11l7 7v17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z" fill="#EA4335" />
              <path d="M15 1v7h7" fill="#C5221F" />
              <text x="11.5" y="21" textAnchor="middle" fontSize="7" fontWeight="800" fill="#FFFFFF">
                PDF
              </text>
            </svg>
          </div>
          <div className="wac-pdf-details">
            <div className="wac-pdf-filename">nota-fiscal-{NOTE_NUMBER}.pdf</div>
            <div className="wac-pdf-sub">1 página · 142 kB · Documento Noto</div>
          </div>
        </div>

        <p className="wac-bubble-text wac-pdf-text">
          Segue sua nota fiscal da última consulta. Foi enviada por e-mail também, caso precise.
        </p>

        <div className="wac-meta-out">
          <span className="wac-bubble-time">{m.time}</span>
          <DoubleCheck />
        </div>
      </div>
    </div>
  );
}

/* ---------- Componente Principal ---------- */
export default function NotaFiscalDemo() {
  const [msgs, setMsgs] = useState([]);
  const [draft, setDraft] = useState(EMPTY);
  const [typing, setTyping] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timers = new Set();
    let alive = true;

    const wait = (ms) =>
      new Promise((resolve) => {
        const t = setTimeout(() => {
          timers.delete(t);
          resolve();
        }, ms);
        timers.add(t);
      });

    const typeOut = async (text, speed, onChar) => {
      for (let i = 1; i <= text.length; i++) {
        onChar(text.slice(0, i));
        await wait(speed + Math.random() * 25);
      }
    };

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setMsgs([SENT, PDF]);
      return;
    }

    (async () => {
      while (alive) {
        setFading(false);
        setMsgs([]); // Sem o primeiro balão!
        setDraft(EMPTY);
        setTyping(false);
        await wait(1000);

        // 1. Digita /emissão
        await typeOut(COMMAND, 80, (cmd) => setDraft({ mode: "cmd", cmd, value: "" }));
        await wait(650);

        // 2. Aciona o template e digita o valor naturalmente em Roboto
        setDraft({ mode: "tpl", cmd: "", value: "" });
        await wait(450);
        await typeOut(VALUE, 100, (value) => setDraft({ mode: "tpl", cmd: "", value }));
        await wait(750);

        // 3. Pressiona o botão de envio
        setPressing(true);
        await wait(160);
        setPressing(false);
        setMsgs([SENT]);
        setDraft(EMPTY);
        await wait(700);

        // 4. Status de emissão automática
        setTyping(true);
        await wait(1800);
        setTyping(false);
        setMsgs([SENT, PDF]);
        await wait(5500);

        // 5. Reinicia ciclo suavemente
        setFading(true);
        await wait(500);
      }
    })();

    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  const ready = draft.mode === "tpl" && draft.value.length > 0;

  return (
    <div className="wac-device-float-wrap">
      <style>{CSS}</style>

      {/* Frame do Smartphone Flutuante (sem linhas pretas) */}
      <div className="wac-new-device">
        {/* Papel de Parede Oficial com Doodles SVG do WhatsApp */}
        <div className="wac-chat-viewport">
          {/* Barra Flutuante Superior Fixada (Pinned) da Nova Versão do WhatsApp */}
          <div className="wac-pinned-bar" aria-label="Mensagem fixada">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#54656F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="wac-pin-icon">
              <line x1="12" y1="17" x2="12" y2="22" />
              <path d="M5 17h14v-2l-3-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7l-3 3v2z" />
            </svg>
            <span className="wac-pinned-text">Atendimento finalizado · Emissão ativa</span>
          </div>

          {/* Lista de Mensagens */}
          <div className={`wac-messages-area ${fading ? "is-fading" : ""}`}>
            {msgs.map((m) => (
              <Message m={m} key={m.id} />
            ))}

            {typing && (
              <div className="wac-msg-row out" key="typing">
                <div className="wac-typing-pill">
                  <span className="wac-typing-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>Emitindo nota fiscal...</span>
                </div>
              </div>
            )}
          </div>

          {/* Composer Flutuante da Nova Versão do WhatsApp */}
          <div className={`wac-composer-dock ${fading ? "is-fading" : ""}`}>
            {/* Menu pop-up de sugestão quando digita /emissão */}
            {draft.mode === "cmd" && (
              <div className="wac-suggest-pop" aria-hidden="true">
                <div className="wac-suggest-title">/emissão</div>
                <div className="wac-suggest-desc">Emitir nota fiscal automática na conversa</div>
              </div>
            )}

            {/* Pílula branca flutuante */}
            <div className="wac-pill-box">
              {/* Ícone Emoji Sorridente */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#54656F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="wac-dock-icon">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
                <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
              </svg>

              {/* Input de texto natural em Roboto, sem underlines e sem quebras estranhas */}
              <div className="wac-text-input">
                {draft.mode === "empty" && <span className="wac-placeholder">Mensagem</span>}
                {draft.mode === "cmd" && (
                  <span className="wac-input-flow">
                    <span className="wac-cmd-text">{draft.cmd}</span>
                    <span className="wac-cursor" />
                  </span>
                )}
                {draft.mode === "tpl" && (
                  <span className="wac-input-flow">
                    Obrigado pelo comprovante, vou enviar sua nota no valor de R$&nbsp;
                    <strong>{draft.value}</strong>
                    <span className="wac-cursor" />
                  </span>
                )}
              </div>

              {/* Ícone Clipe de Anexo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54656F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="wac-dock-icon">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>

              {/* Ícone Câmera */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#54656F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="wac-dock-icon">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>

            {/* Botão Circular Verde Separado (Microfone / Enviar) */}
            <div className={`wac-action-round-btn ${ready ? "is-ready" : ""} ${pressing ? "is-pressing" : ""}`} title="Enviar">
              {ready ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" fill="#FFFFFF" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Estilos com a fonte oficial fQtw5exLIdT.woff2 e papel de parede original ---------- */
const CSS = `
@font-face {
  font-family: 'WhatsApp Sans Var';
  src: url('/assets/fQtw5exLIdT.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'WhatsApp Sans';
  src: url('/assets/fQtw5exLIdT.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* Container estático elevado e com margem inferior generosa */
.wac-device-float-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -24px; /* Posicionado mais para cima */
  margin-bottom: 48px; /* Margem ampla e respirável na parte inferior */
}

/* Smartphone moderno com cantos suaves e sombra difusa, parado */
.wac-new-device {
  width: 375px;
  max-width: 100%;
  height: 685px; /* Altura equilibrada para excelente margem inferior */
  border-radius: 44px;
  border: 1px solid rgba(255, 255, 255, 0.85); /* Sem linha preta! Borda clara e sutil */
  background: #EFEAE2;
  overflow: hidden;
  box-shadow:
    0 32px 80px -16px rgba(28, 30, 33, 0.16),
    0 12px 30px -8px rgba(28, 30, 33, 0.08),
    inset 0 0 0 1px rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
}

/* Fonte oficial fQtw5exLIdT.woff2 aplicada estritamente a todo o texto */
.wac-device-float-wrap,
.wac-device-float-wrap * {
  font-family: 'WhatsApp Sans Var', 'WhatsApp Sans', -apple-system, BlinkMacSystemFont, Arial, sans-serif !important;
  box-sizing: border-box;
}

/* Fundo padrão original do WhatsApp fornecido pelo usuário (image 2.svg) */
.wac-chat-viewport {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #EFEAE2;
  background-image: url("/assets/whatsapp_bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
  padding: 16px 14px 16px;
}

/* 1. Barra superior de mensagem fixada (Pinned) flutuando */
.wac-pinned-bar {
  align-self: center;
  width: 96%;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #FFFFFF;
  border-radius: 14px;
  padding: 10px 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 12px;
  z-index: 5;
}

.wac-pin-icon {
  flex-shrink: 0;
  color: #54656F;
}

.wac-pinned-text {
  font-size: 13.5px;
  font-weight: 500;
  color: #111B21;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 2. Área das mensagens */
.wac-messages-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
  padding-bottom: 12px;
  transition: opacity .4s ease;
}

.wac-messages-area.is-fading {
  opacity: 0;
}

.wac-msg-row {
  display: flex;
  animation: wac-in .32s cubic-bezier(.2, .8, .2, 1) both;
}

.wac-msg-row.out {
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
}

/* Balão Enviado (Verde Claro oficial WhatsApp #D9FDD3) */
.wac-bubble.out {
  background: #D9FDD3;
  border-radius: 16px 0 16px 16px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  max-width: 88%;
  position: relative;
  padding: 8px 12px 6px;
  font-size: 14.5px;
  line-height: 1.42;
  color: #111B21;
}

.wac-bubble-text {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.42;
  color: #111B21;
}

.wac-bubble-time {
  font-size: 11px;
  color: #667781;
}

.wac-meta-out {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 4px;
}

.wac-auto-badge {
  font-size: 11.5px;
  color: #008069;
  background: #D9FDD3;
  padding: 3px 10px;
  border-radius: 9999px;
  font-weight: 500;
  margin-bottom: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}

/* Balão da Nota Fiscal em PDF */
.wac-pdf-bubble {
  width: 290px;
  max-width: 92%;
  background: #D9FDD3;
}

.wac-pdf-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.wac-pdf-icon-box {
  flex-shrink: 0;
}

.wac-pdf-details {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.wac-pdf-filename {
  font-size: 14px;
  font-weight: 600;
  color: #111B21;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wac-pdf-sub {
  font-size: 11.5px;
  color: #667781;
}

.wac-pdf-text {
  margin-top: 8px;
  font-size: 13.5px;
  color: #111B21;
}

/* Indicador de "Emitindo nota fiscal..." */
.wac-typing-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  font-size: 13px;
  font-weight: 500;
  color: #008069;
}

.wac-typing-dots {
  display: inline-flex;
  gap: 3px;
}
.wac-typing-dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #25D366;
  animation: wac-dot 1.2s infinite ease-in-out;
}
.wac-typing-dots i:nth-child(2) { animation-delay: .18s; }
.wac-typing-dots i:nth-child(3) { animation-delay: .36s; }

/* 3. Composer Flutuante da Nova Versão do WhatsApp */
.wac-composer-dock {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;
  transition: opacity .4s ease;
}

.wac-composer-dock.is-fading {
  opacity: 0;
}

/* Pílula branca flutuante */
.wac-pill-box {
  flex: 1;
  min-height: 48px;
  background: #FFFFFF;
  border-radius: 26px;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.wac-dock-icon {
  flex-shrink: 0;
  cursor: pointer;
  color: #54656F;
}

/* Input do texto em Roboto, sem underlines, sem quebras feias */
.wac-text-input {
  flex: 1;
  min-width: 0;
  font-size: 14px;
  line-height: 1.35;
  color: #111B21;
}

.wac-placeholder {
  color: #8696A0;
}

.wac-input-flow {
  display: inline;
}

.wac-input-flow strong {
  font-weight: 700;
  color: #111B21;
}

.wac-cmd-text {
  font-weight: 600;
  color: #008069;
}

/* Cursor piscando vertical */
.wac-cursor {
  display: inline-block;
  width: 1.8px;
  height: 1.1em;
  margin-left: 1px;
  vertical-align: -2px;
  background: #00A884;
  animation: wac-blink 0.9s steps(1) infinite;
}

/* Botão circular verde separado (Microfone / Enviar) */
.wac-action-round-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #25D366;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.4);
  cursor: pointer;
  transition: transform .15s ease, background-color .2s ease;
}

.wac-action-round-btn.is-ready {
  background: #00A884;
  box-shadow: 0 6px 20px rgba(0, 168, 132, 0.45);
}

.wac-action-round-btn.is-pressing {
  transform: scale(.88);
}

/* Pop-up do comando /emissão */
.wac-suggest-pop {
  position: absolute;
  left: 0;
  bottom: calc(100% + 10px);
  width: 100%;
  background: #111B21;
  color: #FFFFFF;
  border-radius: 14px;
  padding: 10px 14px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  animation: wac-in .2s ease both;
  z-index: 20;
}

.wac-suggest-title {
  font-size: 14px;
  font-weight: 700;
  color: #25D366;
}

.wac-suggest-desc {
  font-size: 11.5px;
  color: #C4C8CC;
  margin-top: 2px;
}


@keyframes wac-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
}

@keyframes wac-blink { 50% { opacity: 0; } }

@keyframes wac-dot {
  0%, 80%, 100% { transform: translateY(0); opacity: .35; }
  40% { transform: translateY(-3px); opacity: 1; }
}
`;
