# service.js
<h3>A Javascript Utility Library</h3>

<h4>How to use:</h4>

<p><b>1.</b> Add  service.js or service.min.js as script source to your file.</p>
<p><b>2.</b> Create an instance of the service object (e.g. var s = new service();).</p>
<p><b>3.</b> Now you can use any of the utility functions (e.g. s.typeCheck(arr,"object")).</p> 

<h3>List of functions:</h3>

<div>
  <b>1.typeCheck(id,type)</b>
  <p>This function checks the type of a variable and returns true/false based on the provided type parameter.</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> id: The variable.
  <p><b>2.</b> type: type of the variable to check.</p>
  
  <b>Example:</b>
  <div></div>
  <code>
    var arr =[12,2,3,4,11,2,3,3.2];
    <div></div>
    console.log(s.typeCheck(arr,"object")); //returns true
  </code>
  <div></div>
  <code>
    var x= 5;
    <div></div>
    console.log(s.typeCheck(x,"string")); //returns false because x is a number
  </code>
</div>

<p></p>
<div>
  <b>2.elementTypeCheck(array,type)</b>
  <p>This function checks the types of array elements and returns true/false based on the provided type parameter.</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> array: This must be an array.
  <p><b>2.</b> type: type of the array elements to check.</p>
  
  <b>Example:</b>
  <div></div>
  <code>
    var arr =[12,2,3,4,11,2,3,3.2];
    <div></div>
    console.log(s.elementypeCheck(arr,"number")); //returns true because all elements of the <cite>arr</cite> array are           numbers
  </code>
  <div></div>
  <code>
    var arr =[12,2,3,4,11,2,3,3.2,'x'];
    <div></div>
    console.log(s.elementypeCheck(arr,"number")); //returns false because all elements of the <cite>arr</cite> array aren't           numbers
  </code>
</div>

<p></p>
<div>
  <b>3.arraySort(array,order)</b>
  <p>This function sorts an array based on the array element type number or string as javascript handles sorting differently for string and numbers.</p>
  <b>Parameter(s):</b>
  <div></div> 
  <b>1.</b> array: This must be an array.
  <p><b>2.</b> order: This parameter is optional. It can be null, "ascending" or "descending"</p>
  
  <b>Example:</b>
  <div></div>
  <code>
    var arr =[12,2,3,4,11,2,3,3.2];
    <div></div>
    console.log(s.arraySort(arr)); //returns 2,2,3,3,3.2,4,11,12
  </code>
  <div></div>
  <code>
    var arr =[12,2,3,4,11,2,3,3.2];
    <div></div>
    console.log(s.arraySort(arr,"descending")); //returns 12,11,4,3.2,3,3,2,2
  </code>
  <div></div>
  <code>
    var stringArr = ["Dhaka","Rajshahi","Sylhet","Khulna","Comilla","Barishal","Rangpur"];
    <div></div>
    console.log(s.arraySort(stringArr,"ascending")); //returns  
    "Barishal","Comilla","Dhaka","Khulna","Rajshahi","Rangpur","Sylhet"
  </code>
</div>

<p></p>
<div>
  <b>4.sciNotation(number,display)</b>
  <p>This function represents number in scientific form</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> number: it must be number, int or float.
  <p><b>2.</b> display: id of the dom element where you want to display the number</p>
  
  <b>Example:</b>
  <div></div>
  <code>
    var num= 50000;
    <div></div>
    s.sciNotation(num,'id of the element where you want to display the number');   //formats num as 5 &#215 10<sup>4</sup>     
  </code>
</div>

<p></p>
<div>
  <b>5.processArray(array,sign)</b>
  <p>This function process array elements according to sign</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> array: It must be an array.
  <p><b>2.</b>Sign: It can be '+','-','*' or '/'</p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr= [5,1,3,2];
    <div></div>
    console.log(s.processArray(arr,"+")); //returns 11
    <div></div>
    console.log(s.processArray(arr,"-")); //returns -1 
    <div></div>
    console.log(s.processArray(arr,"*")); //returns 30
    <div></div>
    console.log(s.processArray(arr,"/")); //returns 0.83333333    
  </code>
</div>

<p></p>
<div>
  <b>6.average(array) </b>
  <p>This function returns the average of numbers from an array.</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> array: It must be an array.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr= [25,35,30,10];
    <div></div>
    console.log(s.average(arr)); //returns 25
  </code>
</div>

