window.addEventListener('DOMContentLoaded', function() {
jQuery(function($){
    jQuery('.thwvsf-wrapper-ul .thwvsf-wrapper-item-li .thwvsf-item-span').html(function (i, html) {
        return html.replace(/\-(.*$)/, ' <span class=\"gaming_topup_gt\">$1</span>')
    })
})
});