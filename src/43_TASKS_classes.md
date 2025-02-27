# Задачи (Классы - classes)

**1 задача:**

🧲 Задача: Магазин и корзина товаров 🧲

Создайте класс `Product`, который будет представлять товар в магазине, и класс `Cart`, 
который будет управлять корзиной покупок. Реализуйте следующие функции:

Класс `Product` должен иметь свойства:

1) name (название товара),
2) price (цена товара).

Класс Cart должен предоставлять методы:

1) addProduct(product) — добавить товар в корзину.
2) removeProduct(productName) — удалить товар из корзины по названию.
3) getTotalPrice() — вернуть общую стоимость всех товаров в корзине.
4) listProducts() — вывести список товаров в корзине.
 
```JavaScript
  const cart = new Cart();

  const bread = new Product("Хлеб", 30);
  const apple = new Product("Яблоко", 50);
  const milk = new Product("Молоко", 60);

  // cart.addProduct(apple);
  // cart.addProduct(milk);

  cart.addProduct(bread, apple, milk);

  const removedProduct = cart.removeProduct("Молоко");

  log(`${removedProduct} удален из корзины`)

  log(cart.listOfProducts)

  log(`Общая сумма товаров в корзине: ${cart.getTotalPrice()}`);
```

<hr/>

**2 задача:**

🧲 Задача: Компания и сотрудники 🧲

Создайте класс `Company`, который будет представлять компанию где работают сотрудники, и класс `Employee`, 
который будет управлять сотрудником. Реализуйте следующие функции:

Класс `Employee` должен иметь свойства:

1) name (имя сотрудника),
2) position (должность сотрудника).
3) salary (зарплата сотрудника).
3) employmentDate (дата приема на работу сотрудника).

Класс `Company` должен предоставлять методы:

1) addEmployee(employee) — добавить сотрудника в компанию.
2) fireEmployee(employee) — убрать сотрудника из компании 😬.
3) listOfEmployees() — вывести список всех сотрудников в компании.
4) filterEmployeesBySalary(limitSalary) — вывести список всех сотрудников у которых зп начинается с `limitSalary`.
5) filterEmployeesByEmployentDate(limitDate) — вывести список всех сотрудников которые работают в компании начиная с `limitDate`.

*Также на твое усмотрение можно придумать еще дополнительные свойства и методы чтобы расширять возможности.

```JavaScript
  const alex = new Employee("Alex", "developer", "150000", new Date(2022, 2, 5));
  const elena = new Employee("Elena", "qa", "90000", new Date(2023, 3, 7));

  const company = new Company();

  company.addEmployee(alex);
  company.addEmployee(elena);

  // дальше по накатанной
```


<hr/>


<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>

**Решения:**

<details>
    <summary>Решение - Задача 1: </summary>

```
  Решение смотри в 42 уроке 2 модуля Frontender[1.0]
```
</details>

<details>
    <summary>Решение - Задача 2: </summary>

```
  Решение похоже на первую задачу, тут подумай 😊
```
</details>
