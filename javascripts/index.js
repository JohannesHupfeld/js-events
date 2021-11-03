// const form = document.querySelector("#new-blog-form")
const blogs = [];
const buttons = () => document.querySelector("#buttons");
const main = () => document.querySelector("#main");
const form = () => document.querySelector("#new-blog-form");
const h1 = () => document.querySelector("#page-title");
const titleInput = () => document.querySelector("#title");
const contentInput = () => document.querySelector("#content");
const submitButton = () => document.querySelector("#submit-button");
const showFormButton = () => document.querySelector("#show-form");
const showBlogsButton = () => document.querySelector("#show-blogs");
const blogsList = () => document.querySelector("#blogs-list");
const emptyMain = () => main().innerHTML = "";

const formTemplate = () => {
    if (form() === null) { // toggle ability 
        return `
        <h1 id="page-title">Create New Blog</h1>
        <form action="" id="new-blog-form">
        <label for="title">Title</label>
        <input type="text" id="title"><br>
        <br></br>
        <label for="content">Content</label>
        <textarea type="textarea" id="content"></textarea><br>
        <br></br>
        <input type="submit" value="Create" id="submit-button">
        </form>
        `
    } else {
        return null; 
    }
}

const blogsTemplate = () => {
    if (blogsList() === null) {
        return `
        <h1 id="page-blogs">Blogs</h1>
        <ul id="blogs-list"></ul>  
        `
    } else {
        return null; 
    }
}

const handleShowFormClick = (e) => {
    e.preventDefault(); // stops propogation
    main().innerHTML = formTemplate();
    if (form()){
        form().addEventListener("submit", handleSubmit)
    }
}
 
const handleShowBlogsClick = (e) => {
    e.preventDefault(); // stops propogation
    e.stopPropagation();
    showBlogs(); //shows the blogs then goes to const show blogs
}

const handleSubmit = (e) => {
    e.preventDefault();
    blogs.push({ // pushes the value of title and content to blogs
         title: titleInput().value,
         content: contentInput().value
    });
    showBlogs(); // renders the info on blogs 
}

const showBlogs = () => {
    main().innerHTML = blogsTemplate(); // form has been submitted so now reset the template to be the blogs template
    if (blogsList()) {  // if the blog list is there show the blogs
        blogs.forEach(blog => renderBlog(blog)) // render the blogs
    }
}

const renderBlog = (blog) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    h3.innerHTML = blog.title;
    h3.className = "blog-title"; // incase css wants to target this for a specific look
    const p = document.createElement("p");
    p.innerHTML = blog.content;
    p.className = "blog-content"; // incase css wants to target this for a specific look
    li.appendChild(h3);
    li.appendChild(p);
    blogsList().appendChild(li)
}

document.addEventListener("DOMContentLoaded", () => {
    showFormButton().addEventListener("click", handleShowFormClick);
    showBlogsButton().addEventListener("click", handleShowBlogsClick);
    buttons().addEventListener("click", (e) => e.target.style.backgroundColor = "orange")
})