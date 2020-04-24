window.onload =() => {
  mainFunc();
}
var id = [];

function mainFunc(){
  var contentHtml = []
  for (var [index, func] of functions.entries()) {

    for (elem in func) {
      var name = func[elem]["name"];
      var description = func[elem]["description"];
      var argumentss = func[elem]["arguments"];
      var returnss = func[elem]["returns"];
      var idElem = func[elem]["id"]
      var exsampleSimple = func[elem]["exsample"];
      var pastebin = func[elem]["pastebin"];
      id.push(idElem);
      contentHtml+= `
      <div class="task-container">
        <div class="inner-container">
        <button onclick="hidethis(${idElem})">${name}</button>
          <div id="inner-container-deep${idElem}" class="inner-container-deep">
            <div class="task">
              <div class="task-name">${name}</div>
                Условие:
                <div class="task-description" id="task${idElem}">${description}
                  <div class="task-argument" id="argument${idElem}">${argumentss}</div>
                  <div class="task-return" id="return${idElem}">${returnss}</div>
                  <div class="task-exsample" id="exsample${idElem}">${exsampleSimple}</div>
                </div>
              </div>
              <div id="pastebin${idElem}" class="pastebin">
                <h3>Мой вариант решения функции:</h3>
                ${pastebin}
              </div>
          </div>
        </div>
      </div>
      `
    }
  };
  document.querySelector(".main-task-container").innerHTML = contentHtml;
}


function hidethis (num) {
  let element = document.getElementById(`inner-container-deep${num}`);
  if (element.style.display == "block") {
    element.style.display = "none"
  } else {
    element.style.display = "block"
  }
  //console.log(element.style.display);
}

//chunk(["a", "b", "c", "d", "e"], 2);
function chunk(arr, n){
  var list = [];
  var rest = arr.length % n
  if ( n > 0) {
    var numOfRepeat = Math.trunc(arr.length/n);
    //the first case 'no rest'
    if (rest == 0) {
    var i = 0;
    while (i < numOfRepeat){
      var y = 0;
      var newArr = [];
      while (y < n){
        newArr.push(arr[0]);
        arr.shift();
        y++;
      };
      i++;
      list.push(newArr);
    };
    //return result
    console.log("chunk " + list);
    }
    //the second case "rest"
    else {
      var i = 0;
      while (i < numOfRepeat) {
        var y = 0;
        var newArr = [];
        while (y < n) {
          newArr.push(arr[0]);
          arr.shift();
          y++;
        };
        i++;
        list.push(newArr);
      };
      //for rest adding to array
      var i = 0;
      var restArr =[];
      while (i < rest) {
        restArr.push(arr[0]);
        arr.shift();
        i++
      };
      list.push(restArr);
      //return result
      console.log("chunk " + list);
    };
  } else {
    console.log("Enter a positive number")
  };
}
//exsample:
chunk(["a", "b", "c", "d", "e", "f", "g", "h"], 3);






//compact(array)
//compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
function compact (arr) {
  let myArr = [];
  arr.forEach(element => {
    if (element != false && element != null && element != 0  && element != undefined && element != NaN) {
      myArr.push(element);
    }
  });
  console.log("compact " + myArr);
}
//exsample:
compact([0, 1, false, 2, '', 3, 2, 55,0 , 3]);








//concat(array, [values])
//var array = [1];
//var other = _.concat(array, 2, [3], [[4]]);
//console.log(other);
// => [1, 2, 3, [4]]
function concat (arr, ...args) {
  let myArr = [];
  for (elem in arr) {
    myArr.push(arr[elem]);
  }
  for (elem in args) {
    //console.log(typeof(args[elem]))
    if (typeof(args[elem]) == "object"){
      for (var n in args[elem]) {
        myArr.push(args[elem][n]);
      }
    } else {
      myArr.push(args[elem]);
    }

  };
  console.log("concat " + myArr)
 };

//exsample:
const arrr = ["1", "v", "3"]
concat(arrr, ["a","s", "ggb","rr"], 7, "d", "dd",[["Вложенный массив"]] )








