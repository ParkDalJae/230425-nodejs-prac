class ArrayFinder {
  constructor(arr, dataType, itemToFind) {
    this.arr = arr;
    this.dataType = dataType;
    this.itemToFind = itemToFind;
  }

  findItem() {
    if (Array.isArray(this.arr) === false) {
      console.log("배열이 아닙니다.");
      return false;
    }
    const isDataTypeMatched = typeof this.itemToFind === this.dataType;
    const isItemExist = this.arr.includes(this.itemToFind);
    console.log(isItemExist);
    if (isDataTypeMatched === true && isItemExist === true) {
      console.log(`${this.itemToFind}은(는) 배열에 존재합니다.`);
      return true;
    } else if (isItemExist === false) {
      console.log(`${this.itemToFind}은(는) 배열에 존재하지 않습니다.`);
      return false;
    } else if (isDataTypeMatched === false) {
      console.log(`찾으려는 항목은 ${this.dataType}이 아닙니다.`);
      return false;
    }
  }
}

const basicData = [
  "안녕하세요",
  "어디선가",
  "입력된",
  "데이터를",
  "찾아보는",
  "함수입니다",
];

const isArrayFinder = new ArrayFinder(basicData, "string", "어디선가");
isArrayFinder.findItem();
