---
title: "switch语句"
published: 2023-09-09
description: "C++ study notes covering switch statements."
image: ""
tags: ["C++", "分支结构", "基础"]
category: "C++"
draft: false
---

1️⃣ 知识目标🔦

- 回顾分支语句-if
- 学习三目运算符和switch语句
- 了解break关键字的用法

2️⃣知识总结✅：

**1、三目运算符**

> 在if语句中我们用来对比两个数大小并输出的话，我们会这样写：

```Cpp
if (a>b){
    cout << a << endl;
}
else {
    cout << b << endl;
}
```

而如果用三目运算符的话，会非常简洁，例如:

```Cpp
cout << (a>b? a:b)<<endl;
```

是不是非常简洁！！

三目运算符的基本用法：

> 表达式1 ？ 表达式2：表达式3

- 表达式1是判断条件，条件**成立**则输出**表达式2**，否则输出**表达式3**

**2、switch语句**

switch语句的基本结构：

[![](https://tc-cdn.flowus.cn/oss/a624e3ac-a676-4394-9b51-e981aa0bc913/image.png?time=1739950200&token=0a569ade98fc43deab034f9548ab2d4605f44ff1890952e9cd25f0ac9e964893&role=free)](https://tc-cdn.flowus.cn/oss/a624e3ac-a676-4394-9b51-e981aa0bc913/image.png?time=1739950200&token=0a569ade98fc43deab034f9548ab2d4605f44ff1890952e9cd25f0ac9e964893&role=free)

- 如果表达式roadName的值与case中的值相等，则输出该case中的语句。
- 当然不要忘了在每个case语句后加入**break关键字**；意思是停止执行switch语句。
- default关键字：当表达式的值跟所有case的值都不匹配时，程序进入default分支执行。

**例题1：输入1-7的数字,分别代表星期一到星期日,超出范围提示“输入错误”。**

```Cpp
#include<iostream>
using namespace std;
int main() {
     int n;
     cout << "请输入1~7的数字：";
     cin >> n;
     switch(n) {
           case 1:
                 cout << "星期一";
                 break;
           case 2:
                 cout << "星期二";
                 break;
           case 3:
                 cout << "星期三";
                 break;
           case 4:
                 cout << "星期四";
                 break;
           case 5:
                 cout << "星期五";
                 break;
           case 6:
                 cout << "星期六";
                 break;
           case 7:
                 cout << "星期日";
                 break;
           default:
                 cout << "输入错误";
     }
     return 0;
}
```

例题2：

```Cpp
#include<iostream>
using namespace std;
int main() {
     int a, b;
     cin >> a >> b;
     cout << (a > b ? a : b) << endl ;
     return 0;
}
```
