// TypeScript 基础

// 基础类型
const num: number = 10; // 数字类型
const str: string = "Hello World!"; // 字符串类型
const bool: boolean = true; // 布尔类型
const arr: number[] = [1, 2, 3]; // 数字数组
const genericArr: Array<string> = ["a", "b", "c"]; // 泛型数组
const tuple: [string, number] = ["age", 20]; // 元组（固定长度和类型）
const anyVal: unknown = "可以是任意类型"; // 任意类型（关闭 TS 类型检查）
const voidVal: void = undefined; // 无返回值（常用于函数）

// 函数类型注解
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, age?: number /* 可选参数 */): string {
  if (age) {
    return `I'm ${name}, ${age} years old.`;
  }
  return `I'm ${name}.`;
}

// 常量枚举，编译阶段会被移除，更高效
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}

function main() {
  console.log(`数字类型: ${num}`);
  console.log(`字符串类型: ${str}`);
  console.log(`布尔类型: ${bool}`);
  console.log(`数组: ${arr}`);
  console.log(`泛型数组: ${genericArr}`);
  console.log(`元组: ${tuple}`);
  console.log(`任意类型: ${anyVal}`);
  console.log(`Void: ${voidVal}`);
  console.log(`函数返回值: ${add(5, 3)}`);
  console.log(`可选参数函数: ${greet("Tom")}`);
  console.log(`枚举: ${Direction.Up}`);
}

main();
