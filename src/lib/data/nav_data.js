export default [
    {
        "url": "",
        "label": "c.nav_home",
    },
    {
        "url": "#section_skills",
        "label": "c.nav_skills",
        "is_home_section": true
    },
    {
        "url"     : "#section_portfolio",
        "label"   : "c.nav_portfolio",
        "is_home_section": true,
        "children": [
            {
                "url"  : "#section_portfolio",
                "label": "c.nav_web_dev",
                "is_home_section": true
            },
            {
                "url"  : "#section_portfolio",
                "label": "c.nav_digital_marketing",
                "is_home_section": true
            },
        ]
    },
    {
        "url"     : "#section_clients",
        "label"   : "c.nav_clients",
        "is_home_section": true
    },
    {
        "url"     : "#section_cv",
        "label"   : "c.nav_carriere",
        "is_home_section": true
    },
    {
        "url"        : "https://wa.me/+33666469136",
        "label"      : "c.nav_contact",
        "css_classes": "cta",
        "is_internal": false
    },
]; 