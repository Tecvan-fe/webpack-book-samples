const { ProgressPlugin } = require("webpack");
const PLUGIN_NAME = "BlockPlugin";
const wait = (misec) => new Promise((r) => setTimeout(r, misec));
const noop = () => ({});

class BlockPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.processAssets.tapAsync(
        PLUGIN_NAME,
        async (assets, callback) => {
          const reportProgress = ProgressPlugin.getReporter(compiler) || noop;
          const len = 100;
          for (let i = 0; i < len; i++) {
            await wait(50);
            reportProgress(i / 100, `Our plugin is working ${i}%`);
          }
          reportProgress(1, "Done work!");
          await wait(1000);
          callback();
        }
      );
    });
  }
}

module.exports = BlockPlugin;
