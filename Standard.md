﻿# 编码规范

标签 ： Flagwind.UI

---

## 目录

[TOC]

## 原则

不管有多少人共同参与同一项目，一定要确保每一行代码都像是同一个人编写的。

## 编辑器配置

- 用四个空格代替制表符（tab ）。
- 保存文件时，删除尾部的空白符。
- 设置文件编码为 UTF-8。
- 在文件结尾添加一个空白行。

## HTML 规范

### 基础

- 用四个空格来代替制表符（tab）。 
- 嵌套元素应当另起一行并缩进一次（即四个空格，head 和 body 元素不需要缩进）。
- 在大的模块之间用空行隔开，使模块更清晰。
- 对于属性（attribute）的定义，确保全部使用双引号，而不是单引号。
- 确保在自闭合（self-closing）（例如，`<img />` 或 `<input />`）元素的尾部添加斜线。
- 尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。
- 通过 JavaScript 生成的标签让内容变得不易查找、编辑，并且降低性能，能避免时尽量避免。

``` html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width" />
    
    <!-- 标题、描述、关键字 -->
    <title>Normal</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    
    <!-- 引入外部样式表 -->
    <link href="css/flagwind.css" rel="stylesheet" />
    
    <!-- 申明内部样式表 -->
    <style>
        /* ... */
    </style>
    
    <!-- 引入外部脚本文件 -->
    <script src="js/jquery.js"></script>
    <script src="js/flagwind.js"></script>
</head>

<body>
    <header>
        <h1>Title</h1>
    </header>
    
    <div class="container">
        ...
    </div>
    
    <footer>
        <p>Footer</p>
    </footer>
</body>
</html>
```

### DOCTYPE

在 HTML 页面中的第一行添加一个标准声明，这样确保在所有浏览器中拥有一致的展现。

``` html
<!DOCTYPE html>
```

### 语言属性

根据 HTML5 规范：

*强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。*

