const PLUGIN_NAME = "FooPlugin";
const {
  sources: { ConcatSource, RawSource },
} = require("webpack");

class BlockPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.processAssets.tapAsync(PLUGIN_NAME, (assets, cb) => {
        Object.keys(assets).forEach((k) => {
          assets[k] = new ConcatSource(
            new RawSource("// Inject By 范文杰\n\n"),
            assets[k]
          );
        });
        cb();
      });
    });
  }
}

module.exports = BlockPlugin;
