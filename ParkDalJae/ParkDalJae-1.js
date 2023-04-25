function exampleOne(arr, dataType, itemToFind) {
  const isArray = (arr) => Array.isArray(arr);
  const isDataTypeMatched = (itemToFind) => typeof itemToFind === dataType;
  const isItemExist = (arr, itemToFind) => arr.includes(itemToFind);
  const printResult = (itemToFind, isExist) => {
    if (isExist) {
      console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
    } else {
      console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
    }
  };

  if (!isArray(arr)) {
    console.log("배열이 아닙니다.");
    return false;
  }

  const matched = isDataTypeMatched(itemToFind);
  if (!matched) {
    console.log(`찾으려는 항목은 ${dataType}이 아닙니다.`);
    return false;
  }

  const isExist = isItemExist(arr, itemToFind);
  printResult(itemToFind, isExist);
  return isExist;
}

const basicData = [
  "안녕하세요",
  "어디선가",
  "입력된",
  "데이터를",
  "찾아보는",
  "함수입니다",
];

exampleOne(basicData, "string", "어디선가");
