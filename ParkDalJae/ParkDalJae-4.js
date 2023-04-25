class ArrayFinder {
  constructor(arr, dataType, itemToFind) {
    this._arr = arr;
    this._dataType = dataType;
    this._itemToFind = itemToFind;
  }

  get arr() {
    return this._arr;
  }

  set arr(value) {
    this._arr = value;
  }

  get dataType() {
    return this._dataType;
  }

  set dataType(value) {
    this._dataType = value;
  }

  get itemToFind() {
    return this._itemToFind;
  }

  set itemToFind(value) {
    this._itemToFind = value;
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

const myArrayFinder = new ArrayFinder([1, "two", 3], "string", "two");

// getter로 프로퍼티에 접근
console.log(myArrayFinder.arr);
console.log(myArrayFinder.dataType);
console.log(myArrayFinder.itemToFind);

// setter로 프로퍼티 변경
myArrayFinder.arr = ["one", "two", "three"];
myArrayFinder.dataType = "number";
myArrayFinder.itemToFind = 3;

// 변경된 값을 getter로 확인
console.log(myArrayFinder.arr);
console.log(myArrayFinder.dataType);
console.log(myArrayFinder.itemToFind);

// findItem() 메소드 실행
myArrayFinder.findItem();
