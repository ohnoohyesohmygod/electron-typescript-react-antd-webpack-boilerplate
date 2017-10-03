# electron-typescript-react-antd-webpack-boilerplate
electron boilerplate with: electron, typescript, react, antd, webpack\



+ dist            // pack 完后的输出，.dmg, .exe, .zip, .app 等文件
+ build           // background.png, icon.icns, icon.ico
+ app             // 用于 pack 给用户的目录
  + dist          // src 目录打包完放这里
  + assets        // 字体、图片等资源文件
  + pages         // 存放页面
  - package.json  // 生产依赖，存 dependencies
+ src             // 源码
  + main          // main
  + renderer      // renderer
  + shared        // main 和 renderer 公用文件
- package.json    // 开发依赖，存 devDependencies