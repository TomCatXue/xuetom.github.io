---
title: "初识C++"
published: 2023-09-09
description: "C++ study notes for getting started with C++ programming."
image: ""
tags: ["C++", "基础", "编程入门"]
category: "C++"
draft: false
---

1️⃣ 知识目标🔦

- 了解编程的用处和生活中编程的魅力🌐
- 学习C++程序的基本编程框架🖥️
- 了解输出语句(cout语句)🔊

2️⃣ 特殊符号输入🔍：

- 在C++编程中，我们经常需要使用一些特殊符号，比如分号（；）、括号（()）等。这些特殊符号可以通过键盘上的Shift键和数字键或者字母键组合输入。
    
    3️⃣ 编写C++程序💻：
    

**1. 第一个 C++程序**

```Cpp
#include <iostream> //声明头文件
using namespace std; //使用标准名空间

int main() { //主函数是程序的入口
  cout << "Hello, World!" << endl;
  return 0; //函数返回值为 0
}
```

**2. 输出一个金子塔图案**
![[图片1.jpg]]

```Cpp
\#include<iostream>
using namespace std;
int main(){
  cout << "  *  "<< endl;
  cout << " *** "<< endl;
  cout << "*****"<< endl;
  return 0;
}
```

**3. 输出一个沙漏图案**

![[9BE7872.jpg]]
```Cpp
#include<iostream>
using namespace std;
int main(){
  cout << "*****"<< endl;
  cout << " *** "<< endl;
  cout << "  *  "<< endl;
  cout << " *** "<< endl;
  cout << "*****"<< endl;
  return 0;
}
```
