---
title: "Basic Data Types Part 2"
published: 2023-09-09
description: "C++ study notes covering basic data types, part 2."
image: ""
tags: ["C++", "Data Types", "Basics"]
category: "C++"
draft: false
---

1️⃣ 知识目标🔦

- 回顾整型和浮点型
- 学习字符型和布尔型
- 了解类型转换

2️⃣知识总结✅：

**1.字符型**

|   |   |   |   |
|---|---|---|---|
|**类型**|**字节数**|**范围**|**举例**|
|字符型|1|-128~127|char i;|

- 字符常量只能用单引号括起来，不能用双引号或其他括号。例如：‘A’, ‘&’；
- 字符常量只能是单个字符，不能是字符串。错误写法：**‘ABC’**
- 字符可以是字符集中任意字符。但数字被定义为字符型之后就不能参与数值运算。如'5'和5 是不同的。'5'是字符常量，不能参与运算。

**2.ASCII码**

> ASCII码很多，这里我们只记住三个：

---

- 数字0，ASCII码为：48
- 大写字母A，ASCII码为：65
- 小写字母a,ASCII码为：97

记住这三个以后，我们就能推出数字、大写字母、小写字母的值；

**3、布尔型**（bool）

> 布尔型是用来判断的，它只有对和错两种结果，分别为true和false

true转换为整型值为1，false转换为整型值为0

**4.类型转换**

🔸隐式转换

![[image (4).png]]

例如：

```Cpp
char a = 'a';
short b = 3;
int c = 100;
long long d = 240;
double e = 3.12345;
cout << a + b << endl; 答案为100
cout << c + d << endl；答案为340
cout << d + e << endl; 答案为243.123
cout << e + a << endl; 答案为100.123
```

🔹强制转换

> 强制类型转换有两种格式：

- (数据类型) 变量或表达式 例如：(int)a
- 数据类型 (变量或表达式) 例如：int(a+b)

3️⃣编写C++程序💻：

```Cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int c;
    cin >> c;
    cout << char(c)<< endl;   //类型转换
    return 0;
}
```

```Cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    char c;
    cin >> c; 
    char d = c + 32;//转换大小写，利用ASCLL码
    cout << d;
    return 0;
}
```
---
title: "Basic Data Types Part 2"
published: 2023-09-09
description: "C++ study notes covering basic data types, part 2."
image: ""
tags: ["C++", "Data Types", "Basics"]
category: "C++"
draft: false
---
