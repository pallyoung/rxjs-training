# RxJs简单入门

## 前言
RxJS 是使用 Observables 的响应式编程的库，它使编写异步或基于回调的代码更容易。

## 一个简单的RxJS demo

我们先来看RxJS一个来自官方的一个demo,
```
var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
});
    
console.log('just before subscribe');
observable.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
});
console.log('just after subscribe');

```
上面的输出结果依次是：
```
just before subscribe
got value 1
got value 2
got value 3
just after subscribe
got value 4
done
```
## demo解析
在上面的demo中我们调用Rx.Observable.create来出生一个Observable，之后通过subscribe给这个Observable传递一个Observer，来观察Observable的变动。从表现形式上看，有点类似一个基于观察者模式的事件模型，即：产生一个事件发送模型，模型变动的时候发送事件给监听者，接着监听者响应。
与观察者模型不同的一点是，所有的事件在next被调用的时候被没有立即发送，而是等到有具体的Observer subscribe的时候才开始发送时间。现在我们先记住这一点，具体的再后面具体深入。
官方对于Observable的描述是：可观察对象。是构成RxJS的最基本的要素。而Observer是具体的数据消费者对象，用来接受具体的Observable发送的通知。
## 完整的demo
[第一天](https://github.com/pallyoung/rxjs-training/tree/master/code/day1)