# Java, springboot

## Java
javaSE：标准版(桌面开发，控制台开发)

javaME：嵌入式开发(手机，家电)

javaEE：E企业级开发(web端，服务器开发)

JDK：java development kit

JRE：java runtime environment

JVM：java virtual machine

### 数据类型
**基本类型(primitive type)**
1. 数值类型
  - 整数类型<br>
byte占一个字节范围： -128 —127<br>
short占两个字节范围：-32768 — 32767<br>
int占4个字节范围：-2147483648 — 2147483647<br>
long占8个字节范围<br>
  - 浮点类型(有限，离散，舍入误差， 避免使用浮点数比较)<br>
float占四个字节<br>
double占8个字节<br>
字符类型(char占两个字节)<br>

2. boolean类型(占一位只有true和flase)

**引用类型(reference type)**
- 类
- 接口
- 数组

#### 类型转换
byte, short, char -> int -> long -> float -> double<br>
- **强制转换** (类型)变量名 高-低
- **字段转换** 低到高

> 不能对布尔值进行转换<br>
> 不能把对象类型转换为不相干的类型<br>
> 在把高容量转换到低容量的时候强制转换<br>
> 转换的时候可能存在内存溢出或精度丢失<br>

### 变量
1.类变量  2.实例变量  3.局部变量
```java:no-line-numbers
public calss Variable {
 // 常量
 final static double PI = 3.13;
 // 变量
 static int allClick = 0; // 类变量
 String str = "hello" //实例变量
 public void method() {
  int 1 = 0; //局部变量
 }
}
```

### 运算符
```java:no-line-numbers
// 算数运算符：
+ - * / % ++ --
// 赋值运算符：
=
// 关系运算符：
> < >= <= == !=instanceof
// 逻辑运算符：
&& || ！
// 位运算符：
& | ^ ~ >> << >>>>
// 条件运算符：
？ ：
// 扩展赋值运算符：
+= -= *= /=
```
### 内存
堆(Heap)：存放new的对象实例和数组，线程共享，由GC进行内存回收管理，运行时动态分配

栈(Stack)：存放局部变量表、操作数栈、动态链接、方法出口等，每个线程都有自己的私有栈空间，基本数据类型和对象引用

方法区(Method Area)：线程共享，储存所有的class信息和static变量还有常量