'use strict'

var Rx = require('rxjs');

module.exports = function () {
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
}