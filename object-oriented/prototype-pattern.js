//理解名词：对象 原型对象 原型属性 函数 构造函数  实例 

/*
对象： Object,创建对象，对象属性方法
原型对象：每个javascript函数都有prototype属性，构造函数也有自己的属性和方法，也是一个对象，它的prototype属性总是指向另一个对象，
		一般称为prototype对象，即“原型对象”。
原型属性:（prototype,是一个指针，指向一个对象）Person.prototype.name = "shan"
实例： var person1 = new Person();*/

/***************************
三、原型模式--利用prototype（原型）属性
****************************/
function Person(){

}
Person.prototype.name = "shan";
Person.prototype.age = 24;
Person.prototype.job = "software Engineer";
Person.prototype.sayName = function(){
	alert(this.name);
}

var person1 = new Person();
person1.sayName();
var person2 = new Person(); 
person2.sayName();

alert(person1.sayName() == person2.sayName());  //shan shan shan shan true
alert(person1.sayName == person2.sayName);   //shan shan true

/**
函数调用加括号和不加括号区别：

加括号的将会执行函数体代码。
不加括号的，把函数名称作为函数的指针，用于传参，它只是传递了函数体所在的地址位置，
在需要的时候好找到函数体去执行。**/


/*所有对象都有自己的prototype原型对象？
JavaScript的所有对象都有构造函数，而所有构造函数都有prototype属性（其实是所有函数都有prototype属性），
所以所有对象都有自己的prototype原型对象。
*/

//原型对象动态性
function Person(){

}
var friend = new Person();
Person.prototype = {
	constructor: Person,
	name: "shan",
	age : 24,
	job : "software Engineer"
	sayName : function(){
		alert(this.name);
	}
}

friend.sayName();  //error,friend指向最初的原型，原型中不包含此方法
//注： Person.prototype以字面量形式创建新对象时constructor属性不再指向Person，
//原型对象存在的问题


