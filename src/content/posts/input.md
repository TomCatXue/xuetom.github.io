---
title: "input函数"
published: 2023-11-14
description: "input() 函数用于接收用户输入，是实现人机交互的基础。"
image: ""
tags: ["Python", "输入", "基础"]
category: "Python"
draft: false
---

# input()函数

**input()函数包含四个方面：input()函数的使用/结果的赋值/数据类型/结果的强制转换。是实现人机互动沟通的关键，需要在终端出输入信息。

![input](https://pic3.zhimg.com/v2-b69a3727b056ff1813a2ccbf0cd16b56_r.jpg)

代码示例：

```python
a = input("你的名字是？")
print(a)
```

输出案例：

![微信图片_20231114103204.png](https://s2.loli.net/2023/11/14/2klVOwtCviRo6bs.png)

# 基本数据类型

###### python有五种数据类型：

> - Numbers（数字）
>
> ​         -  int（有符号整型）在数字中，正整数、0、负整数都称为整型。
>
> ​         -  long（长整型，也可以代表八进制和十六进制）
>
> ​          - float（浮点型）含有小数点的数据都是浮点型。
>
> ​          - complex（复数）复数为实数加虚数，只要存在虚数，此数据类型就为复数类型。
>
> ​          - bool (布尔型 )布尔型数据只有两种：True、False。表示真假。
>
> - String（字符串）
> - List（列表）
> - Tuple（元组）
> - Dictionary（字典）

# 强制类型转换

## 隐式类型转换

> 在隐式类型转换中，Python 会自动将一种数据类型转换为另一种数据类型，不需要我们去干预。
>
> 以下实例中，我们对两种不同类型的数据进行运算，较低数据类型（整数）就会转换为较高数据类型（浮点数）以避免数据丢失。



代码：

```python
a = 123
b = 1.23
c = a+b

print("a 数据类型为:",type(a))
print("b 数据类型为:",type(b))

print("c 值为:",c)
print("c 数据类型为:",type(c))
```

输出结果：

> a 数据类型为: <class 'int'>
> b 数据类型为: <class 'float'>
> c: 值为: 124.23
> c 数据类型为: <class 'float'>



## 显式类型转换

> 在显式类型转换中，用户将对象的数据类型转换为所需的数据类型。 我们使用 int()、float()、str() 等预定义函数来执行显式类型转换。

代码：

```python
a = input("请输入一个字符串：")
print(type(a)) 
b = int(a)
print(b,type(b))
```

输出结果：

![屏幕截图 2023-11-14 105622.png](https://s2.loli.net/2023/11/14/mvgi6Fy7LYeXkOC.png)

## 类型转换

![微信图片_20231114105741.png](https://s2.loli.net/2023/11/14/oxZ1IkDKtLecyHg.png)
