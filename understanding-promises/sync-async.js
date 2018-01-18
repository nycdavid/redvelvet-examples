function somethingSync() {
  console.log('done executing somethingSync');
}

function somethingAsync() {
  setTimeout(() => {
    console.log('done executing somethingAsync');
  }, 1500);
}

let op1 = somethingSync();
console.log('After somethingSync')

console.log('');
console.log('------======------');
console.log('');

let op2 = somethingAsync();
console.log('After somethingAsync')
