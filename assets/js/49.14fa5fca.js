(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{242:function(a,t,s){"use strict";s.r(t);var n=s(4),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"javascript内存管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript内存管理","aria-hidden":"true"}},[a._v("#")]),a._v(" JavaScript内存管理")]),a._v(" "),s("p",[a._v("点击关注本"),s("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("公众号")]),a._v("获取文档最新更新,并可以领取配套于本指南的 "),s("strong",[a._v("《前端")]),a._v("手册》** 以及"),s("strong",[a._v("最标准的简历模板")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("像C语言这样的底层语言一般都有底层的内存管理接口，比如 malloc()和free()。另一方面，JavaScript创建变量（对象，字符串等）时分配内存，并且在不再使用它们时“自动”释放。 后一个过程称为垃圾回收。这个“自动”是混乱的根源，并让JavaScript（和其他高级语言）开发者感觉他们可以不关心内存管理，这是错误的。")]),a._v(" "),s("blockquote",[s("p",[a._v("本文主要参考了深入浅出nodejs中的内存章节")])]),a._v(" "),s("h2",{attrs:{id:"内存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存模型","aria-hidden":"true"}},[a._v("#")]),a._v(" 内存模型")]),a._v(" "),s("p",[a._v("平时我们使用的基本类型数据或者复杂类型数据都是如何存放的呢？")]),a._v(" "),s("p",[a._v("基本类型普遍被存放在『栈』中，而复杂类型是被存放在堆内存的。")]),a._v(" "),s("blockquote",[s("p",[a._v("如果你不了解执行栈和内存堆的概念，请先阅读"),s("router-link",{attrs:{to:"/guide/memory.html#mechanism.html"}},[a._v("JavaScript执行机制")])],1)]),a._v(" "),s("p",[a._v("当你读完上述文章后，你会问，既然复杂类型被存放在内存堆中，执行栈的函数是如何使用内存堆的复杂类型？")]),a._v(" "),s("p",[a._v("实际上，执行栈的函数上下文会保存一个内存堆对应复杂类型对象的内存地址，通过引用来使用复杂类型对象。")]),a._v(" "),s("p",[a._v("一个例子:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("num\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("示意图如下(我们暂时不考虑函数本身的内存)\n"),s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/8f09ef156288fd2c9ee9b0b0296fd154.png",alt:"2019-06-20-12-38-57"}})]),a._v(" "),s("p",[a._v("还有一个问题是否所有的基本类型都储存在栈中呢？")]),a._v(" "),s("p",[a._v("并不是，当一个基本类型被闭包引用之后，就可以长期存在于内存中，这个时候即使他是基本类型，也是会被存放在堆中的。")]),a._v(" "),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[a._v("#")]),a._v(" 生命周期")]),a._v(" "),s("p",[a._v("不管什么程序语言，内存生命周期基本是一致的：")]),a._v(" "),s("ol",[s("li",[a._v("分配你所需要的内存")]),a._v(" "),s("li",[a._v("使用分配到的内存（读、写）")]),a._v(" "),s("li",[a._v("不需要时将其释放\\归还")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/b9f8c025986dee6a49599c985cd15f2e.png",alt:"2019-06-20-12-18-16"}})]),a._v(" "),s("p",[a._v("所有语言第二部分都是明确的。第一和第三部分在底层语言中是明确的，但在像JavaScript这些高级语言中，大部分都是隐含的。")]),a._v(" "),s("h2",{attrs:{id:"内存回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存回收","aria-hidden":"true"}},[a._v("#")]),a._v(" 内存回收")]),a._v(" "),s("p",[a._v("V8的垃圾回收策略基于分代回收机制，该机制又基于"),s("strong",[a._v("世代假说")]),a._v(",该假说有两个特点:")]),a._v(" "),s("ul",[s("li",[a._v("大部分新生对象倾向于早死")]),a._v(" "),s("li",[a._v("不死的对象，会活得更久")])]),a._v(" "),s("p",[a._v("基于这个理论，现代垃圾回收算法根据对象的存活时间将内存进行了分代，并对不同分代的内存采用不同的高效算法进行垃圾回收")]),a._v(" "),s("h3",{attrs:{id:"v8的内存分代"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v8的内存分代","aria-hidden":"true"}},[a._v("#")]),a._v(" V8的内存分代")]),a._v(" "),s("p",[a._v("在V8中，将内存分为了新生代（new space）和老生代（old space）。它们特点如下：")]),a._v(" "),s("ul",[s("li",[a._v("新生代：对象的存活时间较短。新生对象或只经过一次垃圾回收的对象。")]),a._v(" "),s("li",[a._v("老生代：对象存活时间较长。经历过一次或多次垃圾回收的对象。")])]),a._v(" "),s("h3",{attrs:{id:"stop-the-world-（全停顿）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-the-world-（全停顿）","aria-hidden":"true"}},[a._v("#")]),a._v(" Stop The World （全停顿）")]),a._v(" "),s("p",[a._v("在介绍垃圾回收算法之前，我们先了解一下「全停顿」。")]),a._v(" "),s("p",[a._v("为避免应用逻辑与垃圾回收器看到的情况不一致，垃圾回收算法在执行时，需要停止应用逻辑。垃圾回收算法在执行前，需要将应用逻辑暂停，执行完垃圾回收后再执行应用逻辑，这种行为称为 「全停顿」（Stop The World）。例如，如果一次GC需要50ms，应用逻辑就会暂停50ms。")]),a._v(" "),s("h3",{attrs:{id:"scavenge-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scavenge-算法","aria-hidden":"true"}},[a._v("#")]),a._v(" Scavenge 算法")]),a._v(" "),s("p",[a._v("Scavenge 算法的缺点是，它的算法机制决定了只能利用一半的内存空间。但是新生代中的对象生存周期短、存活对象少，进行对象复制的成本不是很高，因而非常适合这种场景。")]),a._v(" "),s("p",[a._v("新生代中的对象主要通过 Scavenge 算法进行垃圾回收。Scavenge 的具体实现，主要采用了Cheney算法。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/b883571872f75fcf0157377003f57cf2.png",alt:"2019-06-20-12-51-06"}})]),a._v(" "),s("p",[a._v("Cheney算法采用复制的方式进行垃圾回收。它将堆内存一分为二，每一部分空间称为 semispace。这两个空间，只有一个空间处于使用中，另一个则处于闲置。使用中的 semispace 称为 「From 空间」，闲置的 semispace 称为 「To 空间」。")]),a._v(" "),s("p",[a._v("过程如下：")]),a._v(" "),s("ul",[s("li",[a._v("从 From 空间分配对象，若 semispace 被分配满，则执行 Scavenge 算法进行垃圾回收。")]),a._v(" "),s("li",[a._v("检查 From 空间的存活对象，若对象存活，则检查对象是否符合晋升条件，若符合条件则晋升到老生代，否则将对象从 From 空间复制到 To 空间。")]),a._v(" "),s("li",[a._v("若对象不存活，则释放不存活对象的空间。")]),a._v(" "),s("li",[a._v("完成复制后，将 From 空间与 To 空间进行角色翻转（flip）。")])]),a._v(" "),s("h3",{attrs:{id:"对象晋升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象晋升","aria-hidden":"true"}},[a._v("#")]),a._v(" 对象晋升")]),a._v(" "),s("ol",[s("li",[a._v("对象是否经历过Scavenge回收。对象从 From 空间复制 To 空间时，会检查对象的内存地址来判断对象是否已经经过一次Scavenge回收。若经历过，则将对象从 From 空间复制到老生代中；若没有经历，则复制到 To 空间。")]),a._v(" "),s("li",[a._v("To 空间的内存使用占比是否超过限制。当对象从From 空间复制到 To 空间时，若 To 空间使用超过 25%，则对象直接晋升到老生代中。设置为25%的比例的原因是，当完成 Scavenge 回收后，To 空间将翻转成From 空间，继续进行对象内存的分配。若占比过大，将影响后续内存分配。")])]),a._v(" "),s("p",[a._v("对象晋升到老生代后，将接受新的垃圾回收算法处理。下图为Scavenge算法中，对象晋升流程图。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/7d503b3c8b7619b0a4cceb34594fea03.png",alt:"2019-06-20-12-52-37"}})]),a._v(" "),s("h3",{attrs:{id:"mark-sweep-mark-compact"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mark-sweep-mark-compact","aria-hidden":"true"}},[a._v("#")]),a._v(" Mark-Sweep & Mark-Compact")]),a._v(" "),s("p",[a._v("老生代中的对象有两个特点，第一是存活对象多，第二个存活时间长。若在老生代中使用 Scavenge 算法进行垃圾回收，将会导致复制存活对象的效率不高，且还会浪费一半的空间。因而，V8在老生代采用Mark-Sweep 和 Mark-Compact 算法进行垃圾回收。")]),a._v(" "),s("p",[a._v("Mark-Sweep，是标记清除的意思。它主要分为标记和清除两个阶段。")]),a._v(" "),s("ul",[s("li",[a._v("标记阶段，它将遍历堆中所有对象，并对存活的对象进行标记；")]),a._v(" "),s("li",[a._v("清除阶段，对未标记对象的空间进行回收。")])]),a._v(" "),s("p",[a._v("与 Scavenge 算法不同，Mark-Sweep 不会对内存一分为二，因此不会浪费空间。但是，经历过一次 Mark-Sweep 之后，内存的空间将会变得不连续，这样会对后续内存分配造成问题。比如，当需要分配一个比较大的对象时，没有任何一个碎片内支持分配，这将提前触发一次垃圾回收，尽管这次垃圾回收是没有必要的。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/805b5b5cf48dc8299f7a8093fa2d4080.png",alt:"2019-06-20-12-55-15"}})]),a._v(" "),s("p",[a._v("为了解决内存碎片的问题，提高对内存的利用，引入了 Mark-Compact （标记整理）算法。Mark-Compact 是在 Mark-Sweep 算法上进行了改进，标记阶段与Mark-Sweep相同，但是对未标记的对象处理方式不同。与Mark-Sweep是对未标记的对象立即进行回收，Mark-Compact则是将存活的对象移动到一边，然后再清理端边界外的内存。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/847849c83fe8b3d4fea20017b28ef89b.png",alt:"2019-06-20-12-55-47"}})]),a._v(" "),s("p",[a._v("由于Mark-Compact需要移动对象，所以执行速度上，比Mark-Sweep要慢。所以，V8主要使用Mark-Sweep算法，然后在当空间内存分配不足时，采用Mark-Compact算法。")]),a._v(" "),s("h3",{attrs:{id:"incremental-marking（增量标记）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#incremental-marking（增量标记）","aria-hidden":"true"}},[a._v("#")]),a._v(" Incremental Marking（增量标记）")]),a._v(" "),s("p",[a._v("在新生代中，由于存活对象少，垃圾回收效率高，全停顿时间短，造成的影响小。但是老生代中，存活对象多，垃圾回收时间长，全停顿造成的影响大。为了减少全停顿的时间，V8对标记进行了优化，将一次停顿进行的标记过程，分成了很多小步。每执行完一小步就让应用逻辑执行一会儿，这样交替多次后完成标记。如下图所示：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/d42805a7a519dace93309411d32ccdb5.png",alt:"2019-06-20-12-56-41"}})]),a._v(" "),s("p",[a._v("长时间的GC，会导致应用暂停和无响应，将会导致糟糕的用户体验。从2011年起，v8就将「全暂停」标记换成了增量标记。改进后的标记方式，最大停顿时间减少到原来的1/6。")]),a._v(" "),s("h3",{attrs:{id:"lazy-sweeping（延迟清理）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazy-sweeping（延迟清理）","aria-hidden":"true"}},[a._v("#")]),a._v(" lazy sweeping（延迟清理）")]),a._v(" "),s("ul",[s("li",[a._v("发生在增量标记之后")]),a._v(" "),s("li",[a._v("堆确切地知道有多少空间能被释放")]),a._v(" "),s("li",[a._v("延迟清理是被允许的，因此页面的清理可以根据需要进行清理")]),a._v(" "),s("li",[a._v("当延迟清理完成后，增量标记将重新开始")])]),a._v(" "),s("h2",{attrs:{id:"内存泄露"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露","aria-hidden":"true"}},[a._v("#")]),a._v(" 内存泄露")]),a._v(" "),s("h3",{attrs:{id:"引起内存泄漏的几个禁忌"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引起内存泄漏的几个禁忌","aria-hidden":"true"}},[a._v("#")]),a._v(" 引起内存泄漏的几个禁忌")]),a._v(" "),s("ul",[s("li",[a._v("滥用全局变量：直接用全局变量赋值，在函数中滥用this指向全局对象")]),a._v(" "),s("li",[a._v("不销毁定时器和回调")]),a._v(" "),s("li",[a._v("DOM引用不规范，很多时候, 我们对 Dom 的操作, 会把 Dom 的引用保存在一个数组或者 Map 中，往往无法对其进行内存回收，ES6中引入 WeakSet 和 WeakMap 两个新的概念, 来解决引用造成的内存回收问题. WeakSet 和 WeakMap 对于值的引用可以忽略不计, 他们对于值的引用是弱引用,内存回收机制, 不会考虑这种引用. 当其他引用被消除后, 引用就会从内存中被释放.")]),a._v(" "),s("li",[a._v("滥用闭包:")])]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 滥用闭包引起内存泄漏")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" theThing "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("replaceThing")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" originalThing "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" theThing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("unused")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("originalThing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 对于 'originalThing'的引用")]),a._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hi"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  theThing "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    longStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("someMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("replaceThing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"查看内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看内存泄漏","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看内存泄漏")]),a._v(" "),s("ul",[s("li",[a._v("打开开发者工具，选择 Timeline 面板")]),a._v(" "),s("li",[a._v("在顶部的Capture字段里面勾选 Memory")]),a._v(" "),s("li",[a._v("点击左上角的录制按钮。")]),a._v(" "),s("li",[a._v("在页面上进行各种操作，模拟用户的使用情况。")]),a._v(" "),s("li",[a._v("一段时间后，点击对话框的 stop 按钮，面板上就会显示这段时间的内存占用情况。")])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("参考：")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://book.douban.com/subject/25768396/",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入浅出Node.js"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management",target:"_blank",rel:"noopener noreferrer"}},[a._v("MDN内存管理"),s("OutboundLink")],1)]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号","aria-hidden":"true"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),s("p",[a._v("想要实时关注笔者最新的文章和最新的文档更新请关注公众号"),s("strong",[a._v("程序员")]),a._v("官**,后续的文章会优先在公众号更新.")]),a._v(" "),s("p",[s("strong",[a._v("简历模板:")]),a._v(" 关注公众号回复「模板」获取")]),a._v(" "),s("p",[s("strong",[a._v("《前端")]),a._v("手册》😗* 配套于本指南的突击手册,关注公众号回复「fed」获取")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/d846f65d5025c4b6c4619662a0669503.png",alt:"2019-08-12-03-18-41"}})])])},[],!1,null,null,null);t.default=e.exports}}]);