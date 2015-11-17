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

        close: function(callback)
        {
            var self = this;

            // 删除元素
            var complete = function()
            {
                self.$element.remove();
                self.onClose();
            };

            // 动画完毕执行回调函数
            this.$element.animation
            ({
                animation: 'fade out',
                duration: this.options.duration,
                queue: false,
                noSupport: complete,
                onComplete: complete
            });
        },

        onClose: function()
        {
            // 触发元素事件
            this.$element.trigger("close" + this.options.eventSuffix);

            // 调用回调函数
            this.options.onClose.call(this);
        },

        bindEvents: function()
        {
            this.$close.on('click' + this.options.eventSuffix, $.proxy(this.close, this));
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
        duration: 1000,
        selector:
        {
            close: '.close'
        },
        onClose : $.fw.empty
    };
}(jQuery, window, document);

// 调用插件
$('.alert').alert(
{
    onClose: function()
    {
        console.log('已关闭');
    }
});