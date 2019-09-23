let list1 = ['a', 'b', 'c'];
let list2 = [1, 2, 3];

function zipList (listA, listB) {
  const zipper =[];
  for(let i = 0; i < listA.length; i++) {
      zipper.push(listA[i]);
      zipper.push(listB[i]);
    }
  return zipper;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay (listA, listB) {
    return _.flatten(_.zip(listA, listB));
}

console.log(zipListTheSimpleWay(list1, list2));
