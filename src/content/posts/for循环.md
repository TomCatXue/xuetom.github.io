---
title: "for循环"
published: 2023-12-08
description: "Python for 循环学习笔记。"
image: ""
tags: ["Python", "循环", "基础"]
category: "Python"
draft: false
---

# for循环

for循环的一般形式：

```python
for iterating_var in sequence:
   statements(s)
```

**一年四季，循环往复：说到底就是一个循环的问题**

for语句实际上解决的是循环问题。在很多的高级语言中都有for循环（for loop）。

for语句是编程语言中针对可迭代对象的语句，它的主要作用是允许代码被重复执行。

例子:

```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
```

fruits是一个列表，将列表中的字符串通过for循环遍历出来

# 循环遍历字符串

甚至连字符串都是可迭代的对象，它们包含一系列的字符：

> 循环遍历单词 "banana" 中的字母：

```python
for x in "banana":
  print(x)
```

运行结果：

```python
C:\Users\My Name>python python_for_string.py
b
a
n
a
n
a
```

# range() 函数

如需循环一组代码指定的次数，我们可以使用 `range()` 函数，

`range()` 函数返回一个数字序列，默认情况下从 0 开始，并递增 1（默认地），并以指定的数字结束。

示例：

```python
for x in range(10):
  print(x)
```

输出结果：

```python
C:\Users\My Name>python python_for_range_1.py
0
1
2
3
4
5
6
7
8
9
```

注意：`range(10)` 不是 0 到 10 的值，而是值 0 到 9。

`range()` 函数默认 0 为起始值，不过可以通过添加参数来指定起始值：`range(3, 10)`，这意味着值为 3 到 10（但不包括 10）：

## 递增range（）

> **range()函数默认将序列递增 1，但是可以通过添加第三个参数来指定增量值：range(2, 30, 3)**

示例：第一个数是起始值，第二个数是结束值，第三个数是两数之间间隔

```python
for x in range(3, 50, 6):
  print(x)
```

输出结果：

```python
C:\Users\My Name>python python_for_range_3.py
3
9
15
21
27
33
39
45
```

## For 循环中的 Else

for 循环中的 `else` 关键字指定循环结束时要执行的代码块：

示例：

打印 0 到 9 的所有数字，并在循环结束时打印一条消息：

```python
for x in range(10):
  print(x)
else:
  print("Finally finished!")
```

输出结果：

```python
C:\Users\My Name>python python_for_else.py
0
1
2
3
4
5
6
7
8
9
Finally finished!
```

## for循环嵌套

嵌套循环是循环内的循环。

“外循环”每迭代一次，“内循环”将执行一次：

示例：

```python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)
```

输入结果：

```python
C:\Users\My Name>python python_for_nested.py
red apple
red banana
red cherry
big apple
big banana
big cherry
tasty apple
tasty banana
tasty cherry
```



# pass语句

for 语句不能为空，但是如果您处于某种原因写了无内容的 for 语句，请使用 pass 语句来避免错误。