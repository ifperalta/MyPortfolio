export const home = [
    {   
        /***** header ** */
        "id": "1",
        "header_title": "Full Stack Web Developer.",         
        "header_intro": "Hi. I'm Ian, I am passionate about crafting great websites. I specialize in full stack web development with flawless front-end and user experience.",
        "project_btn": "This is a cryptocurreny managment app. ",
        "project_url": "/projects",
        "contact_url": "/contact",

        /***** Sub header ** */
        "subhead_title": "Let's work together",
        "subhead_subtitle": "Top three specialties",
        "subhead_section1":{
            "title": "Web Application",
            "icon": "web",
            "subtext": "Build an app that loads fast with better perfomance."
        },
        "subhead_section2": {
            "title": "Responsive",
            "icon": "responsive",
            "subtext": "Compatible with all devices and create a positive experience."
        },
        "subhead_section3" : {
            "title": "Clean Code",
            "icon": "code",
            "subtext": "Allows readability, easy maintenance, and performs better."
        },

        /***** Services ** */
        "service_title1": "Frontend",
        "service_content1": "My tools of choice are Javascript, React and Bootstrap. I like building functional prototype and coding each page element or components. As a frontend developer, I can also design a web page, but I prefer to code rather than rendering using a design application.",
        "service_title2": "Backend",
        "service_content2": "An application with an optimized code will perform better. I consider backend development a unique characteristic of every full-stack developer. I like using Java, NodeJs/Typescript, and PHP as these programming languages support OOP and design patterns which makes backend coding more enjoyable.",

        /***** Call to action ** */
        "cta_title": "Interested in hiring me?",
        "cta_sub": "I am open to freelance or full-time opportunities",
    }
];

/************  mock project data *****************/
export const projects = [
   
    {  
        "id": "1",
        "category": "webapp",         
        "project_name": "CryptoBull",
        "project_description": "This is a cryptocurreny managment app. ",
        "project_url": "",
        "project_image1": {
            "url": "http://localhost/ianportfolio/cryptobull.jpg",
            "alt": "Crypto Bull"
        },
        "work" : {
            "backend": "Node/Express",
            "frontend": "React and Bootstrap",
            "database": "MySql"
        }
    }
];
/************  End of mock project data *****************/


/************  import svg data *****************/

import mysql from "../common/images/mysql-ar21.svg";
import aws from "../common/images/Amazon_Web_Services-Logo.wine.svg";
import css from "../common/images/icons8-css3.svg";
import docker from "../common/images/icons8-docker2.svg";
import git from "../common/images/icons8-git.svg";
import linux from "../common/images/Icons8_flat_linux.svg";
import html from "../common/images/icons8-html-5.svg";
import java from "../common/images/icons8-java.svg";
import php from "../common/images/icons8-php-logo.svg";
import js from "../common/images/icons8-javascript.svg";
import node from "../common/images/icons8-node-js.svg";
import react from "../common/images/react-2.svg"; 

export const svg = [{
    "mysql": mysql, 
    "aws" : aws, 
    "css" : css, 
    "docker" : docker, 
    "git" : git, 
    "linux" : linux, 
    "html" : html, 
    "java" : java, 
    "php" : php, 
    "js" : js, 
    "node" : node, 
    "react" : react
}];

/************  End of mock svg data *****************/
