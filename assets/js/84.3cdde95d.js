(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{618:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-node-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-node-版本"}},[s._v("#")]),s._v(" 1. node 版本")]),s._v(" "),t("p",[s._v("由于 "),t("code",[s._v("koa2")]),s._v(" 已经开始使用 "),t("code",[s._v("async/await")]),s._v(" 等新语法，所以请保证 "),t("code",[s._v("node")]),s._v(" 环境在 "),t("code",[s._v("7.6")]),s._v(" 版本以上。")]),s._v(" "),t("h2",{attrs:{id:"_2-创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建项目"}},[s._v("#")]),s._v(" 2. 创建项目")]),s._v(" "),t("p",[s._v("首先，创建一个目录 "),t("code",[s._v("koa2-tutorial/")]),s._v(" 用来存放我们的代码。然后执行如下命令，开始初始化项目：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 package.json 文件。该文件用于管理项目中用到一些安装包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("项目初始化完成后，在创建的目录里，会生成 "),t("code",[s._v("package.json")]),s._v(" 文件。")]),s._v(" "),t("h2",{attrs:{id:"_3-安装-typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-typescript"}},[s._v("#")]),s._v(" 3. 安装 TypeScript")]),s._v(" "),t("p",[t("code",[s._v("TypeScript")]),s._v(" 目前已逐渐成为前端项目开发的基础配置，所以本系列教程也基于 "),t("code",[s._v("TypeScript")]),s._v(" 进行开发。")]),s._v(" "),t("p",[s._v("请在项目的根目录下运行如下命令，安装 "),t("code",[s._v("TypeScript")]),s._v(" :")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i typescript -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装成功之后，我们需要先创建 "),t("code",[s._v("TypeScript")]),s._v(" 的编译配置文件 "),t("code",[s._v("tsconfig.json")]),s._v(" ，继续在根目录下执行如下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("npx tsc -init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行完之后，根目录下会生成一个 "),t("code",[s._v("tsconfig.json")]),s._v(" 文件，根据实际项目的需求可对该文件内的内容进行修改，本项目的 "),t("code",[s._v("tsconfig.json")]),s._v(" 文件配置如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tsconfig.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es2017"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowJs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sourceMap"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"outDir"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 将编译结果输出到该目录中 */")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"noImplicitAny"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/**/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("至此， "),t("code",[s._v("TypeScript")]),s._v(" 安装完毕。")]),s._v(" "),t("h2",{attrs:{id:"_4-安装-koa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装-koa"}},[s._v("#")]),s._v(" 4. 安装 Koa")]),s._v(" "),t("p",[s._v("接下来，继续在根目录下执行如下命令，安装 "),t("code",[s._v("Koa")]),s._v(" 和类型文件 "),t("code",[s._v("@types/koa")]),s._v(" ：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装koa")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i koa -S\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装koa的类型文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i @types/koa -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("安装成功后，我们在根目录下创建 "),t("code",[s._v("src")]),s._v(" 文件夹，并创建 "),t("code",[s._v("src/app.ts")]),s._v(" 文件 ，写入如下代码：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" Koa "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"koa"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Koa")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"server is running at http://localhost:3000"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_5-安装-nodemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装-nodemon"}},[s._v("#")]),s._v(" 5. 安装 nodemon")]),s._v(" "),t("p",[t("code",[s._v("nodemon")]),s._v(" 是一款非常实用的工具，用来监控你 node.js 源代码的任何变化和自动重启你的服务器。以前，我们开发一个 "),t("code",[s._v("node")]),s._v(" 后端服务时，每次更改文件，均需重启一下服务才能生效。使得我们的开发效率降低了很多。 "),t("code",[s._v("nodemon")]),s._v(" 的出现，可以随时监听文件的变更，自动重启服务，我们开发时只需关注代码即可，不再需要手动重启服务。")]),s._v(" "),t("p",[s._v("在项目的根目录下运行如下命令，安装 "),t("code",[s._v("nodemon")]),s._v(" :")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i nodemon -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装成功之后，我们需要创建 "),t("code",[s._v("nodemon")]),s._v(" 的编译配置文件 "),t("code",[s._v("nodemon.json")]),s._v(" ，并向其写入如下内容：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignore"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".vscode"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".idea"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules/"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 忽略监听的文件目录 */")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"watch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 需要监听的文件目录，该目录下任意文件发生变化，都会重启服务 */")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exec"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm start"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 重启服务时执行的命令，为npm script的start脚本 */")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ext"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 监听的文件后缀 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"_6-添加-npm-script-项目启动脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-添加-npm-script-项目启动脚本"}},[s._v("#")]),s._v(" 6. 添加 npm script 项目启动脚本")]),s._v(" "),t("p",[s._v("打开 "),t("code",[s._v("package.json")]),s._v(" 文件，并在 "),t("code",[s._v("script")]),s._v(" 中添加如下内容：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tsc && node dist/app.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nodemon"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("我们在 "),t("code",[s._v("script")]),s._v(" 中添加了两个脚本命令，分别名为： "),t("code",[s._v("start")]),s._v(" 和 "),t("code",[s._v("dev")]),s._v(" 。我们分别解释下这两个脚本的作用。")]),s._v(" "),t("ul",[t("li",[t("strong",[t("code",[s._v("start")])]),s._v(": 这行脚本中包含了两部分内容： "),t("code",[s._v("tsc")]),s._v(" 和 "),t("code",[s._v("node dist/app.js")]),s._v(" 。"),t("code",[s._v("tsc")]),s._v(" 是将项目中的 "),t("code",[s._v(".ts")]),s._v(" 文件编译成 "),t("code",[s._v("js")]),s._v("；"),t("code",[s._v("node dist/app.js")]),s._v(" 是执行 "),t("code",[s._v("dist")]),s._v(" 目录下的 "),t("code",[s._v("app.js")]),s._v(" 文件。由于我们在 "),t("code",[s._v("tsconfig.json")]),s._v(" 中将 "),t("code",[s._v("tsc")]),s._v(" 的编译结果输出目录设置为根目录下的 "),t("code",[s._v("dist")]),s._v(" 文件夹，所以需要执行最终编译生成的 "),t("code",[s._v("dist/app.js")]),s._v(" 。这两部分内容使用 "),t("code",[s._v("&&")]),s._v(" 连接，表示这两条命令是"),t("strong",[s._v("继发执行")]),s._v("关系。所谓继发执行，就是指前一条命令执行成功后再执行后一条命令。由于我们的项目是用 "),t("code",[s._v("TypeScript")]),s._v(" 进行开发的，所以在启动项目的时候需要先将 "),t("code",[s._v("ts")]),s._v(" 编译成 "),t("code",[s._v("js")]),s._v(" 。等待编译完成后就可以使用 "),t("code",[s._v("node app.js")]),s._v(" 启动项目了。")]),s._v(" "),t("li",[t("strong",[s._v("dev")]),s._v(": 这行脚本是启动 "),t("code",[s._v("nodemon")]),s._v(" 并使用根目录下的 "),t("code",[s._v("nodemon.json")]),s._v(" 作为配置文件。")])]),s._v(" "),t("h2",{attrs:{id:"_7-启动项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-启动项目"}},[s._v("#")]),s._v(" 7. 启动项目")]),s._v(" "),t("p",[s._v("Ok，到这里后，我们就可以开始启动项目了，请在根目录下执行如下命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此时命令行中会输出如下内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ts_koa2@1.0.0 dev /Users/nlrx/code/ts_koa2\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nodemon\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nodemon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(".7\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nodemon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" to restart at any time, enter "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("rs"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nodemon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" watching path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": src/**/*\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nodemon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" watching extensions: ts\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nodemon"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" starting "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ts_koa2@1.0.0 start /Users/nlrx/code/ts_koa2\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" node dist/app.js\n\nserver is running at http://localhost:3000\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("至此，开发环境就已经搭建成功了！")]),s._v(" "),t("p",[s._v("最终得到的项目目录结构如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("├─src\n│ ├─app.ts\n├── package.json\n├── tsconfig.json\n├── nodemon.json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);