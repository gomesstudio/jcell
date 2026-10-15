import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/mockData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Usa a URL limpa (sem hashes de âncora) para compartilhamento mais elegante
      setShareUrl(window.location.origin + window.location.pathname);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const shareTitle = `${STORE_INFO.name} | Assistência Técnica & Acessórios em Nanuque - MG`;
  const shareText = `Conheça a ${STORE_INFO.name} em ${STORE_INFO.cityState}! Assistência técnica para celulares e linha completa de acessórios: ${shareUrl}`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Conheça a ${STORE_INFO.name} em ${STORE_INFO.cityState}! Assistência técnica e variedades.`,
          url: shareUrl,
        });
        onClose();
      } catch {
        // Usuário cancelou ou navegador não completou o compartilhamento
      }
    }
  };

  const socialChannels = [
    {
      name: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp',
      color: 'bg-[#25D366] hover:bg-[#20bd5a] text-white',
      textColor: 'text-[#25D366]',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
      action: null,
    },
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook',
      color: 'bg-[#1877F2] hover:bg-[#0e68dc] text-white',
      textColor: 'text-[#1877F2]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      action: null,
    },
    {
      name: 'Telegram',
      icon: 'fa-brands fa-telegram',
      color: 'bg-[#229ED9] hover:bg-[#1b8fc6] text-white',
      textColor: 'text-[#229ED9]',
      href: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      action: null,
    },
    {
      name: 'X (Twitter)',
      icon: 'fa-brands fa-x-twitter',
      color: 'bg-black hover:bg-neutral-800 text-white',
      textColor: 'text-black',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      action: null,
    },
  ];

  const hasNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#222020] text-white rounded-2xl border border-white/15 p-6 sm:p-7 shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela de compartilhamento"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <i className="fa-solid fa-xmark text-lg" aria-hidden="true"></i>
        </button>

        {/* Cabeçalho do Modal */}
        <div className="flex items-center gap-3.5 mb-5 pr-8">
          <div className="w-11 h-11 rounded-xl bg-[#E7192D] flex items-center justify-center text-white shadow-md shadow-[#E7192D]/30 shrink-0">
            <i className="fa-solid fa-share-nodes text-lg" aria-hidden="true"></i>
          </div>
          <div>
            <h2 id="share-modal-title" className="text-lg sm:text-xl font-bold text-white leading-tight">
              Compartilhar Site
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CACC] mt-0.5">
              Envie a J'Cell para seus amigos e redes sociais
            </p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-[#D2CACC] uppercase tracking-wider mb-3">
            Compartilhar via
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {socialChannels.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl ${item.color} transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md`}
              >
                <i className={`${item.icon} text-xl`} aria-hidden="true"></i>
                <span className="text-xs font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Botão de compartilhamento nativo (celular / sistemas compatíveis) */}
        {hasNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            className="w-full mb-6 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
          >
            <i className="fa-solid fa-arrow-up-from-bracket text-sm" aria-hidden="true"></i>
            <span>Mais opções no dispositivo</span>
          </button>
        )}

        {/* Campo Copiar Link */}
        <div>
          <p className="text-xs font-semibold text-[#D2CACC] uppercase tracking-wider mb-2">
            Ou copie o link direto
          </p>
          <div className="flex items-center gap-2 bg-black/40 border border-white/15 rounded-xl p-1.5 focus-within:border-white/40 transition-colors">
            <div className="pl-3 pr-2 text-white/40">
              <i className="fa-solid fa-link text-sm" aria-hidden="true"></i>
            </div>
            <input
              type="text"
              readOnly
              value={shareUrl}
              aria-label="Link do site para copiar"
              className="bg-transparent text-xs sm:text-sm text-white/90 flex-1 outline-none truncate selection:bg-[#E7192D] selection:text-white"
            />
            <button
              type="button"
              onClick={handleCopyLink}
              className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#E7192D] hover:bg-[#C81024] text-white shadow-sm'
              }`}
            >
              <i
                className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'} text-xs`}
                aria-hidden="true"
              ></i>
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
