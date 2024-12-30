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
#### 成员变量or局部变量

成员变量声明在类中，不赋值默认有值

局部变量在方便体中，默认无值


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

### 面向对象
**以类的方式组织代码，以对象的组织封装数据**

面向过程：步骤清晰简单，逐步完成

面向对象：分类思想，对具体问题进行分类，适合解决复杂的问题

::: tip
对描述复杂事物宏观上的分析需要面向对象，微观操作需要面向过程去处理
:::

### 封装
**属性私有化**，主要指的是将数据（属性或字段）与操作这些数据的方法绑定在一起，并且尽可能地隐藏对象的内部实现细节，只暴露必要的接口给外部使用
```java:no-line-numbers
public class Person {
    // 私有字段
    private String name;

    // 公共构造函数
    public Person(String name, int age) {
        this.name = name;
    }

    // Getter 方法
    public String getName() {
        return name;
    }

    // Setter 方法
    public void setName(String name) {
        this.name = name;
    }
}
```
#### 权限修饰符
1. public 公开：同包同类不同包子类不同包的非子类使用
2. private 私有：同一个类使用
3. default 不写默认：同类同包使用
4. protected 受保护的：同类同包不同包子类使用
5. final 最终态：修饰成员方法、变量、类，被修饰的变量不能修改，必须初始化值，不能重写继承
6. static 静态：类直接访问，实例共享
7. abstract 抽象：抽象类方法，无法实现，只能继承
::: warning
私有方法不可被重写
:::

### 继承
1. 方法名必须相同
2. 参数列表必须相同
3. 修饰符：范围可以扩大但不能缩小 <Badge type="danger" text="public > protected > default > private" vertical="middle" />
4. 抛出的异常：范围，可以被缩小但不能扩大

::: tip
父类：也被称为基类、超类

子类：也被称为派生类
:::

### 多态
1. 有继承或者实现的关系
2. 方法的重写
3. 父类的引用指向我们的子类

::: tip
成员变量：编译看左边，执行看左边

成员方法：编译看左边，执行看右边
:::

一个方法根据发送对象的不同而采用多种不同的行为,一个对象的实际类型是确定的，但是可以指向对象的引用的类型有很多

### 抽象
1. 方法、类在前面加上abstract进行修饰
2. 一个抽象类中有多个抽象方法，抽象类中可以定义非抽象方法
3. 子类继承抽象类必须重写所有抽象方法，没有重写则此类也是抽象类，继承父类的抽象方法
4. 抽象类不能实例化，不能与private、final、static共存，因为子类无法重写

### 接口
接口定义的数据会默认public static final 进行修饰，jdk8可以定义非抽象方法 用default关键字修饰

#### 接口和抽象类的区别
类是继承关系，只能单继承。接口是实现，可以多实现，还可以继承一个类的同时实现多个接口，接口和接口可以多继承
::: tip
抽象类和接口可以通过匿名内部类new出实例，底层实现就是idea自动创建了一个名null的类继承或实现抽象类或接口
:::

### Lambda表达式
```java:no-line-numbers
Class instance = ()-> {}
```
方法引入、 方法参数列表、 返回类型和函数接口参数列表与返回类型必须保持一致

1.  静态方法： 类名::(静态)方法名称
2.  对象方法： 类名::实例方法名称
3.  实例方法： new对象 对象实例::方法引入
4.  构造函数： 类名::new


### Stream
执行程序的实例就叫做进程，线程是程序执行的最小单位，一个进程中可以有多个线程
- 并行：多线程
- 串行：单线程

#### 多线程CPU调度
程序会把前一个任务cpu上下文（也就是**cpu寄存器和程序计数器**）保持起来，然后加载新任务的上下文到这些寄存器和程序计数器，最后在跳转到程序计数器所指的新位置运行新任务，线程状态会从**就绪状态**切换到**运行状态**

程序计数器是用于存放下一条指令所在单元的

**同步和异步**
- 同步：就是代码从上向下执行

- 异步：单独分支执行，相互之间没有任何影响

### 反射和注解
- 反射（Reflection）:

