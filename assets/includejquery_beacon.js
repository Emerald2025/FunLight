function includejQuery(callback) {
    if(window.jQuery)
    {
        // jQuery is already loaded, set up an asynchronous call
        // to the callback if any
        if (callback)
        {
            setTimeout(function() {
                callback(jQuery);
            }, 0);
        }
    }
    else
    {
        // jQuery not loaded, load it and when it loads call
        // noConflict and the callback (if any).
        var script = document.createElement('script');
        script.onload = function() {
            jQuery.noConflict();
            if (callback) {
                callback(jQuery);
            }
        };
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}