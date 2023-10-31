import i18n from 'sveltekit-i18n';
import { disponibleLanguages, loadTranslationsConfig } from "./languages_helper.js"

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  fallbackLocale: 'fr',
  loaders: loadTranslationsConfig(disponibleLanguages),
});

export const { t, locale, locales, loading, loadTranslations, translations } = new i18n(config);