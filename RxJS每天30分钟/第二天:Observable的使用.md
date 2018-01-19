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

## 完整的demo
[第二天](https://github.com/pallyoung/rxjs-training/tree/master/code/day2)

