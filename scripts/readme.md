## 说明

使用后台上传

 - [x] 文章单个上传
 - [x] 文章全部上传
 - [x] 图片单个上传
 - [ ] 图片全部上传

默认配置:

```
位置:
~/.config/rainboyblog/config.yml
```

配置样式:

```
# 文件的地址
base_path:/home/rainboy/myblogdata
server:http://blog.rainboy.cc
token:
```

参数:


```
命令 rb

 -h,--help 帮助
--------

-u --update  更新文章
-g --git     上传到git
```

遍历_article 文件夹,过滤掉_draft_开头的文件,后缀不是.md的文件,上传文件信息,返回是增加还是更新

```
rb -u filename1 filename2
```

## 图片上传

```
rb -i image_path1 image_path2 image_path3 ..
```
