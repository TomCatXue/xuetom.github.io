---
title: "Simple Sorting"
published: 2023-09-09
description: "C++ study notes covering simple sorting algorithms."
image: ""
tags: ["C++", "Algorithm", "Sorting"]
category: "C++"
draft: false
---

1️⃣ 知识目标🔦

- 回顾模拟算法
- 学习简单排序
- 了解冒泡排序和选择排序

2️⃣知识总结✅：

**1、认识排序**

又称“分类”。按关键字大小递增或递减的次序，对文件中的全部记录重新排列的过程。排序是计算机程序设计中的一种重要运算。分内部排序和外部排序两大类。内部排序中常用的方法有选择排序、冒泡排序、插入排序、哈希排序、快速排序、归并排序等。

**2、选择排序**

- 基本思路：每一趟从待排序的数据元素中选出最小（或最大）的一个元素，顺序放在待排序的数列的最前面，直到全部待排序的数据元素排完。

1、选择排序需要两层循环，外循环每执行一次，相当于排好了一个数的位置，内循环是相当于“打擂台”
2、内循环的下标一定要从 i+1 开始，不能从0开始，大家思考下为什么？
3、如果需要改写成从小到大，程序代码需要修改哪个地方
4、选择排序的效率不是很高，n个元素来排序，需要比较的次数是 n*(n-1)/2
5、如果有相同的元素值，对排序有影响吗？
**3.冒泡排序**

- 基本思路：从无序序列头部开始，相邻元素进行两两比较，根据大小交换位置，直到最后将最大（小）的数据元素交换到了无序队列的队尾，从而成为有序序列的一部分；下一次继续这个过程，直到所有数据元素都排好序。

（1) 比较相邻的元素。如果第一个比第二个大（小），就交换他们两个。

（2) 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大（小）的数。

（3) 针对所有的元素重复以上的步骤，除了最后已经选出的元素（有序）。

（4)持续每次对越来越少的元素（无序元素）重复上面的步骤，直到没有任何一对数字需要比较，则序列最终有序。

3️⃣c++程序：

```Cpp
#include<bits/stdc++.h>//选择排序
using namespace std;
int main(){
    int a[10]={};
    for(int i=0;i<10;i++)
        cin >> a[i];
    for(int i=0;i<10;i++){
        for(int j=i+1;j<10;j++){
            if(a[i]>a[j]) swap(a[i],a[j]);
        }
    }
    for(int i=0;i<10;i++)
        cout << a[i] <<" ";
    return 0;
}
```

```Cpp
#include <bits/stdc++.h>//冒泡排序
using namespace std;
int main(){
    int n;
    int a[1001]={};
    cin >> n;
    for(int i = 0;i < n;i++){
        cin >> a[i];
    }
    for(int i =0;i<n-1;i++){
        for(int j = 0;j < n-1-i;j++){
            if(a[j] > a[j+1]) swap(a[j],a[j+1]);
        }
    }
    for(int i = 0;i < n;i++){
        cout << a[i] << " ";
    }
    return 0;
}
```
---
title: "Simple Sorting"
published: 2023-09-09
description: "C++ study notes covering simple sorting algorithms."
image: ""
tags: ["C++", "Algorithm", "Sorting"]
category: "C++"
draft: false
---
