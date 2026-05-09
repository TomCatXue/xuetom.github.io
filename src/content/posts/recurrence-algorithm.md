---
title: "Recurrence Algorithm"
published: 2023-09-09
description: "C++ study notes covering recurrence algorithm."
image: ""
tags: ["C++", "Algorithm", "Recurrence"]
category: "C++"
draft: false
---

1️⃣ 知识目标🔦

- 回顾数组
- 学习递推算法
- 练习递推算法

2️⃣知识总结✅：

**1、递推算法**

> 递推算法是指从已知的初始条件出发，依据某种递推关系，逐次推出所要求的各中间结果及最后结果。

也可以理解为“找规律”

可用递推算法求解的题目一般有以下二个特点：   
1、问题可以划分成多个状态；   
2、除初始状态外，其它各个状态都可以用固定的递推关系式来表示。  

**2、递推关系式**

给定一个数的序列H0，H1，….,Hn,….若存在整数n0,使当n>n0时，可以用等号(或大于号、小于号)将Hn与其前面的某些项Hi(0<i<n)联系起来，这样的式子就叫做递推关系式。

```Cpp
                 Hn = Hn-1+Hn-2
                 
```

**3、递推的两种形式**

- 顺推法：从已知条件出发，逐步推出要解决的问题的结果。
- 逆推法：从问题结果出发，逐步推到已知条件。

**4、  解决递推问题的一般步骤**

（1）建立递推关系式

（2）确定边界条件（即初始值）

（3）递推求解

3️⃣c++程序

【问题描述】

例1：有2_n的长方形方格，用n个1_2的骨牌铺满方格。编一程序，试对给出的任意一个n(n>0)，输出铺法总数。

```Cpp
#include <iostream>
using namespace std;
int main() {
    int n,a[101];
    cin>>n;
    //初始化边界条件
    a[1]=1;
    a[2]=2;
    //开始递推
    for (int i=3; i<=n; i++) {
        a[i]=a[i-1]+a[i-2];
    }
    cout<<a[n]<<endl;
    return 0;
}
```

例2：【问题描述】海滩上有一堆桃子，N只猴子来分。第一只猴子把这堆桃子中的一个扔入海中，然后将剩余的桃子平均分成两份，最后这只猴子拿走了1份。第二只猴子来了接着把剩下的桃子中的一个扔入海中，然后把剩余的桃子平均分成2份，开开心心拿走了1份。第三、第四、……，第N只猴子都是将剩下的桃子中的一个扔入海中，然后将剩余的桃子平均分成2份，并拿走其中的1份。最后只剩下1个桃子。编写程序，输入猴子的数量N，输出海滩上原有多少桃子。

```Cpp
#include <iostream>
using namespace std;
int main(){
    int sum = 0,n,count[1000]={};
    cin >> n;
    count[n] = 1;
    int i = n;
    while(i >=0){
        count[i-1] = count[i] * 2 + 1;
        i--;
    }
    cout << count[0];
    return 0;
}
```
---
title: "Recurrence Algorithm"
published: 2023-09-09
description: "C++ study notes covering recurrence algorithm."
image: ""
tags: ["C++", "Algorithm", "Recurrence"]
category: "C++"
draft: false
---
