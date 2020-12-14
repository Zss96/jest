// test('测试10与10相匹配',()=>{
//   //toBe 匹配器 (匹配内容)object.is ===
//   const a = {one: 1}
//   expect(10).toBe(10)
//   // expect(a).toBe({one: 1})
// })


// test('测试对象内容相等',()=>{
//   //toEqual 匹配器
//   const a = {one: 1}
//   expect(a).toEqual({one: 1})
// })



//真假有关
// test('toBeNull匹配器',()=>{
//   //toBeNull 匹配器
//   const a = null
//   expect(a).toBeNull();
// })

// test('toBeUndefined匹配器',()=>{
//   //toBeUndefined 匹配器
//   const a = undefined
//   expect(a).toBeUndefined();
// })
// test('toBeDefined匹配器',()=>{
//   //toBeUndefined 匹配器
//   const a = 'a'
//   expect(a).toBeDefined();
// })
// test('toBeTruthy匹配器',()=>{
//   //toBeTruthy 匹配器
//   const a = 1
//   expect(a).toBeTruthy();
// })
// test('toBeFalsy匹配器',()=>{
//   //toBeTruthy 匹配器
//   const a = 0
//   expect(a).toBeFalsy();
// })

// test('not匹配器',()=>{
//   //toBeTruthy 匹配器
//   const a = 0
//   expect(a).not.toBeFalsy();
// })

//数字相关的匹配器
// test('toBeGreaterThan',()=>{
//   //toBeGreaterThan 匹配器
//   const a = 10
//   expect(10).toBeGreaterThan(9);
// })
// test('toBeLessThan',()=>{

//   const a = 10
//   expect(10).toBeLessThan(11);
// })

// test('toBeGreaterThanOrEqual',()=>{
//   const a = 10
//   expect(10).toBeGreaterThanOrEqual(10);
// })
// test('toBeLessThanOrEqual',()=>{
//   const a = 10
//   expect(10).toBeLessThanOrEqual(10);
// })

// test('toBeCloseTo',()=>{
//   const a = 0.1;
//   const b = 0.2;
//   expect(a+b).toBeCloseTo(0.3);
// })

// //String

// test('toMatch',()=>{
//   const a = 'xxxjfjkf '
//   expect(a).toMatch('x');
// })

// //Array, set
// test('toContain',()=>{
//   const a = ['dell','lee','imooc']
//   const data = new Set(a)
//   expect(a).toContain('lee');
//   expect(data).toContain('lee');
// })

//异常
const throwNewErrorFunc = () =>{
  throw new Error('this is a new error')
}

test('toThrow', ()=>{
  expect(throwNewErrorFunc).toThrow(/this is a new error/)
})

