# Node.js

## 更改 npm 全局模块和缓存默认路径

```powershell
# 查看 npm 全局模块默认路径
npm get prefix
# C:\Users\Ahri\AppData\Roaming\npm

# 查看 npm 缓存默认路径
npm get cache
# C:\Users\Ahri\AppData\Local\npm-cache

npm config set prefix "D:\nodejs\node_global"
npm config set cache "D:\nodejs\node_cache"
```

## npm 更换国内淘宝源

```powershell
# 查看 npm 默认源
npm config get registry
# https://registry.npmjs.org/

npm config set registry https://registry.npmmirror.com
npm install -g cnpm --registry=https://registry.npmmirror.com
```

## 安装 vue

```shell
npm install vue -g
npm install webpack -g
npm install webpack-cli -g
npm install vue-cli -g
npm install vue-router -g
```

## 安装 yarn

```shell
npm install -g yarn
# yarn config get registry
yarn config set registry https://registry.npm.taobao.org
```

## 安装 TypeScript

```shell
npm install -g typescript
npm install -g ts-node
```
