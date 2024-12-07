#### UmiJS

https://umijs.org/docs/guides/getting-started

#### 清理 Node 模块缓存

npm cache clean --force

#### 重新安装相关依赖

npm uninstall @types/react antd npm install @types/react antd

#### 选择 node 版本

nvm use 18

#### .eslintignore

后面要去掉下面这两行 src/ types/

#### 权限处理

https://v3.umijs.org/zh-CN/plugins/plugin-access

# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
