import { css, html, javascript, mongodb, nodejs, php, reactjs, redux, tailwind, mVentory, eShop, lexestate } from "../assets"

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "My Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ]

  export const technologies = [
    {
      title: 'Html',
      icon: html
    },
    {
      title: 'Css',
      icon: css
    },
    {
      title: 'Javascript',
      icon: javascript
    },
    {
      title: 'MongoDB',
      icon: mongodb
    },
    {
      title: 'NodeJS',
      icon: nodejs
    },
    {
      title: 'ReactJS',
      icon: reactjs
    },
    {
      title: 'Tailwind',
      icon: tailwind
    },
    {
      title: 'Redux',
      icon: redux
    },
    {
      title: 'Php',
      icon: php
    }
  ]

  export const projects = [
    {
      name: "E-commerce",
      description:
        "A complete e-commerce website with complete functionality. This is my first big project, so design is not very good looking, forgive me that.",
      image: eShop,
      live_demo: 'https://eshop-by-alex.vercel.app',
      source_code_link: "https://github.com/Alex21400/eShop-app",
    },
    {
      name: "M-ventory",
      description:
        "Web application for inventory tracking. Post products, update and track them. Use email: test123@hotmail.com and password: test123 to see how it looks with products but please do not change anything.",
      image: mVentory,
      live_demo: 'https://m-ventory-app.vercel.app',
      source_code_link: "https://github.com/Alex21400/m-ventory-app-frontend",
    },
    {
      name: "Lex Estate",
      description:
        "A comprehensive real estate platform that allows users to search listings and schedule visits or to post their own listings. ",
      image: lexestate,
      live_demo: 'https://lex-estate.onrender.com',
      source_code_link: "https://github.com/Alex21400/lex-estate",
    },
  ]