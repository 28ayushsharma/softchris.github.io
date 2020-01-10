(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{354:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-you-can-dockerize-a-net-core-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-you-can-dockerize-a-net-core-app","aria-hidden":"true"}},[e._v("#")]),e._v(" How YOU can Dockerize a .Net Core app")]),e._v(" "),a("p",[e._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/w4o9p2749bys8sc5oa9t.jpg",alt:""}})]),e._v(" "),a("p",[e._v("This is the first part of a series of posts on using Docker and "),a("em",[e._v("containerization")]),e._v(" with .Net Core.")]),e._v(" "),a("p",[e._v("In this article, we will")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Discuss")]),e._v(" "),a("em",[e._v("containerization")]),e._v(" generally")]),e._v(" "),a("li",[a("strong",[e._v("Learn")]),e._v(" the steps we need to take like creating artifacts such as "),a("code",[e._v("Dockerfile")]),e._v(", "),a("code",[e._v(".dockerignore")]),e._v(" and some basic Docker commands.")])]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/free/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sign up for a free Azure account"),a("OutboundLink")],1),e._v("\nTo use containers in the Cloud like a private registry you will need a free Azure account")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://dev.to/softchris/5-part-docker-series-beginner-to-master-3m1b",target:"_blank",rel:"noopener noreferrer"}},[e._v("5 part series on Docker"),a("OutboundLink")],1),e._v(", this series aims to provide you with a solid foundation in Docker and covers basic concepts, volumes, networks, docker compose and much more")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://dev.to/azure/improve-your-dockerfile-best-practices-5ll",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile great practices for beginners"),a("OutboundLink")],1),e._v(" This is a guide that will ensure your Docker Image will be as small as possible but also ensure it's performant and you understand why you should use certain commands.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://dev.to/azure/improve-your-docker-workflow-with-this-vs-code-extension-j60",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improve your Docker workflow with this VS Code extension"),a("OutboundLink")],1),e._v("\nVS Code can really help you with your Docker workflow with this extension, build run, author, deploy, lot's of great commands")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://dotnet.microsoft.com/learn/aspnet/microservice-tutorial/intro?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Building Microservices with .Net Core"),a("OutboundLink")],1),e._v("\nThis tutorial covers how to build a Microservice in .Net and Dockerize it.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/aspnet/core/getting-started/index?view=aspnetcore-2.2&tabs=macos&wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with ASP .Net Core"),a("OutboundLink")],1),e._v("\nThis will teach you web app development with ASP .Net Core using .Net Core CLI")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/dotnet/core/docker/build-container?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Containerize a .Net Core App"),a("OutboundLink")],1),e._v("\nThis shows how to Dockerize a Console App")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/examples/dotnetcore/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v(".Net Core and Docker"),a("OutboundLink")],1),e._v("\nThis is Docker themselves describing how to Dockerize a .Net App.")])])]),e._v(" "),a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why","aria-hidden":"true"}},[e._v("#")]),e._v(" Why")]),e._v(" "),a("p",[e._v("In the title, we call what we are about to do "),a("em",[e._v("dockerizing")]),e._v(". It's called "),a("code",[e._v("dockerizing")]),e._v(" after Docker. Another name for it is "),a("em",[e._v("containerization")]),e._v(", Docker is such a common vendor for containers the two concepts have become almost synonymous.")]),e._v(" "),a("p",[e._v("There are definitely other vendors. You can read more here if interested:")]),e._v(" "),a("blockquote",[a("p",[e._v("https://techbeacon.com/enterprise-it/30-essential-container-technology-tools-resources-0")])]),e._v(" "),a("p",[e._v("Docker helps us to place our app in a container. So why do we want to do that in the first place? Well, there are many reasons for wanting to do this. First, let's talk about what a container is. Let's see how Docker defines it:")]),e._v(" "),a("blockquote",[a("p",[e._v("A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.")])]),e._v(" "),a("p",[e._v("Ok, so we gain speed, reliability from one computer environment to another, so works on more than my machine?")]),e._v(" "),a("blockquote",[a("p",[e._v("Yes exactly that")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/6wwfeo6j3xcmcow66fkm.jpg",alt:""}})]),e._v(" "),a("p",[e._v("What else?")]),e._v(" "),a("blockquote",[a("p",[e._v("A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries, and settings")])]),e._v(" "),a("p",[e._v("Ok, so I got everything with me, not only app code but also runtime, system tools, etc. Isn't that a Virtual Image?")]),e._v(" "),a("blockquote",[a("p",[e._v("Well no, it's a lightweight version. Containers use the underlying Host OS they run in to make syscalls.")])]),e._v(" "),a("p",[e._v("Oh. I think I got it. I use Docker to create a container, this means I get something small and lightweight that looks the same on everyone's environment. I do this when I want to ship my app or?")]),e._v(" "),a("blockquote",[a("p",[e._v("Yes you got it and yes definitely when you want to ship your app but also during development if you want. Today the Cloud is super popular and becomes the default standard for hosting your app. Having your app in a container format means it's easy for us to scale it using, for example, Kubernetes when we want to manage a ton of containers or support a microservice architecture. Storing your containers in the Cloud, in a container registry, is also made possible at most of the large Cloud Vendors.")])]),e._v(" "),a("h2",{attrs:{id:"how-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-demo","aria-hidden":"true"}},[e._v("#")]),e._v(" How - demo")]),e._v(" "),a("p",[e._v("ok, we brushed the surface on the "),a("em",[e._v("WHY")]),e._v(" we should turn our app into a containerized version now let's look at the actual steps we need to take:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Scaffold")]),e._v(" a .Net Web app,")]),e._v(" "),a("li",[a("strong",[e._v("Create")]),e._v(" a Dockerfile")]),e._v(" "),a("li",[a("strong",[e._v("Create")]),e._v(" a Docker ignore file")]),e._v(" "),a("li",[a("strong",[e._v("Build")]),e._v(" our image")]),e._v(" "),a("li",[a("strong",[e._v("Run")]),e._v(" our container")])]),e._v(" "),a("h3",{attrs:{id:"scaffold-a-web-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaffold-a-web-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Scaffold a Web App")]),e._v(" "),a("p",[e._v("First off we need a .Net Web app. We can create that by using the dotnet CLI like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dotnet new webapp -o aspnetcoreapp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This will create a webapp that we name "),a("code",[e._v("aspnetcoreapp")]),e._v(".")]),e._v(" "),a("p",[e._v("Now that we have our web app, let's focus on the Docker part that we are currently missing and need to add.")]),e._v(" "),a("h3",{attrs:{id:"create-a-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-dockerfile","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a Dockerfile")]),e._v(" "),a("p",[e._v("Ok in this part we will create a file called "),a("code",[e._v("Dockerfile")]),e._v(". Its job is to specify what OS we need, what commands we want to be installed, where to find our app code and lastly how to start up our application within the container. Look at the Dockerfile like a recipe for "),a("em",[e._v("what")]),e._v(" and "),a("em",[e._v("how")]),e._v(". Ok then. Let's create it:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("touch Dockerfile\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("Specify image")])]),e._v(" "),a("p",[e._v("For content, the first thing we need to define is an image we want to base it on. We also need to set a working directory where we want the files to end up on the container.\nWe do that with the command FROM and WORKDIR, like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Dockerfile\nFROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env\n\nWORKDIR /app\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("What we are saying here is to go grab an image with a small OS image made for .Net Core. We also say that our working directory is "),a("code",[e._v("/app")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Copy project file")])]),e._v(" "),a("p",[e._v("Next, we need to copy the project file ending in "),a("code",[e._v(".csproj")]),e._v(". Additionally, we also need to call "),a("code",[e._v("dotnet restore")]),e._v(", to ensure we install all specified dependencies, like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COPY *.csproj ./\nRUN dotnet restore\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[a("strong",[e._v("Copy and Build")])]),e._v(" "),a("p",[e._v("Next, we need to copy our app files and build our app, like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COPY . ./\nRUN dotnet publish -c Release -o out\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[a("strong",[e._v("Build runtime image")])]),e._v(" "),a("p",[e._v("Here we again specify our image and our working directory, like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM mcr.microsoft.com/dotnet/core/aspnet:2.2\nWORKDIR /app\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("There is a difference though, this time we want to copy our built files to "),a("code",[e._v("app/out")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COPY --from=build-env /app/out .\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("Starting the app")])]),e._v(" "),a("p",[e._v("Finally, we add a command for how to start up our app. We do that with the command ENTRYPOINT. ENTRYPOINT takes an array that transforms into a command-line invocation with arguments. Our command looks like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENTRYPOINT ["dotnet", "aspnetcoreapp.dll"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("and simply means that it will invoke "),a("code",[e._v("dotnet aspnetcoreapp.dll")]),e._v(" on the command line.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Dockerfile")]),e._v(" in its entirety looks like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env\nWORKDIR /app\n\n# Copy csproj and restore as distinct layers\nCOPY *.csproj ./\nRUN dotnet restore\n\n# Copy everything else and build\nCOPY . ./\nRUN dotnet publish -c Release -o out\n\n# Build runtime image\nFROM mcr.microsoft.com/dotnet/core/aspnet:2.2\nWORKDIR /app\nCOPY --from=build-env /app/out .\nENTRYPOINT ["dotnet", "aspnetcoreapp.dll"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("h3",{attrs:{id:"create-a-dockerignore-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-dockerignore-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a .dockerignore file")]),e._v(" "),a("p",[e._v("Before we set out on our journey to build the instructions in the "),a("code",[e._v("Dockerfile")]),e._v(" we need to address something, namely files/directories that we don't want. For this Docker tells us to create a file called "),a("code",[e._v(".dockerignore")]),e._v(". So what do we want in it? We want fast builds and to get that we need to ensure we don't directories like "),a("code",[e._v("bin")]),e._v(" or "),a("code",[e._v("obj")]),e._v(" in it.")]),e._v(" "),a("p",[e._v("First, create your "),a("code",[e._v(".dockerignore")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("touch .dockerignore\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Enter the following in our "),a("code",[e._v(".dockerignore")]),e._v(" file")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# .dockerignore\n\nDockerfile\n[b|B]in\n[O|o]bj\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("NOTE, "),a("code",[e._v("#")]),e._v(" is used for comments.")]),e._v(" "),a("h3",{attrs:{id:"build-our-image-start-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-our-image-start-container","aria-hidden":"true"}},[e._v("#")]),e._v(" Build our image & start container")]),e._v(" "),a("p",[e._v("At this point, we only have a recipe for what we want to do, namely our "),a("code",[e._v("Dockerfile")]),e._v(". From here we need to do things in two steps:")]),e._v(" "),a("ol",[a("li",[e._v("Creating an image from our Dockerfile")]),e._v(" "),a("li",[e._v("Create and run a container from our image.")])]),e._v(" "),a("p",[a("strong",[e._v("Create our image")])]),e._v(" "),a("p",[e._v("To create an image an image we can use the command "),a("code",[e._v("docker build")]),e._v(", like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker build -t aspnetcoreapp .\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If we break this down a bit we see that we use "),a("code",[e._v("-t")]),e._v(" to give our image a name. "),a("code",[e._v("aspnetcoreapp")]),e._v(" becomes the image name. Our last argument is a punctuation "),a("code",[e._v(".")]),e._v(" and means where we can find the "),a("code",[e._v("Dockerfile")]),e._v(", which in our case is the current directory.")]),e._v(" "),a("p",[e._v("Running this command leads to first the .Net Core image being picked down, remember our FROM command:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/hhhycj6o9sft7vxjg510.png",alt:""}})]),e._v(" "),a("p",[e._v("Thereafter it processes all the remaining commands in our Dockerfile:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/5jfew3q5sy4q48bfq0pq.png",alt:""}})]),e._v(" "),a("p",[e._v("Above we can see that it "),a("code",[e._v("successfully tagged aspnetcoreapp:latest")]),e._v(". This means everything is good and we have an image. So how can we check that?")]),e._v(" "),a("p",[e._v("Well, we can type the command "),a("code",[e._v("docker images")]),e._v(", like so:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/qb6vmjnamlpf6lerk4rp.png",alt:""}})]),e._v(" "),a("p",[a("strong",[e._v("Create and run our container")])]),e._v(" "),a("p",[e._v("At this point, we have an image. That's great. It contains our app code, commands utilities, OS and everything else we told it to contain. We need to start it. To do that we need to turn it into a container. We do that we the command "),a("code",[e._v("docker run")]),e._v(", like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -d -p 8080:80 --name myapp aspnetcoreapp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Let's break down the command:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-d")]),e._v(", this simply means we run the container in the background.")]),e._v(" "),a("li",[a("code",[e._v("-p")]),e._v(" that means we will match an external port to an internal container port. For some "),a("code",[e._v("Dockerfile")]),e._v(" specification you need to explicitly expose an internal port, this is not needed in our case as it runs on port "),a("code",[e._v("80")]),e._v(". But let's be clear on the syntax "),a("code",[e._v("external port: internal port")]),e._v(". This means we connect our machines port "),a("code",[e._v("8080")]),e._v(" to the internal container port "),a("code",[e._v("80")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("--name")]),e._v(", this is us giving our container name, "),a("code",[e._v("myapp")]),e._v(". If we don't specify a name one will otherwise be generated for us. Having a name makes it easier to reference it later.")])]),e._v(" "),a("p",[e._v("Our last argument is the image name "),a("code",[e._v("aspnetcoreapp")]),e._v(".")]),e._v(" "),a("p",[e._v("Let's check that our container was created and is running with the command "),a("code",[e._v("docker ps")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/ce849fhq70h1lfdaowkp.png",alt:""}})]),e._v(" "),a("p",[e._v("Lastly, let's check that our container is up and running by going to "),a("code",[e._v("http://localhost:8080")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/8hcj976syi6z7b2aepsi.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"clean-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-up","aria-hidden":"true"}},[e._v("#")]),e._v(" Clean up")]),e._v(" "),a("p",[e._v("Right now we have created an image and container that is up and running. Over time you will have a ton of images and containers. This takes space so let's learn some Docker commands to keep this in check.")]),e._v(" "),a("p",[e._v("To stop your container type "),a("code",[e._v("docker stop [docker name]")]),e._v(". So in our case, that would be:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker stop myapp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Removing the container is done with:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker rm myapp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("You can either stop/remove it using the name of the container or its id (at least the 3 first characters). You can find it's name by typing for example "),a("code",[e._v("docker ps")]),e._v(".")]),e._v(" "),a("p",[e._v("Right now we have two images left, "),a("code",[e._v("aspnetcoreapp")]),e._v(" that we built and one called "),a("code",[e._v("mcr.microsoft.com/dotnet/core/runtime:2.2")]),e._v(" that we based our image on. To completely clean up we can use the command "),a("code",[e._v("docker rmi")]),e._v(", aka "),a("em",[e._v("remove image")]),e._v(", like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker rmi myimage:latest\ndocker rmi mcr.microsoft.com/dotnet/core/runtime:2.2\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("We've taken our first steps with Docker in .Net Core. In doing so we discussed why containers and Docker.")]),e._v(" "),a("p",[e._v("We've also learned to specify the contents of a "),a("code",[e._v("Dockerfile")]),e._v(" file to specify what we want to go into an image. Furthermore, we learned to create "),a("code",[e._v(".dockerignore")]),e._v(" file to specify what should NOT go into our image to ensure we small and fast builds.")]),e._v(" "),a("p",[e._v("Additionally, we built and started our container.")]),e._v(" "),a("p",[e._v("In our next part, we will look into building a Microservice and deploying it to the Cloud.")]),e._v(" "),a("h3",{attrs:{id:"acknowledgements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements","aria-hidden":"true"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),a("p",[e._v("You should be following "),a("a",{attrs:{href:"https://twitter.com/brunoborges",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bruno"),a("OutboundLink")],1),e._v(", Java Champion, DevOps expert")])])},[],!1,null,null,null);t.default=r.exports}}]);