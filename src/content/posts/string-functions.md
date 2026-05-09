
1️⃣ 知识目标🔦

- 回顾字符数组
- 学习字符串函数的应用
- 了解字符和字符串的区别

2️⃣知识总结✅：

**1、字符串**

- 在C++数据中，有字符串常量，但是没有字符串变量
- 对于字符串常量，是用双引号括起来的一连串符号，例如“abcde”、“well\n”都是字符串常量
- 需要注意的是在C++中，字符串常量后面都会附带一个“\0”的标记，也就是说字符串常量的存储长度会比看到的长度多个1
- 例如，对于字符串 “welcome to China!”，我们所看的字符（包括空格）个数是17，但它在内存中存储的长度会是18
- 在C++中，没有字符串变量，但是要处理字符串，可以采用字符数组或者string类来操作

**2、求字符串长度**

strlen（）函数可以求解字符串的长度

```Cpp
strlen(str)                      //str为字符串或者字符数组名
```

**3、字符串复制函数**

```Cpp
strcpy(str1,str2)
```

> 将字符串或者字符数组str2复制到字符数组str1中去。复制的时候str2中的“\0”也会一起复制过去，同时要求str1的长度要足够

**4、字符串连接函数**

```Cpp
strcat(str1,str2)
```

> 将字符串或者字符数组str2中的可见字符内容连接到字符数组str1中去，遇到“\0”会停下。连接的时候str1末尾的‘\0’被str2中的第一个字符取代，同时要求str1的长度要足够。str2本身不会发生变化

**5、字符串比较函数**

```Cpp
strcmp(str1,str2)
```

> 从左往右逐个比较两个字符串str1和str2的ASCII码，直到出现不同字符或者遇到“\0”为止。如果两个字符串相等，则返回0；如果str1大于str2，则返回正整数；如果str1小于str2，则返回负整数

3️⃣c++程序

【题目名称】回文

【题目描述】所谓回文，是指从左往右和从右往左读是一样的，比如“上海自来水来自海上”。现在输入一串字符串，请判断它是否是回文

【输入】一行一个字符串，字符串长度不超过255

【输出】如果是回文，请输出“yes”，如果不是回文，请输出“no”

```Cpp
#include<bits/stdc++.h>
using namespace  std;
int main(){
    char c[256] = " ";
    bool b = true;
    gets(c);
    int len = strlen(c);
    for(int i=0;i<len/2;i++){
        if(c[i]!=c[len-1-i]){
            b = false;
            break;
        }
    }
    if(b==true){
        cout << "yes";
    }else{
        cout << "no";
    }
    return 0;
}
```

【题目名称】比大小

【题目描述】输入两个正整数，输出其中大的那个正整数的值

【输入】两行，每行一个正整数，每个正整数长度在10~1000之间

【输出】输出其中打的那个正整数，如果相等，输出其中任意一个即可

```Cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
    char s1[1005]=" ",s2[1005]=" ";
    gets(s1);
    gets(s2);
    int len1=strlen(s1);
    int len2=strlen(s2);
    if(len1>len2)
        cout<<s1<<endl;
    else if(len1<len2)
        cout<<s2<<endl;
    else
        {
            if(strcmp(s1,s2)>0)
                cout<<s1<<endl;
            else
                cout<<s2<<endl;
        }
    return 0;
}
```
