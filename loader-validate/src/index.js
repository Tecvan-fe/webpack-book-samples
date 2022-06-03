import { validate } from "schema-utils";
import schema from "./options.json";

export default function loader(source) {
  const options = this.getOptions();
  validate(schema, options);

  return source;
}
