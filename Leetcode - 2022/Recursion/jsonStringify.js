/**
 * Given a JSON object, convert it to it's string value. This is the same as
 * calling JSON.stringify in javascript
 * Possible values
 * - string
 * - boolean
 * - number
 * - array
 * - object/dict
 * 
 
Strategy:
- Create res str for final output
- Iterate thru the object, 
  - Concat key.toString to res str
  - Concat + ":" + value.toString(); 

  - Nested arr/obs = prob
    - Exception: .isArray() to check for array 
      - "[" + loop through to get eles "]"
    - Chain such that object is the last else:
        - Obj/ dict?  OR typeOf

- Recursive
    - Base: 
        If num/str/bool, .toString, add to res str
        If arr/ obj, recurse on every ele in it
    - Iterate until we hit arr/obj
    - [1, 2, [3, 4]]

 */

function isBoolStrNum(ele) {
    if (
      typeof ele === "boolean" ||
      typeof ele === "number" ||
      typeof ele === "string"
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function stringify(input) {
    if(isBoolStrNum(input)) {
      return makeStr(input);
    } else {
  
    }
  }
  
  // Not good, not working:
  // function toStrOrRecurse(ele, str) {
  //   if (isBoolStrNum(ele)) {
  //     return ele.toString();
  
  //     // input is an arr
  //   } else if (ele.isArray) {
  //     for (const i in ele) {
  //       if (isBoolStrNum(i)) {
  //         str += i.toString();
  //       } else {
  //         // recurse
  //         return toStrOrRecurse(i, str);
  //       }
  //     }
  //     // input is an object
  //   } else {
  //     for (const key in ele) {
  //       const val = ele[key].toString();
  //       if (isBoolStrNum(key)) str += key.toString();
  //       if (isBoolStrNum(val)) str += val.toString();
  //     }
  //   }
  //   return str;
  // }
  
  // console.log(toStrOrRecurse({ 1: "2" }, ""));
  
  // function stringify(input, str = "") {
  //   // base case: if we have a str/ bool/ num
  
  //   for (let key in input) {
  //     let val = input[key];
  
  //     // console.log(toStrOrRecurse(key, str));
  //     // && toStrOrRecurse(val, str);
  //   }
  //   // return '{"a":"b","c":[1,2,3,"hello"]}';
  //   // return false; hi!!!!!
  // }
  
  // let test = { 5: "b", c: "d" };
  
  // console.log(stringify(test));
  // console.log(JSON.stringify(test) === stringify(test));
  // console.log("2");
  