//difference(array, [values])
//difference([2, 1], [2, 3]);
// => [1]
function difference (arr1, arr2){
  let myArr = [];
  for (var [, elem] of arr1.entries()) {
    if (arr2.includes(elem) == false ) {
      myArr.push(elem);
    }
  };
  console.log("difference " + myArr);
}
//exsample:
difference([2, 1], [2, 3]);







//_.differenceBy(array, [values], [iteratee=_.identity])   TODO

//_.differenceWith(array, [values], [comparator])         TODO




//drop(array, [n=1])
/*
Example
_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]*/

function drop (arr, n=1) {
  let myArr = [];
  if (n < 0) { n = 1};
  for (i = 0; i < n; i++) {
    myArr.push(arr[i])
    arr.shift()
  }
  console.log("drop " + arr);
}
//exsample:
drop([1, 2, 3], 2)






//dropRight(array, [n=1])
//.dropRight([1, 2, 3]);
// => [1, 2]
 
//.dropRight([1, 2, 3], 2);
// => [1]
 
//.dropRight([1, 2, 3], 5);
// => []
 
//.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
function dropRight (arr, n=1) {                                            //TODO добавить в список json
  for (i = 0; i < n; i++) {
    arr.pop()
  };
  console.log("dropRight " + arr)
}
dropRight([1, 2, 3], 2);






//dropRightWhile(array, [predicate=_.identity])     // TODO доделать

function dropRightWhile(arr, predicate) {

  let obj = {}
  for (n in predicate) {
    obj[n] = (predicate[n])
  };

  for (i=arr.length-1; i>=0; i--) {
    console.log(arr[i])
    for (let n in arr[i]) {
    
      console.log (n)
      console.log (arr[i][n])
    }
    }
      //(predicate(arr[i], i, arr));
    //if (predicate(arr[i], index, arr) ) {
     //   arr.pop();
    //}
  
  // Создаем новый объект, ключ и значение берется из predicate

  console.log(obj)
}
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

//dropRightWhile(users, { 'user': 'pebbles', 'active': false } );







//dropWhile(array, [predicate=_.identity])                     TODO сделать







//fill(array, value, [start=0], [end=array.length])                     //TODO добавить в список json
function fill (arr, value, start=0, end=arr.length){        
  for (let [index] of arr.entries()) {
    if (start <= index && index <= end-1) {
      arr.splice(index, 1, value)
    }
  }
  console.log("fill " + arr)
};

//exsample
fill([4, 6, 8, 10], '*', 1, 3);







//findIndex(array, [predicate=_.identity], [fromIndex=0])     //TODO сделать







//findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])  //TODO сделать







//flatten(array)
function flatten (arr) {
  let  myArr = [];
  arr.forEach(function (elem) {
    if( Object.prototype.toString.call( elem ) === '[object Array]' ) {
      for (n in elem) {
        myArr.push(elem[n])
      }
    } else {
    myArr.push(elem)
  }
  })
  console.log("Функция flatten: ")
  console.log(myArr)
}

flatten ([1, [2, [3, [4]], 5]])




console.log("---------------------------------")
//flattenDeep(array)                                               //TODO добавить в список json
//flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
//Recursively flatten array up to depth times
function flattenDeep (arr) {
  let  myArr = [];

  function rec (arrr) {
    for (let i of arrr) {
      if (Object.prototype.toString.call(i) === '[object Array]' ) {
        rec(i)
      } else {
        myArr.push(i)
      };
    };
  };
  rec (arr);
  console.log("Функция flattenDeep: ")
  console.log(myArr)
};
//exsample
flattenDeep([1, [2, [3, [4]], 5]]);







