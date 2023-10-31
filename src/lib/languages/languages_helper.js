export var disponibleLanguages = [
    {
        "code"  : "fr",
        "label" : "Français",
        "path"  : "" /*Default*/,
        "flag"  : "/img/flags/fr.png"
    },
    {
        "code"  : "en",
        "label" : "English",
        "path"  : "en",
        "flag"  : "/img/flags/us.png"
    },
    {
        "code"  : "es",
        "label" : "Español",
        "path"  : "es",
        "flag"  : "/img/flags/mx.png"
    },
    {
        "code"  : "ja",
        "label" : "日本語",
        "path"  : "ja",
        "flag"  : "/img/flags/ja.png"
    },
];

export function loadTranslationsConfig(languageList){
    var loader = [];
    languageList.forEach(l => {
        loader.push({
            locale: l.code,
            key   : 'c',
            loader: async () => (
                await import(`./${l.code}/app.json`)
            ).default,
        });
        loader.push({
            locale: l.code,
            key   : 'month',
            loader: async () => (
                await import(`./${l.code}/months.json`)
            ).default,
        });
        loader.push({
            locale: l.code,
            key: 'legale_notice',
            routes: [/legale_notice/],
            loader: async () => (
                await import(`./${l.code}/legale_notice.json`)
            ).default,
        });
        loader.push({
            locale: l.code,
            key: 'privacy_policy',
            routes: [/privacy_policy/],
            loader: async () => (
              await import(`./${l.code}/privacy_policy.json`)
            ).default,
        });
    });
    return loader;
}