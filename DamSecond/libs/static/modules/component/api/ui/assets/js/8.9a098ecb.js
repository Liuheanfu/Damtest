(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{396:function(s,a,t){s.exports=t.p+"assets/img/python.27c8767f.png"},400:function(s,a,t){s.exports=t.p+"assets/img/bug.9e822d4d.png"},401:function(s,a,t){s.exports=t.p+"assets/img/env_path.dc733ca3.png"},402:function(s,a,t){s.exports=t.p+"assets/img/install.fa24b4ff.png"},403:function(s,a,t){s.exports=t.p+"assets/img/python_install.44352e1f.png"},404:function(s,a,t){s.exports=t.p+"assets/img/node_env.2309fad3.png"},584:function(s,a,t){"use strict";t.r(a);var e=t(13),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"公网源混合-mapgis-源使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公网源混合-mapgis-源使用方式"}},[s._v("#")]),s._v(" 公网源混合 MapGIS 源使用方式")]),s._v(" "),a("h2",{attrs:{id:"yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[s._v("#")]),s._v(" yarn")]),s._v(" "),a("h1",{attrs:{id:"本地源使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地源使用方式"}},[s._v("#")]),s._v(" 本地源使用方式")]),s._v(" "),a("h2",{attrs:{id:"清空原来的环境设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清空原来的环境设置"}},[s._v("#")]),s._v(" 清空原来的环境设置")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("下面步骤 2 选 1 推荐 1")]),s._v(" "),a("ol",[a("li",[s._v("或者重新安装 nodejs yarn")]),s._v(" "),a("li",[s._v("使用下面命令清空")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" cache clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config delete proxy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" cache clean "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("配置环境变量(必须重启机器才生效！)\n"),a("img",{attrs:{src:t(401),alt:"env"}})])]),s._v(" "),a("li",[a("p",[s._v("检查 yarn node 是否安装\n"),a("img",{attrs:{src:t(402),alt:"env"}})])])]),s._v(" "),a("h2",{attrs:{id:"python-必须重启机器才生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-必须重启机器才生效"}},[s._v("#")]),s._v(" python (必须重启机器才生效！)")]),s._v(" "),a("p",[s._v("82.44 上复制环境")]),s._v(" "),a("blockquote",[a("p",[s._v("\\192.168.82.44\\MapGIS 10 开发环境\\WebClient\\env\n安装 python2\n"),a("code",[s._v("记得一定要把python的path添加到系统环境中")]),s._v("， 在安装的时候可以勾选，安装后也可以主动添加到环境变量中\n"),a("img",{attrs:{src:t(396),alt:"env"}}),s._v(" "),a("img",{attrs:{src:t(403),alt:"env"}}),s._v(" "),a("img",{attrs:{src:t(404),alt:"env"}})])]),s._v(" "),a("hr"),s._v(" "),a("blockquote",[a("p",[s._v("使用自己的热点 切记")])]),s._v(" "),a("h2",{attrs:{id:"node-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-sass"}},[s._v("#")]),s._v(" node-sass")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" sass-binary-site http://npm.taobao.org/mirrors/node-sass\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" node-sass sass-loader "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])])]),a("h2",{attrs:{id:"设置本地源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置本地源"}},[s._v("#")]),s._v(" 设置本地源")]),s._v(" "),a("blockquote",[a("p",[s._v("内网是 "),a("code",[s._v("http://192.168.11.130:4873/")])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://192.168.11.130:4873/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry http://192.168.11.130:4873\n")])])]),a("hr"),s._v(" "),a("blockquote",[a("p",[s._v("使用公司的 WIFI 或者继续沿用自己的热点")])]),s._v(" "),a("h1",{attrs:{id:"当前-npm-服务指向-本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前-npm-服务指向-本地"}},[s._v("#")]),s._v(" 当前 npm 服务指向 本地")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注册用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" adduser "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v(" am i\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873/\n")])])]),s._v(" "),a("ol",[a("li",[s._v("安装全局依赖")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" less@3.12.2 less-loader@7.0.2\n")])])]),a("h1",{attrs:{id:"各个库的依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各个库的依赖"}},[s._v("#")]),s._v(" 各个库的依赖")]),s._v(" "),a("h2",{attrs:{id:"webclient-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webclient-javascript"}},[s._v("#")]),s._v(" WebClient-JavaScript")]),s._v(" "),a("ol",[a("li",[s._v("删除所有目录下的 yarn.lock 文件")]),s._v(" "),a("li",[s._v("统一使用下面的方式更新仓库")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[s._v("每次更新库")]),s._v("或者安装依赖都需要增加后缀 --registry http://192.168.11.130:4873/")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn --registry http://192.168.11.130:4873/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn add xxx --registry http://192.168.11.130:4873/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @mapgis/webclient-es6-service@10.5.5-3 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873/\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("每次更新仓库\n"),a("blockquote",[a("p",[s._v("更新前必须本地 yarn build 后生成临时的 dist-libs 替换应用层/测试层的 node_modules 下的 dist-libs 依赖后，保证能够测试程序运行成功才能 publish 操作\n避免真实应用出现下面的错误\n"),a("img",{attrs:{src:t(400),alt:"bug"}})])])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873/\n")])])]),a("h2",{attrs:{id:"webclient-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webclient-vue"}},[s._v("#")]),s._v(" WebClient-Vue")]),s._v(" "),a("ol",[a("li",[s._v("删除所有目录下的 yarn.lock 文件")]),s._v(" "),a("li",[s._v("统一使用下面的方式更新仓库")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[s._v("每次更新库")]),s._v("或者安装依赖都需要增加后缀 --registry http://192.168.11.130:4873/")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn --registry http://192.168.11.130:4873/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn add xxx --registry http://192.168.11.130:4873/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @mapgis/webclient-es6-service@10.5.5-3 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873/\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("每次更新仓库\n"),a("blockquote",[a("p",[s._v("更新前必须本地 yarn build 后生成临时的 dist-libs 替换应用层/测试层的 node_modules 下的 dist-libs 依赖后，保证能够测试程序运行成功才能 publish 操作\n避免真实应用出现下面的错误\n"),a("img",{attrs:{src:t(400),alt:"bug"}})])])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873/\n")])])]),a("h2",{attrs:{id:"三方应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三方应用"}},[s._v("#")]),s._v(" 三方应用")]),s._v(" "),a("ol",[a("li",[s._v("删除所有目录下的 yarn.lock 文件")]),s._v(" "),a("li",[s._v("统一使用下面的方式更新仓库")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[s._v("每次更新库")]),s._v("或者安装依赖都需要增加后缀 --registry http://192.168.11.130:4873/")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn add xxx --registry http://192.168.11.130:4873/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @mapgis/webclient-es6-service@10.5.5-3 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873/\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" upgrade @mapgis/webclient-es6-service@10.5.5-3 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--registry")]),s._v(" http://192.168.11.130:4873/\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);