// JavaScript Exceptions
//
// Error  基本错误类型
//      ReferenceError
//      SyntaxError
//      RangeError
//      TypeError
//      EvalError  eval() 函数发生异常时抛出
//      URIError

class AhriError {
  constructor(message) {
    this.message = message;
    this.name = "AhriError";
  }
}

AhriError.prototype = new Error();

try {
  throw new AhriError("AhriError");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("finally");
}
