(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{259:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"a-crash-course-to-the-most-important-docker-concepts-and-their-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#a-crash-course-to-the-most-important-docker-concepts-and-their-commands","aria-hidden":"true"}},[e._v("#")]),e._v(" A crash course to the most important Docker concepts and their commands")]),e._v(" "),o("p",[e._v("Follow me on "),o("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),o("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),o("blockquote",[o("p",[e._v("I've written this for you that just parachuted into a project that starts on Monday and it's Friday afternoon and you've got 2 hours to spare and you're like "),o("em",[e._v("crap")]),e._v(". I feel you, I've been there countless times. Don't worry, by the time you've read this article you will have more knowledge of what goes on in the code and with Docker and especially what they are talking about in the meetings.")])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/if0ywc9htfpn5mvy6mxw.gif",alt:""}})]),e._v(" "),o("p",[e._v("TLDR; this article is meant as a build up for this "),o("a",{attrs:{href:"https://dev.to/softchris/5-part-docker-series-beginner-to-master-3m1b?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("5 part series on Docker"),o("OutboundLink")],1),e._v(". The idea is to convey how the wrong mindset can stop you from learning Docker properly. I convey this by telling my Story on how I learned Docker. If you are here to learn a ton of Docker and is not interested in hearing this story, that does contain a few useful commands,  then click into the 5 part series as that's probably more what you had in mind.")]),e._v(" "),o("p",[e._v("Still here? Great, story time.")]),e._v(" "),o("p",[e._v("This story aims to give you a high-level view of the most important concepts and what commands are connected to it. I've written this as a set of self lived stories for mine and hopefully your amusement so you see when ignorance slowly turned into knowledge. Some of you might not know an IT career that didn't include containers and Docker, but I remember those monolithic applications and so does Pepperidge farm:")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/79fc3sbw00g9zbngda5g.jpg",alt:""}})]),e._v(" "),o("p",[e._v("Furthermore, we cover that shaky first week or maybe even the first project in which you are happy to "),o("em",[e._v("copy-paste")]),e._v(" docker commands. However, you really should consider learning it for real, especially if you want to write APIs or work with bigger solutions. Have a look at this series I wrote just for that:\n"),o("a",{attrs:{href:"https://dev.to/softchris/5-part-docker-series-beginner-to-master-3m1b",target:"_blank",rel:"noopener noreferrer"}},[e._v("5 part series on Docker"),o("OutboundLink")],1),e._v(" but for now, let's pretend it's Friday afternoon so keep reading 😃")]),e._v(" "),o("h2",{attrs:{id:"resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),o("p",[e._v("I end up mentioning some concepts in this article that is worth digging through further:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://azure.microsoft.com/en-gb/services/kubernetes-service/docker/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("A quick overview to Docker in the Cloud"),o("OutboundLink")],1),e._v("\nIf you are reading this you are looking for a primer on Docker but at some point, you need to know how you can keep using it in a production environment. That production environment is likely to be the Cloud at some point")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://dev.to/softchris/5-part-docker-series-beginner-to-master-3m1b?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("My 5 part series on Docker"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"monday-morning-tis-but-a-script"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#monday-morning-tis-but-a-script","aria-hidden":"true"}},[e._v("#")]),e._v(" Monday morning - tis but a script")]),e._v(" "),o("p",[e._v("Ok. So you arrive at your new project and you know absolutely nothing about Docker and they tell you to install Docker. You head to this page "),o("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install link"),o("OutboundLink")],1),e._v(" and depending on what OS you have you get different components installed.")]),e._v(" "),o("p",[e._v("At this point, you still don't understand what's going on but you have Docker installed.")]),e._v(" "),o("h3",{attrs:{id:"to-mock-or-not-to-mock-that-is-the-question"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#to-mock-or-not-to-mock-that-is-the-question","aria-hidden":"true"}},[e._v("#")]),e._v(" To Mock or not to Mock, that is the question?")]),e._v(" "),o("p",[e._v("Your new colleagues have most likely given you a script that is either a long script or a short script. It might look a bit alien but don't worry I got you. First time I got one of those scripts and it looked something like this:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker run -d -p 8000:3000 --name my-container --link mysql-db:mysql chrisnoring/node")])]),e._v(" "),o("p",[e._v("To be fair it was even longer. But even the above command would have been enough to confuse me at this point.")]),e._v(" "),o("p",[e._v("I ran the script and low and behold everything worked. When I say worked it spun up a bunch of endpoints that my frontend application ended up speaking with.")]),e._v(" "),o("blockquote",[o("p",[e._v("Great I thought. That's what you use it for, to mock away endpoints?")])]),e._v(" "),o("p",[e._v("At the time I was very frontend focused and in my universe I just wanted the backend people and myself to agree on a contract, a JSON schema that we could all say yes to, so I could work in peace. Of course, Docker is so much more than that but depending on what role you have in a team it may take you a while to realize its worth.")]),e._v(" "),o("h2",{attrs:{id:"i-ve-run-it-and-something-went-wrong"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-ve-run-it-and-something-went-wrong","aria-hidden":"true"}},[e._v("#")]),e._v(" I've run it and something went wrong")]),e._v(" "),o("p",[e._v("Running that script means it will sooner or later break and when it spits out an error you need to know WHY it breaks. That's what happened to me and that was my introduction to some basic concepts and some very useful commands. Ok, so I don't remember if it was my computer falling asleep or if something just errored out that brought down one or more of my endpoints. It was down and it wouldn't respond. At that point, I was told by my more Docker savvy colleagues,")]),e._v(" "),o("blockquote",[o("p",[e._v("find out what containers are up and which ones are down. Just restart the failing container.")])]),e._v(" "),o("p",[e._v("Of course, I was like a question mark. All I knew was how to copy paste a script in the terminal.")]),e._v(" "),o("p",[e._v("At that point I was told by a colleague to just run this command:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker ps")])]),e._v(" "),o("p",[e._v("Then I saw a list like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/qss97semkxqvg4v0m77a.png",alt:""}})]),e._v(" "),o("p",[e._v("You can also run:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker ps -a")])]),e._v(" "),o("p",[e._v("So you can get more details.")]),e._v(" "),o("p",[e._v("Then just type like this to bring up the container:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker run -p 8000:3000 chrisnoring/node")])]),e._v(" "),o("p",[e._v("I'm like uhu, "),o("em",[e._v("copying commands to notepad")]),e._v(". I suddenly knew how to list some containers and bring up one if it wasn't there. At that point, I was like, whats a container?")]),e._v(" "),o("p",[e._v("Ok so at that point I had learned:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("copy paste")]),e._v(", I could just copy paste that longer command that brought everything up")]),e._v(" "),o("li",[o("strong",[e._v("docker ps")]),e._v(", shows all running containers")]),e._v(" "),o("li",[o("strong",[e._v("docker ps -a")]),e._v(", shows all containers, even existed ones and some detailed info")]),e._v(" "),o("li",[o("strong",[e._v("docker run")]),e._v(", brings up a container with a few extra commands like the port and the name of an image")])]),e._v(" "),o("p",[e._v("It went on like that for the rest of the project. I mean I was front end focused, didn't feel like I needed Docker.")]),e._v(" "),o("h2",{attrs:{id:"i-don-t-understand-docker-can-you-teach-me"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#i-don-t-understand-docker-can-you-teach-me","aria-hidden":"true"}},[e._v("#")]),e._v(" I don't understand Docker, can you teach me?")]),e._v(" "),o("p",[e._v("I've managed to get through the above-mentioned project on just copy pasting commands, yes it can be done. After all, working pure frontend I didn't feel I needed to know. That can be true for certain cases but generally, knowledge is power.")]),e._v(" "),o("p",[e._v("So years after that I ended up on a project that was all microservices, like everywhere. Docker was used heavily and per usual I started working on the Frontend and then I decided I wanted to write some backend cause that was Node.js and Express and I knew both those techs. At that point, it wasn't enough to just copy paste some commands. I needed a number of endpoints to be up and running and to contain real data as well to mimic the real environment.")]),e._v(" "),o("blockquote",[o("p",[e._v("Suddenly it was more than just mocking endpoints it was about creating an environment that was like the production environment.")])]),e._v(" "),o("p",[e._v("First thing I said was how does this work, how do we spin up our services?")]),e._v(" "),o("blockquote",[o("p",[e._v("Just type "),o("code",[e._v("docker-compose up")]),e._v(" and you'll be fine, was the response")])]),e._v(" "),o("p",[e._v("I was like eeh.. Docker, Docker Compose, same thing, different thing, where is that long script I'm used to, to get everything up and running?")]),e._v(" "),o("blockquote",[o("p",[e._v("Narrator: there was no long script.")])]),e._v(" "),o("p",[e._v("I don't understand what does this do. Why Docker Compose why, not Docker something something, I said to a colleague?")]),e._v(" "),o("blockquote",[o("p",[e._v("Let's start from the beginning my colleague said. Let's start with Docker from the beginning.")])]),e._v(" "),o("h3",{attrs:{id:"the-basics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-basics","aria-hidden":"true"}},[e._v("#")]),e._v(" The basics")]),e._v(" "),o("p",[e._v("First thing you need to know is that there is a thing called images, containers and a "),o("code",[e._v("Dockerfile")]),e._v(". You build your images from a Dockerfile with a "),o("code",[e._v("docker build")]),e._v(" command. The "),o("code",[e._v("Dockerfile")]),e._v(" acts like a recipe for your image, what OS you need, what libraries to install, what variables to use and so on. At that point, he showed me a "),o("code",[e._v("Dockerfile")]),e._v(". Of course, I don't remember exactly how it looked but I'll show you something similar:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('// Dockerfile\n\nFROM node:latest\n\nWORKDIR /app\n\nCOPY . .\n\nENV PORT=3000\n\nRUN npm install\n\nEXPOSE 3000\n\nENTRYPOINT ["node", "app.js"]\n')])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br"),o("span",{staticClass:"line-number"},[e._v("6")]),o("br"),o("span",{staticClass:"line-number"},[e._v("7")]),o("br"),o("span",{staticClass:"line-number"},[e._v("8")]),o("br"),o("span",{staticClass:"line-number"},[e._v("9")]),o("br"),o("span",{staticClass:"line-number"},[e._v("10")]),o("br"),o("span",{staticClass:"line-number"},[e._v("11")]),o("br"),o("span",{staticClass:"line-number"},[e._v("12")]),o("br"),o("span",{staticClass:"line-number"},[e._v("13")]),o("br"),o("span",{staticClass:"line-number"},[e._v("14")]),o("br"),o("span",{staticClass:"line-number"},[e._v("15")]),o("br")])]),o("p",[e._v("Here you can see from the top how we first choose an OS image called Node, with the "),o("code",[e._v("FROM")]),e._v(" command. This is Ubuntu with Node.js installed. It will be pulled down from Docker Hub, which is a central repository:")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/lvgvcqmw4irh5cp5u27p.png",alt:""}})]),e._v(" "),o("p",[e._v("Next is setting a working directory in the app with WORKDIR.")]),e._v(" "),o("p",[e._v("After that, we copy the files from where we are located to the docker container with COPY. Thereafter we set an environment variable with ENV.")]),e._v(" "),o("p",[e._v("Next up we invoke a command in the terminal with RUN, which in this case install every library specified in the package.json file.")]),e._v(" "),o("p",[e._v("Next, to last, we open up a port 3000 so we can communicate with the container from the outside, with EXPOSE.")]),e._v(" "),o("p",[e._v("Lastly, we start up a program with ENTRYPOINT.")]),e._v(" "),o("p",[e._v("That was the "),o("code",[e._v("Dockerfile")]),e._v(", let's build our image. We do that with the "),o("code",[e._v("docker build")]),e._v(", like so:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker build -t chrisnoring/node-app:latest .")])]),e._v(" "),o("p",[e._v("The above does two things, the "),o("code",[e._v("-t")]),e._v(" tags the image with a name "),o("code",[e._v("chrisnoring/node-app:latest")]),e._v(" and secondly we point out where our Dockerfile is located with the "),o("code",[e._v(".")]),e._v(", at the end. So at this point, it reads through the Dockerfile and pulls down the OS and start adding each command as a layer on top of the image. We call this a layered file system. We can see this in action below:")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/xgz8iqc5z4u321lfxvxb.png",alt:""}})]),e._v(" "),o("p",[e._v("We see two things that point this out, one is "),o("code",[e._v("Step 1/7")]),e._v(". It executes every command in the Dockerfile as a step. Thereafter it starts saying "),o("code",[e._v("Removing intermediate container...")]),e._v(". This means that it creates a temporary container from the previous image layer ( your latest instruction ). Then it starts to remove each of the layers when it's done with them. The last layer is tagged with the name you give it in the "),o("code",[e._v("docker build")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"run-stop-a-container"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-stop-a-container","aria-hidden":"true"}},[e._v("#")]),e._v(" Run/Stop a container")]),e._v(" "),o("p",[e._v("Ok, now that we have an image we have something that contains all we need, the OS, env files, our app and so on. But we need to create a container from our image. We do that by calling:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker run -p 8005:3000 chrisnoring/node-app")])]),e._v(" "),o("p",[e._v("What the above does is to first create an opening between our side and the container with "),o("code",[e._v("-p")]),e._v(" and the syntax looks like "),o("code",[e._v("-p [our port]:[container port]")]),e._v(". Then we say what image, that is "),o("code",[e._v("chrisnoring/node-app")]),e._v(".")]),e._v(" "),o("p",[e._v("This brings up a container that we are able to navigate with from port "),o("code",[e._v("8005")]),e._v(", like so:\n"),o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/6x34rdzlxmctl0615h19.png",alt:""}})]),e._v(" "),o("p",[e._v("Ok, we learned about "),o("code",[e._v("docker run")]),e._v(", what about starting and stopping?")]),e._v(" "),o("p",[e._v("Well if you already have a container that's up and running you can stop it with "),o("code",[e._v("docker stop [container id]")]),e._v(". The easiest way is to find it's container id with "),o("code",[e._v("docker ps")]),e._v(". You don't need to enter full container id, just the 3-4 first characters. This should bring down your container. At this point, it still exists so you easily start it with "),o("code",[e._v("docker start [container id]")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"docker-compose"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Compose")]),e._v(" "),o("blockquote",[o("p",[e._v("Ok, so you taught me the basics of Docker with images, containers, and Dockerfiles. What about this Docker Compose?")])]),e._v(" "),o("p",[e._v("Well, Docker Compose is a tool you can use when you have many containers. To use it you need to define a "),o("code",[e._v("docker-compose.yml")]),e._v(". It's where you specify all your services, how to build them, how they relate, what variables they need and so on. You still use Dockerfiles though for each service but Docker Compose is a way to perform things on a group of images and containers.")]),e._v(" "),o("p",[e._v("This conversation carried out over the course of many weeks and I learned a whole lot in the process... 😃")]),e._v(" "),o("p",[e._v("## Summary\nAs you can see I was once at a place where I first wasn't using Docker at all. Then I came to use it as just commands I was copy-pasting and finally, I saw the light and realized I needed it. Which lead to this to 5 part guide eventually.")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://dev.to/softchris/5-part-docker-series-beginner-to-master-3m1b",target:"_blank",rel:"noopener noreferrer"}},[e._v("5 part Docker series"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("I hope the journey I told has been useful in teaching you what not learning a technology properly can have for consequences and that finally embracing it will mean you add a valuable tool to your toolset. I know many of you will or is probably following my footsteps, to some extent. So please read my 5 part series and I promise you, you will see the light")])])},[],!1,null,null,null);t.default=n.exports}}]);