//flattenDepth(array, [depth=1])                                  //TODO добавить в список json
function flattenDepth(arr, depth=1) {
  let  myArr = [];

  function recdepth (arrr) {
    if (depth > 0) {
      for (let i of arrr) {
        if (Object.prototype.toString.call(i) === '[object Array]' ) {
          depth--;
          recdepth(i)
        } else {
          myArr.push(i)
        };
      };
    } else {
      for (let i of arrr) {
        myArr.push(i)
      }
    };
  }

  recdepth (arr);
  console.log("Функция flattenDepth: ")
  console.log(myArr)
};
//exsample
var array = [1, [2, [3, [4]], 5]];
flattenDepth(array, 2);





//fromPairs(pairs)                                           //TODO добавить в список json
function fromPairs(...args) {
  console.log("Start of the function fromPairs:   ")
  //console.log(...args)
  let myArr = []
  let myObject = {}

  for (let n of args) {
    for (let m of n) {
      myObject[m[0]] = m[1]
    }
  }
  console.log(myObject)
}
 // exsample:
fromPairs([['a', 1], ['b', 2], ['c', 3],])






//head(array)
//head([1, 2, 3]);
// => 1
function head (array) {                                            //TODO добавить в список json
  return console.log("Первый элемент в массиве: " + array[0])
}
//exsample: 
head([1, 2, 3]);







//indexOf(array, value, [fromIndex=0])                          //TODO добавить в список json
function indexOf(array, value, fromIndex=0) {
  if (fromIndex >= 0) {
    for (fromIndex; fromIndex < array.length; fromIndex++){
      if (array[fromIndex] == value) {
        return console.log(fromIndex) 
      }
    }
  } else {
    fromIndex*=-1
    for (fromIndex; fromIndex <= array.length; fromIndex++){
      if (array[array.length - fromIndex] == value) {
        return console.log(array.length - fromIndex) 
      }
    }
  }
}
//exsample:
let newArray1 = ["a", "b", "c", "a", "a"]
indexOf(newArray1, "a", -3)







//initial(array)                                          //TODO добавить в список json
function initial(array) {
  array.pop()
  return console.log(array)
}
//exsample:
let newArray2 = ["a", "b", "c", "d", "e"]
initial(newArray2);







//intersection([arrays])                            //TODO добавить в список json
function intersection (...args) {
  let myArr = [];
  //console.log(args[1])
  for (let element of args) {
    for (let n of element) {
      for (let elem of args) {
        if (args.indexOf(elem) !== args.indexOf(element)) {
          if (elem.indexOf(n) >=0 ) {
            if (myArr.indexOf(n) < 0) {
              myArr.push(n)
            }
          }
        }
      }
    }
  }
  return (console.log(myArr))
};
intersection([2, 1], [4, 3], [2, 4]);







//join(array, [separator=','])                      //TODO добавить в список json
function join (array, separator = ",") {
  return console.log(array.join(separator))
}
//exsample:
join(['a', 'b', 'c']);
// => 'a~b~c'






//last(array)                                     //TODO добавить в список json
function last (array) {
  return console.log(array[array.length-1])
}
//exsample:
last([1, 2, 3]);
// => 3









//lastIndexOf(array, value, [fromIndex=array.length-1])             //TODO добавить в список json
function lastIndexOf(array, value, fromIdex=array.length-1) {
  console.log("Start of the function lastIndexOf")
  if (fromIdex == array.length-1) {
    for (let i = array.length-1; i >= 0; i--) {
      if (array[i] == value) {
          return console.log(i)
      } else {
      };
    };
  } else {
    for (let i = array.length-1; i >= fromIdex; i--) {
      if (array[i] == value) {
        return console.log(i-fromIdex)
      }
    }
  }
}
//exsample:
lastIndexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", 11], "a", 8);







//nth(array, [n=0])                                 //TODO добавить в список json
function nth (array, n=0) {
  if (n >=0) {
    return console.log(array[n])
  } else {
    for (n; n >= array.length*-1; n--) {
      return console.log(array[array.length+n])
    }
  }
}
//exsample:
var array = ['a', 'b', 'c', 'd'];
nth(array, 1);







