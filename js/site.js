(function ($) {
    "use strict";

    $(document).ready(function () {
        if (typeof github_url !== 'undefined') { $('.social-link-github').removeClass('hidden'); $('.social-link-github').attr('href', github_url); }
        if (typeof linkedin_url !== 'undefined') { $('.social-link-linkedin').removeClass('hidden'); $('.social-link-linkedin').attr('href', linkedin_url); }
    });

})(jQuery);