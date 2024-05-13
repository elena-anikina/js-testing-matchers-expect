// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код тестов, запуская проверки заново

test('Expect', () => {
  // Точное сравнение примитивных типов
  expect(true).toBe(true);

  // Точная проверка на null
  expect(null).toBeNull();

  // Точная проверка на undefined
  expect(undefined).toBeUndefined();

  // Проверка значение на truthy (любое значение, которое приводится к true)
  expect(true).toBeTruthy();

  // Проверка наличия элемента в массиве
  expect([1, 2, 3]).toContain(2);

  // Проверка наличия подстроки в строке
  expect('hello, world').toMatch('hello');

  // Проверка одного свойства в объекте:
  expect({ key: 'value' }).toHaveProperty('key');
  // Так же можно проверить значение свойства:
  expect({ key: 'value' }).toHaveProperty('key', 'value');
  
  // Проверка нескольких свойств и их значений в объекте:
  expect({ a: 'b', c: 'd', e: 'f' }).toMatchObject({ a: 'b', c: 'd' });

  // Проверка всех свойств "в глубину"
  expect({ a: ['b', 'c'] }).toEqual({ a: ['b', 'c'] });

  // Проверка на выброс исключения
  expect(() => { throw new Error('Boom!') }).toThrow();
  // С проверкой соответствия значения в свойстве message
  expect(() => { throw new Error('Boom!') }).toThrow('Boom!');
});

test('Expect not', () => {
  // not null
  expect(true).not.toBeNull();
  
  // not undefined
  expect(process.env).not.toBeUndefined();
  
  // not contain 2
  expect([1, 2, 3]).not.toContain(4);
  
  // not match hello
  expect('hello, world').not.toMatch('goodbye');
});
