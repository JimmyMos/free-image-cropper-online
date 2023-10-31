// Data from locals object are from hooks.server.js, the cookies are treated in this file.
//
import { PUBLIC_BASE_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { error } from '@sveltejs/kit';
//
export async function load({ locals, cookies, url, params}) {
    //
    if(/robots\.txt/.test(url.pathname)){
        throw error(404, {
			message: 'No content for this page.'
        });
    }
    else{
        return {
            "environment" : PUBLIC_ENVIRONMENT,
            "base_url"    : PUBLIC_BASE_URL,
            //
            "theme"       : locals.theme,
            "pathname"    : url.pathname,
            //
            "cookie_prefered_theme"  : locals.cookie_prefered_theme,
            "cookie_user_date"       : locals.cookie_user_date,
        }
	} 
}