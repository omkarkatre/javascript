console.log(`-------------Leap Year--------------`);
var leap=function isLeapYear(year) {
  if (year == null || year == undefined || null == NaN) {
    console.log(`${year} not valild leap year`);
  } else {
    if (year % 4 == 0) {
      console.log(`${year} is leap year`);
    } else {
      console.log(`${year} is not leap year`);
    }
  }
}
leap(2020);
leap(1999);
leap(1600);
leap(2022);
leap(1945);
leap(`Twenty twenty`);
leap(1750);
leap(undefined);
leap(NaN);