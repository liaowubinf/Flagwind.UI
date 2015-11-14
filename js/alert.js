/*!
 * Flagwind.UI [Alert] v1.0.0
 * Copyright 2014 Flagwind Inc. All rights reserved.
 * Licensed under the MIT License.
 * https://github.com/Flagwind/Flagwind.UI/blob/master/LICENSE
!*/

+function($, window, document, undefined)
{
    'use strict';

    /**
     * [Alert 构造函数]
     * @param {[type]} element [DOM元素]
     * @param {[type]} options [参数]
     */
    var Alert = function(element, options)
    {
        this.options = options;
        this.$element = $(element);
        this.$close = this.$element.find(this.options.selector.close);

        this.bindEvents();
    };

    /**
     * [prototype 原型]
     * @type {[type]}
     */
    Alert.prototype =
    {
        constructor: Alert,

        initialize: function(options)
        {
            var parameters = arguments,
                methodName = parameters[0],
                methodInvoked = (typeof methodName === "string");

            if(methodInvoked)
            {
                $.fw.invoke(this, methodName, ([].slice.call(parameters, 1)));
            }
        },

        onCloseClick: function()
        {
            var self = this;
            this.$element.remove();
        },

        bindEvents: function()
        {
            this.$close.on('click' + this.options.eventSuffix, $.proxy(this.onCloseClick, this));
        }
    };

    /**
     * [alert 扩展到jQuery]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    $.fn.alert = function(options)
    {
        var parameters = arguments;

        return this.each(function()
        {
            var plainObject,
                $element = $(this),

                instance   = $element.data($.fn.alert.settings.namespace);

            if(!instance)
            {
                plainObject = $.extend(true, {}, $.fn.alert.settings, $.fw.parseOptions($element.data("alert")), options);
                instance = new Alert(this, plainObject);

                $element.data($.fn.alert.settings.namespace, instance);
            }

            instance.initialize.apply(instance, parameters);
        });
    };

    /**
     * [settings 默认设置]
     * @type {[type]}
     */
    $.fn.alert.settings =
    {
        namespace: 'fw.alert',
        eventSuffix: '.alert',
        selector:
        {
            close: '.close'
        }
    };
}(jQuery, window, document);

// 调用插件
$('.alert').alert();