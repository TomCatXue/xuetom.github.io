
1️⃣ 知识目标🔦

- 回顾String类的使用
- 学习高精度数的含义
- 掌握如何利用高精度进行加减法

2️⃣知识总结✅：

**1、高精度数定义**

什么是高精度数，在我们之前学习数据类型时，无论是int类型还是long long类型，都有数据范围，那如果超过这个范围呢，那我们就把超过数据范围的数称之为**高精度数。**

高精度数需要用数组来进行保存，而只需要一个变量就可以存储的我们称之为单精度数。

**2、高精度数的输入和输出**

由于高精度数需要用数组来进行存储，所以输入和输出都和数组基本一致。

（1）先用字符数组存储输入的高精度数

```Cpp
char s[1000]=“”;
cin>>s;
```

（2）将字符数组转换成对应的整数数组，存储这个高精度数

```Cpp
int len,num[1000]={0};
len=strlen(s);
for(i=0;i<len;i++)
  num[i]=s[len-1-i]-'0';
```

（3）对于高精度数的输出就简单的多，反向输出即可

```C++
for(i=len-1;i>=0;i--)
    cout<<num[i];
```

**3、高精度加法**

```Cpp
#include<bits/stdc++.h>
using namespace std;
string a,b;
int a1[1000001]={},a2[1000001]={},sum[1000001]={};
int main(){
    cin >> a>> b;
    for(int i=0;i<a.size();i++){      //转变成整数数组
        a1[i] = a[a.size()-1-i]-'0';
    }
    for(int i=0;i<b.size();i++){
        a2[i] = b[b.size()-1-i]-'0';
    }
    int len = a.size();
    if(a.size()<b.size()){
        len = b.size();
    }
    for(int i=0;i<len;i++){
        sum[i] = a1[i]+a2[i];   //相对位置相加
    }
    for(int i=0;i<len;i++){
        sum[i+1]= sum[i+1]+sum[i]/10;   //处理进位
        sum[i] = sum[i]%10;

    }
    while (sum[len] == 0 && len > 0) {
        len--;                   //去前导0
    }
    for(int i=len;i>=0;i--){
        cout << sum[i];           //倒叙输出
    }

    return 0;
}
```

**4、高精度减法**

```Cpp
#include<bits/stdc++.h>
using namespace std;
string a,b;
int a1[1000001]={},b1[1000001]={},sum[1000001]={};
string qdl(string c)    //去除前导0，导致位数很大
{
    string r;
    int len=c.size();
    int i=0;
    while(c[i]=='0' && i<len-1)
    {
        i++;
    }
    for(int k=i;k<len;k++)
    {
        r.push_back(c[k]);
    }
    return r;
}
int main(){
    cin >> a >>b;
    a = qdl(a);
    b = qdl(b);
    if(a.size()<b.size() || a.size() == b.size() &&a<b){
        swap(a,b);
        cout << "-";                   //比较大小，确定符号
    }
    for(int i=0;i<a.size();i++){
         a1[i] = a[a.size()-1-i]-'0';
    }
    for(int i=0;i<b.size();i++){
         b1[i] = b[b.size()-1-i]-'0';  //字符串类转变整数数组
    }
    int len = a.size();
    for(int i=0;i<len;i++){
        if(a1[i]<b1[i]){               //确定大小，处理进位
            a1[i] +=10;
            a1[i+1]--;
        }
        sum[i]= a1[i]-b1[i];
    }
    while(sum[len]==0 && len>0){
        len--;                  //去前导0
    }
    for(int i=len;i>=0;i--){
        cout << sum[i];     //倒序输出
    }
    return 0;
}
```
