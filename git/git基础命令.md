# 玩转 git 三剑客笔记

---

## 03 使用 git 之前需要做的最小配置

---

-   配置`user.name`和`user.email`

    > git config --global user.name 'your_name'
    > git config --global user.email 'your_email@domain.com'

-   `config`的三个作用域

    > 缺省等同于 local
    > git config --local (local 只对某个仓库有效)
    > git config --global (global 对当前用户的所有仓库有效)
    > git config --system (system 对系统所有登录的用户有效)

-   显示`config`的配置，加`--list`
    > git config --list --local
    > git config --list --global
    > git config --list --system

## 04 创建第一个仓库并配置 local 用户信息

---

### 两种场景：

1. 把已有的项目代码纳入 git 管理
    > cd 项目代码所在的文件夹  
    > git init
2. 新建的项目直接用 git 管理
    > cd 某个文件夹  
    > git init your_project #会在当前路径下创建和项目名称同名的文件夹
    > cd your_project

## 05 通过几次 commit 来认识工作区和暂存区

---

### 往仓库里添加文件

> 工作目录->暂存区->版本历史