<p></p>
<div>
  <b>7..binarySearch(array,target) </b>
  <p>This function sorts and then implement binary search algorithm on the array.</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> array: It must be an array.
  <div></div>
  <b>2.</b> target: The particular element you want to search.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr= [25,35,30,10,56,32,13];
    <div></div>
    console.log(s.binary(arr,25)); //returns 2 because after sorting 25 locates at index 2 of the array.
  </code>
</div>


<p></p>
<div>
  <b>8.mergeSort(arr,arr2) </b>
  <p>This function merges and sorts two arrays containing same type of elements.</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> arr: This must be an array.
  <div></div>
  <b>2.</b> arr2: This must be an array.
  <div></div>
  <small><em>N.B. </em>arr and arr2 have to contain same types of elements.</small>
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr= [25,35,30,10,56,32,13];
    <div></div>
    var arr2= [10,20,30,40,50];
    <div></div>
    console.log(s.mergeSort(arr,arr2)); //returns 10,10,13,20,25,30,30,32,35,40,50,56
  </code>
</div>

<p></p>
<div>
  <b>9.elementCount(array,element) </b>
  <p>This function returns the number of a particular element in an array.</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> array: This must be an array.
  <div></div>
  <b>2.</b>element: the particular element you want to count.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr= [25,35,30,10,56,32,13,30];
    <div></div>
    console.log(s.countElement(arr,30)); //returns 2
  </code>
</div>

<p></p>
<div>
  <b>10.charCount(string) </b>
  <p>This function returns the number of characters(without whitespaces) in a string.</p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> string: This must be a string.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var str="A s B  ";
    <div></div>
    console.log(s.charCount(string)); //returns 3
  </code>
</div>

<p></p>
<div>
  <b>11.counter()</b>
  <p>General counter function closure.</p>
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    document.getElementById(id).onclick = function() 
    <div></div>
    {
    <div></div>
      var inc =s.counter();
      <div></div>
      console.log(inc);
      <div></div>
    };  
    <div></div>
    //inc will increase everytime you click on the element
    
  </code>
</div>

<p></p>
<div>
  <b>12.nodeCheck(node)</b>
  <p>This function checks if a dom element with a particular id exists in the dom.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> node: id of the element.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.nodeCheck("div4")) <div></div>
    //It will print true in console if any element with id "div4" exists in the DOM.
    Otherwise it will print false.
  </code>
</div>

<p></p>
<div>
  <b>13.sameHeight(element 01,element 02,..,element N) </b>
  <p>This function sets equal height for every dom element provided as parameter</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  You can give as many parameters you want.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    s.sameHeight("div1","div2","div3","div4"); 
    <div></div>
    //sets equal height for all these four elements with id "div1","div2","div3",
    "div4" respectively.
  </code>
</div>

<p></p>
<div>
  <b>14.spaceReplace(string,replacement,trim) </b>
  <p>This function replaces space with another string or character.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b> string: This must be a string.
  <div></div>
  <b>2.</b> replacement: Replcement string/char of whitespace.
  <div></div>
  <b>2.</b> trim: Optional parameter. You can set it either true or false. If you set true, the stringed will be trimmed. 
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.spaceReplace("Hello dear! Good morning.","*",true));
    <div></div>
    //returns Hello*dear!*Good*morning.
  </code>
</div>

<p></p>
<div>
  <b>15.strToNumArray(array)</b>
  <p>This function converts stringed numbers to numbers in an array.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>array: This must be an array. 
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var letters=["1","56","17","7","x",66,".","23.64","-.002"];
    <div></div>
    console.log(s.strToNumArray(letters));
    <div></div>
    //returns 1,56,17,7,66,23,64,-.002
  </code>
</div>

<p></p>
<div>
  <b>16.processNum(id) </b>
  <p>This function processes string to extract multiple numbers from a single input.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>id: id of the input box. 
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var x= s.processNum("process");
    <div></div>
    console.log(x); <div></div>
    //process the value from the input box with id "process" and returns the array of numbers
  </code>
</div>

<p></p>
<div>
  <b>17.hideElement(element 01,element 02,...,element N,deviceCategory)   </b>
  <p>This function hides elements according to device size.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>You can give as many element id as parameter. 
  <div></div>
  <b>2.</b>deviceCategory: It can be "large","medium",""small" or "mobile".
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    s.hideElement("div1","div2","div3","div4","Large");<div></div>
    // hides those elements with id "div1","div2","div3" and "div4" in large devices.
  </code>
</div>

