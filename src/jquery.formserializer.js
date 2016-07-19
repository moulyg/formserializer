/*
 * formserializer
 * https://github.com/moulyg/formserializer
 *
 * Copyright (c) 2016 moulyg@gmail.com
 * Licensed under the MIT license.
 */

(function ($) {

    // Static method.
    $.formserializer = function (options) {
        // Override default options with passed-in options.
        options = $.extend({}, $.formserializer.options, options);

        var jsonObject = {};
        var serializeArray = this.serializeArray();
        $.each(serializeArray, function (index, item) {
            if (jsonObject[item.name] !== undefined) {
                // this is to handle the check boxes
                // it has same name 
                if (!$.isArray(jsonObject[item.name])) {
                    jsonObject[item.name] = [jsonObject[item.name]];
                }
                jsonObject[item.name].push(item.value || '');
            } else {
                jsonObject[item.name] = item.value || '';
            }
        });
        return jsonObject;
    };

    // Static method default options.
    $.formserializer.options = {
        punctuation: '.'
    };

}(jQuery));
