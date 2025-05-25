// array.js

function makeArrIn_cnt_id_quote(list) {
  let newArr = [];

  for (i = 0; i < Object.keys(list).length; i++) {
    let key = Object.keys(list)[i];
    let value = Object.values(list)[i];
    newArr.push({ count: value, id: Number(key), quote: "" });
  }

  console.log(newArr);
  return newArr;
}

function inboundCounting() {
  var bounding = [
    652,
    525,
    877,
    536,
    545,
    748,
    894,
    679,
    779,
    769
  ];
  var setCount = new Date().getDate();
  if (setCount > 9) {
    $('#counting').text(bounding[setCount.toString().substring(0, 1)]);
  } else {
    $('#counting').text(bounding[setCount]);
  }

}
inboundCounting();