//pull(array, [values])                           //TODO добавить в список json      
function pull (array, ...args) {
  console.log("Start of the function 'pull'")
  for (let element of args) {
    console.log(element)
    while (array.indexOf(element) !== -1) {
      array.splice(array.indexOf(element),1)
    }
  }
  return console.log(array)
}
//exsample:
var array = ['a', 'b', 'c', 'a', 'b', 'c', 'r'];
pull(array, 'a', 'b', 'c', 'd');
//console.log(_.pull(array, 'a', 'b'));









//pullAll(array, values)                      //TODO добавить в список json  
function pullAll (array, values) {
  for (let n of values) {
    console.log(n)
    while (array.indexOf(n) !== -1) {
      array.splice(array.indexOf(n),1)
    }
  }
  return console.log(array)
}
//exsample:
var array = ['a', 'b', 'c', 'a', 'b', 'c', 'd'];
pullAll(array, ['a', 'c', 'b', 'd']);
// => ['b', 'b']







//pullAt(array, [indexes])                //TODO добавить в список json  
function pullAt (array, indexes) {
  const pulled = [];
  let i = 0;
  for (let n of indexes) {
    pulled.push(array[n])
    //array.splice(n, 1)
  }
  for (let iOfIndexes of indexes) {
    array.splice(iOfIndexes-i,1);
    i++
  }
  console.log(pulled)                         //TODO Когда все будет готово, пределать как здесь, но убрать консоль.лог
  return pulled
}
//exsample
var array = ['a', 'b', 'c', 'd', 'e', 'f'];
var pulled = pullAt(array, [1, 3, 5]);
// console.log(array);
//  => ['a', 'c']
console.log(pulled);
//  => ['b', 'd']






//remove(array, [predicate=_.identity])
// function remove (array, fn){             //todo  сделать
//   console.log("Start")
//   let myArr = []
//   let result = fn;
//   console.log("вот", fn.apply(array))
// }


// var arrayN = [1, 2, 3, "a"];
// var evens = remove(arrayN, function(n) { 
//   return this
// })
// console.log(evens)









//reverse(array)                                            //TODO добавить в список json  
function reverse(array) {
  console.log("Reverse")
  let myArr = [...array]
  for (let i=0, y=array.length-1; i<array.length; i++, y--) {
    array[i] = myArr[y]
  }
  return array
}
//exsample
var array = [1, 2, 3, 4, 5, 6, 7];
reverse(array);
console.log(array);







//slice(array, [start=0], [end=array.length])
function slice (array, start=0, end=array.length) {
  console.log("Slice")
  for (let y = 0; y< array.length-end; y++) {
    array.pop()
  }
  let i = 0;
  for (;i<start; i++) {
    array.shift()
  }
  return array
}
//exsample
var arrayM = [1, 2, 3, 4];
console.log(slice(arrayM,1,3));







//sortedIndex(array, value)
function sortedIndex (array, value) {
  console.log("SortedIndex")
  let low = 0;
  let high = array.length-1

  while (low <= high) {
    mid = Math.ceil((low+high)/2)
    let guess = array[mid]
    if (guess == value ) {
      return mid
      } else if (guess > value) {
          if (array[mid-1]> value) {
          high = mid - 1
          } else {
            return mid
          }
      } else if (guess < value) {
          if (array[high]>= value) {
          low = mid + 1
          } else {
            return high+1
          }
      } else {
        return 0
      }
    } 
}
//exsample
console.log(sortedIndex([20, 30, 40, 60, 80, 90], 55));












/*
intersectionBy      iteratee=_.identity
intersectionWith    сложно
pullAllBy           [iteratee=_.identity]
pullAllWith         [comparator]
remove              [predicate=_.identity])
sortedIndexBy       [iteratee=_.identity])
sortedIndexOf
sortedLastIndex
sortedLastIndexBy
sortedLastIndexOf
sortedUniq
sortedUniqBy
tail
take
takeRight
takeRightWhile
takeWhile
union
unionBy
unionWith
uniq
uniqBy
uniqWith
unzip
unzipWith
without
xor
xorBy
xorWith
zip
zipObject
zipObjectDeep
zipWith
*/