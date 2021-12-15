const endTime = Date.now() + 120000;
let count = 0;
while(Date.now() <= endTime) {
  process.exit(1);
  count += 1;
}
