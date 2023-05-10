(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{378:function(t,s,a){t.exports=a.p+"assets/img/512.a6e4c144.png"},379:function(t,s,a){t.exports=a.p+"assets/img/256.2ea975ac.png"},547:function(t,s,a){"use strict";a.r(s);var n=a(67),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ogc-wmts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ogc-wmts"}},[t._v("#")]),t._v(" OGC-WMTS")]),t._v(" "),n("blockquote",[n("p",[t._v("mapgis-ogc-wmts-layer")])]),t._v(" "),n("h2",{attrs:{id:"属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),n("p",[t._v("All common "),n("RouterLink",{attrs:{to:"/api/Layers/#props"}},[t._v("layers props")])],1),t._v(" "),n("h3",{attrs:{id:"baseurl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#baseurl"}},[t._v("#")]),t._v(" "),n("code",[t._v("baseUrl")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("String")])]),t._v(" "),n("li",[n("strong",[t._v("非侦听属性")])]),t._v(" "),n("li",[n("strong",[t._v("描述:")]),t._v(" KVP 模式的基地址.")]),t._v(" "),n("li",[n("strong",[t._v("示例:")]),t._v(' "http://develop.smaryun.com:6163/igs/rest/ogc/beijing/WMTSServer"')])]),t._v(" "),n("h3",{attrs:{id:"wmtslayer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wmtslayer"}},[t._v("#")]),t._v(" "),n("code",[t._v("wmtsLayer")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("String")])]),t._v(" "),n("li",[n("strong",[t._v("默认值:")]),t._v(' ""')]),t._v(" "),n("li",[n("strong",[t._v("侦听属性")])]),t._v(" "),n("li",[n("strong",[t._v("描述:")]),t._v(" wmts 标准中的 layer 属性，即图层名称\n这里以司马云上发布的 WMTS 服务为例，ArcGis 同理，访问http://develop.smaryun.com:6163/igs/rest/ogc/beijing/WMTSServer?service=WMTS&request=GetCapabilities，获取地图元信息\n"),n("blockquote",[n("p",[t._v("这里得到的是一个 XML 文档。"),n("br"),t._v("\n... "),n("br"),t._v(" > <Layer> "),n("br"),t._v(" > <ows:Title>beijing</ows:Title> "),n("br"),t._v(" > <ows:Identifier>beijing</ows:Identifier>//这个值 beijing 就是 wmtsLayer 属性所需要的值 "),n("br"),t._v("\n... "),n("br"),t._v(" > </Layer> "),n("br"),t._v("\n... "),n("br"),t._v('\n全文搜索<Layer>关键字，在 Layer 下找到<ows:Identifier>属性，里面的值"beijing"就是 wmtsLayer 属性所需要的')])])])]),t._v(" "),n("h3",{attrs:{id:"tilematrixset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tilematrixset"}},[t._v("#")]),t._v(" "),n("code",[t._v("tileMatrixSet")])]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("String")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("默认值:")]),t._v(' ""')])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("侦听属性")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("描述:")]),t._v(" wmts 标准中的 TileMatrixSet 属性，即地图矩阵集合")]),t._v(" "),n("blockquote",[n("p",[t._v("这里以司马云上发布的 WMTS 服务为例，ArcGis 同理，访问http://develop.smaryun.com:6163/igs/rest/ogc/beijing/WMTSServer?service=WMTS&request=GetCapabilities，获取地图元信息\n这里得到的是一个 XML 文档。"),n("br"),t._v("\n... "),n("br"),t._v(" > <TileMatrixSet> "),n("br"),t._v(" > <ows:Title>采用 arcgis 计算方式的瓦片块阵集</ows:Title> "),n("br"),t._v(" > <ows:Abstract>该块阵集使用 arcgis 标准计算的比例尺</ows:Abstract> "),n("br"),t._v(" > <ows:Identifier>EPSG:4326"),n("em",[t._v("北京市_arcgis_GB</ows:Identifier>//这个值 EPSG:4326")]),t._v("北京市"),n("em",[t._v("arcgis_GB 就是 TileMatrixSet 属性所需要的值 "),n("br"),t._v(" > <ows:SupportedCRS>urn:ogc:def:crs:EPSG::4326</ows:SupportedCRS> "),n("br"),t._v(" > <WellKnownScaleSet>urn:ogc:def:wkss:OGC:1.0:GoogleCRS84Quad</WellKnownScaleSet> "),n("br"),t._v("\n... "),n("br"),t._v(" > <TileMatrixSet> "),n("br"),t._v("\n... "),n("br"),t._v('\n全文搜索<TileMatrixSet>关键字，在<TileMatrixSet>下找到<ows:Identifier>属性，里面的值"EPSG:4326')]),t._v('北京市_arcgis_GB"就是 tileMatrixSet 属性所需要的')])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("注意:")]),t._v(" 在 XML 文档中，一般有三种地图矩阵集，分别是 OGC 官方标准计算，arcgis 标准计算，以及 MapGIS 标准计算方式的矩阵集合，在事业部采用的瓦片裁剪的 MapGIS 桌面端版本是 10.2 之后的，三种矩阵集都可以任选其一使用。但 10.2 之前版本的 mapgis 版本裁剪的瓦片需要注意，若 wmts 图层需要和哪些图层（arcgis 还是天地图）叠加使用，就要用不同的矩阵集才不会出现重叠问题。")])])]),t._v(" "),n("h3",{attrs:{id:"version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" "),n("code",[t._v("version")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("String")])]),t._v(" "),n("li",[n("strong",[t._v("默认值:")]),t._v(" "),n("code",[t._v("1.0.0")])]),t._v(" "),n("li",[n("strong",[t._v("侦听属性")])]),t._v(" "),n("li",[n("strong",[t._v("描述:")]),t._v(" wmts 服务版本号。")])]),t._v(" "),n("h3",{attrs:{id:"wmtsstyle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wmtsstyle"}},[t._v("#")]),t._v(" "),n("code",[t._v("wmtsStyle")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("String")])]),t._v(" "),n("li",[n("strong",[t._v("默认值:")]),t._v(" "),n("code",[t._v("default")])]),t._v(" "),n("li",[n("strong",[t._v("侦听属性")])]),t._v(" "),n("li",[n("strong",[t._v("描述:")]),t._v(" wmts 标准中的 style 属性，即地图样式\n"),n("blockquote",[n("p",[t._v("这里以司马云上发布的 WMTS 服务为例，ArcGis 同理，访问http://develop.smaryun.com:6163/igs/rest/ogc/beijing/WMTSServer?service=WMTS&request=GetCapabilities，获取地图元信息\n这里得到的是一个 XML 文档。 "),n("br"),t._v("\n... "),n("br"),t._v(' > <Style isDefault="true"> '),n("br"),t._v(" > <ows:Title>Default Style</ows:Title> "),n("br"),t._v(' > <ows:Identifier>default</ows:Identifier>//里面的"default"就是 wmtsStyle 的值 '),n("br"),t._v(" > </Style> "),n("br"),t._v("\n... "),n("br"),t._v('\n全文搜索 Style 关键字，地图可以有多个 style，这里以 default，默认值为例，在<Style isDefault="true">下找到<ows:Identifier>属性，里面的"default"就是 wmtsStyle 的值')])])])]),t._v(" "),n("h3",{attrs:{id:"format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" "),n("code",[t._v("format")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("String")])]),t._v(" "),n("li",[n("strong",[t._v("默认值:")]),t._v(" "),n("code",[t._v("image/png")])]),t._v(" "),n("li",[n("strong",[t._v("侦听属性")])]),t._v(" "),n("li",[n("strong",[t._v("描述:")]),t._v(" wmts 标准中的 format 属性，即请求的图片的返回格式\n"),n("blockquote",[n("p",[t._v("这里以司马云上发布的 WMTS 服务为例，ArcGis 同理，访问http://develop.smaryun.com:6163/igs/rest/ogc/beijing/WMTSServer?service=WMTS&request=GetCapabilities，获取地图元信息\n这里得到的是一个 XML 文档。 "),n("br"),t._v("\n... "),n("br"),t._v(" > <Format>image/png</Format> "),n("br"),t._v("\n... "),n("br"),t._v('\n全文搜索<Format>关键字，里面的值"image/png"就是 format 属性所需要的')])])])]),t._v(" "),n("h3",{attrs:{id:"zoomoffset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zoomoffset"}},[t._v("#")]),t._v(" "),n("code",[t._v("zoomOffset")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("Number")])]),t._v(" "),n("li",[n("strong",[t._v("非侦听属性")])]),t._v(" "),n("li",[n("strong",[t._v("默认值")]),t._v(" 0")]),t._v(" "),n("li",[n("strong",[t._v("描述:")]),t._v(" 地图偏移级数，老版本的 Igserver 会使用到，或者在制图时设置了偏移。")])]),t._v(" "),n("h3",{attrs:{id:"layer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#layer"}},[t._v("#")]),t._v(" "),n("code",[t._v("layer")])]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("Object")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("默认值:")]),t._v(" "),n("code",[t._v("null")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("侦听属性")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("描述:")]),t._v("\n栅格瓦片图层可通过 layer 参数中的 paint、filter、layout 来修改图层样式属性，\n更多 raster 的属性参考官网")]),t._v(" "),n("blockquote",[n("p",[t._v("paint：\nhttps://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#raster）")])]),t._v(" "),n("blockquote",[n("p",[t._v("layout：\nhttps://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#layout-property")])]),t._v(" "),n("blockquote",[n("p",[t._v("filter：\nhttps://docs.mapbox.com/help/glossary/filter/")]),t._v(" "),n("p",[t._v("https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#filter")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("示例:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('layer:{\n         paint:{\n           raster-opacity:0.5\n         }\n       }\nlayer:{\n         filter:["all", ["==", "mpginf_id", "1"]]\n      }\nlayer:{\n         layout:{\n           visibility:\'visible\'\n         }\n      }\n')])])])])]),t._v(" "),n("h3",{attrs:{id:"tilesize"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tilesize"}},[t._v("#")]),t._v(" "),n("code",[t._v("tileSize")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("类型:")]),t._v(" "),n("code",[t._v("Number")])]),t._v(" "),n("li",[n("strong",[t._v("默认值:")]),t._v(" "),n("code",[t._v("512")])]),t._v(" "),n("li",[n("strong",[t._v("描述:")]),t._v(" 加载瓦片的大小，如果数据瓦片本身是256大小的设置512大小会被强制拉伸至512大小。")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("512")]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[t._v("256")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("img",{attrs:{src:a(378),alt:"512"}})]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[n("img",{attrs:{src:a(379),alt:"256"}})])])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("天地图模糊")]),t._v(" "),n("p",[t._v("请传入tileSize为256即可，2种方式")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-ogc-wmts-layer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":tileSize")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("256"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-ogc-wmts-layer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":source")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{'tileSize': 256}"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-web-map")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crs")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("EPSG:4326"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[107.19, 26.85]"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":zoom")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-ogc-wmts-layer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-bind")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tdt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapgis-ogc-wmts-layer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapgis-web-map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tdt")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tileSize")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseUrl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://t0.tianditu.gov.cn/vec_c/wmts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("wmtsLayer")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vec"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tileMatrixSet")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tiles"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("layerId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ogcwmts_layerId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sourceId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ogcwmts_sourceId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("token")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tk"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f5347cab4b28410a6e8ba5143e3d5a35"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h2",{attrs:{id:"事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),n("p",[t._v("All common layer "),n("RouterLink",{attrs:{to:"/api/Layers/#events"}},[t._v("events")])],1),t._v(" "),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-web-map")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":accessToken")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("accessToken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":mapStyle")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mapStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":zoom")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mapZoom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":center")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("outerCenter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":crs")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mapCrs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mapgis-ogc-wmts-layer")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":layer-id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("layerWmtsId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":source-id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sourceWmtsId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":base-url")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("baseUrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":tile-matrix-set")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tileMatrixSet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":wmts-layer")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wmtsLayer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":zoom-offset")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zoomoffset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapgis-ogc-wmts-layer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mapgis-web-map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mapStyle")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置版本号，一定要设置")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加来源")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sources")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置加载并显示来源的图层信息")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("layers")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 地图样式")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mapZoom")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 地图初始化级数")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("outerCenter")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.39")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40.2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 地图显示中心")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mapCrs")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EPSG:4326"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("wmtsLayer")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"beijing"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("layerWmtsId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ogcwmts_layerId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sourceWmtsId")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ogcwmts_sourceId"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tileMatrixSet")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EPSG:4326_北京市_arcgis_GB"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseUrl")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://develop.smaryun.com:6163/igs/rest/ogc/beijing/WMTSServer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因为司马云是用的老版本的igs服务，因此offset必须传-1")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("zoomoffset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在组件中使用mapbox-gl.js的脚本库功能")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mapbox "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mapbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token style"}},[n("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".main")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);