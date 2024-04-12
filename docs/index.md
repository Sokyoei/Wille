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

```shell
# 查看 npm 默认源
npm config get registry
# https://registry.npmjs.org/

npm config set registry https://registry.npmmirror.com
npm install -g cnpm --registry=https://registry.npmmirror.com
```

## 安装 yarn

```shell
npm install -g yarn
# yarn config get registry
# yarn config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npmmirror.com
```

## 安装 TypeScript

```shell
npm install -g typescript
npm install -g ts-node
```

## 安装 eslint

```shell
npm install eslint -g
# 项目安装并保存在 package.json 的 devDependencies 字段
npm install eslint --save-dev

# 初始化 eslint(需要 package.json)
npm init @eslint/config
```

## FAQ

Windows 上 PowerShell 执行 ts-node 等出错

```log
ts-node : 无法加载文件 D:\nodejs\node_global\ts-node.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Exec
ution_Policies。
所在位置 行:1 字符: 1
+ ts-node "d:\Andromeda\Sokyoei\Wille\ts\base.ts"
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

```powershell
get-ExecutionPolicy
# Restricted

# 管理员运行
Set-ExecutionPolicy RemoteSigned
```
