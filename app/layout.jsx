import '../index.css';

export const metadata = {
  title: 'Emissão de nota fiscal direto na conversa | Noto + WhatsApp',
  description:
    'Ao final do atendimento, a mensagem de confirmação já enviada ao paciente passa a acionar a emissão da nota. Os dados da consulta e do paciente são identificados automaticamente, e o PDF é entregue na mesma conversa. Nenhuma mudança na rotina de atendimento. Disponível por convite.',
  icons: {
    icon: '/assets/noto+whatsapp.svg',
  },
  openGraph: {
    title: 'Emissão de nota fiscal direto na conversa | Noto + WhatsApp',
    description:
      'Ao final do atendimento, a mensagem de confirmação já enviada ao paciente passa a acionar a emissão da nota. Os dados da consulta e do paciente são identificados automaticamente, e o PDF é entregue na mesma conversa. Nenhuma mudança na rotina de atendimento. Disponível por convite.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
