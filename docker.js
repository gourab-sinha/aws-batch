const endTime = Date.now() + 120000;
let count = 0;
while(Date.now() <= endTime) {
  console.log(count);
  count += 1;
}

