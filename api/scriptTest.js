var str = "salut";

var j = eval('hello_'+str)();

function hello_salut (){
	return 'coucou';
}

console.log(j);