(async () => {
  const { sayHello } = await import("app1/utils");
  sayHello();
})();

console.log("Hello");
