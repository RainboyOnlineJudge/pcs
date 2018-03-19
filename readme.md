# pcs

一个在线题解系统


 - [一.安装]()
    - [1.手动安装]()
    - [2.使用docker]()


## 一.安装

### 1.手动安装

下载`nodejs 8.10.0 LTS`

```sh
wget https://nodejs.org/dist/v8.10.0/node-v8.10.0-linux-x64.tar.xz
```

安装

```sh
tar -xvf node-v8.10.0-linux-x64.tar.xz
mv node-v8.10.0-linux-x64.tar.xz node
mkdir ~/.bin
mv node ~/.bin

cat << EOF >> ~/.bashrc
# node path
export NODE_HOME=~/.bin/node
export PATH=$PATH:$NODE_HOME/bin
export NODE_PATH=$NODE_HOME/lib/node_modules
EOF
source ~/.bashrc
```

使用cnpm

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 安装 server 端

```bash
cd pcs/server
cnpm i 
```

确定`images`路径

```bash
cp -r server/images your_path
```
**修改server/config.js**


```json
images_path:your_path+"/images", //images路径的地址
"jwt_key":'your_token'  //jwt 的key
```

运行` npm run start`

### 安装 frontEnd 端

### 安装mongodb

## 配置
修改`jwt_key`
```
vim server/config.js

{
    'jwt_key':your_key
}
```

创建server-docker
```
cd server
docker build -t pcs_server .
docker run --name=pcs_server --link=pcsdb -d -p <port>:3000 -v <image_path>:/server/images/ pcs_server
```

### 安装后台server

首先安装`docker`,参考阿里云的docker[安装方法](https://yq.aliyun.com/articles/29941)

安装`mongodb`

```
docker pull mongodb
```

安装blog_server:

```
# 修改token
echo 'your_token' > ./server/token.txt
cd ./server
docker build  ./ -t blog_server
# 运行
docker run -p 3000:3000 blog_server -d
```


## 使用

## 文章

### 文章的属性yml

开头如下的yml格式

```
_id:
title:
summary:
category:
 - category1
 - category2
tags:
 - tag1
 - tag2
hidden:
ctime:
series:
```


### 如何安排自己的文章存放方式

可以建立三个文件夹如下
```
post
draft
trash
```

同系列的文章,可以创建一个文件夹,放入同一个文件下

也可以根据分类来创建文件夹

```
category
|
--- series
```

## 设计思路


见`doc/`文件夹下

## scripts命令行工具

使用之前设定好自己的token

```
rb -u atirle1 article2 article3
rb -u //遍历base_dir下的所有md文件,然后提交
rb -i image_path1 image_path2 image_path3 ..
```
