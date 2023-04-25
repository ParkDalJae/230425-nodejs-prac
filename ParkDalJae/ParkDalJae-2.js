function createFinder(dataType) {
  return function (arr, itemToFind) {
    if (Array.isArray(arr) === false) {
      console.log("배열이 아닙니다.");
      return false;
    }

    const isDataTypeMatched = typeof itemToFind === dataType;
    const isItemExist = arr.includes(itemToFind);

    if (isDataTypeMatched === true && isItemExist === true) {
      console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
      return true;
    } else if (isItemExist === false) {
      console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
      return false;
    } else if (isDataTypeMatched === false) {
      console.log(`찾으려는 항목은 ${dataType}이 아닙니다.`);
      return false;
    }
  };
}

const findString = createFinder("string");
const findNumber = createFinder("number");
const findBoolean = createFinder("boolean");

const arr = [1, 2, 3, "hello", true];

findString(arr, "hello"); // true
findNumber(arr, 1); // true
findBoolean(arr, false); // false
