const byteSize = (str) => {
  const item = new Blob([str]);
return item.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
