// JavaScript async

async function func() {
  console.log(1)
  return 1
}

func().then(val => {
  console.log(val)
})

async function func1() {
  console.log("promise");
  return new Promise(function (resolve, reject) {
    resolve("promise")
  })
}

func1().then(val => {
  console.log(val);
})

async function func2() {
  let a = await 1;
  let b = await new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("setTimeout")
    }, 3000)
  })
  let c = await function () {
    return "function"
  }()
  console.log(a, b, c);
}

func2()
