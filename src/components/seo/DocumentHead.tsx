import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, TITLE_TEMPLATE, getMetaForPath, OG_IMAGE_URL, OG_COLOR, TWITTER_HANDLE } from '@/lib/seo-config';

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function applyTitleTemplate(title: string): string {
  if (title.includes('| Art By Kaicent')) return title;
  return TITLE_TEMPLATE.replace('%s', title);
}

export function DocumentHead() {
  const { pathname } = useLocation();
  const meta = getMetaForPath(pathname);

  useEffect(() => {
    const fullTitle = applyTitleTemplate(meta.title);
    document.title = fullTitle;

    setMeta('description', meta.description);
    if (meta.keywords) setMeta('keywords', meta.keywords);

    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:url', `${SITE_URL}${pathname === '/' ? '' : pathname}`, 'property');
    setMeta('og:image', OG_IMAGE_URL, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', 'Art By Kaicent', 'property');
    setMeta('theme-color', OG_COLOR, 'name');

    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:site', TWITTER_HANDLE, 'name');
    setMeta('twitter:title', fullTitle, 'name');
    setMeta('twitter:description', meta.description, 'name');
    setMeta('twitter:image', OG_IMAGE_URL, 'name');
  }, [pathname, meta]);

  return null;
}
