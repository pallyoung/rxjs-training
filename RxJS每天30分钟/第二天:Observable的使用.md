# Observable的使用

## 前言

上一篇文章我们知道，RxJS有一个最基本的元素：Observable。Observable作为可观察对象，用来给订阅这个具体Observable的观察者（Observer）发送通知。今天我们来看下Observable具体的一些使用。

## 创建 Observables
我们除了可以用Rx.Observable.create来创建Observables之外，还可以用of、from、interval等一系列封装好的创建操作符来快速创建。

```
//使用create方法创建
Rx.Observable.create(
    (observer) => {
        observer.next('1')
    }
).subscribe(
    (v) => console.log(v)
);

//使用of方法创建
//传入一到多个值
Rx.Observable.of('1', '2', '3').
subscribe(
    (v) => console.log('of:' + v)
);
//使用from方法创建
//传入一个数组
Rx.Observable.from(['1', '2', '3']).
subscribe(
    (v) => console.log('from:' + v)
);
//使用interval方法创建
//传入具体要发送通知的时间间隔
Rx.Observable.interval(1000).
    subscribe(
    (v) => console.log('interval:' + v)
);

```
## Observables的简单应用场景
假设你现在要向服务端发出三个请求（我们暂时不要纠结为什么要发出三个请求，这里的三个请求可以指代任何的三次异步操作。
），这三个请求数据拿到之后我们才能继续下一步操作，正常情况下我们会这样写：
```
var count = 0;
$.post('/api1',()=>{
    count++;
    if(count===3){
        console.log('complete';)
    }
})
$.post('/api2',()=>{
    count++;
    if(count===3){
        console.log('complete';)
    }
})
$.post('/api3',()=>{
    count++;
    if(count===3){
        console.log('complete';)
    }
})
```
我们每次都需要手动去检查请求有没有完成。
如果我们RxJS来做的话，事情将会简单很多。
```
Rx.Observable.create((obsever)=>{
    let i = 0;
    $.post('/api1',()=>{
        obsever.next(i++);
    })
    $.post('/api2',()=>{
        obsever.next(i++);
    })
    $.post('/api3',()=>{
        obsever.next(i++);
    })
}).subcribe((v)=>{
    if(v===3){
        console.log('请求全部发送成功')
    }
})
```
从代码上看，RxJS并没有多少优势，这里只是展示了RxJS一个最主要是应用场景：处理异步事件。
如果你的项目中有大量的异步事件或者串行的业务场景，并且觉得现有的设计模式用起来比较困难，你获取可以考虑用RxJS去优化你的代码。
## 完整的demo
[第二天](https://github.com/pallyoung/rxjs-training/tree/master/code/day2)

