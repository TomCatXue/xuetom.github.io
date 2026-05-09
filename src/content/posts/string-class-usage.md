---
title: "String Class Usage"
published: 2023-09-09
description: "C++ study notes covering string class usage."
image: ""
tags: ["C++", "String", "Basics"]
category: "C++"
draft: false
---

1️⃣ 知识目标🔦

- 回顾字符串函数
- 学习String类的定义及应用
- 了解字符串函数和String类的区别

2️⃣知识总结✅：

**1、String类的定义**

```Cpp
string 变量名;
```

说明：

（1）string定义格式跟普通变量定义格式类似，但是string不是`数据类型`，变量名跟普通变量命名规则一样

（2）string定义的时候，也可以用字符串给它直接初始化，例如 string s=“welcome”;

（3）string类定义的变量可以直接用赋值语句，而且它所存储的字符串长度是可变的。例如 string s; s=“well”; s=“student”;

（4）string定义的变量，它存储的是一个字符串，那么它也可以跟字符数组一样，可以用变量名加下标的方式访问字符串中的一个元素，例如 string s=“welcome”; s[2]=‘l’; 要注意的是访问的时候不能超过下标的范围

（5）如果没有给string类定义内容，那么不能用下标方式访问元素内容。例如 string s; s[0]=‘k’; 是错的

**2、String类的输入和输出**

|cin >> s;|字符串不包含空格、制表符等符号|  
|-|-|  
|getline(cin,string类变量名);|空格也会输入到string类变量中|  

**3、String类的拼接**

直接用 “+” 将两个字符串拼接在一起

```Cpp
str1 = "123";
str2 = "456";
str3 = str1+str2;
```

**4、String类的函数**

|                    |                                                                          |                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 格式                 | 说明                                                                       | 举例                                                                                                                                             |
| str.size()         | 返回string类str的字符串长度，跟字符数组中 strlen() 功能一样                                  | string s=“abc\0www”;cout<<s.size()<<endl; //输出3                                                                                                |
| str.length()       | 同上                                                                       | 同上                                                                                                                                             |
| str.find(字符串s,k)   | 在string类str中，从第k个（k从0开始）位置开始查找字符串s首先出现的位置，如果没有，则返回-1，如果k不写，则表示从第0个位置开始查找 | string str=“abcwww”;int t;t=str.find(“bcw”);cout<<t<<endl; [//输出1t=str.find](https://xn--1t=str-vg3jm381b.find/)(“bc”,3);cout<<t<<endl; //输出-1 |
| str.insert(k,字符串s) | 在string类str的第k个位置，插入字符串s                                                 | string s=“abc”;s.insert(2,”www”);cout<<s<<endl; //输出”abwwwc”                                                                                   |
| str.erase(k,t)     | 将string类str中第k个位置开始，连续删掉t个字符                                             | string s=“abcdef”;s.erase(2,3);cout<<s<<endl; //输出”abf”                                                                                        |

3️⃣c++程序

【题目名称】数字连接

【题目描述】给你n个正整数，按某种顺序将他们拼接起来，使得拼接起来的数最大，该如何拼接？

例如给你3个正整数，分别是123、456、9，拼接的最大数应为9456123

【输入】第一行输入n，表示有n(1<=n<=10)个正整数，第二行是n个正整数，每个数不超过2000000

【输出】输出一行，即拼接后的最大数

```Cpp
#include <bits/stdc++.h>
using namespace std;

// 自定义比较函数，用于排序
// 如果 a+b 的字典序大于 b+a，则返回 true
bool compare(string a, string b) {
    return a + b > b + a;
}

int main() {
    int n;
    cin >> n; // 输入字符串的数量
    string s[11]; // 定义一个字符串数组，最多存储 11 个字符串

    // 输入 n 个字符串
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }

    // 使用自定义的比较函数对字符串数组进行排序
    sort(s, s + n, compare);

    // 输出排序后的字符串，按顺序拼接成一个大字符串
    for (int i = 0; i < n; i++) {
        cout << s[i];
    }

    return 0;
}
```

【题目名称】加密信函

【题目描述】为了解二战时期一项隐秘任务的具体内容，你被安排一项重要任务，破解加密的信函。

经过研究，你终于发现加密规律如下：

1.原文中所有字符都在字母表中被循环左移了是三个位置（例如 “dec”-->“abz” ）

2.逆序存储（例如 “abcd” -->“dcba” ）

3.大小写反转（例如 “abXY” -->“ABxy” ）

【输入】输入一行加密的字符串，字符串长度小于50且只包含大小写字母

【输出】输出一行，即解密之后的字符串

```Cpp
#include <bits/stdc++.h>
using namespace std;

char a[51], b[51];

int main() {
    int len = 0;
    // 读取一行最多 50 个字符的输入
    cin.getline(a, 51);
    // 获取输入字符串的长度
    len = strlen(a);

    // 遍历每个字符进行转换
    for (int i = 0; i < len; i++) {
        if (a[i] >= 'A' && a[i] <= 'W') {
            // 大写字母 A-W 转换为小写字母并向后移动 3 位
            b[i] = a[i] + 3 + 32;
        } else if (a[i] >= 'a' && a[i] <= 'w') {
            // 小写字母 a-w 转换为大写字母并向后移动 3 位
            b[i] = a[i] + 3 - 32;
        } else if (a[i] >= 'X' && a[i] <= 'Z') {
            // 大写字母 X-Z 转换为小写字母并向前移动 23 位
            b[i] = a[i] - 23 + 32;
        } else if (a[i] >= 'x' && a[i] <= 'z') {
            // 小写字母 x-z 转换为大写字母并向前移动 23 位
            b[i] = a[i] - 23 - 32;
        }
    }
    // 逆序输出转换后的字符串
    for (int i = len - 1; i >= 0; i--) {
        cout << b[i];
    }

    return 0;
}
```
---
title: "String Class Usage"
published: 2023-09-09
description: "C++ study notes covering string class usage."
image: ""
tags: ["C++", "String", "Basics"]
category: "C++"
draft: false
---
