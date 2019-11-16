(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{270:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"learn-kubernetes-from-the-beginning-part-iv-autoscaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn-kubernetes-from-the-beginning-part-iv-autoscaling","aria-hidden":"true"}},[e._v("#")]),e._v(" Learn Kubernetes - from the beginning, part IV, autoscaling")]),e._v(" "),a("p",[e._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/8fku1pggqh7odrul66fc.jpg",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("This fourth part aims to show you how you can utilize auto-scaling as your scaling strategy. We've shown you scaling with a "),a("em",[e._v("desired state")]),e._v(" but this is probably even more powerful")])]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-one.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part I - from the beginning, Part I, Basics, Deployment and Minikube"),a("OutboundLink")],1),e._v("\nIn this part, we cover why Kubernetes, some history and some basic concepts like deploying, Nodes, Pods.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-two.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part II - introducing Services and Labeling"),a("OutboundLink")],1),e._v("\nIn this part, we deepen our knowledge on Pods and Nodes. We also introduce Services and labeling using labels to query our artifacts.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-three.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part III - Scaling"),a("OutboundLink")],1),e._v("\nIn this part, we look at scaling using "),a("em",[e._v("desired")]),e._v(" state. We specify how many Pods we want and let Kubernetes do the heavy lifting in terms of ensuring that your Pods are scaled up to the desired number but also maintaining it by using something called self-healing.")])]),e._v(" "),a("li",[a("p",[e._v("Part IV - Auto scaling "),a("strong",[e._v("We are here")])])])]),e._v(" "),a("p",[e._v("In this article, we will cover the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Why auto scaling")]),e._v(", we will discuss different scenarios in which it makes sense to rely on "),a("em",[e._v("auto scaling")]),e._v(" over defining it statically like we do with "),a("em",[e._v("desired state")])]),e._v(" "),a("li",[a("strong",[e._v("How")]),e._v(", lets talk about Horizontal Auto Scaling the concept/feature that allows us to scale in an elastic way.")]),e._v(" "),a("li",[a("strong",[e._v("Lab - lets scale")]),e._v(", we will look at how to actually set this up in "),a("code",[e._v("kubectl")]),e._v(" and simulate a ton of incoming requests. We will then inspect the results and see that Kubernetes acts the way we think")])]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Horizontal Pod Auto scale"),a("OutboundLink")],1),e._v(" This describes in detail how everything works. On a flow as well as API level")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/free/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Free Azure Account"),a("OutboundLink")],1),e._v(" If you want to try out AKS, Azure Kubernetes Service, you will need a free Azure account")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes.io"),a("OutboundLink")],1),e._v("\nOne of the best resources to learn about Kubernetes is at this official Kubernetes site by Google.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/topic/kubernetes/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes overview"),a("OutboundLink")],1),e._v(" An overview of Kubernetes, all its parts and how it works")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/services/kubernetes-service/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes in the Cloud"),a("OutboundLink")],1),e._v(" Do you feel you know everything about Kubernetes already and just want to learn how to use a managed service? Then this link is for you")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/aks/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation on AKS, Azure Kubernetes Service"),a("OutboundLink")],1),e._v("\nAzure Kubernetes Service, a managed Kubernetes")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/best-practices?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Best practices on AKS"),a("OutboundLink")],1),e._v(" You already know AKS and want to learn how to use it better?")])]),e._v(" "),a("h2",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why","aria-hidden":"true"}},[e._v("#")]),e._v(" Why")]),e._v(" "),a("p",[e._v("So in our last part, we talked about "),a("em",[e._v("desired state")]),e._v(". That's an OK strategy until something unforeseen happens and suddenly you got a great influx of traffic. This is likely to happen to businesses such as e-commerce around a big sale or a ticket vendor when you release tickets to a popular event.")]),e._v(" "),a("p",[e._v("Events like these are an anomaly which forces you to quickly scale up. The other side of the coin though is that at some point you need to scale down or you suddenly have overcapacity you might need to pay for. What you really want is for the scaling to act in an "),a("em",[e._v("elastic")]),e._v(" way so it scaled up when you need it to and scales down when there is less traffic.")]),e._v(" "),a("h2",{attrs:{id:"how"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how","aria-hidden":"true"}},[e._v("#")]),e._v(" How")]),e._v(" "),a("p",[e._v("Horizontal auto-scaling, what does it mean?")]),e._v(" "),a("p",[e._v("It's a concept in Kubernetes that can scale the number of Pods we need. It can do so on a "),a("code",[e._v("replication controller")]),e._v(", "),a("code",[e._v("deployment")]),e._v(" or "),a("code",[e._v("replica set")]),e._v(".  It usually looks at CPU utilization but can be made to look at other things by using something called "),a("code",[e._v("custom metrics support")]),e._v(", so it's customizable.")]),e._v(" "),a("p",[e._v("It consists of two parts a "),a("code",[e._v("resource")]),e._v(" and a "),a("code",[e._v("controller")]),e._v(". The "),a("code",[e._v("controller")]),e._v(" checks utilization, or whatever metric you decided, to ensure that the number of replicas matches your specification. If need be it spins up more Pods or removes them. The default is checking every "),a("code",[e._v("15")]),e._v(" seconds but you can change that by looking at a flag called "),a("code",[e._v("--horizontal-pod-autoscaler-sync-period")]),e._v(".")]),e._v(" "),a("p",[e._v("The underlying algorithm that decides the number of replicas looks like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("desiredReplicas = ceil[currentReplicas * ( currentMetricValue / desiredMetricValue )]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"lab-lets-scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab-lets-scale","aria-hidden":"true"}},[e._v("#")]),e._v(" Lab - lets scale")]),e._v(" "),a("p",[e._v("Ok, the first thing we need to do is to scale our deployment to use something other than "),a("em",[e._v("desired state")]),e._v(".")]),e._v(" "),a("p",[e._v("We have two things we need to specify when we do autoscaling:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("min/max")]),e._v(", we define a minimum and maximum in terms of how many Pods we want")]),e._v(" "),a("li",[a("strong",[e._v("CPU")]),e._v(", in this version we set a certain CPU utilization percentage. When it goes above that it scales out as needed. Think of this one as an "),a("code",[e._v("IF")]),e._v(" clause, if CPU value greater than the threshold, try to scale")])]),e._v(" "),a("h3",{attrs:{id:"set-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up","aria-hidden":"true"}},[e._v("#")]),e._v(" Set up")]),e._v(" "),a("p",[e._v("Before we can attempt our scaling experiment we need to make sure we have the correct add-ons enabled. You can easily see what add-ons you have enabled by typing:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("minikube addons list\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/dyxueq0x7j2q0ybfgxq4.png",alt:""}})]),e._v(" "),a("p",[e._v("If it looks like the above we are all good. Why am I saying that? Well, what we need, to be able to auto-scale, is that "),a("code",[e._v("heapster")]),e._v(" and "),a("code",[e._v("metrics-server")]),e._v(" add ons are enabled.")]),e._v(" "),a("p",[e._v("Heapster enables Container Cluster Monitoring and Performance Analysis.")]),e._v(" "),a("p",[e._v("Metrics server provide metrics via the resource metrics API. Horizontal Pod Autoscaler uses this API to collect metrics")]),e._v(" "),a("p",[e._v("We can easily enable them both with the following commands (we will need to for auto-scaling to show correct data):")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("minikube addons enable heapster\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("and")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("minikube addons enable metrics-server\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("We need to do one more thing, namely to "),a("code",[e._v("enable")]),e._v(" "),a("em",[e._v("Custom metrics")]),e._v(", which we do by starting "),a("code",[e._v("minikube")]),e._v(" with such a flag like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("minikube start --extra-config kubelet.EnableCustomMetrics=true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Ok, now we are good to go.")]),e._v(" "),a("h3",{attrs:{id:"running-the-experiment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-experiment","aria-hidden":"true"}},[e._v("#")]),e._v(" Running the experiment")]),e._v(" "),a("p",[e._v("We need to do the following to run our experiment")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Create")]),e._v(" a deployment")]),e._v(" "),a("li",[a("strong",[e._v("Apply")]),e._v(" autoscaling")]),e._v(" "),a("li",[a("strong",[e._v("Bombard")]),e._v(" the deployment with incoming requests")]),e._v(" "),a("li",[a("strong",[e._v("Watch")]),e._v(" the auto scaling how it changes")])]),e._v(" "),a("h4",{attrs:{id:"create-a-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-deployment","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a deployment")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run php-apache --image=k8s.gcr.io/hpa-example --requests=cpu=200m --expose --port=80\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Above we are creating a deployment "),a("code",[e._v("php-apache")]),e._v(" and expose it as a service on port "),a("code",[e._v("80")]),e._v(". We can see that we are using the image "),a("code",[e._v("k8s.gcr.io/hpa-example")])]),e._v(" "),a("p",[e._v("It should tell us the following:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("service/php-apache created\ndeployment.apps/php-apache created\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h4",{attrs:{id:"autoscaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoscaling","aria-hidden":"true"}},[e._v("#")]),e._v(" Autoscaling")]),e._v(" "),a("p",[e._v("Next up we will use the command "),a("code",[e._v("autoscale")]),e._v(". We will use it like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("It should say something like:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("horizontalpodautoscaler.autoscaling/php-apache autoscaled\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Above we are applying the auto-scaling on the deployment "),a("code",[e._v("php-apache")]),e._v(" and as you can see we are applying both "),a("code",[e._v("min-max")]),e._v(" and "),a("code",[e._v("cpu")]),e._v(" based auto scaling which means we give a rule for how the auto scaling should happen:")]),e._v(" "),a("blockquote",[a("p",[e._v("If CPU load is "),a("code",[e._v(">= 50%")]),e._v(" create a new Pod, but only maximum 10 Pods. If the load is low go back gradually to one Pod")])]),e._v(" "),a("h4",{attrs:{id:"bombard-with-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bombard-with-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Bombard with requests")]),e._v(" "),a("p",[e._v("Next step is to send a ton of requests against our deployment and see our auto-scaling doing its work. So how do we do that?")]),e._v(" "),a("p",[e._v("First off let's check the current status of our "),a("em",[e._v("horizontal pod auto-scaler")]),e._v(" or "),a("code",[e._v("hpa")]),e._v(" for short by typing:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get hpa\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This should give us something like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/0pxx5qqkkcq2buz6wxfd.png",alt:""}})]),e._v(" "),a("p",[e._v("The above shows us two pieces of information. The first is the "),a("code",[e._v("TARGETS")]),e._v(" column which shows our CPU utilization, "),a("code",[e._v("actual usage/trigger value")]),e._v(". The next bit of interest is the column "),a("code",[e._v("REPLICAS")]),e._v(" that shows us the number of copies, which is "),a("code",[e._v("1")]),e._v(" at the moment.")]),e._v(" "),a("p",[e._v("For our next trick open up a separate terminal tab. We need to do is to set things up so we can send a ton of requests.")]),e._v(" "),a("p",[e._v("Next up we create a container using this command:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run -i --tty load-generator --image=busybox /bin/sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("This should take us to a prompt within the container. This is followed by:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("while true; do wget -q -O- http://php-apache.default.svc.cluster.local; done\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The command above should result in something looking like this.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/55so6diaa2y7h3jai792.png",alt:""}})]),e._v(" "),a("p",[e._v("This will just go on and on until you hit "),a("code",[e._v("CTRL+C")]),e._v(", but leave it be for now.")]),e._v(" "),a("p",[e._v("This throws a ton on requests in "),a("code",[e._v("while true")]),e._v(" loop.")]),e._v(" "),a("blockquote",[a("p",[e._v("I thought "),a("code",[e._v("while true")]),e._v(" loops were bad?")])]),e._v(" "),a("p",[e._v("They are but we are only going to run it for a minute so that the auto scaling can happen. Yes, the CPU will sound a lot but don't worry 😃")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/5bcbz91175tjpj461hh8.gif",alt:""}})]),e._v(" "),a("p",[e._v("Let this go on for a minute or so, then enter the following command into the first terminal tab (not the one running the requests), like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get hpa\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("It should now show something like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/szvti1xjqkgp10xa5e73.png",alt:""}})]),e._v(" "),a("p",[e._v("As you can see from the above the column "),a("code",[e._v("TARGETS")]),e._v(" looks different and now says "),a("code",[e._v("339%/50%")]),e._v(" which means the current load on the CPU and "),a("code",[e._v("REPLICAS")]),e._v(" is "),a("code",[e._v("7")]),e._v(" which means it has gone from 1 to 7 replicas. So as you can see we have been bombarding it pretty hard.")]),e._v(" "),a("p",[e._v("Now go to the second terminal and hit "),a("code",[e._v("CTRL+C")]),e._v(" or you will have a situation like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/66wm4drplfxlcuspf90k.gif",alt:""}})]),e._v(" "),a("p",[e._v("It will actually take a few minutes for Kubernetes to cool off and get the values back to normal. A first look at the Pods situation shows us the following:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get pods\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/4ikq562c45z7k65su7j9.png",alt:""}})]),e._v(" "),a("p",[e._v("As you can see we have 7 Pods up and running still but let's wait a minute or two and it should look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/39x2p1dg3f2i3nwg9jl4.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok, now we are back to normal.")]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("Now we did some great stuff in this article. We managed to set up auto-scaling, bombard it with requests and without frying our CPU, hopefully 😉")]),e._v(" "),a("p",[e._v("We also managed to learn some new Kubernetes commands while at it and got to see "),a("em",[e._v("auto-scaling")]),e._v(" at work giving us new Pods based on our specification.")])])},[],!1,null,null,null);t.default=n.exports}}]);