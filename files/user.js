user_pref("browser.aboutConfig.showWarning", false)

// https://wiki.mozilla.org/Firefox/Shield/Heartbeat
user_pref("app.normandy.enabled", false);

// Beacon make UI more responsible while a website want to save information.
// Turning it off does not prevent data extraction/spying, it just make it more annoying.
user_pref("beacon.enabled", true);

// enforce US English locale regardless of the system locale, for privacy
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true);
user_pref("privacy.spoof_english", 2);

user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);

user_pref("general.smoothScroll", false)

// Always show scrollbar
user_pref("widget.gtk.overlay-scrollbars.enabled", false)
