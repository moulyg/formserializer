/*
 * formserializer
 * https://github.com/moulyg/formserializer
 *
 * Copyright (c) 2016 moulyg@gmail.com
 * Licensed under the MIT license.
 */

(function ($) {

    // Static method.
    $.fn.formserializer = function (options) {
        // Override default options with passed-in options.
        options = $.extend({}, $.fn.formserializer.options, options);

        var jsonObject = {};
        var serializeArray = this.serializeArray();
        $.each(serializeArray, function (index, item) {
            var value = item.value || '';
            if (jsonObject[item.name] !== undefined) {
                // this is to handle the check boxes
                // it has same name
                if (!$.isArray(jsonObject[item.name])) {
                    if (value !== '' || (options.showEmpty && value === '')) {
                        jsonObject[item.name] = [jsonObject[item.name]];
                    }
                }
                if (value !== '' || (options.showEmpty && value === '')) {
                    jsonObject[item.name].push(value);
                }
            } else {
                if (value !== '' || (options.showEmpty && value === '')) {
                    jsonObject[item.name] = value;
                }
            }
        });
        return jsonObject;
    };

    // Static method default options.
    $.fn.formserializer.options = {
        showEmpty: true
    };

}(jQuery));
