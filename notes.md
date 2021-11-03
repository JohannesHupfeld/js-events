function declaration --> you explicitly type in function 

function expression --> something equal to something else 

lexical scope --> Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child's functions are lexically bound to the execution context of their parents. Lexical scope is sometimes also referred to as static scope. 

---------------------------------------------------------------------------------------------------

const blogs = [];
const buttons = () => document.querySelector("#buttons")
const main = () => document.querySelector("#main")
const form = () => document.querySelector("#new-blog-form")
const h1 = () => document.querySelector("#page-title")
const titleInput = () => document.querySelector("#title")
const contentInput = () => document.querySelector("#content")
const submitButton = () => document.querySelector("#submit-button")
const showFormButton = () => document.querySelector("#show-form")
const showBlogsButton = () => document.querySelector("#show-blogs")
const blogsList = () => document.querySelector("#blogs-list")
const emptyMain = () => main().innerHTML = ""

const formTemplate = () => {
    if (form() === null) {
        return `
        <h1 id="page-title">Create new blog</h1>
        <form id="new-blog-form">
        <label for="title">Title</label>
        <input type="text" id="title"><br>
        <label for="content">Content</label>
        <textarea type="text" id="content"></textarea><br>
        <input type="submit" value="Create!" id="submit-button">
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
    e.preventDefault();
    main().innerHTML = formTemplate();
    if (form()) {
        form().addEventListener("submit", handleSubmit)
    }
}

const handleShowBlogsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    showBlogs();
}

const handleSubmit = (e) => {
    e.preventDefault();
    blogs.push({
        title: titleInput().value,
        content: contentInput().value
    });
    showBlogs();
}

const showBlogs = () => {
    main().innerHTML = blogsTemplate();
    if (blogsList()) {
        blogs.forEach(blog => renderBlog(blog))
    }
}

const renderBlog = (blog) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    h3.innerHTML = blog.title;
    h3.className = "blog-title";
    const p = document.createElement("p");
    p.innerHTML = blog.content;
    p.className = "blog-content";
    li.appendChild(h3);
    li.appendChild(p);
    blogsList().appendChild(li)
}

document.addEventListener("DOMContentLoaded", () => {
    showFormButton().addEventListener("click", handleShowFormClick);
    showBlogsButton().addEventListener("click", handleShowBlogsClick);
    buttons().addEventListener("click", (e) => e.target.style.backgroundColor = "orange")
})