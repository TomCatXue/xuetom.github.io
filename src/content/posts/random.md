---
title: "random随机数和时间"
published: 2023-11-24
description: "Python random 随机数和时间模块学习笔记。"
image: ""
tags: ["Python", "随机数", "时间"]
category: "Python"
draft: false
---

# random

> 在python中用于生成随机数的模块是random,在使用前需要import。

**random()** 方法返回随机生成的一个实数，它在***[0,1)***范围内。

使用方法：

```python
import random

a=random.random()

print(a)
```

注意：**random()是不能直接访问的，需要导入 random 模块，然后通过 random 静态对象调用该方法。**

输出结果：

```python
0.46006891154492147
```

## random.uniform

**random.uniform的函数原型为：random.uniform(a, b)，用于生成一个指定范围内的随机符点数，两个参数其中一个是上限，一个是下限。如果a > b，则生成的随机数n: b <= n <= a。如果 a <b， 则 a <= n <= b。**

使用方法：

```python
import random
print (random.uniform(1, 10))  
print (random.uniform(10, 1))
```

输出结果：

```python
2.1520386126536115
3.1391272747538731
```

## random.randint

**random.randint()的函数原型为：random.randint(a, b)，用于生成一个指定范围内的整数。其中参数a是下限，参数b是上限，生成的随机数n: a <= n <= b,**

使用方法：

```python
import random
print (random.randint(11, 20))  #生成的随机数n: 11 <= n <= 20  
print (random.randint(20, 20))  #结果永远是20
```

输出结果：

```py
11
20
```

## random.choice

**random.choice从序列中获取一个随机元素。其函数原型为：random.choice(sequence)。参数sequence表示一个有序类型。**

使用方法：

```python
import random
print (random.choice("Pythontab.com"))
print (random.choice(["python", "tab", "com"]))
print (random.choice(("python", "tab", "com")))
```

输出结果：

```python
t
python
tab
```

## random.randrange

**random.randrange([start], stop[, step])从指定范围内，按指定基数递增的集合中 获取一个随机数。**

使用方法：

```python
import random
print(random.randrange(1,200,3))  # (1,200,3)    1-200之间以3递增的数
```

输出结果：

```python
163
```

# Time库

Python 程序能用很多方式处理日期和时间，转换日期格式是一个常见的功能。

Python 提供了一个 time 和 calendar 库可以用于格式化日期和时间。

## 获取当前时间

```py
import time
localtime = time.asctime()
print("本地时间为 :", localtime)
```

# calendar库

calendar     日历；挂历

```python
import calendar
cal = calendar.month(2020, 12)
print("以下输出2020年12月份的日历:")
print(cal)
```

输出结果：

```python
以下输出2020年12月份的日历:
   December 2020
Mo Tu We Th Fr Sa Su
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30 31
```

## time.sleep()

sleep  休眠

```python
time.sleep(3)  #表示程序休眠3秒，也可以是浮点数
```

# 进度条

```python
import time
print("----执行开始----")
s = 10
for i in range(s+1):
    a="*"*i
    b="."*(s-i)
    c=(i/s)*100
    print("{:<3.0f}%[{}->{}]".format(c,a,b))
    time.sleep(0.2)
print("----执行结束----") 
```

输出结果：

```python
----执行开始----
0  %[->..........]
10 %[*->.........]
20 %[**->........]
30 %[***->.......]
40 %[****->......]
50 %[*****->.....]
60 %[******->....]
70 %[*******->...]
80 %[********->..]
90 %[*********->.]
100%[**********->]
----执行结束----
```



