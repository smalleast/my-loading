# react-loading
```
模板框架，专注于react的组件开发
```

## 技术栈
react + react-dom + ES6/ES7 + webpack + sass + nodejs

## 项目运行
 1. node v8.1.2
 2. npm 5.0.3
 3. react 15.4.1
 4. react-dom 15.4.1
```
#克隆，或者直接下载
git clone https://github.com/smalleast/react-loading.git

进入文件夹
cd react-loading

安装依赖
npm install
```

### 编译环境
```
开启本地服务器
npm run dev    开发
npm run build  正式
```


## 代码使用说明
```
安装组件的命令
npm install smalleast/react-loading --save

页面具体操作
import Myloading from './main';


调用
 <Myloading animating={animating}/>
```




## 说明
```
>  如有问题或者遇到坑请直接在 Issues 中提，或者可以加我的QQ 382026180

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

```

## 项目布局
```
|-- build				// webpack的配置目录
|   |-- site.config.js				// 模块入口的路径配置文件
|   |-- webpack.base.conf.js				// webpack编译文件的配置文件
|   |-- webpack.dev.conf.js				// 开发使用的编译文件 npm run dev
|   |-- webpack.prod.conf.js				// 打包生产编译包的文件 npm run build
|-- config				// 环境的配置目录
|-- src				// 静态源码目录
|   |-- components				// 组件
|       |-- react-loading.js				// 实现组件的具体js
|       |-- styles.css				// 组件样式
|   |-- div.js				// 测试组件的js入口
|   |-- dev.scss				//	测试组件的样式
|   |-- main.js				// 组件的封装js
|-- .babelrc				// ES6语法编译配置
|-- .editorconfig				// 代码编写规格
|-- .gitignore				// git忽略的文件
|-- .npmrc				// npm配置管理及设置代理
|-- index.html				// 入口html文件
|-- package.json				// 项目及工具的依赖配置文件
|-- webpack.config.js				// webpack 配置文件
|-- README.md				// 说明
```
