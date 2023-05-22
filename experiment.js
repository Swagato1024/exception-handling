const fun2 = () => {
  console.log("fun2");
  throw new Error("at fun2");
};
const fun1 = (n) => {
  console.log("fun1");
  try {
    fun2();
  } catch (e) {
    console.log(e.message);
    e.message = "at fun1";
    throw e;
  }
};

try {
  fun1(4);
} catch (e) {
  console.log(e.message);
}
