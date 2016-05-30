/*
问题：
1. 什么是构造函数？
2. 构造函数与普通函数区别是什么？
3. 使用new关键字时发生了什么？
4. 构造函数中有返回值怎么办？
5. 构造函数能当普通函数调用吗？
*/

/*###构造函数(“构造”为需要的样子)特征：
1. 函数体内部使用了this关键字，代表了所要生成的对象实例。
2. 生成对象的时候，必需用new命令
*/


/***************************
工厂模式(抽象了创建具体对象的过程)－－用函数来封装以特定接口创建对象细节
****************************/
function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = function(){
		alert(this.name);
	};
	return o;
}

var person1 = createPerson("shan", 22, "SoftWare Engineer");
var person2 = createPerson("fan", 23, "SoftWare Engineer");

alert(person1 instanceof Object); //true
alert(person2 instanceof Object); //true

/*
构造函数模式与工厂模式区别：
创建自定义构造函数，意味着可以将它的实例标识为一种特定类型，即胜过工厂模式的地方
*/



/****************************
构造函数模式－字面量创建对象
****************************/
var Person = function(name ,age, job){
	this.name = name;
	this.age = age;
	this.job = function(){
		alert(this.name);
	};
}

var person1 = new Person("shan", 22, "SoftWare Engineer");
var person2 = new Person("fan", 22, "SoftWare Engineer");


alert(person1 instanceof Object); //true
alert(person1 instanceof Person); //true
alert(person2 instanceof Object); //true
alert(person2 instanceof Person); //true
//person1,person2同时是Object实例，因所有对象均继承自Object

//构造函数当作普通函数使用
Person("shan", 22, "SoftWare Engineer");  //此时函数中this指向全局，即window。
window.job();    //"shan"
//在另一个对象的作用域中调用
var o = new Object();
Person.call(o,"shan", 22, "SoftWare Engineer");   //固定this方法：call,apply,bind
o.job();   //"shan"

/*
new过程时发生了什么？
1. 创建一个新对象
2. 将构造函数的作用域赋值给新对象
3. 执行构造函数的代码（即为新对象添加属性）
4. 返回新对象
*/




