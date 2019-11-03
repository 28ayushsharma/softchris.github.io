(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{261:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Follow me on "),n("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),n("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1000/1%2Axby0F7jXUircZAfXngS0Bw.jpeg",alt:""}})]),e._v(" "),n("blockquote",[n("p",[e._v("Using VS Code to author your Azure functions is really the best experience there is. You can debug locally as well as remote and you, can of course, use the full power of VS Code")])]),e._v(" "),n("p",[e._v("This article is part of a series:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://dev.to/azure/serverless-from-the-beginning-using-azure-functions-azure-portal-part-i-28o1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless — from the beginning, using Azure functions ( Azure portal )"),n("OutboundLink")],1),e._v(", this part focuses on presenting the concept Serverless and also shows how you can build your first Azure function using the portal.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://dev.to/azure/serverless-from-the-beginning-part-ii-getting-to-know-your-portal-ide-101k",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless — from the beginning, using Azure functions ( Azure portal ), part II"),n("OutboundLink")],1),e._v(" This is the second part In this part we take a deeper look at the Azure portal as an IDe and how we can install dependencies and work with more than one file among other things.")]),e._v(" "),n("li",[e._v("Serverless — from the beginning, using Azure functions ( VS Code ), part III, "),n("strong",[e._v("we are here")])]),e._v(" "),n("li",[e._v("Serverless — from the beginning, using Azure functions ( Azure CLI ), part IV, "),n("em",[e._v("in progress")])])]),e._v(" "),n("p",[e._v("In this article, we will cover:")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Why")]),e._v(" "),n("strong",[e._v("VS Code as authoring env")]),e._v(". There are more than one option here. The Azure portal, VS Code, Azure-cli, any IDE really. VS Code is one of the better thanks to its plugins")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Dependencies")]),e._v(" "),n("strong",[e._v("and set up")]),e._v(" , There is not a lot we need to get going it’s pretty much a few core libs that we install with either brew or NPM depending on our OS and of course the highly recommended Azure function extension.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Hello world")]),e._v(" and running your function. This is about getting an app up and running and trust me on this, this is lightning fast")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Debugging")]),e._v(" locally, it doesn’t get any easier than this, however, there is something you should know when it comes to Project generation that might break your ability to Debug, but don’t worry I got your back with two solutions. Symptom and solution are well described.")])])]),e._v(" "),n("h2",{attrs:{id:"why-vs-code-as-an-authoring-environment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-vs-code-as-an-authoring-environment","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Why VS Code as an authoring environment?")])]),e._v(" "),n("p",[e._v("There are many ways to author a Serverless app. VS Code is one of the better ones and the main reason for that is the extensions that make things like scaffolding projects/functions and debugging — a real joy.")]),e._v(" "),n("h2",{attrs:{id:"resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Resources")])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/functions/?wt.mc_id=azureapril_chrisnoring-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure functions overview page"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://code.visualstudio.com/tutorials/functions-extension/getting-started?wt.mc_id=azureapril_chrisnoring-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tutorial how to author and deploy an Azure function"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Microsoft/vscode-azurefunctions?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doc page for Azure function extension"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://docs.microsoft.com/en-gb/learn/modules/replace-faces-with-emojis-matching-emotion?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS Learn module"),n("OutboundLink")],1),e._v(", creating a more advanced Azure Function with VS Code")])]),e._v(" "),n("h2",{attrs:{id:"dependencies-and-set-up"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-and-set-up","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Dependencies and Set up")])]),e._v(" "),n("p",[e._v("There are two ways to install the dependencies we need, depending on if you are using either Windows or Mac OS.")]),e._v(" "),n("p",[e._v("For Mac run the following command:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("brew tap azure/functions\n\nbrew install azure-functions-core-tools\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("for Windows:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm install -g azure-functions-core-tools@2\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h3",{attrs:{id:"installing-the-vs-code-extension"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-vs-code-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Installing the VS Code extension")])]),e._v(" "),n("p",[e._v("To make the authoring experience really nice you need an Extension for VS Code:")]),e._v(" "),n("p",[e._v("Search for Azure functions in the extension search field inside of VS Code, the extension should look like this:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*Surf3zWpTzaFVY4Jpx96MA.png",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"your-first-azure-function-in-vs-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#your-first-azure-function-in-vs-code","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Your first Azure function in VS Code")])]),e._v(" "),n("p",[e._v("To create and run an Azure function we need to do the following:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Create a new Azure functions project")])]),e._v(" "),n("li",[n("p",[e._v("Create a new Azure function, in our new project")])]),e._v(" "),n("li",[n("p",[e._v("Run our function")])])]),e._v(" "),n("h2",{attrs:{id:"create-an-azure-functions-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-functions-project","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Create an Azure Functions project")])]),e._v(" "),n("p",[e._v("We can create an Azure functions project by using a command installed when we installed the extension. The command is called")]),e._v(" "),n("p",[e._v("Azure Functions: Create new Project")]),e._v(" "),n("p",[e._v("We can access said command by going to the menu View and select Command Palette. If you are on a Mac you can just type Command + Shift + P. Then select our command above:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*F6wCxvaREwngLoEtbP3arQ.png",alt:""}})]),e._v(" "),n("p",[e._v("There we will be asked where to place our project:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*yCAYfl2xSaU1XMs4nox__g.png",alt:""}})]),e._v(" "),n("p",[e._v("You select the folder you want the project to end up in.")]),e._v(" "),n("p",[e._v("Thereafter you are asked to select the language you will code in:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*o0DqKyhGpjPYG6Owd_hAQQ.png",alt:""}})]),e._v(" "),n("p",[e._v("Select JavaScript, but do remember there are other choices that can be made here")]),e._v(" "),n("p",[e._v("This is followed by it querying for what trigger type the function will have, i.e what type of trigger will invoke the function:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*tOj9evR2VzUHN3769auafg.png",alt:""}})]),e._v(" "),n("p",[e._v("Select HTTP trigger for now but just as with language, remember that we can trigger our functions in more than one way.")]),e._v(" "),n("p",[e._v("The next thing is being asked for what to call the function that is created when we create the project. Yes, it does create a first function for us when we create a project, so it’s a two in one.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*ByRKpClyIg18VocVthLlIw.png",alt:""}})]),e._v(" "),n("p",[e._v("Let’s call it hello for now:")]),e._v(" "),n("p",[e._v("Lastly, we will be asked for authorization level, i.e what credentials are needed for us to be able to allow the function.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*wE6QFcXxhHWn928Tf90gPQ.png",alt:""}})]),e._v(" "),n("p",[e._v("For now, let’s go with anonymous, we will discuss authorization in later parts of this serverless series.")]),e._v(" "),n("h3",{attrs:{id:"project-anatomy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-anatomy","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Project anatomy")])]),e._v(" "),n("p",[e._v("At this point you should have the following files created:")]),e._v(" "),n("p",[n("img",{attrs:{src:"project-anatomy.png",alt:""}})]),e._v(" "),n("p",[e._v("Let’s talk about the files that matter for this article:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("/hello")]),e._v(" , this a directory containing our Azure function")])]),e._v(" "),n("p",[e._v("In the hello directory there are also:")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("function.json")]),e._v(" , this contains a lot of settings regarding your function like authLevel, what type it is, what methods it allows. It contains declarations for both in and out. In, means what triggers the function and out means what type of response it generates. In our case it has a httpTrigger as in and HTTP response as out.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("index.js")]),e._v(" , this contains our Azure function and it has given us a basic implementation that we can alter to suit our needs")])])]),e._v(" "),n("h2",{attrs:{id:"running-and-debugging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-and-debugging","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Running and debugging")])]),e._v(" "),n("p",[e._v("Ok, so we’ve managed to create an Azure project and an Azure function, now what? Well, it’s time to test it of course. There are two ways we can do so:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Start the project with a debugger")])]),e._v(" "),n("li",[n("p",[e._v("Start the project from the terminal")])])]),e._v(" "),n("h3",{attrs:{id:"run-the-debugger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-the-debugger","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Run the debugger")])]),e._v(" "),n("p",[e._v("This is about using the built-in debugging functionality in VS Code. We will cover two things here.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("The happy path of debugging, if your project was correctly generated this is as simple as pressing a button")])]),e._v(" "),n("li",[n("p",[e._v("If you are in the wrong place generating a project, you might have some initial struggle, however, I will show how to fix even that")])])]),e._v(" "),n("p",[n("strong",[e._v("Debugging")])]),e._v(" "),n("p",[e._v("To Debug select Debug / Start debugging in the menu. This set VS Code in Debug mode and you should see this menu to the left:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*oiDWblzQ69OQ8wMdSGdkgw.png",alt:""}})]),e._v(" "),n("p",[e._v("In the terminal in the main area you should see the following message at the bottom:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*w4AEzETbjWVWRo1tjlJd7Q.png",alt:""}})]),e._v(" "),n("p",[e._v("Now set a breakpoint at the first line in your function. Now go to the browser and navigate to http://localhost:7071/api/hello and you should see this in VS Code:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*DhZh4MccFhJ02UdSw0BtGQ.png",alt:""}})]),e._v(" "),n("p",[e._v("As you can see above our breakpoint is hit and the menu to the left gives us valuable info on the stack trace and other things.")]),e._v(" "),n("p",[n("strong",[e._v("Generate your project in the correct place")])]),e._v(" "),n("p",[e._v("I learned something the first time I generated an Azure Functions project, using VS Code. What I learned is that it matters where I was generating the project. Why does that matter for debugging? Well, it generates a .vscode directory for the workspace you are standing in, NOT the target directory of your Azure Functions project.")]),e._v(" "),n("p",[e._v("What can go wrong? If you open up VS Code in say directory tmp and then you select the directory tmp/project as your target dir for generating the project then your .vscode directory is generated in tmp.")]),e._v(" "),n("p",[e._v("If you select to Debug from tmp it WILL work, however, if you forgot that you were in the directory tmp and next time you open up the project and you do so in tmp/project, it WON’T work. It won’t work because tmp/project is missing the .vscode directory, that contains the files launch.json and tasks.json that is needed for the debugging to work.")]),e._v(" "),n("p",[e._v("There are two ways to solve this if it happens to you:")]),e._v(" "),n("ol",[n("li",[n("p",[n("strong",[e._v("Open")]),e._v(" VS Code in the directory that you aim to use for Azure Function Project targetDir. E.g open it up in tmp and select tmp as targetDir when you generate the project")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Move")]),e._v(" the generated .vscode directory into the project file and open up tasks.json and ensure that the property cwd looks like this ”cwd”: “${workspaceFolder}”")])])]),e._v(" "),n("h3",{attrs:{id:"start-from-terminal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-from-terminal","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Start from terminal")])]),e._v(" "),n("p",[e._v("To start the project make sure you are in the project root and that you have opened a terminal, View / Open view / Terminal")]),e._v(" "),n("p",[e._v("Type the following in the terminal:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func host start\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("This should tell us two things, the URL we can reach our function on and the supported HTTP Verbs.")]),e._v(" "),n("p",[e._v("It should give an output looking like this:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*mY-ENYZaq75aovFgt9vk7w.png",alt:""}})]),e._v(" "),n("p",[e._v("Lets go to the suggested URL in the browser http://localhost:7071/api/hello")]),e._v(" "),n("p",[e._v("The browser should show the following:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*E9wbAmYlK4Rj4KIdOjJAsQ.png",alt:""}})]),e._v(" "),n("p",[e._v("This is actually running the code that was generated in hello/index.js. If we zoom in a bit on the code:")]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// excerpt from index.js")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("res "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// status: 200, /\\* Defaults to 200 \\*/")]),e._v("\n body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Hello "')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("res "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n status"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("400")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Please pass a name on the query string or in the request body"')]),e._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("p",[e._v("We can see above that if "),n("code",[e._v("req.query.name")]),e._v(" or "),n("code",[e._v("req.body.name")]),e._v(" is empty it should construct a message with status 400.")]),e._v(" "),n("p",[e._v("We can fix this by calling the URL with an added ?name=chris, like so:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://cdn-images-1.medium.com/max/820/1*fsraIn3llDedONVFi1FEEQ.png",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("strong",[e._v("Summary")])]),e._v(" "),n("p",[e._v("This concludes this first part on VS Code and Azure Functions. We’ve learned how to generate an Azure functions project and a function and we’ve also learned to navigate around in our project structure and especially learned how to debug in two different ways.")]),e._v(" "),n("p",[e._v("In our next part, we will learn more about handling parameters and authorization and we will also build a GraphQL server and of course how to deploy everything to the Cloud. Sounds like fun right? 😃")])])},[],!1,null,null,null);t.default=r.exports}}]);