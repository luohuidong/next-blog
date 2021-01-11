function paddingZero(number: number) {
  return String(number).length < 2 ? `0${number}` : String(number);
}

export default function getDate() {
  const time = new Date();
  const year = time.getFullYear();
  const month = paddingZero(time.getMonth() + 1);
  const date = paddingZero(time.getDate());

  return `${year}-${month}-${date}`;
}
