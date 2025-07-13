// Data from locals object are from hooks.server.js, the cookies are treated in this file.
//
import { PUBLIC_BASE_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { error } from '@sveltejs/kit';
//
export async function load({ locals, cookies, params, request}) {
    //
    const url = new URL(request.url);
    const origin = url.origin; // e.g., "https://example.com"
    const hostname = url.hostname; // e.g., "example.com"
    //
    if(/robots\.txt/.test(url.pathname)){
        throw error(404, {
			message: 'No content for this page.'
        });
    }
    else{
        return {
            origin,
            "environment" : PUBLIC_ENVIRONMENT,
            "base_url"    : PUBLIC_BASE_URL,
            //
            "theme"       : locals.theme,
            //
            "cookie_prefered_theme"  : locals.cookie_prefered_theme,
            "cookie_user_date"       : locals.cookie_user_date,
        }
	} 
}