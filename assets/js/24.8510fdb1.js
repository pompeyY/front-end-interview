(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{217:function(t,a,s){"use strict";s.r(a);var n=s(4),p=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"组件设计原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件设计原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件设计原则")]),t._v(" "),s("p",[t._v("点击关注本"),s("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[t._v("公众号")]),t._v("获取文档最新更新,并可以领取配套于本指南的 "),s("strong",[t._v("《前端")]),t._v("手册》** 以及"),s("strong",[t._v("最标准的简历模板")]),t._v(".")]),t._v(" "),s("p",[t._v("在校招和一些初中级岗位上会涉及一些组件的设计工作,可能是直接手写,也可能是讲设计思路,目前最常考的三种就是轮播图、级联选择组件和自动完成组件.")]),t._v(" "),s("p",[t._v("上述三种组件难度适中,而且发挥空间很大,不同水平的人写出的组件会有较大差异,因此也是常见题目.")]),t._v(" "),s("p",[t._v("而比较复杂的比如日历组件、虚拟滚动可能只涉及设计思路，现场写的可能性极低，太简单的组件考察起来价值不大，而且发挥空间也不多.")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("设计前端组件是最能考验开发者基本功的测试之一,因为调用Material design、Antd、iView 等现成组件库的 API 每个人都可以做到,但是很多人并不知道很多常用组件的设计原理。")]),t._v(" "),s("p",[t._v("能否设计出通用前端组件也是区分前端工程师和前端api调用师的标准之一,那么应该如何设计出一个通用组件呢?")]),t._v(" "),s("blockquote",[s("p",[t._v("下文中提到的"),s("strong",[t._v("组件库")]),t._v("通常是指单个组件,而非集合的概念,集合概念的组件库是 Antd iView这种,我们所说的组件库是指集合中的单个组件,集合性质的组件库需要考虑的要更多.")])]),t._v(" "),s("h2",{attrs:{id:"细粒度的考量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#细粒度的考量","aria-hidden":"true"}},[t._v("#")]),t._v(" 细粒度的考量")]),t._v(" "),s("p",[t._v("我们在学习设计模式的时候会遇到很多种设计原则,其中一个设计原则就是"),s("strong",[t._v("单一职责原则")]),t._v(",在组件库的开发中同样适用,我们原则上一个组件只专注一件事情,单一职责的组件的好处很明显,由于职责单一就可以最大可能性地复用组件,但是这也带来一个问题,过度单一职责的组件也可能会导致过度抽象,造成组件库的碎片化。")]),t._v(" "),s("p",[t._v("举个例子，一个自动完成组件(AutoComplete),他其实是由 Input 组件和 Select 组件组合而成的,因此我们完全可以复用之前的相关组件,就比如 Antd 的AutoComplete组件中就复用了Select组件,同时Calendar、 Form 等等一系列组件都复用了 Select 组件,那么Select 的细粒度就是合适的,因为 Select 保持的这种细粒度很容易被复用.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167c7a0394422556?w=397&h=219&f=png&s=11734",alt:""}})]),t._v(" "),s("p",[t._v("那么还有一个例子,一个徽章数组件(Badge),它的右上角会有红点提示,可能是数字也可能是 icon,他的职责当然也很单一，这个红点提示也理所当然也可以被单独抽象为一个独立组件,但是我们通常不会将他作为独立组件,因为在其他场景中这个组件是无法被复用的，因为没有类似的场景再需要小红点这个小组件了，所以作为独立组件就属于细粒度过小,因此我们往往将它作为 Badge 的内部组件,比如在 Antd 中它以ScrollNumber的名称作为Badge的内部组件存在。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167c7a84a60bd61f?w=358&h=218&f=png&s=16277",alt:""}})]),t._v(" "),s("p",[t._v("所以，所谓的单一职责组件要建立在可复用的基础上，对于不可复用的单一职责组件我们仅仅作为独立组件的内部组件即可。")]),t._v(" "),s("h2",{attrs:{id:"通用性考量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用性考量","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用性考量")]),t._v(" "),s("p",[t._v("我们要设计的本身就是通用组件库,不同于我们常见的业务组件,通用组件是与业务解耦但是又服务于业务开发的,那么问题来了,如何保证组件的通用性,通用性高一定是好事吗?")]),t._v(" "),s("p",[t._v("比如我们设计一个选择器(Select)组件,通常我们会设计成这样")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167c7b98eab9246b?w=426&h=268&f=png&s=11485",alt:""}}),t._v("\n这是一个我们最常见也最常用的选择器,但是问题是其通用性大打折扣")]),t._v(" "),s("p",[t._v("当我们有一个需求是长这样的时候,我们之前的选择器组件就不符合要求了,因为这个 Select 组件的最下部需要有一个可拓展的条目的按钮")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167c7c17dbdfc830?w=337&h=161&f=png&s=10466",alt:""}})]),t._v(" "),s("p",[t._v("这个时候我们难道要重新修改之前的选择器组件,甚至再造一个符合要求的选择器组件吗?一旦有这种情况发生,那么只能说明之前的选择器组件通用性不够,需要我们重新设计.")]),t._v(" "),s("p",[t._v("Antd 的 Select 组件预留了"),s("code",[t._v("dropdownRender")]),t._v("来进行自定义渲染,其依赖的 "),s("code",[t._v("rc-select")]),t._v("组件中的代码如下\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167c7c69dc878398?w=514&h=55&f=png&s=8389",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("Antd 依赖了大量以"),s("code",[t._v("rc-")]),t._v("开头的底层组件,这些组件被"),s("a",{attrs:{href:"https://github.com/react-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-component"),s("OutboundLink")],1),t._v("团队(同时也就是Antd 团队)维护,其主要实现组件的底层逻辑,Antd 则是在此基础上添加Ant Design设计语言而实现的")])]),t._v(" "),s("p",[t._v("当然类似的设计还有很多,通用性设计其实是一定意义上放弃对 DOM 的掌控,而将 DOM 结构的决定权转移给开发者,"),s("code",[t._v("dropdownRender")]),t._v("其实就是放弃对 Select 下拉菜单中条目的掌控,Antd 的 Select 组件其实还有一个没有在文档中体现的方法"),s("code",[t._v("getInputElement")]),t._v("应该是对 Input 组件的自定义方法,Antd整个 Select 的组件设计非常复杂,基本将所有的 DOM 结构控制权全部暴露给了开发者,其本身只负责底层逻辑和最基本的 DOM 结构.")]),t._v(" "),s("p",[t._v("这是 Antd 所依赖的 re-select 最终 jsx 的结构,其 DOM 结构很简单,但是暴露了大量自定义渲染的接口给开发者.")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectTrigger")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onPopupFocus")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onPopupFocus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMouseEnter")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onMouseEnter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMouseLeave")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onMouseLeave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dropdownAlign")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropdownAlign"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dropdownClassName")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropdownClassName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dropdownMatchSelectWidth")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropdownMatchSelectWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultActiveFirstOption")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultActiveFirstOption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dropdownMenuStyle")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropdownMenuStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("transitionName")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transitionName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("prefixCls")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefixCls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dropdownStyle")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropdownStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("combobox")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("combobox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("showSearch")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showSearch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("multiple")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("multiple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("disabled")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("disabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("visible")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("realOpen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("inputValue")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backfillValue")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backfillValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("firstActiveValue")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstActiveValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onDropdownVisibleChange")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onDropdownVisibleChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("getPopupContainer")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getPopupContainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMenuSelect")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onMenuSelect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMenuDeselect")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onMenuDeselect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onPopupScroll")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onPopupScroll"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("showAction")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showAction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("saveSelectTriggerRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("menuItemSelectedIcon")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("menuItemSelectedIcon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dropdownRender")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dropdownRender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ariaId")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ariaId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("saveRootRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onBlur")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onOuterBlur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onFocus")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onOuterFocus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("classnames")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootCls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMouseDown")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("markMouseDown"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMouseUp")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("markMouseLeave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onMouseOut")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("markMouseLeave"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n          ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("saveSelectionRef"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("selection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("prefixCls"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("-selection\n            ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("prefixCls"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("-selection--")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("multiple "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'multiple'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("role")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("combobox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-autocomplete")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-haspopup")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-controls")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ariaId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-expanded")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("realOpen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token spread"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("extraSelectionProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n            ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ctrlNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n            ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderClear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n            ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderArrow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("multiple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n          ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectTrigger")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("那么这么多需要自定义的地方,这个 Select 组件岂不是很难用?因为好像所有地方都需要开发者自定义,通用性设计在将 DOM 结构决定权交给开发者的同时也保留了默认结构,在开发者没有显示自定义的时候默认使用默认渲染结构,其实 Select 的基本使用很方便,如下:")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Select")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("defaultValue")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lucy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("disabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lucy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Lucy")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Option")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Select")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("组件的形态(DOM结构)永远是千变万化的,但是其行为(逻辑)是固定的,因此通用组件的秘诀之一就是将 DOM 结构的控制权交给开发者,组件只负责行为和最基本的 DOM 结构")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号","aria-hidden":"true"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),s("p",[t._v("想要实时关注笔者最新的文章和最新的文档更新请关注公众号"),s("strong",[t._v("程序员")]),t._v("官**,后续的文章会优先在公众号更新.")]),t._v(" "),s("p",[s("strong",[t._v("简历模板:")]),t._v(" 关注公众号回复「模板」获取")]),t._v(" "),s("p",[s("strong",[t._v("《前端")]),t._v("手册》😗* 配套于本指南的突击手册,关注公众号回复「fed」获取")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/d846f65d5025c4b6c4619662a0669503.png",alt:"2019-08-12-03-18-41"}})])])},[],!1,null,null,null);a.default=p.exports}}]);