<p></p>
<div>
  <b>18.charLimit(str,limit)</b>
  <p>This function checks if a string has crossed the character limit or not without whitespaces.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>str: This must be a string.
  <div></div>
  <b>2.</b>limit: An integer indicating character limit.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var string = "I love birds!";
    <div></div>
    console.log(s.charLimit(string,11)); //returns true because without whitespaces length of string is 11
    <p></p>
    var string = "I love birds!";
    <div></div>
    console.log(s.charLimit(string,10)); <div></div>
    //returns false because without whitespaces length of string is 11 which exceeds the limit 10
  </code>
</div>

<p></p>
<div>
  <b>19.swapNum(num1,num2)</b>
  <p>This function swaps two number values.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  num1 and num2 must be a number.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.swapNum(10,3).minimum); ///returns 3
    <div></div>
    console.log(s.swapNum(3,10).maximum); ///returns 10
  </code>
</div>

<p></p>
<div>
  <b>20.random(min,max)</b>
  <p>This function returns a random integer between a range.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>min: Int, min value of the range.
  <div></div>
  <b>2.</b>max: Int, max value of the range.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.random(-50,50)) //this will return a random int between -50(inclusive) and 50(exclusive)
  </code>
</div>

<p></p>
<div>
  <b>21.randomElement(array)</b>
  <p>This function returns a random element from an array.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>array: This must be an array
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr= [25,35,30,10,56,32,13];
    <div></div>
    console.log(s.randomElement(arr)); //returns a random element from arr array
  </code>
</div>

<p></p>
<div>
  <b>22.numArrayModifier(array,min,max)</b>
  <p>This function modifies an array containing number values according to set min,max values and returns the modified 
  array.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>array: This must be an array.
  <div></div>
  <b>2.</b>min: minimum value of the new array.
  <div></div>
  <b>2.</b>max: maximum value of the new array.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr= [5,1,3,2,16,8,7,32];
    <div></div>
    console.log(s.numArrayModifier(arr,5,20)); //returns 5,16,8,7
  </code>
</div>

<p></p>
<div>
  <b>23.isInt(num)</b>
  <p>This function checks if a number is int or not.
  array.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>num: This must be a number.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var num= 50.87;
    <div></div>
    console.log(s.isInt(num)); //returns false because num isn't an int. If num was an int it would return true
  </code>
</div>

<p></p>
<div>
  <b>24.isIntArray(array)</b>
  <p>This function checks if an number array contains only int or not.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>array: This must be an array containing number elements.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr =[12,2,3,4,11,2,3,3.2];
    <div></div>
    console.log(s.isIntArray(arr)); //returns false because all the elements of the array ain't int.
  </code>
</div>

<p></p>
<div>
  <b>25.isFloat(num)</b>
  <p>This function checks if a number is float or not.
  array.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>num: This must be a number.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var num= 50.87;
    <div></div>
    console.log(s.isFloat(num)); //returns true because num is a float.
  </code>
</div>

<p></p>
<div>
  <b>26.isFloatArray(array)</b>
  <p>This function checks if an number array contains only float or not.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>array: This must be an array containing number elements.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr =[12.56,2,3.1,4,11,2,3,3.2];
    <div></div>
    console.log(s.isIntArray(arr)); //returns false because all the elements of the array ain't float.
  </code>
</div>

<p></p>
<div>
  <b>27.countChar(string,ch)</b>
  <p>This function counts the occurance of a character in a string.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>string: This must be a string.
  <div></div>
  <b>2.</b>ch: This must be a character.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
   console.log(s.countChar("She's my little rock and roll","t")); //returns 2 as there're two t's in the string. 
  </code>
</div>

<p></p>
<div>
  <b>28.sciToNormal(num)</b>
  <p>This function converts a number in exponential notation to normal notation..</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>num: This must be a number.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.sciToNormal(5e+4)); // returns 50000 
  </code>
</div>

<p></p>
<div>
  <b>29.binToDec(string)</b>
  <p>This function converts binary string to decimal number(including floating point)</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>string: This must be a binary string.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var binary="10000000000000000000000000000000000000.101";
    <div></div>
    console.log(s.binToDec(binary)); //returns 137438953472.625
  </code>
</div>

<p></p>
<div>
  <b>30.decToBin(num)</b>
  <p>This function converts decimal numbers to binary string(including floating point)</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>num: This must be a decimal number.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.decToBin(500.625)); //returns 111110100.101 (string)
  </code>
</div>

<p></p>
<div>
  <b>31.arrayContains(array,element)</b>
  <p>This function checks if an element is present in array</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>array: This must be an array.
  <div></div>
  <b>2.</b>element: The array element to be checked.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr =[12,2,3,4,11,2,3,3.2];
    <div></div>
    console.log(s.arrayContains(arr2,22)); //returns false
  </code>