这里列出了[语言代码表](http://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/)。

``` html
<!DOCTYPE html>
<html lang="zh-cn">
    <!-- ... -->
</html>
```

### 字符编码

通过声明字符编码，能够确保浏览器快速判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（强烈推荐 UTF-8 编码）。

``` html
<meta charset="UTF-8" />
```

### IE 兼容模式

IE 通过特定的 `<meta>` 标签来确定绘制当前页面所采用的 IE 版本。除非有强烈的特殊需求，否则最好设置为 **Edge** 模式，从而通知 IE 采用其所支持的最新的模式。

``` html
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```

### 引入 CSS 和 JavaScript 文件

根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type 属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。

``` html
<!-- 引入外部样式表 -->
<link href="css/flagwind.css" rel="stylesheet" />

<!-- 申明内部样式表 -->
<style>
    /* ... */
</style>

<!-- 引入外部脚本文件 -->
<script src="js/jquery.js"></script>
```

### 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`
- `title`, `alt`
- `aria-*`, `role`

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

``` html
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text" />

<img src="..." alt="..." />
```

### 布尔（boolean）型属性

布尔型属性可在声明时不赋值（XHTML 规范要求为其赋值，但是 HTML5 规范不需要。），建议采用 **属性值=属性名** 的方式赋值。

``` html
<!--不写属性代表属性为false-->
<input type="checkbox" />

<!--属性值=属性名，代表属性为true-->
<input type="checkbox" checked="checked" />

<select>
  <option value="1" selected="selected">1</option>
</select>
```

### 减少标签的数量

编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。

``` html
<!-- 糟糕的实例 -->
<span class="avatar">
    <img src="..." />
</span>

<!-- 好的实例 -->
<img class="avatar" src="..." />
```

## CSS 规范

### 基础

- 用四个空格来代替制表符（tab）。
- 为选择器分组时，将单独的选择器单独放在一行。
- 声明块的左花括号应当单独成行。
- 每条声明语句的冒号（`:`）后应该插入一个空格。
- 为了获得更准确的错误报告，每条声明都应该独占一行。
- 所有声明语句都应当以分号结尾，包括最后一条语句。
- 对于以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，`box-shadow`）。
- 不要在 `rgb()`、`rgba()`、`hsl()`、`hsla()` 或 `rect()` 值的内部的逗号后面插入空格。
- 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，`.5` 代替 `0.5`；`-.5px` 代替 `-0.5px`）。
- 十六进制值应该全部小写，例如，`#fff`。在阅读文档时，小写字符易于分辨。
- 尽量使用简写形式的十六进制值，例如，用 `#fff` 代替 `#ffffff`。
- 为选择器中的属性添加双引号，例如，`input[type="text"]`。
- 避免为 0 值指定单位，例如，用 `margin: 0`; 代替 `margin: 0px`;。

``` CSS
/* 糟糕的实例 */
.selector, .selector-secondary, .selector[type=text] {
    padding:15px;
    margin:0px 0px 15px;
    background-color:rgba(0, 0, 0, 0.5);
    box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* 好的实例 */
.selector,
.selector-secondary,
.selector[type="text"]
{
    padding: 15px;
    margin-bottom: 15px;
    background-color: rgba(0,0,0,.5);
    box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

### 声明顺序

相关的属性声明应当归为一组，并按照下面的顺序排列：

1. Positioning（定位）
2. Box model（盒模型）
3. Typographic（排版）
4. Visual（视觉）

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。

``` CSS
.declaration-order
{
    /* 定位 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    /* 盒模型 */
    display: block;
    float: right;
    width: 100px;
    height: 100px;

    /* 排版 */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

    /* 视觉 */
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

    /* 其他 */
    opacity: 1;
}
```

### 不要使用 @import

与 `<link>` 标签相比，`@import` 指令要慢很多，不光增加了额外的请求次数，还会导致不可预料的问题。替代办法有以下几种：

- 使用多个 `<link>` 元素。
- 通过 Sass 或 Less 类似的 CSS 预处理器将多个 CSS 文件编译为一个文件。
- 通过 Rails、Jekyll 或其他系统中提供过 CSS 文件合并功能。

``` HTML
<!-- 推荐使用 link 元素 -->
<link rel="stylesheet" href="layout.css">

<!-- 避免使用 @import 指令 -->
<style>
    @import url("layout.css");
</style>
```

### 媒体查询（Media query）的位置

将媒体查询放在尽可能相关规则的附近。不要将他们放在文档底部或者打包放在一个单一样式文件中。如果你把他们分开了，将来只会被大家遗忘。下面给出一个典型的示例：

``` CSS
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (min-width: 480px)
{
    .element { ...}
    .element-avatar { ... }
    .element-selected { ... }
}
```

### 带前缀的属性

当使用特定厂商的带有前缀的属性时，通过缩进的方式，让每个属性的值在垂直方向对齐，这样便于多行编辑。

``` CSS
.selector
{
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
            box-shadow: 0 1px 2px rgba(0,0,0,.15);
}
```

### 简写形式的属性声明

在需要显示地设置所有值的情况下，应当尽量限制使用简写形式的属性声明。常见的滥用简写属性声明的情况如下：

- `padding`
- `margin`
- `font`
- `background`
- `border`
- `border-radius`

大部分情况下，我们不需要为简写形式的属性声明指定所有值。例如，HTML 的 heading 元素只需要设置上、下边距（margin）的值，因此，在必要的时候，只需覆盖这两个值就可以。过度使用简写形式的属性声明会导致代码混乱，并且会对属性值带来不必要的覆盖从而引起意外的副作用。

``` CSS
/* 糟糕的实例 */
.element
{
    margin: 0 0 10px;
    background: red;
    background: url("image.jpg");
    border-radius: 3px 3px 0 0;
}

/* 好的实例 */
.element
{
    margin-bottom: 10px;
    background-color: red;
    background-image: url("image.jpg");
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
```

### 注释

代码是由人编写并维护的。请确保你的代码能够自描述、注释良好并且易于他人理解。好的代码注释能够传达上下文关系和代码目的。不要简单地重申组件或 class 名称。

对于较长的注释，务必书写完整的句子；对于一般性注解，可以书写简洁的短语。

``` CSS
/* 糟糕的实例 */
/* Modal header */
.modal-header
{
    ...
}

/* 好的实例 */
/* 包含 .modal-title 和 .modal-close 的容器 */
.modal-header
{
    ...
}
```

### class 命名

- class 名称中只能出现小写字符和破折号（dashe）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，`.fw` 和 `.fw-header`）。
- 避免过度任意的简写。`.fw` 代表 flagwind，但是 `.s` 不能表达任何意思。
- class 名称应当尽可能短，并且意义明确。
- 使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。
- 基于最近的父 class 或基本（base） class 作为新 class 的前缀。
- 使用 `.js-*` class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中。

``` CSS
/* 糟糕的实例 */
.t { ... }
.red { ... }
.header { ... }

/* 好的实例 */
.fw { ... }
.important { ... }
.fw-header { ... }
```

### 选择器

- 对于通用元素使用 class ，这样利于渲染性能的优化。
- 对于经常出现的组件，避免使用属性选择器（例如，`[class^="..."]`）。浏览器的性能会受到这些因素的影响。
- 选择器要尽可能短，并且尽量限制组成选择器的元素个数，建议不要超过 3 个。
- 只有在必要的时候才将 class 限制在最近的父元素内（也就是后代选择器）（例如，不使用带前缀的 class 时 -- 前缀类似于命名空间）。

``` CSS
/* 糟糕的实例 */
span { ... }
.page-container #stream .stream-item .fw .fw-header .username { ... }
.avatar { ... }

/* 好的实例 */
.avatar { ... }
.fw-header .username { ... }
.fw .avatar { ... }
```

### 代码组织

- 以组件为单位组织代码段。
- 制定一致的注释规范。
- 使用一致的空白符将代码分隔成块，这样利于阅读较大的文档。
- 如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动。

## JavaScript 规范

### 基础

- 用四个空格来代替制表符（tab）。
- 代码块的左花括号应当单独成行。
- 所有的变量必须在使用前声明。
- 尽量减少全局变量的使用，不要让局部变量覆盖全局变量。
- `eval` 是 JavaScript 中最容易被滥用的方法，避免使用它。
- 不要给 `setTimeout` 或者 `setInterval` 传递字符串参数。
- 使用 `{}` 代替 `new Object()`。使用 `[]` 代替 `new Array()`。
- 使用 `===` 和 `!==` 操作符作比较运算。`==` 和 `!= ` 操作符会进行类型强制转换。特别是，不要将 `==` 与这些值比较： `false`，`null`，`undefined`，`""`，`0`，`NaN`。
- 应该总是使用分号，即使他们可由 JavaScript 解析器隐式创建。
- 避免每行超过 80 个字符，当一条语句一行写不下时，请考虑换行，并在下一行缩进 8 个空格。
- 外部脚本文件应尽量在 body 的后面引入，这样可以减少因载入脚本而造成页面内容也被延迟载入的问题。

### 命名

- 类名（构造函数名）使用 Pascal（首字母大写）命名方式，如：`function Person() {...}`
- 变量名和方法名使用 Camel（首字母小写）命名方式，如：`var name = p1.getName();`
- 常量名采用全大写形式，如：`var PI = 3.141592653;`
- 使用一个下划线前缀来表示一个私有属性或方法。

``` JavaScript
function Person()
{
    this._name = null;
    
    this.getName = function()
    {
        return this._name;
    };
    
    this.setName = function(name)
    {
        this._name = name;
    };
};
```

### 缩进

缩进的单位为四个空格，规则也很简单——花括号里面的东西。这就意味着函数体、循环 (do, while, for, for-in)、if、switch，以及对象字面量中的对象属性。下面的代码就是使用缩进的示例：

``` JavaScript
function outer(a, b)
{
    var c = 1,
        d = 2,
        inner;
        
    if(a > b)
    {
        inner = function()
        {
            return {
                r : c - d
            };
        };
    }
    else
    {
        inner = function()
        {
            return {
                r : c + d
            };
        };
    }
    
    return inner;
}
```

### 空格

空格的使用同样有助于改善代码的可读性和一致性。适合使用空格的地方包括：

- for 循环分号分开后的的部分，如： `for(var i = 0; i < 10; i++) {...}`
- for 循环中初始化的多变量(i 和 max)：`for(var i = 0, max = 10; i < max; i++) {...}`
- 分隔数组项的逗号的后面：`var a = [1, 2, 3];`
- 对象属性逗号的后面以及分隔属性名和属性值的冒号的后面：`var o = {a: 1, b: 2};`
- 限定函数参数：`fun(a, b, c)`
- 操作符 `+`，`-`，`*`，`/`，`=`，`<`，`>`，`<=`，`>=`，`===`，`!==`，`&&`，`||`，`+=` 等前后都需要空格。

### 花括号

花括号 `{}` 应总被使用，即使在它们为可选的时候。虽然在 `if` 或者 `for` 中如果语句仅一条，花括号是不需要的，但是你还是应该总是使用它们，这会让代码更有持续性和易于更新。

想象下你有一个只有一条语句的 for 循环，你可以忽略花括号，而没有解析的错误。

``` JavaScript
// 糟糕的实例
for(var i = 0; i < 10; i++)
    alert(i);
```

但是，如果，后来，主体循环部分又增加了行代码：

``` JavaScript
// 糟糕的实例
for(var i = 0; i < 10; i++)
    alert(i);
    alert(i + " is " + (i % 2 ? "odd" : "even"));
```

第二个 alert 已经在循环之外，缩进可能欺骗了你。为了长远打算，最好总是使用花括号，即使只有一行代码：

``` JavaScript
// 好的实例
for(var i = 0; i < 10; i++)
{
    alert(i);
}
```

### 注释

不要吝啬注释。给以后需要理解你代码的人们(或许就是你自己)留下信息是非常有用的。注释应该和它们所注释的代码一样是书写良好且清晰明了。

``` JavaScript
/*!
 * Flagwind.UI 1.0.1
 * http://www.flagwind.org
 *
 * @description:
 * Flagwind.UI library.
 *
 * @author: jason
 * @email: jasonsoop@gmail.com
 * @createdtime: 2015-02-07 16:01:43
 *
!*/

/**
* @public @class Flagwind.UI.UploadButton
* 文件上传按钮组件。
* ------------------------------------------------------------------------
* #PUBLIC CONFIGS#
* -------------------------------------------------------------------------
* #PUBLIC PROPERTIES#
* -------------------------------------------------------------------------
* #PUBLIC METHODS#
* -------------------------------------------------------------------------
* #PUBLIC EVENTS#
* -------------------------------------------------------------------------
**/
System.define("Flagwind.UI.UploadButton",
{
	/**
	* @public @config {Boolean} autoUpload
	* 是否自动上传。
	**/
	autoUpload : true,
	
	/*
	* @protected @override 在容器完成子组件布局以后调用。
	* @param  [!config, Object] 可选项，配置参数。
	* @return [Void]
	*/
	afterRender : function(config)
	{
	    ...
	}
});
```