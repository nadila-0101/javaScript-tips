for (var i = 0; i < 5; i++){
	setTimeout(function () {
		console.log(i);
	}, 5);
}

//setTimeout中的i是对外层i的引用。当setTimeout代码被解释的时候，运行时只记录了i引用，而不是值。
//而当setTimeout被触发时，五个setTimeOut中的i同事被取值，由于它们都指向了外层的同一个i，而那个i的值在迭代完成时为5，所以打印了5次


for(var i =0; i < 5; i++){
	(function (index) {
		setTimeout(function(){
			console.log(index);
		}, 5);
	})(i);
}