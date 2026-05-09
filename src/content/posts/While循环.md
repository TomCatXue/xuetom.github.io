---
title: Python1.0-11-While循环
date: 2023-12-22 14:55:30
tags: "while循环"
categories: "Python"
photos: "https://pic.huke88.com/video/cover/2020-04-07/51668C5E-7242-9CD5-8A6A-7E305B079020.jpg!/fwfh/1840x1124/quality/80/unsharp/true/format/jpg"
cover: "https://raspberry-valley.azurewebsites.net/img/Python-01.jpg"
excerpt: "Python 编程中 while 语句用于循环执行程序，即在**某条件**下，循环执行某段程序，以处理需要重复处理的相同任务。" 
---

# While循环

**while循环其实跟for循环差不多，只不过是把初始化条件写到外面了，把增值表达式写到里面了。**

while循环的一般表达式：

```python
while（循环控制表达式）:
  语句序列
```

> Python 编程中 while 语句用于循环执行程序，即在`某条件`下，循环执行某段程序，以处理需要重复处理的相同任务。

![while](https://www.runoob.com/wp-content/uploads/2014/05/006faQNTgw1f5wnm06h3ug30ci08cake.gif)

例外：

- Python 不支持 do…while 循环语句。
- Python 可以使用 while 循环加上 break 语句模拟 do…while 循环。

## while.....else

在 python 中，while … else 在循环条件为 false 时执行 else 语句块：

```python
i = 0
while i < 5:
   print(i, " is  less than 5")
   i = i + 1
else:
   print(i, " is not less than 5")
```

在用法上，while...else和if....else很像。

# break语句和continue语句

## break语句

>  while 语句时还有另外两个重要的命令 continue，break 来跳过循环，continue 用于跳过该次循环，break 则是用于`退出循环`，此外"判断条件"还可以是个常值，表示循环必定成立

例如：

```python
i = 1
while 1:            # 循环条件为1必定成立
    print(i)         # 输出1~10
    i += 1
    if i > 10:     # 当i大于10时跳出循环
        break
```

当i的值大于10的时候结束循环

输出结果：

```python
>>> %Run builtins.pyi
1
2
3
4
5
6
7
8
9
10
```

## continue语句

continue语句可以用于提前结束本轮循环，当执行到continue语句后，程序将跳到判定循环是否向下执行的条件处，进行下一轮循环是否执行的判定与后续代码的执行，示例如下：

```python
i = 1
while i < 10:   
    i += 1
    if i%2 > 0:     # 非双数时跳过输出
        continue
    print i         # 输出双数2、4、6、8、10
```

# 无限循环（死循环）

如果条件判断语句永远为 true，循环将会无限的执行下去

```python
i = 1
while i == 1: # 该条件永远为true，循环将无限执行下去
    print("peng")
```

# 循环星星阵

```python
i = 1
while i<=9:
    print("*"*i)
    i=i+1
```

输出结果：

```python
*
**
***
****
*****
******
*******
********
```

