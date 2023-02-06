// Singleton是一个构造函数
var Singleton = function (name) {
  this.name = name;
};

// 实例
Singleton.instance = null;

// 给原型添加一个getName 方法
Singleton.prototype.getName = function () {
  alert(this.name);
};

// 获取唯一实例对象
Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

var a = Singleton.getInstance("sven1");
var b = Singleton.getInstance("sven2");

alert(a === b); // true
