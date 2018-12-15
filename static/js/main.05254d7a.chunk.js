(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),s=t.n(r),c=(t(15),t(1)),m=t(2),i=t(4),o=t(3),u=t(5),d=t(8),h=function(e){var a=e.me;return n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))," ")," ",n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h2",{className:"responsive-headline",style:{color:"var(--fire-yellow)"}},"My name is ",a.firstshort," ",a.last),n.a.createElement("h3",{style:{color:"var(--star)"}},"I'm a ",n.a.createElement("span",null,a.role)," based in Innsbruck. I create engaging web applications for companies and individuals. \xa0",n.a.createElement("a",{className:"smoothscroll",href:"#about",style:{color:"var(--fire-yellow)"}},"Scroll Down "),"and learn more ",n.a.createElement("a",{className:"smoothscroll",href:"#about"},"about me")," and ",n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"my work"),"."),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/phil.lauffenburger"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/philip-lauffenburger-80380a32/"},n.a.createElement("i",{className:"fa fa-linkedin"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/old_man_lauffen/"},n.a.createElement("i",{className:"fa fa-instagram"})))))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"}))))},p=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={showImg:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.me,t=this.state.showImg;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("div",{className:"profile-pic"})),n.a.createElement("div",{className:"three columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,a.first," ",a.last),n.a.createElement("br",null),n.a.createElement("span",null,a.address,n.a.createElement("br",null),a.address2),n.a.createElement("br",null),n.a.createElement("span",null,a.phone),n.a.createElement("br",null),n.a.createElement("span",null,a.email))),n.a.createElement("div",{className:"six columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("div",{className:"follow-mountain"}),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#resume"},"Developer")),n.a.createElement("li",{onClick:function(){return e.setState({showImg:!t})}},n.a.createElement("a",null,"Climber"))),n.a.createElement("br",null),n.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Let's Talk"),n.a.createElement("p",{className:"text-right",style:{pointerEvents:"none"}},"I am an American living in Innsbruck with my wonderful Norwegian wife. I feel as though I have found paradise. I like finding interesting problems and solving them whether in my personal or professional life. This translates easily to both web development problems, as well as rock climbing. I believe in challenging myself every day.")))," ",n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#resume"},n.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.a.Component),E=["#FDFB33","#030200","#292F3D","#6D9EA7","#572005","#DEF2C8","#C5DAC1","#D8AA96","#F7B1AB"],f=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"inMotion",value:function(e){var a=this,t=this.props.skill;if(this.state.mouseOver){var l=function(e){var a=e;return{stateSkill:a+=Math.ceil(10*Math.random()),color:E[Math.floor(Math.random()*E.length)]}}(t),n=l.stateSkill,r=l.color;this.setState({stateSkill:n,color:r,mouseOver:!0},function(){return setTimeout(function(){return a.inMotion()},1e3)})}else this.setState({mouseOver:!1,stateSkill:null,color:null})}},{key:"render",value:function(){var e=this,a=this.props,t=a.name,l=a.skill,r=this.state,s=r.stateSkill,c=r.color;return n.a.createElement("li",{onMouseOver:function(){e.setState({mouseOver:!0},function(){return e.inMotion()})},onMouseOut:function(){return e.setState({mouseOver:!1})}},n.a.createElement("span",{className:"bar-expand",style:{width:(s||l)+"%",backgroundColor:c||"#313131"}}),n.a.createElement("em",null,t))}}]),a}(n.a.Component),g=function(){return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,"Aerospace Engineering"),n.a.createElement("p",{className:"info"},"Bachelor of Science ",n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},"May 2011")),n.a.createElement("p",null,"Why? Because, space is cool. I learned ",n.a.createElement("span",{className:"highlight"},"MATLAB, analysis strategies, and how to hurl chunks of metal out of the atmosphere")," and into a stable, geo-stationary orbit. Does this apply to software/web development? Sure does. Ask me how.")))," ",n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,"Self-taught Web Development"),n.a.createElement("p",{className:"info"},n.a.createElement("em",{className:"date"},"July 2015")),n.a.createElement("p",null,"I taught myself web development by ",n.a.createElement("span",{className:"highlight"},"reading books")," about it, and building my own apps. That experience taught me that I can take any ",n.a.createElement("span",{className:"highlight"},"problem"),", no matter how ",n.a.createElement("span",{className:"highlight"},"astronomical"),", and ",n.a.createElement("span",{className:"highlight"},"break it down")," into something that I can do ",n.a.createElement("span",{className:"highlight"},"now"),".")))," ")," ")," ",n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",{style:{whiteSpace:"nowrap"}},n.a.createElement("span",null,"Technical Experience"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,"Manufacturing Engineer/Production Floor Manager"),n.a.createElement("p",{className:"info"},"SNC & LHDC ",n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},"May 2011 - July 2016")),n.a.createElement("p",null,"I directed manufacturing ",n.a.createElement("span",{className:"highlight"},"satellite components.")," It was complicated. However, it was ultimately unsatisfying ",n.a.createElement("span",{className:"highlight"},"creatively"),", and didn't give me the ",n.a.createElement("span",{className:"highlight"},"flexibility")," I crave.")))," ",n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,"Meteor & React Developer"),n.a.createElement("p",{className:"info"},"Climbz",n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},"July 2016 - May 2017")),n.a.createElement("p",null,"Climbz gave me a shot for no good reason. Thanks, Climbz. We built a prototype ",n.a.createElement("span",{className:"highlight"},"meteor")," app, and then migrated it to ",n.a.createElement("span",{className:"highlight"},"react and react-native"),".")))," ",n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,"Full Stack Web Developer"),n.a.createElement("p",{className:"info"},"Grio",n.a.createElement("span",null,"\u2022")," ",n.a.createElement("em",{className:"date"},"May 2017 - Present")),n.a.createElement("p",null,"Grio is an awesome place to work. I've been on at least six different projects, each with their own client and technical challenge. \xa0 I've built ",n.a.createElement("span",{className:"highlight"},"react, angular, jquery")," front-ends, using ",n.a.createElement("span",{className:"highlight"},"django, nodejs, and rails")," back-ends, with ",n.a.createElement("span",{className:"highlight"},"mysql, psql, and redis")," persistence layers. Not in that order.")))," ")," ")," ",n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",null,"My main focus has been on a fullstack ",n.a.createElement("span",{className:"highlight"},"react")," frontend, with either a ",n.a.createElement("span",{className:"highlight"},"node/mongo/redis")," backend or a ",n.a.createElement("span",{className:"highlight"},"django/SQL")," backend. I'm adept at various methods of deployment including production level familiarity with ",n.a.createElement("span",{className:"highlight"},"docker containers")," in ",n.a.createElement("span",{className:"highlight"},"AWS, pm2 in AWS, and heroku"),". I'm a ",n.a.createElement("span",{className:"highlight"},"capable")," one man/architect team at the full ",n.a.createElement("span",{className:"highlight"},"conceptualizing, designing, developing and devops")," lifecycles of an app, but also used to working in small, agile teams."),n.a.createElement("div",{className:"bars twelve columns"},n.a.createElement("ul",{className:"skills"},[{name:"reactjs",skill:75},{name:"angular",skill:45},{name:"nodejs",skill:65},{name:"django",skill:60},{name:"rails",skill:27},{name:"mongo",skill:52},{name:"react-native",skill:47},{name:"sql",skill:55},{name:"redis",skill:25}].sort(function(e,a){return e.skill>a.skill?-1:1}).map(function(e){return n.a.createElement(f,e)}))),n.a.createElement("div",{className:"additional"},n.a.createElement("p",{className:"responsive-headline"},"In addition I have implemented the following technologies in at least one project:"),n.a.createElement("ul",{className:"square"},["flutter","docker","ci/cd","heroku","FB Chatbot APIs","RabbitMQ/Celery Async task manager","Google Cloud Hosting","Google Maps API","chartjs","Firebase"].map(function(e){return n.a.createElement("li",{className:"pull-left first"},e)}))))," ",n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},n.a.createElement("i",{className:"icon-down-circle"}))))," ")},N=function(e){var a=e.url,t=e.header,l=e.text,r=e.index,s=e.xTransform,c=e.yTransform;return n.a.createElement("div",{className:"columns portfolio-item ".concat(s||c?"in-motion":""),style:{transform:"translate(".concat(s,"px, ").concat(c,"px)")}},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:"#modal-0".concat(r),title:!0},n.a.createElement("img",{alt:"",src:a}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,t),n.a.createElement("p",null,l))),n.a.createElement("div",{className:"link-icon"},n.a.createElement("i",{className:"icon-plus"})))))},v=function(e){return Math.floor((e+1)/4*w)%w},b=function(e){var a=.1*k;return e>3&&(a=.6*k),a},w=1020,k=600,y=[{header:"BGRoll",text:"Statistics/Die Roll Log",url:"images/portfolio/bgroll.png",key:"b"},{header:"CLICC",text:"Chemical Database/Analysis",url:"images/portfolio/clicc.png",key:"c"},{header:"Vivibot",text:"FB ChatBot & CMS",url:"images/portfolio/vivi.png",key:"f"},{header:"Guidings",text:"Map/Video-based Recommendation Finder",url:"images/portfolio/guidings.png",key:"g"},{header:"Climbz",text:"Climbing Gym Management and User App",url:"images/portfolio/climbz.png",key:"cl"},{header:"Grio",text:"Grio Homepage",url:"images/portfolio/grio.png",key:"gr"},{header:"Freedirt",text:"Free Camping Finder",url:"images/portfolio/freedirt.png",key:"fd"},{header:"LHDC site",text:"Aerospace FSM Showcase Site",url:"images/portfolio/lhdc.png",key:"l"}],j=y.map(function(e){return e.key}),C=function(e){var a={};y.forEach(function(e){var t=e.key;return a[t]={i:0,j:0}});for(var t=0;t<e.length;t++)for(var l=0;l<e[t].length;l++)e[t][l]&&(a[e[t][l]]={i:t,j:l});return a},S=function(e){var a=e.keys,t={};return a.forEach(function(e,a){t[e]={xTransform:v(a),yTransform:b(a)}}),{elementPos:t}}({keys:j}),M=function(e){function a(){var e,t;Object(c.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={initialGrid:S,initialKeyMap:C(S),shift:!0},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.makeMotion(this.state.initialGrid)}},{key:"makeMotion",value:function(e){var a=this,t=this.state,l=t.elementPos;t.shift?(l=function(e){e.elementPos;var a=e.keys.sort(function(){return Math.round(Math.random())?1:-1}),t={};return a.forEach(function(e,a){t[e]={xTransform:v(a),yTransform:b(a)}}),{elementPos:t}}({elementPos:l||e,keys:j}).elementPos,this.setState({elementPos:l},function(){return a.timer=setTimeout(function(){return a.makeMotion()},5e3)})):clearTimeout(this.timer)}},{key:"toggleShifting",value:function(e){var a=this;this.setState({shift:e},function(){a.state.shift?a.timer=setTimeout(function(){return a.makeMotion()},5e3):clearTimeout(a.timer)})}},{key:"render",value:function(){var e=this,a=this.state,t=a.elementPos,l=a.initialKeyMap;return t?n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},n.a.createElement("h1",null,"Take a gander at a few of my previous projects"),y.map(function(a,r){return n.a.createElement("div",{key:a.key,onMouseEnter:function(){return e.toggleShifting(!1)},onMouseLeave:function(){return e.toggleShifting(!0)}},n.a.createElement(N,Object.assign({},a,{index:r+1,xTransform:t[a.key].xTransform-l[a.key].i,yTransform:t[a.key].yTransform-l[a.key].j})))}))," "):null}}]),a}(n.a.Component),x=function(){return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement(M,{key:"pp"}),n.a.createElement("div",{className:"three columns"}),n.a.createElement("div",{className:"6 columns main-col additional"},n.a.createElement("p",{className:"responsive-headline"},"In addition, I have worked on a variety of short projects like:"),n.a.createElement("ul",{className:"square"},[n.a.createElement("span",null,"Lightform ",n.a.createElement("a",{href:"https://lightform.com"},"E-commerce/Showcase Site")),n.a.createElement("span",null,"BGRoll Mobile: React-Native Mobile Application"),n.a.createElement("span",null,"Guidings Mobile: Native Android Application"),n.a.createElement("span",null,"Pablo Designs ",n.a.createElement("a",{href:"https://pablodesigns.com"},"E-commerce/Showcase Site")),n.a.createElement("span",null,"moment (Grio Internal Time tracking software [angularjs, rails, mysql])"),n.a.createElement("span",null,"Ewoolutions static concept site ",n.a.createElement("a",{href:"https://protected-plains-5382.herokuapp.com/"},"Ewoolutions")),n.a.createElement("span",null,"...and an innummerable number of personal/non-published projects (where innummerable ~= 20)")].map(function(e){return n.a.createElement("li",{className:"pull-left first"},e)}))),n.a.createElement("div",{id:"modal-01",className:"popup-modal mfp-hide"},n.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/bgroll_2.png",alt:!0}),n.a.createElement("div",{className:"description-box"},n.a.createElement("h4",null,"BGRoll"),n.a.createElement("p",null,"Statistic tracker, die roll logger, email sender, and integrity watchdog for play by email games."),n.a.createElement("span",{className:"categories"},n.a.createElement("i",{className:"fa fa-tag"}),"reactjs, nodejs, mongo, chartjs, mailgun, heroku")),n.a.createElement("div",{className:"link-box"},n.a.createElement("a",{href:"https://www.bgroll.com"},"Check it out"),n.a.createElement("a",{className:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-02",className:"popup-modal mfp-hide"},n.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/clicc_2.png",alt:!0}),n.a.createElement("div",{className:"description-box"},n.a.createElement("h4",null,"Clicc"),n.a.createElement("p",null,"Chemical Life Cycle Analysis, Risk Assessment, SDS, and Product Impact Analyses."),n.a.createElement("span",{className:"categories"},n.a.createElement("i",{className:"fa fa-tag"}),"reactjs, django, psql, docker, aws")),n.a.createElement("div",{className:"link-box"},n.a.createElement("a",{href:"https://clicc.net"},"Check it out"),n.a.createElement("a",{className:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-03",className:"popup-modal mfp-hide"},n.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/cms.png",alt:!0}),n.a.createElement("div",{className:"description-box"},n.a.createElement("h4",null,"Vivibot"),n.a.createElement("p",null,"Chatbot and associated CMS aimed at young adult cancer survivors."),n.a.createElement("span",{className:"categories"},n.a.createElement("i",{className:"fa fa-tag"}),"nodejs, facebook-chatbot, reactjs, aws, circleci, redis")),n.a.createElement("div",{className:"link-box"},n.a.createElement("a",{href:"https://www.facebook.com/hiVivibot/"},"Chat with my Creation"),n.a.createElement("a",{className:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-04",className:"popup-modal mfp-hide"},n.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/guidings_2.png",alt:!0}),n.a.createElement("div",{className:"description-box"},n.a.createElement("h4",null,"Guidings"),n.a.createElement("p",null,"Map-based video recommendation service (defunct)"),n.a.createElement("span",{className:"categories"},n.a.createElement("i",{className:"fa fa-tag"}),"reactjs, firebase, heroku, googlemaps")),n.a.createElement("div",{className:"link-box"},n.a.createElement("a",{href:"http://guidings.herokuapp.com"},"Check it out"),n.a.createElement("a",{className:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-05",className:"popup-modal mfp-hide"},n.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/climbz.png",alt:!0}),n.a.createElement("div",{className:"description-box"},n.a.createElement("h4",null,"Climbz"),n.a.createElement("p",null,"Gym climb tracking and competition app (defunct)"),n.a.createElement("span",{className:"categories"},n.a.createElement("i",{className:"fa fa-tag"}),"reactjs, mysql, meteorjs")),n.a.createElement("div",{className:"link-box"},n.a.createElement("a",null,"Nothing to see anymore, sadly"),n.a.createElement("a",{className:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-06",className:"popup-modal mfp-hide"},n.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/rocket.png",alt:!0}),n.a.createElement("div",{className:"description-box"},n.a.createElement("h4",null,"Grio"),n.a.createElement("p",null,"Grio client-facing homepage"),n.a.createElement("span",{className:"categories"},n.a.createElement("i",{className:"fa fa-tag"}),"CMS, jquery, greensockJS")),n.a.createElement("div",{className:"link-box"},n.a.createElement("a",{href:"https://grio.com"},"Take a peek"),n.a.createElement("a",{className:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-07",className:"popup-modal mfp-hide"},n.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/freedirt_2.png",alt:!0}),n.a.createElement("div",{className:"description-box"},n.a.createElement("h4",null,"Freedirt"),n.a.createElement("p",null,"Free camping finder. My first app ever. It doesn't even break."),n.a.createElement("span",{className:"categories"},n.a.createElement("i",{className:"fa fa-tag"}),"ejs, mongo, nodejs, jquery, heroku")),n.a.createElement("div",{className:"link-box"},n.a.createElement("a",{href:"https://freedirt.herokuapp.com/#8/40.000/-105.000"},"Check it out"),n.a.createElement("a",{className:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-08",className:"popup-modal mfp-hide"},n.a.createElement("img",{className:"scale-with-grid",src:"images/portfolio/lhdc_2.png",alt:!0}),n.a.createElement("div",{className:"description-box"},n.a.createElement("h4",null,"LHDC"),n.a.createElement("p",null,"Concept design, with jquery functionality."),n.a.createElement("span",{className:"categories"},n.a.createElement("i",{className:"fa fa-tag"}),"jquery, nodejs, heroku, jquery")),n.a.createElement("div",{className:"link-box"},n.a.createElement("a",{href:"https://intense-mesa-4525.herokuapp.com"},"Take a looksie"),n.a.createElement("a",{className:"popup-modal-dismiss"},"Close"))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#contact"},n.a.createElement("i",{className:"icon-down-circle"}))))," ")},I=function(e){var a=e.me;return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"row section-head"},n.a.createElement("div",{className:"two columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Get In Touch."))),n.a.createElement("div",{className:"ten columns"},n.a.createElement("p",{className:"lead"},"Try me out. I'll get the job done."))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"eight columns"},n.a.createElement("form",{action:!0,method:"post",id:"contactForm",name:"contactForm"},n.a.createElement("fieldset",null,n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"contactName"},"Name ",n.a.createElement("span",{className:"required"},"*")),n.a.createElement("input",{type:"text",size:35,id:"contactName",name:"contactName"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"contactEmail"},"Email ",n.a.createElement("span",{className:"required"},"*")),n.a.createElement("input",{type:"text",size:35,id:"contactEmail",name:"contactEmail"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),n.a.createElement("input",{type:"text",size:35,id:"contactSubject",name:"contactSubject"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"contactMessage"},"Message ",n.a.createElement("span",{className:"required"},"*")),n.a.createElement("textarea",{cols:50,rows:15,id:"contactMessage",name:"contactMessage"})),n.a.createElement("div",null,n.a.createElement("button",{className:"submit"},"Submit"),n.a.createElement("span",{id:"image-loader"},n.a.createElement("img",{alt:!0,src:"images/loader.gif"})))))," ",n.a.createElement("div",{id:"message-warning"}," Something went way wrong. Check your stuff and try again, or just email me at ",a.email),n.a.createElement("div",{id:"message-success"},n.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",n.a.createElement("br",null))),n.a.createElement("aside",{className:"four columns footer-widgets"},n.a.createElement("div",{className:"widget widget_contact"},n.a.createElement("h4",null,"Address and Phone"),n.a.createElement("p",{className:"address"},a.first," ",a.last,n.a.createElement("br",null),a.address,n.a.createElement("br",null),a.address2,n.a.createElement("br",null),n.a.createElement("span",null,a.phone))))))},A=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/phil.lauffenburger"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/philip-lauffenburger-80380a32/"},n.a.createElement("i",{className:"fa fa-linkedin"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/old_man_lauffen/"},n.a.createElement("i",{className:"fa fa-instagram"})))),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"\xa9 Copyright 2014 CeeVee"),n.a.createElement("li",null,"Design by ",n.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))},T=(t(17),{me:{first:"Philip",firstshort:"Phil",last:"Lauffenburger",email:"lauffenp@gmail.com",role:"Full Stack Contracting Developer",imageUrl:"",address:"Hormayrstra\xdfe 19, Top 11",address2:"Innsbruck AT, 6020",phone:"+1-719-679-7516"},imagebaseurl:"https://lauffenp.github.io/"}),O=[n.a.createElement(h,{key:"header"}),n.a.createElement(p,{key:"about"}),n.a.createElement(g,{key:"resume"}),n.a.createElement(x,{key:"portfolio"}),n.a.createElement(I,{key:"contactus"}),n.a.createElement(A,{key:"footer"})],F=(Object(d.a)({},T),function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=O.map(function(e){return n.a.cloneElement(e,T)});return n.a.createElement("div",{className:"App"},e)}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.05254d7a.chunk.js.map