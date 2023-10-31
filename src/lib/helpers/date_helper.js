// Values for theme can be default or dark
//
import {setCookie, getCookie} from "$lib/helpers/cookies_helper.js"
//
export function getTodayData(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var dd_mm_yyyy = dd + '-' + mm + '-' + yyyy;
    //
    // Period is used to set theme on dark or default
    var hour = today.getHours();
    var period = "day";
    if(hour < 7 || hour > 19){
        period = "night";
    }
    return {
        "timestamp" : today.getTime(),
        "ISOstring" : today.toISOString(),
        "dd_mm_yyyy": dd_mm_yyyy,
        "hour"      : hour,
        "period"    : period,
    }
}

export function getThemeFromDate(todayDate = getTodayData()){
    var theme  = "default";
    var d      = todayDate;
    var period = d.period;
    if(period === "night"){
        theme = "dark";
    }
    return theme;
}

export function setUserDateCookie(){
    setCookie('user_date', encodeURIComponent( JSON.stringify(getTodayData()) ), 3);
}