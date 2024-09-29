const emmaStamp = 30;
const stampPrice = 30;
const pillowPrice = stampPrice * 50 + 1;
if (emmaStamp >= 50) {
  console.log("Can exchange pillows");
} else {
  console.log(
    "Need to spend more money " + (pillowPrice - stampPrice * emmaStamp)
  );
}
