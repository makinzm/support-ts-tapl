import { parseObj } from "npm:tiny-ts-parser";

const node = parseObj("({a: 10, a: 'string'})")

console.log(node);

