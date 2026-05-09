---
title: "High Precision Multiplication and Division"
published: 2023-09-09
description: "C++ study notes covering high precision multiplication and division."
image: ""
tags: ["C++", "Algorithm", "High Precision"]
category: "C++"
draft: false
---

1️⃣ 知识目标🔦

- 回顾高精度的含义
- 学习高精度数如何进行乘除
- 掌握高精度数的应用

2️⃣知识总结✅：

**1、高精度乘以单精度**

```Cpp
#include <bits/stdc++.h>
using namespace std;

const int N = 210; // 定义常量 N，表示数组的最大长度
string a; // 存储输入的大整数
int a1[N], b; // a1 用于存储大整数的每一位，b 是输入的整数
int c[N]; // c 用于存储乘法结果的每一位

int main() {
    cin >> a >> b; // 输入大整数和一个整数
    int la = a.size(); // 获取大整数的长度

    // 将大整数的每一位逆序存储到数组 a1 中
    for (int i = 0; i < la; i++) {
        a1[i] = a[la - 1 - i] - '0';
    }

    int t = 0; // t 用于存储进位
    // 进行逐位乘法运算
    for (int i = 0; i < la; i++) {
        t = t + a1[i] * b; // 当前位的乘积加上进位
        c[i] = t % 10; // 当前位的结果
        t = t / 10; // 更新进位
    }
    c[la] = t; // 处理最后的进位

    // 去掉结果中多余的前导零
    while (c[la] == 0 && la > 0) {
        la--;
    }

    // 逆序输出结果
    for (int i = la; i >= 0; i--) {
        cout << c[i];
    }

    return 0;
}
```

**2、高精度 *** 高精度

[![](https://tc-cdn.flowus.cn/oss/551046ab-a5dc-49fb-a02d-f2c9449d1a76/image.png?time=1739951100&token=64d21bb52aed43c2c93e315b0e76781d04b22dd6b5b9b4b98f06aeb52e812fa6&role=free)](https://tc-cdn.flowus.cn/oss/551046ab-a5dc-49fb-a02d-f2c9449d1a76/image.png?time=1739951100&token=64d21bb52aed43c2c93e315b0e76781d04b22dd6b5b9b4b98f06aeb52e812fa6&role=free)

> 我们可以发现 A[i]*B[j] 的值会累加到C数组的 C[i+j] 中去，有个了这个性质，我们就可以很容易通过数组A和数组B得出数组C

```Cpp
for(i=0;i<lena;i++)
  for(j=0;j<lenb;j++)
    c[i+j]=c[i+j]+a[i]*b[j];
```

```Cpp
#include <bits/stdc++.h>
using namespace std;

string a, b;
long long a1[10001], b1[10001], c[10001];

int main() {
    cin >> a; // 输入第一个大整数
    cin >> b; // 输入第二个大整数

    int lena = a.size(); // 获取第一个大整数的长度
    int f = 0; // 标记负号的数量

    // 处理第一个大整数，判断是否为负数
    if (a[0] == '-') {
        f++; // 负号计数
        for (int i = 1; i < lena; i++) {
            a1[i - 1] = a[lena - i] - '0'; // 逆序存储数字部分
        }
    } else {
        for (int i = 0; i < lena; i++) {
            a1[i] = a[lena - 1 - i] - '0'; // 逆序存储数字部分
        }
    }

    int lenb = b.size(); // 获取第二个大整数的长度

    // 处理第二个大整数，判断是否为负数
    if (b[0] == '-') {
        f++; // 负号计数
        for (int i = 1; i < lenb; i++) {
            b1[i - 1] = b[lenb - i] - '0'; // 逆序存储数字部分
        }
    } else {
        for (int i = 0; i < lenb; i++) {
            b1[i] = b[lenb - 1 - i] - '0'; // 逆序存储数字部分
        }
    }

    int lenc = lena + lenb; // 结果的最大长度

    // 进行逐位乘法运算
    for (int i = 0; i < lena; i++) {
        for (int j = 0; j < lenb; j++) {
            c[i + j] += a1[i] * b1[j];
        }
    }

    // 处理进位
    for (int i = 0; i < lenc; i++) {
        c[i + 1] += c[i] / 10;
        c[i] = c[i] % 10;
    }

    // 去掉结果中多余的前导零
    while (c[lenc - 1] == 0 && lenc - 1 > 0) {
        lenc--;
    }

    // 如果结果为 0，直接输出 0
    if (lenc == 1 && c[0] == 0) {
        cout << "0" << endl;
        return 0;
    }

    // 如果负号计数为 1，输出负号
    if (f == 1) {
        cout << "-";
    }

    // 逆序输出结果
    for (int i = lenc - 1; i >= 0; i--) {
        cout << c[i];
    }
    cout << endl;

    return 0;
}
```

**3、高精度除以单精度**

> 除法应该从高位开始，一位一位的往下除

> for(i=len-1,m=0;i>=0;i--){  
> c[i]=(m*_10+a[i])/b;_  
> _m=(m*_ 10+a[i])%b;  
> }  

```Cpp
#include <bits/stdc++.h>
using namespace std;

string str = ""; // 存储输入的大整数
int a[1000] = {}, c[1000] = {}, b = 0; // a 用于存储大整数的每一位，c 用于存储除法结果的每一位，b 是输入的除数

int main() {
    cin >> str >> b; // 输入大整数和除数
    int len = str.size(); // 获取大整数的长度

    // 将大整数的每一位逆序存储到数组 a 中
    for (int i = 0; i < len; i++) {
        a[i] = str[len - 1 - i] - '0';
    }

    int m = 0; // 用于存储余数
    // 进行逐位除法运算
    for (int i = len - 1; i >= 0; i--) {
        c[i] = (m * 10 + a[i]) / b; // 当前位的商
        m = (m * 10 + a[i]) % b; // 更新余数
    }

    // 去掉结果中多余的前导零
    while (c[len - 1] == 0 && len > 0) {
        len--;
    }

    // 逆序输出结果
    for (int i = len - 1; i >= 0; i--) {
        cout << c[i];
    }

    return 0;
}
```
---
title: "High Precision Multiplication and Division"
published: 2023-09-09
description: "C++ study notes covering high precision multiplication and division."
image: ""
tags: ["C++", "Algorithm", "High Precision"]
category: "C++"
draft: false
---
