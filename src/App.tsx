import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { JobCardParameter } from "./components/JobCardElement";
import { JobUserCardParameter } from "./components/JobUserCardElement";
import { CheckOffersPage } from "./pages/CheckOffersPage";
import { EditUserPage, UserCardParameter } from "./pages/EditUserPage";
import {
  JobPageExtended,
  JobPageExtendedParams,
} from "./pages/JobPageExtended";
import { LoginPage } from "./pages/LoginPage";
import { ProfileFormPage } from "./pages/ProfileFormPage";
import { ProfilePageTemplate } from "./pages/ProfilePageTemplate";
import { RegisterPage } from "./pages/RegisterPage";
import { UserOffersPage } from "./pages/UserOffersPage";

function App() {
  const elem: UserCardParameter[] = [
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",
      name: "Sandu Ilie Cristian",
    },
    {
      domain: "Construction",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",

      name: "Sandu Ilie Cristian",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",

      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      age: "32",

      name: "Popa Ioana",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",

      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      age: "32",

      name: "Popa Ioana",
    },
    {
      domain: "IT",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",

      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      age: "32",

      name: "Popa Ioana",
    },
    {
      domain: "IT",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",

      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      age: "32",

      name: "Popa Ioana",
    },
    {
      domain: "IT",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",

      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "employee",
      age: "32",

      name: "Popa Ioana",
    },
    {
      domain: "IT",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",

      name: "Sandu Ilie Cristian",
    },
    {
      domain: "IT",
      email: "ioana.popa@gmail.com",
      gender: "F",
      type: "recruiters",
      age: "32",

      name: "Popa Ioana",
    },
    {
      domain: "HoReCa",
      email: "ilie.cristian.sandu@gmail.com",
      gender: "M",
      type: "employee",
      age: "32",

      name: "Sandu Ilie Cristian",
    },
  ];

  const elem2: JobCardParameter[] = [
    {
      date: "25.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "UI Path",
      isValidate: false,
      name: ".Net Developer",
      location: "Bucharest",
      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      isValidate: false,
      name: ".Net Developer",
      location: "Bucharest",

      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "25.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "UI Path",
      isValidate: false,
      name: ".Net Developer",
      location: "Bucharest",

      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      isValidate: false,
      name: ".Net Developer",
      location: "Bucharest",

      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "25.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "UI Path",
      isValidate: false,
      name: ".Net Developer",
      location: "Bucharest",

      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      isValidate: false,
      name: ".Net Developer",
      location: "Bucharest",

      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "25.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "UI Path",
      isValidate: true,
      name: ".Net Developer",
      location: "Bucharest",

      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      isValidate: true,
      name: ".Net Developer",
      location: "Bucharest",

      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
  ];

  const userInfo: UserCardParameter = {
    domain: "construction",
    email: "ilie.cristian.sandu@gmail.com",
    gender: "M",
    type: "employee",
    age: "32",
    name: "Sandu Ilie Cristian",
  };

  const elem3: JobUserCardParameter[] = [
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      applicants: 5,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: ".Net Developer",
      location: "Bucharest",
      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      applicants: 10,
      number_of_places: 10,
      isMyOffer: false,
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "Prestige",
      applicants: 11,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: "Ospatar",
      location: "Bucharest",
      type: "HoReCa",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      applicants: 5,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: ".Net Developer",
      location: "Bucharest",
      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      applicants: 10,
      number_of_places: 10,
      isMyOffer: false,
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "Prestige",
      applicants: 11,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: "Ospatar",
      location: "Bucharest",
      type: "HoReCa",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      applicants: 5,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: ".Net Developer",
      location: "Bucharest",
      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      applicants: 10,
      number_of_places: 10,
      isMyOffer: false,
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "Prestige",
      applicants: 11,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: "Ospatar",
      location: "Bucharest",
      type: "HoReCa",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      applicants: 5,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: ".Net Developer",
      location: "Bucharest",
      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      applicants: 10,
      number_of_places: 10,
      isMyOffer: false,
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "Prestige",
      applicants: 11,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: "Ospatar",
      location: "Bucharest",
      type: "HoReCa",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      applicants: 5,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: ".Net Developer",
      location: "Bucharest",
      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      applicants: 10,
      number_of_places: 10,
      isMyOffer: false,
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "Prestige",
      applicants: 11,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: "Ospatar",
      location: "Bucharest",
      type: "HoReCa",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "DELL",
      applicants: 5,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: ".Net Developer",
      location: "Bucharest",
      type: "IT",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "SC IMPEL SRL",
      applicants: 10,
      number_of_places: 10,
      isMyOffer: false,
      isValidate: false,
      name: "Architect",
      location: "Bucharest",

      type: "Construction",
    },
    {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "Prestige",
      applicants: 11,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: "Ospatar",
      location: "Bucharest",
      type: "HoReCa",
    },
  ];

  const elem4: JobPageExtendedParams = {
    jobInfo: {
      date: "28.05.2022",
      description:
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ips",
      employer: "Prestige",
      applicants: 11,
      number_of_places: 10,
      isMyOffer: true,
      isValidate: true,
      name: "Ospatar",
      location: "Bucharest",
      type: "HoReCa",
    },
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/profileForm" element={<ProfileFormPage />}></Route>
          <Route
            path="/editUsers"
            element={<EditUserPage initialsElements={elem} />}
          ></Route>
          <Route
            path="/checkOffers"
            element={<CheckOffersPage initialsElements={elem3} />}
          ></Route>
          <Route
            path="/profilePage"
            element={<ProfilePageTemplate userInfo={userInfo} />}
          ></Route>
          <Route
            path="/profilePage1"
            element={<UserOffersPage initialsElements={elem3} />}
          ></Route>
          <Route
            path="/profilePage2"
            element={<JobPageExtended jobInfo={elem4.jobInfo} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
