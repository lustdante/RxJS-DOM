  var Observable = Rx.Observable,
    observableProto = Observable.prototype,
    AnonymousObservable = Rx.AnonymousObservable,
    observerCreate = Rx.Observer.create,
    disposableCreate = Rx.Disposable.create,
    CompositeDisposable = Rx.CompositeDisposable,
    SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
    AsynsSubject = Rx.AsynsSubject,
    Subject = Rx.Subject,
    Scheduler = Rx.Scheduler,
    defaultNow = (function () { return !!Date.now ? Date.now : function () { return +new Date; }; }()),
    dom = Rx.DOM = {},
    hasOwnProperty = {}.hasOwnProperty,
    noop = Rx.helpers.noop;