</div>

<p></p>
<div>
  <b>32.uniqueElements(array)</b>
  <p>This function returns the unique element from an array.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>array: This must be an array.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var stringArr=['x','abc','x','abc','h','H'];
    <div></div>
    console.log(s.uniqueElements(stringArr)); //returns 'x','abc','h','H'
  </code>
</div>

<p></p>
<div>
  <b>33.strUniqueChar(string)</b>
  <p>This function returns the unique characters from a string.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>string: This must be a string.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var str= "Hello world!";
    <div></div>
    console.log(s.strUniqueChar(str)); //returns "H", "e", "l", "o", " ", "w", "r", "d", "!"
  </code>
</div>

<p></p>
<div>
  <b>34.factorial(num)</b>
  <p>This function returns the factorial of a number.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>num: This must be a number.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.factorial(5)); //returns 120
  </code>
</div>

<p></p>
<div>
  <b>35.permutaion(n,r)</b>
  <p>This function performs permutaion operation.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>n: This must be a number.
  <div></div>
  <b>2.</b>r: This must be a number and less then n.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.permutation(10,5)); //returns 30240
  </code>
</div>

<p></p>
<div>
  <b>36.combination(n,r)</b>
  <p>This function performs combination operation.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>n: This must be a number.
  <div></div>
  <b>2.</b>r: This must be a number and less then n.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    console.log(s.combination(10,5)); //returns 252
  </code>
</div>

<p></p>
<div>
  <b>37.arrayCopy(arr,arr2)</b>
  <p>This function copies the elements of one array to another array.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>arr: This must be an array.
  <div></div>
  <b>2.</b>arr2: This must be another array.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr=[5,1,3,2,16,8,7,32],copyArr=[];
    <div></div>
    //s.arrayCopy(arr,copyArr);
    <div></div>
    //console.log(copyArr);  //prints 5,1,3,2,16,8,7,32 in the console
  </code>
</div>

<p></p>
<div>
  <b>38.zeroToLastIndex(arr)</b>
  <p>This function moves the element in zeroth index of an array to the last index.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>arr: This must be an array.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var arr= [1,2,3,4,5];
    <div></div>
    console.log(s.zeroToLastIndex(arr)); ////prints 2,3,4,5,1 in the console
  </code>
</div>

<p></p>
<div>
  <b>39.modifier(arr,fn)</b>
  <p>This function modifies an array according to the callback function.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>arr: This must be an array.
  <div></div>
  <b>2.</b>fn: This must be a function.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    function square(num){
    <div></div>
      num=num*num;
      <div></div>
      return num;
      <div></div>
    }
    <div></div>
    var nums = [1,2,3,4,5];
    <div></div>
    console.log(s.modifier(nums,square)); //returns 1,4,9,16,25
  </code>
</div>

<p></p>
<div>
  <b>40.isPalindrome(string)</b>
  <p>This function checks if a string is palindrome or not.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>string: This must be a string.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    var x= "poop";
    <div></div>
    console.log(s.isPalindrome(x)); //returns true
  </code>
</div>

<p></p>
<div>
  <b>41.isSubArray(array,array2)</b>
  <p>This function checks if all the elements of an array exist in another array.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>arr: This must be an array.
  <div></div>
  <b>1.</b>arr2: This must be an array.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
  var arr=[11,10,9,8,7,6,5,4,3,2,1,0];
    <div></div>
    var arr2=[5,4,3,6,11,1,2,7,8,9];
    <div></div>
    console.log(s.isSubArray(arr,arr2)); //returns true because all the elements of arr2 are present in arr array.
  </code>
</div>

<p></p>
<div>
  <b>42.elementCreation(array,parent,node)</b>
  <p>This function dynamically generates element.</p>
  <p></p>
  <b>Parameter(s):</b>
  <div></div>
  <b>1.</b>array: This must be an array.
  <div></div>
  <b>1.</b>parent: Id of the parent of the elements to be generated.
  <div></div>
  <b>1.</b>node: HTML element which's going to be dynamically generated.
  <p></p>
  <b>Example:</b>
  <div></div>
  <code>
    HTML: 
    <div></div>
    <select id="size"></select>
    <div></div>
    JS:
    <div></div>
    var sizeArr= [10,11,12,13,14,15];
    <div></div>
    s.elementCreation(sizeArr,'size','option');
    <div></div>
    /*5 option elements will be generated with values 11,12,13,14,15,16 respectively. The select element with id 'size' will     be their parent.*/
  </code>
</div>






