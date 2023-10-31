import { getTodayData } from "$lib/helpers/date_helper.js"

export function setTheme(theme, elBody, elListToggleTheme){
    if(theme === 'dark'){
        elBody.setAttribute('theme', 'dark');
        elListToggleTheme.forEach(el => {
            el.querySelector('input').checked = true;
            el.querySelector('svg use').setAttribute('href', '/img/icons/moon.svg#svg');
        })
    }
    else{
        elBody.setAttribute('theme', 'default');
        elListToggleTheme.forEach(el => {
            el.querySelector('input').checked = false;
            el.querySelector('svg use').setAttribute('href', '/img/icons/sun.svg#svg');
        })
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