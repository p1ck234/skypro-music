This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[Figma](https://www.figma.com/design/XbFmF8JhhuJn0E9C060k8f/%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81?node-id=0-1&t=HKkEJ8nugPoTZWWK-0)

Страница авторизации:

    - соответствует макету;
    - вводим некорректные данные - дальше не пускает;
    - вводим корректные данные - попадаем на главную (данные сохраняются в localstorage);
    - нужно зарегистрироваться - переходим на соответствующую страницу.

Страница регистрации:

    - соответствует макету (кроме всплывающих сообщений);
    - при вводе email - всплывает подсказка с примером (сделано для демонстрации дополнительных возможностей формы);
    - при вводе пароля в первом поле - есть подсказка о длине пароля и вводимых символах;
    - вводим соответствующие данные для регистрации - в случае некорректных данных (пустые поля, пароли не совпадают, длина меньше 8 символов) - регистрация не проходит, видим дополнительное сообщение под кнопкой регистрации "нужно заполнить все поля корректно";
    - после ввода правильных данных - регистрация проходит на сервере - попадаем на страницу signin.

Главная страница (страницы "мой плейлист" и "подборки"):

    - при загрузке главной страницы реализован скелетон в соответствии с макетом (частично);
    - страница сооветствует макету;
    - есть навигация (открывается, скрывается):
        - поле "главная" ведет на главную страницу;
        - поле "мой плейлист" ведет к избранным трекам (которым прожимали лайки);
        - поле "выйти" - выходит из профиля (данные из localstorage стираются ) - поле меняется на "войти" и соответственно ведет на страницу signin при нажатии;
    - в зависимости от логина отображается email пользователя и кнопка для выхода в правом углу (действует аналогично полю "выйти");
    - наверху есть поле "поиска" - возможен поиск по названию, автору;
    - трекам ставятся лайки - они попадают на страницу в "мой плейлист" - при дизлайке - трек убирается;
    - при нажатии на иконку рядом с названием трека - начинается проигрывание, появляется плеер - все отображается корректно, кнопки пуск, пауза, следующий, предыдущий трек, зацикливание, перемешивание - работает в соответствии с макетом;
    - при переходе на страницы "мой плейлист" и "подборок" - плеер продолжает играть, пролайканные треки отображаются на всех страницах
