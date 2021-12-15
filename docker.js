let i = 5;
while(i>=0) {
    console.log(i);
    throw new Error('Error thrown');
    i-=1;
}

