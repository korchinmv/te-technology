import { validateForms } from "./../functions/validate-forms.js";

const rulesFormContacts = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Слишком короткое имя",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-mail",
    mailError: "Введите корректно адресс почты",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите свою почту!",
      },
      {
        rule: "email",
        errorMessage: "Не верно указана почта",
      },
    ],
  },
  {
    ruleSelector: ".input-company",
    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",
        errorMessage: "Напишите сообщение!",
      },
    ],
  },
  {
    ruleSelector: ".input-checkbox",
    checkboxError: "Нужно поставить галочку",
    rules: [
      {
        rule: "required",
        errorMessage: "Нужно согласиться с условиями",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms("#contacts-form", rulesFormContacts, afterForm);
validateForms("#application-form-section", rulesFormContacts, afterForm);
