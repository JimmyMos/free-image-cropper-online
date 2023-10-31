import { loadTranslations } from '$lib/languages/translations';
//
export const load = async ({ url, params, data }) => {
    var lang = params.lang ?? 'fr';
    var supportedLanguages = ['fr', 'es', 'en', 'ja'];
    if(! supportedLanguages.includes(lang)){lang = 'fr'};
    const { pathname } = url;
    await loadTranslations(lang, pathname); // keep this just before the `return`
    //
    // Data is the data returned fromthe load function in +layout.server.js
    data.lang = lang;
    //
    return data;
}