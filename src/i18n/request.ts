import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {hasLocale} from 'next-intl';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
 let messages: Record<string, unknown>;
  try {
    messages = (await import(`../../dictionaries/${locale}.json`)).default;
  } catch {
    messages = (await import(`../../dictionaries/${routing.defaultLocale}.json`)).default;
  }

  return {locale, messages};
});
