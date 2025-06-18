import { parse, parseObj } from "npm:tiny-ts-parser";
import { typecheck } from "./typecheckers/obj.ts";

const node = parseObj("({a: 10, a: 'string'})")

console.log(node);

const edgeCase = `
const f = (x: {a : number, a: boolean}) => 2;
const x = {a: 1, a: true};
const y = {a: true, a: 1};
f(x);
`

console.log(typecheck(parse(edgeCase)));

