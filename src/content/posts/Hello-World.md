---
title: "Hello World"
published: 2023-10-06
description: "Python Hello World 入门学习笔记。"
image: ""
tags: ["Python", "Hello World", "基础"]
category: "Python"
draft: false
---

# Hello World

“Hello, world"[程序](https://baike.baidu.com/item/程序/13831935?fromModule=lemma_inlink)是指在计算机屏幕上输出“Hello world”这行[字符串](https://baike.baidu.com/item/字符串/1017763?fromModule=lemma_inlink)的计算机程序，“Hello World”的中文意思是“你好，世界。”。这个[例程](https://baike.baidu.com/item/例程/2390628?fromModule=lemma_inlink)在 Brian Kernighan 和 Dennis M. Ritchie合著的*The C Programme Language*使用而广泛流行。因为它的简洁，实用，并包含了一个该版本的C程序首次在1974年 Brian Kernighan 所撰写的 *Programming in C: A Tutorial* 出现。

## Print()函数

用print()在括号中加上字符串，就可以在屏幕上输出指定的文字。

比如输出’Hello world’，用代码实现如下：

```python
print("Hello World!")
```

print()函数也可以接受多个字符串，用逗号“,”隔开，就可以连成一串输出：

```python
print("hello","World","OK")
```

> print()也可以打印整数，或者计算结果：

```py
print(333)
print(335*521)
```

## 运算符

![图片1.png](https://s2.loli.net/2023/11/03/nk3VzvuW9YL1fUt.png)

## 变量

```python
C = 5
```

> C是变量名，“=”是赋值的意思，5表示的是值
>
> 变量的命名规则如下：

- 变量名可以包含字母、数字、下划线，但是变量名不能以数字开头
- 字母可以是大写或者小写，但是大写和小写是不同的
- 等号（=）是 **赋值**的意思，左边是名字，右边是值，不可写反了
- 变量的命名理论上可以取任何合法的名字，但是尽量取专业的名字

## 输出格式化

> 在字符串内部，%s表示用字符串替换，%d表示用整数替换，有几个%?占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个%?，括号可以省略。

![屏幕截图 2023-11-03 114617.png](https://s2.loli.net/2023/11/03/EuoKaQIXne54i3j.png)

```python
name = '周杰伦'
age = 28
print("大家好，我是%s" % name)
print("大家好，我是%s" % (name,))
print("大家好，我是%s，今年%d岁" % (name, age))
print("大家好，我是%(name)s，今年%(age)d岁" % {"name": name, "age": age})
```

输出示例：

![61bd2ec0ed4e8d3d8cc121d60c85f540.png](https://s2.loli.net/2023/11/14/EahWu6Dbj8tOlTo.png)
