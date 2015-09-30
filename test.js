/*function callback(array,fn){
    if(typeof fn==="function"){
        fn();
        return true;
    }
}

console.log(callback(arr,function(){
    console.log("done");
}));*/

/*var basketModule = (function () {
	var basket = []; //private
	function doSomethingPrivate() {
	    console.log("Success");
	}
	function doSomethingElsePrivate() {
	    //...
	}
	return { //exposed to public
		addItem: function (values) {
			basket.push(values);
		},
		getItemCount: function () {
			return basket.length;
		},
		doSomething: doSomethingPrivate(),
		getTotal: function () {
			var q = this.getItemCount(),
			p = 0;
			while (q--) {
			    p += basket[q].price;
			}
			return p;
		}
	}
}());

basketModule.addItem({
	item: 'bread',
	price: 0.5
});
basketModule.addItem({
	item: 'butter',
	price: 0.3
});*/
//console.log(basketModule.getItemCount());
//console.log(basketModule.getTotal());
/*var n = Number.MAX_VALUE.toString();
var parts = n.split("e+");
console.log(parts);
var first = parts[0].replace('.', "");
console.log(first);
console.log(parseInt(parts[1], 10));
var zeroes = parseInt(parts[1], 10) - (first.length - 1);
for(var i = 0; i < zeroes; i++){ 
	first += "0";
}*/
//console.log(first);
//console.log(typeof true);
//console.log(binary);
//console.log(s.spaceReplacement(binary,"",true));
//for(var i=0;i<binary.length,i++){

//}
//console.log(binary.indexOf("."));
/*var newBin= binary.split(".");
var bin=newBin[0],bin2=newBin[1];
//console.log(bin+"."+bin2);
binArr=[],binArr2=[];
/*parts = bin2.split("e+"),
first = parts[0].replace('.', ""),
zeroes = parseInt(parts[1], 10) - (first.length - 1);
for(var i = 0; i < zeroes; i++){ 
	first += "0";
}
//console.log(bin2);
//console.log(first);
for(var i=0;i<bin.length;i++){
	if(bin[i]==="0"||bin[i]==="1"){
		binArr.push(bin[i]);
	}
	else{
		continue;
	}
}*/

/*rvrsBinArr= binArr.reverse();
for(var i=0;i<rvrsBinArr.length;i++){
	rvrsBinArr[i]=Number(rvrsBinArr[i]);
}*/
//console.log(rvrsBinArr);
/*sum=0;
for(var i=0;i<rvrsBinArr.length;i++){
	sum+=rvrsBinArr[i]*Math.pow(2,i);
}*/
//console.log(sum);
///////
/*for(var i=0;i<bin2.length;i++){
	if(bin2[i]==="0"||bin2[i]==="1"){
		binArr2.push(bin2[i]);
	}
	else{
		continue;
	}
}*/

/*rvrsBinArr2= binArr2;
for(var i=0;i<rvrsBinArr2.length;i++){
	rvrsBinArr2[i]=Number(rvrsBinArr2[i]);
}
//console.log(rvrsBinArr2);
var sum2=0;
for(var i=0;i<rvrsBinArr2.length;i++){
	sum2+=rvrsBinArr2[i]*Math.pow(2,-(i+1));
}
//console.log(sum2);
//console.log(sum+sum2);*/

/*var num=115.999,
n= parseInt(num);
difference=(num-n).toFixed(15),
resultStore=[];
console.log(difference);
while(n>0){
	var remainder=parseInt(n)%2;
	n=parseInt(n/2);
	resultStore.push(remainder);
}

var result="";
for(var i=0;i<resultStore.reverse().length;i++){
	result+=resultStore[i];
} 

if(difference==0){
    console.log(result);
}

else{
	var fractionArr=[],count=0,fracStr="";
	while(1){
		difference= difference*2;
		fractionArr.push(parseInt(difference));
	    difference=difference-parseInt(difference);
		count++;
		if((difference===parseInt(difference))||count>10){
		    //console.log(fractionArr);
		    for(var i=0;i<fractionArr.length;i++){
		    	fracStr+=fractionArr[i].toString();
		    }
		    if(result===0){
		        console.log(fracStr);
		    }
		    else{
		    	console.log(result+"."+fracStr);
		    }
		    break;
		}
	}
}*/
/*function first(word) {
    return word[0];
}
var words = ["for","your","information"];
var acronym = words.map(first);
console.log(acronym.join(""));*/

/*var grades= [  [89, 77, 78,100],
               [76, 82, 81,100],
               [91, 94, 89,100],
               [100, 100,100,100]
            ];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
	for (var col = 0; col < grades[row].length; ++col) {
	    total += grades[row][col];
	}
	average = total / grades[row].length;
	console.log("Student " + parseInt(row+1) + " average: " +
	average.toFixed(2));
	console.log(row);
	console.log(col);
	total = 0;
	average = 0.0;
}*/

/*function weekTemps() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}
function add(temp) {
	this.dataStore.push(temp);
}
function average() {
	var total = 0;
	for(var i = 0; i < this.dataStore.length; ++i) 
	{
	    total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());*/




