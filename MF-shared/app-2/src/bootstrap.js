import _ from "lodash";
console.log(_.add(1, 2));

(async () => {
  const { sayHello } = await import("RemoteApp/utils");
  sayHello();
})();

console.log("Hello");
