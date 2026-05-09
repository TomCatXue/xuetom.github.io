
1️⃣ 知识目标🔦

- 回顾while循环
- 学习for循环和循环嵌套
- 认识break和continue关键字

2️⃣知识总结✅：

**1、for循环**

![[Pasted image 20250226110956.png]]

```Cpp
#include <iostream>
using namespace std;
int main(){              //i<=100,是循环条件，表示到100结束
    for(int i = 1; i <= 100; i = i + 1){  //int i=1;是循环初始化，意思是从1开始
       cout << i << " ";
    }
    return 0;
}
```

**2、循环嵌套**

![[Pasted image 20250226111018.png]]
> 两层循环语句执行特点：外层循环做一次，内层循环需要把所有循环全做完才算一次

**3、break关键字**

break作用：**中断所在循环体，跳出本层循环，直接结束循环**

一般用在某个特定的值输出时，或者用来终止死循环

**4、continue关键字**

- continue作用：**跳出当前循环**，继续执行下一次循环
- 跳出本轮循环，继续下一次循环，并不接受。
- 例如：用来输出1-100以内所有的偶数时就可以用continue跳过奇数

3️⃣c++程序：

例题1：求n个数中第二大的数

```Cpp
#include <iostream>
using namespace std;
int main(){
    int n, a, max1 = -1, max2 = -1;
    cin >> n;
    for(int i = 1;i <= n; i++){
        cin >> a;
        if(a > max1){
            max2 = max1;
            max1 = a;
        }
        else if(a > max2){
            max2 = a;
        }
    }
    cout << max2 << endl;
    return 0;
}
```

例题2：输入一个整数，判断该数是否为质数，是输出”Y”,不是则输出”N”。

```Cpp
#include <iostream>
using namespace std;
int main(){
    int n, sum = 0;
    cin >> n;
    for(int i = 1;i <= n; i++){
        if(n%i == 0){
            sum++;
        }
    }
    if(sum == 2){
        cout << "Y";
    }
    else{
        cout << "N";
    }
    return 0;
}
```