反射是一种在运行时动态获取类信息以及操作对象的能力。通过反射，可以在程序执行期间检查或“自省”类、方法、字段等结构，并且能够调用这些成员，即使它们是私有的

- 注解（Annotations）

注解是Java 5引入的一种元数据形式，用来为程序元素（如类、方法、变量等）提供额外的信息。它们本身并不直接影响程序逻辑，但可以被其他工具或库读取并在特定时刻采取行动。

**SpringBoot or SpringCloud**
*  springClod 微服务解决框架，微服务技术解决方案
*  SpringCloud RPC远程调用接口 <Badge type="tip" text="Feign" vertical="middle" /> 客户端，接口协议采用HTTP协议
*  SpringCloud 依赖于Springboot默认情况下已经整合好SpringMVC

### Filter or Interceptor
*  接口规范不对，过滤器需要实现filter接口，而拦截器需要实现handleinterceptor接口
*  拦截范围不同：过滤器Filter会拦截所有资源，而interceptor 只会拦截spring环境中的资源

### 事务
开始事务(start transaction) - 提交事务(commit) - 回滚事务(rollback)
:::tip
**@Transactional(rollbackFor = Exception.class)** 可以是对类或者方法启动注解，Exception.class表示所有错误都回滚

**开启事务管理日志**: *logging: level: org.springframework.jdbc.support.jdbcTransactionManage: debug*
:::

### AOP
Aspect Oriented Programming(面向切片编程)

安装（spring-boot-starter-aop）依赖

**AOP核心概念**

1.  连接点： JoinPoint，可以被AOP控制的方法（暗含方法执行时的相关信息）
2.  通知：Advice，指哪些重复的逻辑，也就是共性功能（最终体现为一个方法）
3.  切入点：PointCut，匹配连接点的条件，通知仅会在切入点方法执行时被应用
4.  切面：Aspect，描述通知和切入点的对应关系（通知+切入点）
5.  目标对象：Target，通知所应用的对象

```java:no-line-numbers
@Component
@Aspect
public class TimeAspect {
	// execution(访问修饰符? 返回值 包名.类命.?方法名(方法参数) throws 异常?)
	@Around("execution(* com.pack.service.*.*(..))") //切入表达式
	public Object recordTime(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        try {
            long begin = System.currentTimeMillis();
            Object object = proceedingJoinPoint.proceed(); // 调用原始方法
            long end = System.currentTimeMillis();
            System.out.println("耗时：" + (end - begin));
            return object;
        } catch (Throwable e) {
            throw new RuntimeException(e);
        }
    }
}
```

### Bean
Bean的获取
```java:no-line-numbers title="Bean的获取"
@Autowired
private ApplicationContext applicationContext
DController bean1 = (DController) applicationContext.getBean("DController")
DController bean2 = applicationContext.getBean(DeptControl.class)
DController bean3 = applicationContext.getBean("DController", DeptControl.class)
```
声明第三方bean
```java:no-line-numbers title="Bean的获取"
@Configuration
public class CommonConfig {
	@Bean
	public SReader sReader() {
		return new SReader
	}
}
```

### Maven
**分模块设计**
1. 父子嵌套层级
parent-project

\-- module-a

\-- module-b

2. 父子同级
parent-project

module-a

module-b

---

依赖管理： \<dependencyManagement> 集中管理版本号

插件管理：\<pluginManagement> 统一配置插件

继承：\<parent> 需要继承的父组件

聚合：\<modules> 定义需要聚合的子模块，根目录运行会构建modules包含的所有子目录

通用配置：\<properties> 配置变量，方便对版本统一管理(==\${}==)

### Spring boot 项目搭建
在线搭建网址：<https://start.aliyun.com/>

安装依赖：
*  spring boot&#x20;
*  spring-boot-starter-web
*  MyBatis Framework
*  MySql Driver
*  Lombok

SSM框架 Spring SpringMvc mybatis xml方式配置
1. 去除xml配置
2. 全部采用注解化的方式配置
3. 内嵌入Tomcat
::: tip
默认情况下spring-boot-starter-wen已经整合完毕，底层封装Maven依赖实现
:::