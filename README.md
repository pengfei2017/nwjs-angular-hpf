# nwjs-angular-hpf   
Use nwjs-v0.21.5 and angular4 to create desktop applications 使用 nwjs-v0.21.5 和 angular4 创建桌面应用

## 安装步骤  

1. 安装nvm for windows  
    [nvm-windows安装包下载地址](https://github.com/coreybutler/nvm-windows/releases)

1. 安装node v7.8.0    
    ~~~
    nvm install 7.8.0
    ~~~
    
1. 安装@angular/cli
    ~~~
    npm install @angular/cli -g
    ~~~

1. 下载程序包并进入相关目录执行npm install
    ~~~
    git clone https://github.com/pengfei2017/nwjs0.21.5-angular4-hpf.git
    cd nwjs0.21.5-angular4-hpf
    npm install
    ~~~

1. 运行angular开发环境服务器
    ~~~
    ng serve
    ~~~

1. 报下列错误的处理办法

    ERROR in ./~/css-loader?{"sourceMap":false,"importLoaders":1}!./~/postcss-loader!./~/sass-loader!./src/styles.scss
    Module build failed: Error: Cannot find module 'node-sass'

    ~~~
    //显示当前项目所有的依赖已经缺少的依赖
    npm list
    
    //输出了
    npm ERR! peer dep missing: node-sass@^3.4.2 || ^4.0.0, required by sass-loader@4.1.1
    
    //从输出可以看出缺少node-sass依赖，所以安装它
    npm install node-sass --save
    ~~~

1. 运行nw客户端
    ~~~
    nw .
    ~~~
