import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

const proxy = createMiddleware({
  ...routing,
  localeDetection: false
});
export default proxy;

export const config = {
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
