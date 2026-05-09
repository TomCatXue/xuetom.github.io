
1️⃣ 知识目标🔦

- 回顾数据类型
- 学习分支语句if和关系运算符
- 了解逻辑运算符

2️⃣知识总结✅：

**1、关系运算符（比较运算符)**

|     |      |     |      |     |     |
| --- | ---- | --- | ---- | --- | --- |
| <   | <=   | >   | >=   | ==  | !=  |
| 小于  | 小于等于 | 大于  | 大于等于 | 等于  | 不等于 |

> 例如3>2,表示的结果类型为bool布尔值，为true(1),否则为false(0)

**2、分支语句**

- if语句

```Cpp
if(明天是晴天){   // 明天去爬山是判断条件
        爬山去；       // 大括号里面是条件为真要做的事；
}
```

条件为真，则执行语句，否则不执行

例题：编程实现输入一个正整数，判断其奇偶性，并输出；

```Cpp
#include <iostream>
using namespace std;
int main(){
    int num;
    cin >> num;
    if(num%2 == 0){    //num除以2等于0表示没有余数，确定为偶数
        cout << num << "为偶数" << endl;
     }
    if(num%2 != 0){
        cout << num << "为奇数" << endl;
     }
     return 0;
}
```

- if…..else语句

```Cpp
if(条件){
  条件为真时执行；
}else{
  条件为假时执行；
}
```

例题：编程实现输入一个正整数，判断其奇偶性，并输出；

```Cpp
#include <iostream>
using namespace std;
int main(){
    int num;
    cin >> num;
    if(num%2 == 0){     //简化程序，语句意思变为如果....否则....
         cout  << num << "为偶数" << endl;
    }else{
         cout << num << "为奇数" << endl;
    }
      return 0;
}
```

- if…else if…else…语句

```Cpp
if(条件1){
  条件1为真时执行；
}else if(条件2){
  条件2为真时执行；
}else{
  两个条件或多个条件都不成立时执行；
}
```

例题：

[![](https://tc-cdn.flowus.cn/oss/6e870556-6532-4ee0-bc4f-e083fba0cf4e/image.png?time=1739949300&token=263830cf64a384209aa1fcad7431b77848bad484a6b95859e4b26c0f0fd86429&role=free)](https://tc-cdn.flowus.cn/oss/6e870556-6532-4ee0-bc4f-e083fba0cf4e/image.png?time=1739949300&token=263830cf64a384209aa1fcad7431b77848bad484a6b95859e4b26c0f0fd86429&role=free)

```Cpp
#include <iostream>
using namespace std;
int main(){
    int score;      //定义变量成绩
    cin >> score;
    if(score >= 90){
        cout << "等级A" << endl;
     }
    else if(score >= 80){
        cout << "等级B" << endl;
     }
    else if(score >= 70){
        cout << "等级C" << endl;
    }
    else if(score >= 60){
           cout << "等级D" << endl;
        }
    else{
           cout << "不及格" <<endl;
        }
    return 0;
}
```
