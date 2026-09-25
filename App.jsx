import React, { useState, useEffect } from 'react';
import Home from './Home';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';
import ConsentTerm from './ConsentTerm';

/**
 * App.jsx
 * Componente raiz que orquestra a navegação entre a Página Principal e as Páginas Legais:
 * - Home (/)
 * - Termos de Uso (/termos)
 * - Política de Privacidade (/privacidade)
 * - Termo de Consentimento (/consentimento)
 *
 * Utiliza o hash da URL para permitir navegação direta e suporte a botões de voltar/avançar do navegador.
 */
export default function App() {
  const getRouteFromHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    if (hash === 'termos' || hash === 'termos-de-uso') return 'termos';
    if (hash === 'privacidade' || hash === 'politica-de-privacidade') return 'privacidade';
    if (hash === 'consentimento' || hash === 'termo-de-consentimento') return 'consentimento';
    return 'home';
  };

  const [currentPath, setCurrentPath] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (targetPath) => {
    setCurrentPath(targetPath);
    window.location.hash = targetPath === 'home' ? '' : `#/${targetPath}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  switch (currentPath) {
    case 'termos':
      return <TermsOfUse onNavigate={handleNavigate} />;
    case 'privacidade':
      return <PrivacyPolicy onNavigate={handleNavigate} />;
    case 'consentimento':
      return <ConsentTerm onNavigate={handleNavigate} />;
    case 'home':
    default:
      return <Home onNavigate={handleNavigate} />;
  }
}
