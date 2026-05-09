
1️⃣ 知识目标🔦

- 回顾变量和输入输出语句
- 认识八种基本数据类型
- 学习浮点数类型保留小数位

2️⃣知识总结✅：

### 一、认识八种基本数据类型

将八种基本数据类型分为四类分别为整型、浮点型、字符型和布尔型。

![[image.png]]

**1、整型**

![[image (1).png]]

四种整型类型中常用的int和longlong，在这里需要注意的是类型的取值范围，例如：

```Cpp
int max = 2147483647;   //int最大值
int min = -2147483648;  //int最小值
long long max = 9223372036854775807;  //最大值
long long min = -9223372036854775808; //最小值
```

- 整型数据可以直接赋值
- 整型数据除法中只取整数位
- 运算时要放置数据超出范围

**2、浮点型**

> 浮点型就是小数，分为float(单精度浮点型)和double（双精度浮点型）

![[image (2).png]]
默认的浮点型是double类型的，如果需要表示float类型，需要加”f”或者”F”后缀。

例如:float f1 = 3.14f;

![[image (3).png]]

**3.保留小数位**

保留小数位需要用到setprecision()函数，但是头文件并没有该函数，这里为了方便使用，可以用_万能头文件_

- setprecision( )函数保留的只是有效数字，如果需要保留小数，前面需要加_fixed_

```Cpp
float n = 1.34578F;
cout << fixed << setprecision(2) << n <<endl;  //指定输出2位小数
```

3️⃣编写C++程序💻：

```Cpp
#include <iostream>
using namespace std;
int main () {
    double  m, n, alls, as , bs , s ;
    cin >> m >> n;
    alls = m * m + n * n;
    as = m * (m + n) / 2;
    bs = n * n / 2;
    s = alls - as - bs;
    cout << "阴影面积为:" << s << endl;
    return 0;
}
```

```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
    float r;
    double C,S;
    cin >> r;
    C = 2*3.14*r;
    S = 3.14*r*r;
    cout << fixed << setprecision(2) << C << endl;
    cout << S << endl;
    return 0;
}
```
