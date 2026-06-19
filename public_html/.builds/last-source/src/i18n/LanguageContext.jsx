import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ARABIC_TRANSLATIONS } from './arabicDictionary';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'vamefo-language';
const TRANSLATABLE_ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];

const normalizeText = (value) => value.replace(/\s+/g, ' ').trim();

const translateDom = (isArabic) => {
  const root = document.getElementById('root');
  if (!root) return;

  const translateNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.__vamefoOriginalText) {
        node.__vamefoOriginalText = node.nodeValue;
      }

      const original = node.__vamefoOriginalText;
      const trimmed = normalizeText(original);
      const translated = ARABIC_TRANSLATIONS[trimmed];

      if (isArabic && translated) {
        const prefix = original.match(/^\s*/)?.[0] || '';
        const suffix = original.match(/\s*$/)?.[0] || '';
        const nextValue = `${prefix}${translated}${suffix}`;
        if (node.nodeValue !== nextValue) {
          node.nodeValue = nextValue;
        }
      } else if (!isArabic) {
        if (node.nodeValue !== original) {
          node.nodeValue = original;
        }
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const tagName = node.tagName?.toLowerCase();
    if (['script', 'style', 'code'].includes(tagName)) return;

    TRANSLATABLE_ATTRS.forEach((attr) => {
      if (!node.hasAttribute?.(attr)) return;
      const storageAttr = `data-vamefo-original-${attr}`;
      if (!node.hasAttribute(storageAttr)) {
        node.setAttribute(storageAttr, node.getAttribute(attr));
      }
      const original = node.getAttribute(storageAttr);
      const translated = ARABIC_TRANSLATIONS[normalizeText(original || '')];
      if (isArabic && translated) {
        if (node.getAttribute(attr) !== translated) {
          node.setAttribute(attr, translated);
        }
      } else if (!isArabic && original !== null) {
        if (node.getAttribute(attr) !== original) {
          node.setAttribute(attr, original);
        }
      }
    });
  };

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let current = walker.currentNode;
  while (current) {
    translateNode(current);
    current = walker.nextNode();
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem(STORAGE_KEY) || 'en';
  });

  const isArabic = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = isArabic ? 'ar-AE' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.classList.toggle('font-arabic', isArabic);
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [isArabic, language]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    window.requestAnimationFrame(() => translateDom(isArabic));

    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(() => translateDom(isArabic));
    });

    const root = document.getElementById('root');
    if (root) {
      observer.observe(root, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: TRANSLATABLE_ATTRS,
      });
    }

    return () => observer.disconnect();
  }, [isArabic]);

  const value = useMemo(
    () => ({
      language,
      isArabic,
      dir: isArabic ? 'rtl' : 'ltr',
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'ar' ? 'en' : 'ar')),
      t: (english, arabic) => (isArabic ? arabic : english),
    }),
    [isArabic, language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
