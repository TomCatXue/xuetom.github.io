
# 一、基本思想
> 为了求得问题的解，先选择某一种可能情况向前探索，在探索过程中，一旦发现原来的选择错误，就退回一步重新选择，继续向前探索，如此反复进行，直至得到解或证明无解。


![[Pasted image 20250224145239.png]]
# 二、算法框架
**框架1:**
```Cpp
int search(int k){
	for(int i=1;i<=算符种数;i++)
	 if(满足条件){
		 保存结果；
		 if(到达目的地)  输出解；
		 else search(k+1);
		 恢复：保存结果之前的状态(回溯一步)
	 }
}
```
**框架2：**
```cpp
int search(int k){
	if(到目的地) 输出解;
		else
			for(i=1;i<=算符种数;i++)
				if(满足条件){
					保存结果；
					search(k+1);
					恢复:保存结果之前的状态（回溯一步）
				}
}
```
# 三、模板题
>素数环问题：从1~n（2<=n<=10）这n个数，摆成一个环，要求相邻的两个数的和是素数，按照由小到大请输出所有可能的摆放形式。

例1：
```cpp
#include<bits/stdc++.h>
using namespace std;
int n,sum,a[100005];
bool used[100005];
bool isprime(int t){   //判断素数
	if(t == 1){
		return false;
	}
	for(int i = 2;i <= sqrt(t);i++){
		if(t % i == 0){
			return false;
		}
	}
	return true;
}
void dfs(int cur){      //回溯算法
	if(cur == n + 1){
		bool flag = true;
		for(int i = 2;i <= n;i++){
			int num = a[i] + a[i - 1];
			if(!isprime(num)){
				flag = false;
			}
		}
		if(flag && isprime(a[n] + a[1])){
			sum++;
			cout << sum << ":";
			for(int i = 1;i <= n;i++){
				cout << a[i] << " ";
			}
			cout << endl;
		}
		return;
	}
	for(int i = 1;i <= n;i++){
		if(used[i] == false){
			used[i] = true;
			a[cur] = i;
			dfs(cur + 1);
			used[i] = false;
		}
	} 
}
int main(){
	cin >> n;
	dfs(1);
	cout << "total:" << sum;
	return 0;
}
```
