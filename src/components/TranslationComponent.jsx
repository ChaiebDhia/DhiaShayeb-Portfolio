import React, { useState, useEffect } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';

const TranslationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  ];

  // Initialize Google Translate
  useEffect(() => {
    // Load Google Translate script
    if (!window.google || !window.google.translate) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Translate
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
          },
          'google_translate_element'
        );
      };
    }
  }, []);

  const handleLanguageChange = async (languageCode) => {
    if (languageCode === currentLanguage) return;
    
    setIsTranslating(true);
    setCurrentLanguage(languageCode);
    setIsOpen(false);

    try {
      if (languageCode === 'en') {
        // Reset to original language
        window.location.reload();
      } else {
        // Use Google Translate
        const googleTranslateCombo = document.querySelector('.goog-te-combo');
        if (googleTranslateCombo) {
          googleTranslateCombo.value = languageCode;
          googleTranslateCombo.dispatchEvent(new Event('change'));
        } else {
          // Fallback: trigger translation programmatically
          if (window.google && window.google.translate) {
            const translateElement = new window.google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: languageCode,
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            });
            translateElement.translate('en', languageCode);
          }
        }
      }
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setTimeout(() => setIsTranslating(false), 1000);
    }
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  return (
    <div className="translation-container">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <div className={`language-selector ${isOpen ? 'open' : ''}`}>
        <button 
          className="language-trigger"
          onClick={() => setIsOpen(!isOpen)}
          disabled={isTranslating}
        >
          <FaGlobe className="globe-icon" />
          <span className="current-lang">
            <span className="flag">{getCurrentLanguage().flag}</span>
            <span className="lang-code">{getCurrentLanguage().code.toUpperCase()}</span>
          </span>
          <FaChevronDown className={`dropdown-icon ${isOpen ? 'rotated' : ''}`} />
          {isTranslating && <div className="translation-spinner"></div>}
        </button>

        <div className={`language-dropdown ${isOpen ? 'visible' : ''}`}>
          <div className="dropdown-header">
            <FaGlobe className="header-icon" />
            <span>Select Language</span>
          </div>
          <div className="language-list">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`language-option ${currentLanguage === language.code ? 'active' : ''}`}
                onClick={() => handleLanguageChange(language.code)}
                disabled={isTranslating}
              >
                <span className="option-flag">{language.flag}</span>
                <span className="option-name">{language.name}</span>
                <span className="option-code">{language.code.toUpperCase()}</span>
                {currentLanguage === language.code && (
                  <div className="active-indicator"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Translation Loading Overlay */}
      {isTranslating && (
        <div className="translation-overlay">
          <div className="translation-loader">
            <FaGlobe className="spinning-globe" />
            <span>Translating...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslationComponent;