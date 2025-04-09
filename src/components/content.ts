import js from '../assets/javascipt.svg'
import ts from '../assets/typescript.svg'
import mongodb from '../assets/mongodb.svg'
import express from '../assets/express.svg'
import react from '../assets/react1.svg'
import node from '../assets/node.svg'
import sql from '../assets/sql.svg'
import tw from '../assets/tw.svg'
import prisma from '../assets/prisma.svg'
import gsap from '../assets/gsap.svg'
import git from '../assets/git.svg'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const nav = [
    { text: 'About', link: 'about' },
    { text: 'Work', link: 'work' },
    { text: 'Contact', link: 'contact' }
]

const about_me = "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js Databases like MongoDB(mongoose), postgres and its orm(Prisma) . I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"

const skills=[
    {
        img:js,
        name:"Javascript"
    },
    {
        img:ts,
        name:"Typescript"
    },
    {
        img:react,
        name:"React"
    },
    {
        img:mongodb,
        name:"Mongodb"
    },
    {
        img:express,
        name:"ExpressJS"
    },
    {
        img:node,
        name:"NodeJS"
    },
    {
        img:tw,
        name:"TailwindCSS"
    },
    {
        img:sql,
        name:"Postgres"
    },
    {
        img:prisma,
        name:"Prisma"
    },
    {
        img:gsap,
        name:"GSAP"
    },
    {
        img:git,
        name:"Git"
    },
]

const projects = {
    content:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
    projects:[
        {
            img:project2,
            title:"Payment app",
            description:"Dummy payment website developed to sharpen my full stack skills using mongodb, react, node and express",
            git:"https://github.com/Praneeth9nitin/MyFirstRepository",
            deployedStatus:"Not Deployed",
            deployLink:"https://github.com/Praneeth9nitin/MyFirstRepository",
            type:"Responsive"
        },
        {
            img:project1,
            title:"Fruit Soda",
            description:"An applications only to show animation skills using gsap and react",
            git:"https://github.com/Praneeth9nitin/juice",
            deployedStatus:"Deployed",
            deployLink:"https://juice-v3bq.vercel.app/",
            type:"Non Responsive-only desktop"
        },
        {
            img:project3,
            title:"Blogging app",   
            description:"Blogging site in which user can create, read and publish their blogs using react, node, cloudfaire and prisma",
            git:"https://github.com/Praneeth9nitin/Blogging",
            deployedStatus:"Deployed",
            deployLink:"https://blogging-sigma-orcin.vercel.app/signup",
            type:"fully Responsive"
        },
    ]
}
        
export { nav, about_me, skills, projects }