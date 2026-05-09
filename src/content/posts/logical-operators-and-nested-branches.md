---
title: "逻辑运算符和分支嵌套"
published: 2023-09-09
description: "C++ study notes covering logical operators and nested branches."
image: ""
tags: ["C++", "运算符", "分支结构"]
category: "C++"
draft: false
---

1️⃣ 知识目标🔦

- 回顾分支语句
- 学习逻辑运算符和分支嵌套
- 合理运用嵌套语句

2️⃣知识总结✅：

**1、逻辑运算符**

| **与** | **或** | **非** |
| ----- | ----- | ----- |
| &&    | \|    | ！     |

> 逻辑运算符表达式结果只有真和假，也就是true和false；

- 与（&&）：两边表达式都为真，结果才为真。例如：**9>8&&3>2**,结果就为真。
- 或（||）：两边表达式有一个为真，结果就为真。例如：**9>8||3<2**,结果为真。
- 非（!）: 与表达式结果相反。例如**3>2**原本结果为真，但是**！3>2**结果就为假。

> 逻辑运算符的优先级: !>&&>||,如果不知道优先级，建议加（）

例题1：

给定三个正整数，分别表示三条线段的长度，判断这三条线段能否构成一个三角形（任意两条边之和大于第三边）。

输出格式：如果能构成三角形，则输出Yes，否则输出No。

```Cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
    int a, b, c;
    cin >> a >> b >> c;
    if(a+b>c&&a+c>b&&b+c>a){
        cout << "yes";
    }else{
        cout << "no";
    }
    return 0;
}
```

**2、分支嵌套**

```Cpp
  if( 判断条件1 ){
      if( 判断条件2 ){
      语句块1;   //条件1和条件2同时成立执行
      }
      else{
      语句块2;   //条件1成立但条件2不成立时执行
      }
  }
  else{
  语句块3;  //条件1不成立时执行（跟条件2无关）
  }
```

例题：首先设定账号为：123，密码为：456，编写程序，实现上图账号和密码 登录的过程。

过程分析：![[image (5).png]]
```Cpp
#include <iostream>
using namespace std;
int main(){
    int user = 123, pw = 456, u, p;
    cin >> u >> p;
    if(u == user){
       if(p == pw){
           cout << "登录成功" << endl;
        }
        else{
            cout << "密码错误" << endl;
        }
    }
    else{
        cout << "账号错误" << endl;
    }
    return 0;
}
```
