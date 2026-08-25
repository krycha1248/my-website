import { ui, defaultLang, showDefaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return (lang in ui ? (lang as Lang) : defaultLang);
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang) {
    let basePath = path;
    if (lang !== defaultLang && path.startsWith(`/${lang}`)) {
      basePath = path.slice(`/${lang}`.length) || '/';
    }
    return !showDefaultLang && l === defaultLang ? basePath : `/${l}${basePath}`;
  }
}
