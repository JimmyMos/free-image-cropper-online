import { getThemeFromDate } from "$lib/helpers/theme_helper.js";
import { disponibleLanguages } from "$lib/languages/languages_helper";
//
export async function handle({ event, resolve }) {
    // Do no changes if requesting images to avoid unecessary process.
    if(! (/api\/_image/.test(event.url.pathname))){
        //
        // Get languages list and find the language depending the url second parameter ('' or 'en' or 'other_page'). 
        var lang = 'fr';
        const currentPathnameAsArray  = event.url.pathname.split('/');
        const langObj                 = disponibleLanguages.find((l) => l.path === currentPathnameAsArray[1]);
        if(typeof langObj === 'object'){
            var lang = langObj.code;
        }
        //
        // Get cookie prefered theme
        var cookie_prefered_theme = event.cookies.get('prefered_theme');
        //
        // Get cookie user date (need to check type for JSON.parse() or throw error)
        var cookie_user_date = undefined;
        if(! (typeof event.cookies.get('user_date') === 'undefined') ){
            cookie_user_date = JSON.parse(event.cookies.get('user_date'));
        }
        //
        // Set theme to default
        var theme = 'default';
        // 
        // If prefered theme set in cookie then theme = prefered theme
        if( ! (typeof cookie_prefered_theme === 'undefined') ){
            theme = cookie_prefered_theme;
        } 
        // If user datetime set in cookie then theme = user datetime theme
        else if( ! (typeof cookie_user_date === 'undefined') ){
            theme = getThemeFromDate(cookie_user_date);
        }
        // Push data to the +layout.server.js / +page.server.js
        event.locals.lang                  = lang;
        event.locals.theme                 = theme;
        event.locals.cookie_prefered_theme = cookie_prefered_theme;
        event.locals.cookie_user_date      = cookie_user_date;
        //
        // Set the chunk ('%theme%') in app.html
        const response = await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('%lang%', lang)
        });
        //
        return response;
    }
    // Default behavior
    else{
        const response = await resolve(event, {});
        return response;
    }
} 