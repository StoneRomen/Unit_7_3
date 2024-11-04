// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.


function userNumber() {
  let inputOfUser = '';
  for (let i = 0; i < 10; i++) {
    inputOfUser = prompt('Введіть число більше 100');

    if (inputOfUser === null) {
      console.log('Дякуємо за співпрацю!');
      break;
    }

    inputOfUser = parseInt(inputOfUser);
    
    if (inputOfUser > 100) {
      console.log('Ваше число: ' + inputOfUser);
      break;
    } else {
      console.log('Спробуйте ще: ' + inputOfUser);
    }
  }
}

userNumber();

