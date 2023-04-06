# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?
From Developer James
Your answer: JSX is a way to write HTML-like code in JavaScript and is commonly used in React. One syntax difference between HTML and JSX is the casing. onclick is HTML and onClick is JSX

Researched answer: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code, primarily used in React applications to describe the structure and content of components. It lets you combine HTML and JavaScript into a single file, making your code more modular and easier to manage. The main syntax difference between HTML and JSX is the way attributes are defined. In HTML, attributes are defined using the regular HTML syntax, where you have the attribute name followed by an equals sign, then the value in quotes.

More content: 
the main differences between HTML and JSX, giving examples such as onclick for HTML and onClick for JSX

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?
From Developer Jake
Yarn is a package manager for Jest. It holds all of the directories and built in functions needed to run your Jest tests for JavaScript. Once you get "good failure" on your test, function not defined, you can write your function and play around until the function passes the test you coded.

When you run yarn in your terminal it will modify all of the files inside the repo your branch is in. Or if you mess up, like I did, and run yarn when you are on your desktop it will modify all of the folders that hold Jest test on your desktop...


Researched answer: Resource (https://flaviocopes.com/yarn/)

Created in 2016, yarn is one of the main JavaScript package managers for node.js. Yarn has the ability to install packages from your local cache. When you initiate a new project, through your terminal, yarn writes its dependencies into a file marked package.json. It is stored in the root folder of your project, and stores the dependencies files that effect your entire project.

More content: 
research the directories that yarn add to the application, difference between package managers and directories

3. What is a React component?
From Developer Jose
Your answer: 
A component in React allows the dedication of specific functions to perform specific operations. I like to compare React components to engine components since an engine is made up of a series of electrical/mechanical components that allows the engine to run. Like in React, an engine component, if designed correctly, will allow the engine to run more effectively. Additionally, it may allow the developer/mechanic to troubleshoot and repair specific components more quickly.

Researched answer:
A React component is a stand-alone function that developers can use to store behavioral code for specific instances. The use of components compartmentalizes the code inside of a web application. This allows the rendering process to render specific features/items and render other components when specific user interactions occur. If I wanted to create a UI web application use a chat box or a like button feature. I could create a specific component for each of the features.

More content:
relate topic to something you know, use an analogy, create a react component

4. What is the difference between state values and props in React?
From Developer Mark
Your answer: State values are used to store information that can be updated and changed. By using useState(), developers can use a state variable and a setter to make their UI interactable. Props are a way for components to communicate to one another. Components in different files can reference props in other files in React. The biggest difference is state values are used for performing specific logic while props are used for communicating tasks.

Researched answer:
Researched answer: State is used to manage data that can change in a component. Props are used to pass data from parent and child components. State is locally owned and is referenced directly by a component. Props are owned by their parent and can only be called on if their component is rendered.

More content: 
show an example of state and pass it as a prop

5. What is the DOM?
From Developer Nguyen
Your answer: The Document Object Model is the interaction and structure of web documents

Researched answer: The DOM is the representation of objects, structure and content of documents that interface with the browser. The DOM represents the document as nodes and objects so programming languages can interface with the web page.

6. STRETCH: Which is the difference between a div tag and a span tag?
From Developer Raymond
Your answer:

The div tag and span tag are both containers but they differ in what they contain. The div tag is a block element meaning it it will take up the full width available and typically contains a group of other elements. The span tag is an inline element. This means it will shrink to fit the content. Typically spans are used to wrap text. If you want to change the color of one word in a paragraph you should use a span tag. If you want to add a border around a heading and paragraph then you should use a div. Below are examples:

```html

<p>Lorem ipsum dolor sit amet, <span class="highlight">consectetur</span> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<div class="card">
    <h2>Heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
```

Researched answer:

The div tag is a division element that is a generic block-level element. It is used to group several elements that are related. The span tag is a generic inline element used to apply styles to a fraction of the content. Both the span and div tag are genaric HTML elements that group related items. These tags differ by the fact that divs add a line break after its content whereas spans only take up the space of its children. If possible you want to avoid using divs and spans as they are not semantic. Semantic elements communicate their intent. The `em` tag is similar to the span tag as it is an inline element but it communicates 'emphasis'. The `strong` tag is used to bold text. Is is an inline element but is communicates that is word is important. The `nav` tag is a block element like divs but communicates that this section is for navigation. Semantics is important for screen readers and for developers. It allows screen readers and developers alike to better interpret your code.

More content: 
other examples of semantic tags, experience

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: OOP, organizes the code around the data or objects rather than the logic or functions

2. Ruby: object-oriented programming language, dependencies and code snippets are called gems

3. Implicit return: does not require 'return' because it returns the last line or expression in the function

4. Ruby blocks: defined with a do and end or {}, it gets passed to a method as an argument

5. Ruby hashes: collection of unique keys and values pairs, similar to arrays however it is not index-oriented. The values are stored at keys. Looks like objects from javascript.
