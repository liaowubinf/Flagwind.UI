/*!
 * Flagwind.UI [Datetimepicker] v1.0.1
 * Copyright 2014 Flagwind Inc. All rights reserved.
 * Licensed under the MIT License.
 * https://github.com/Flagwind/Flagwind.UI/blob/master/LICENSE
!*/

+function($, window, document, undefined)
{
    "use strict";

    /**
     * @private @class 初始化 Datetimepicker 类的新实例。
     * @param {Object} element 元素实例
     */
    var Datetimepicker = function(element, options)
    {
        this.options = options;
        this.$element = $(element);

        this.bindMouseEvents();
    };

    /**
     * Datetimepicker 类的原型实例。
     * @type {Object}
     */
    Datetimepicker.prototype =
    {
        /**
         * @private 重新指定原型的构造函数。
         * @type {function}
         */
        constructor : Datetimepicker,

        /**
         * @public 初始化函数。
         * @param  {Object} options 选项配置
         * @return {Void}
         */
        initialize : function(options)
        {
            var parameters = arguments,
                methodName = parameters[0],                             //截取第一个参数作为函数名
                methodInvoked = (typeof methodName === "string");       //根据函数名判断是否为函数调用

            // 执行函数调用
            if(methodInvoked)
            {
                $.fw.invoke(this, methodName, ([].slice.call(parameters, 1)));
            }
        },

        toggle : function()
        {
            if(this.isActive())
            {
                this.hide();
            }
            else
            {
                this.show();
            }
        },

        show : function()
        {

        },

        hide : function()
        {

        },
       
        isActive : function()
        {
            return false;
        },

        bindMouseEvents : function()
        {
            var self = this;

            this.$element.on(this.options.trigger + this.options.eventSuffix, function(e)
            {
                e.preventDefault();

                self.toggle();
            });
        }
    };

    $.fn.datetimepicker = function(options)
    {
        var parameters = arguments;

        return this.each(function()
        {
            var plainObject,
                $element = $(this),
                instance   = $element.data($.fn.datetimepicker.settings.namespace);

            if(!instance)
            {
                plainObject = $.extend(true, {}, $.fn.datetimepicker.settings, $.fw.parseOptions($element.data("datetimepicker")), options);

                $element.data($.fn.datetimepicker.settings.namespace, (instance = new Datetimepicker(this, plainObject)));
            }

            instance.initialize.apply(instance, parameters);
        });
    };

    $.fn.datetimepicker.settings =
    {
        namespace       :    "fw.datetimepicker",
        eventSuffix     :    ".datetimepicker",
        trigger         :    "click",
        datepicker      :    true,
        timepicker      :    true,
        format          :    "yyyy-mm-dd", 
        minDate         :    "1900-01-01 00:00:00",
        maxDate         :    "2099-12-31 23:59:59"
    };

}(jQuery, window, document);

$(function()
{
    $(".datetimepicker").datetimepicker();
});