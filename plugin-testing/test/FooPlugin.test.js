import path from "path";
import { promisify } from "util";
import { runCompile } from "./helpers";
import FooPlugin from "../src/FooPlugin";

describe("foo plugin", () => {
  it("should inject foo banner", async () => {
    const {
      stats: { compilation },
      compiler,
    } = await runCompile({
      plugins: [new FooPlugin()],
    });
    const { warnings, errors, assets } = compilation;

    expect(warnings).toHaveLength(0);
    expect(errors).toHaveLength(0);

    const { path: outputPath } = compilation.options.output;
    await Promise.all(
      Object.keys(assets).map(async (name) => {
        const pathToEmitted = path.join(outputPath, name);
        const result = await promisify(compiler.outputFileSystem.readFile)(
          pathToEmitted,
          { encoding: "UTF-8" }
        );
        expect(result.startsWith("// Inject By 范文杰")).toBeTruthy();
      })
    );
  });
});
