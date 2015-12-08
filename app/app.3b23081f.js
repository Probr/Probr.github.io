"use strict";angular.module("probrSiteApp",["ngCookies","ngResource","ngSanitize","btford.socket-io","ui.router","ui.bootstrap","hc.marked"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("overview"),c.html5Mode(!1)}]),angular.module("probrSiteApp").controller("DocumentationCtrl",["$scope","$http",function(a,b){}]).controller("DocumentationCoreCtrl",["$scope","$http",function(a,b){b.get("assets/readme/core.md").success(function(b){a.probrMarkdown=b}).error(function(){})}]).controller("DocumentationAnalysisCtrl",["$scope","$http",function(a,b){b.get("assets/readme/analysis.md").success(function(b){a.probrMarkdown=b}).error(function(){})}]),angular.module("probrSiteApp").config(["$stateProvider",function(a){a.state("docs",{url:"/docs",templateUrl:"app/documentation/documentation.html",controller:"DocumentationCtrl"}).state("docs-core",{url:"/docs/core",templateUrl:"app/documentation/documentation-core.html",controller:"DocumentationCoreCtrl"}).state("docs-analysis",{url:"/docs/analysis",templateUrl:"app/documentation/documentation-analysis.html",controller:"DocumentationAnalysisCtrl"})}]),angular.module("probrSiteApp").controller("FaqCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("probrSiteApp").config(["$stateProvider",function(a){a.state("faq",{url:"/faq",templateUrl:"app/faq/faq.html",controller:"FaqCtrl"})}]),angular.module("probrSiteApp").controller("InstallationCtrl",["$scope",function(a){}]).controller("InstallationCoreCtrl",["$scope",function(a){a.installation="docker"}]).controller("InstallationAnalysisCtrl",["$scope",function(a){a.installation="docker"}]),angular.module("probrSiteApp").config(["$stateProvider",function(a){a.state("installation",{url:"/installation",templateUrl:"app/installation/installation.html",controller:"InstallationCtrl"}).state("installation-core",{url:"/installation/core",templateUrl:"app/installation/installation-core.html",controller:"InstallationCoreCtrl"}).state("installation-analysis",{url:"/installation/analysis",templateUrl:"app/installation/installation-analysis.html",controller:"InstallationAnalysisCtrl"})}]),angular.module("probrSiteApp").controller("OverviewCtrl",["$scope",function(a){}]),angular.module("probrSiteApp").config(["$stateProvider",function(a){a.state("overview",{url:"/overview",templateUrl:"app/overview/overview.html",controller:"OverviewCtrl"})}]),angular.module("probrSiteApp").controller("UsageCtrl",["$scope",function(a){}]).controller("UsageCoreCtrl",["$scope",function(a){a.installation="docker"}]).controller("UsageAnalysisCtrl",["$scope",function(a){a.installation="docker"}]),angular.module("probrSiteApp").config(["$stateProvider",function(a){a.state("usage",{url:"/usage",templateUrl:"app/usage/usage.html",controller:"UsageCtrl"}).state("usage-core",{url:"/usage/core",templateUrl:"app/usage/usage-core.html",controller:"UsageCoreCtrl"}).state("usage-analysis",{url:"/usage/analysis",templateUrl:"app/usage/usage-analysis.html",controller:"UsageAnalysisCtrl"})}]),angular.module("probrSiteApp").controller("UsecaseCtrl",["$scope",function(a){}]),angular.module("probrSiteApp").config(["$stateProvider",function(a){a.state("usecase",{url:"/usecase",templateUrl:"app/usecase/usecase.html",controller:"UsecaseCtrl"})}]),angular.module("probrSiteApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("probrSiteApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("probrSiteApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.isArray=angular.isArray,a.menu=[{title:"Getting Started",link:[{name:"probr-core",link:"installation-core"},{name:"probr-analysis",link:"installation-analysis"}]},{title:"Documentation",link:[{name:"probr-core",link:"docs-core"},{name:"probr-analysis",link:"docs-analysis"}]},{title:"Usage",link:[{name:"probr-core",link:"usage-core"},{name:"probr-analysis",link:"usage-analysis"}]},{title:"FAQ",link:"faq"},{title:"Usecase",link:"usecase"}],a.isCollapsed=!0,a.isActive=function(a){return a===b.path()},a.isActiveRoot=function(a){if(angular.isArray(a))return!1;a=a.toLowerCase();var c=b.path().split("/")[1];return a.slice(0,c.length)==c}}]),angular.module("probrSiteApp").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarCtrl"}}),angular.module("probrSiteApp").directive("particles",["$window",function(a){return{restrict:"A",link:function(b,c,d,e){a.particlesJS(d.id,{particles:{number:{value:40,density:{enable:!0,value_area:450}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:.5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}}]),angular.module("probrSiteApp").factory("socket",["socketFactory",function(a){var b=io("",{path:"/socket.io-client"}),c=a({ioSocket:b});return{socket:c,syncUpdates:function(a,b,d){d=d||angular.noop,c.on(a+":save",function(a){var c=_.find(b,{_id:a._id}),e=b.indexOf(c),f="created";c?(b.splice(e,1,a),f="updated"):b.push(a),d(f,a,b)}),c.on(a+":remove",function(a){var c="deleted";_.remove(b,{_id:a._id}),d(c,a,b)})},unsyncUpdates:function(a){c.removeAllListeners(a+":save"),c.removeAllListeners(a+":remove")}}}]),angular.module("probrSiteApp").run(["$templateCache",function(a){a.put("app/documentation/documentation-analysis.html",'<navbar></navbar><div class="container content"><h1>Documentation</h1><div class=row><div class=col-lg-12><h1 class=page-header>probr-analysis</h1></div></div></div><footer></footer>'),a.put("app/documentation/documentation-core.html",'<navbar></navbar><div class="container content"><h1>Documentation</h1><div class=col-lg-12><h1 class=page-header>probr-core</h1></div></div><footer></footer>'),a.put("app/documentation/documentation.html",'<navbar></navbar><div class="container content"><h1>Documentation</h1><div class=row><div class=col-lg-6><h2><a ui-sref=docs-core>probr-core</a></h2></div><div class=col-lg-6><h2><a ui-sref=docs-analysis>probr-analysis</a></h2></div></div></div><footer></footer>'),a.put("app/faq/faq.html",'<navbar></navbar><div class="container content"><h1>Frequently Asked Questions</h1><div class=row><div class=col-lg-12><h2>Which devices are supported?</h2><p>Probr was designed to support every device with a *NIX (Linux, Mac OS, UNIX) operating system, a wireless interface capable of monitor mode and internet access. The system was tested with:</p><ul><li><a href=http://www.hardkernel.com/main/products/prdt_info.php>ODROID C1</a> with Ubuntu</li><li><a href="https://www.raspberrypi.org/products/model-b/">Raspberry Pi B</a> with Raspbian</li><li><a href="http://www.tp-link.com/at/products/details/?model=TL-MR3020">TP-Link TL-MR3020</a> with OpenWRT</li><li>Mac OS X</li><li>Ubuntu 14.04</li></ul><p>But Probr is not limited to these devices. Any device satisfying the requirements can be used:</p><ul><li>bash shell</li><li>wget</li><li>tcpdump</li></ul></div></div><div class=row><div class=col-lg-12><h2>Which databases are supported?</h2><p>Out-of-the box, Probr supports the following databases for storage of sniffed packets:</p><ul><li><a href="https://www.mongodb.org/">MongoDB</a></li><li><a href="https://influxdb.com/">InfluxDB</a></li></ul><p>If you want to use any other database for your use case, you can extend Probr easily to do so, just by adding a handler. You can take the handlers for the existing databases as an example (<a href=https://github.com/probr/probr-core/blob/master/handlers/handlers.py>here</a> ). Then, you need to add your handler into the config variable "PROBR_HANDLERS" in <a href=https://github.com/probr/probr-core/blob/master/probr/base_settings.py>here</a>.</p></div></div><div class=row><div class=col-lg-12><h2>Do I need to know how the WiFi protocol works, or how to write sniffing scripts?</h2><p>No! That\'s the beauty of it. Probr comes with predefined command templates for sniffing WiFi probe requests and uploading them to Probr\'s database, from where you can use the packets to do any analysis you want on them.</p></div></div></div><footer></footer>'),a.put("app/installation/installation-analysis.html",'<navbar></navbar><div class="container content"><h1>Probr-Analysis: Installation</h1><div class=row><div class="col-xs-6 install-block"><a ng-click="installation = \'docker\'"><i class="icon-install icon-docker" ng-class="{ \'icon-active\': installation === \'docker\' }"></i></a></div><div class="col-xs-6 install-block" ng-click="installation == \'python\'"><a ng-click="installation = \'nodejs\'"><i class="icon-install icon-nodejs" ng-class="{ \'icon-active\': installation === \'nodejs\' }"></i></a></div></div><div class=row ng-show="installation ===\'docker\'"><marked>TODO</marked></div><div class=row ng-show="installation ===\'nodejs\'"><h3><a id=user-content-technology class=anchor href=#technology aria-hidden=true><span class="octicon octicon-link"></span></a>Technology</h3><p>To build and run the application you will need:</p><ul><li><a href="https://nodejs.org/en/">NodeJS version 0.10</a></li><li><a href="https://www.npmjs.com/">NPM</a></li><li><a href="http://bower.io/">Bower</a></li><li><a href="https://www.mongodb.org/">MongoDB</a></li><li><a href="http://redis.io/">Redis</a></li></ul><p>Also, to have the best user experience, including live modes and analysis, you should have a running set-up of probr-core, as described <a href=https://github.com/probr/probr-core>here</a>.</p><h2><a id=user-content-getting-started class=anchor href=#getting-started aria-hidden=true><span class="octicon octicon-link"></span></a>Getting started</h2><p>Make sure probr-core runs and collects data.</p><p>Make sure your mongo deamon runs:</p><pre><code>mongod &amp;\n    </code></pre><p>Also, start your redis server:</p><pre><code>redis-server &amp;\n    </code></pre><p>After cloning the repo and going into the <code>probr-analysis</code> directory:</p><pre><code>npm install\n    </code></pre><p>After the installation of the npm dependencies has finished, install the bower dependencies:</p><pre><code>bower install\n    </code></pre><p>These steps will also install <a href="http://gruntjs.com/">Grunt</a>. Our project comes with preconfigured grunt tasks, so you can run:</p><pre><code>grunt build\n    </code></pre><p>To start the application, run:</p><pre><code>grunt serve\n    </code></pre><p>The application should now be reachable under <a href=http://localhost:9000>http://localhost:9000</a>.</p></div></div><footer></footer>'),a.put("app/installation/installation-core.html",'<navbar></navbar><div class="container content"><h1>Probr-Core: Installation</h1><div class=row><div class="col-xs-6 install-block"><a ng-click="installation = \'docker\'"><i class="icon-install icon-docker" ng-class="{ \'icon-active\': installation === \'docker\' }"></i></a></div><div class="col-xs-6 install-block" ng-click="installation == \'python\'"><a ng-click="installation = \'python\'"><i class="icon-install icon-python" ng-class="{ \'icon-active\': installation === \'python\' }"></i></a></div></div><div class=row ng-show="installation ===\'docker\'"><marked>## Requirements * [Docker](http://docker.com/) * [Docker-Compose](https://docs.docker.com/compose/) ## Installation Clone probr-core and head into its directory. Now let docker-compose start your probr-core instance: ``` docker-compose up -d ``` This will setup a functioning probr-core installation, as well as MongoDB and InfluxDB and its corresponding handlers.</marked></div><div class=row ng-show="installation ===\'python\'"><p>The frameworks, languages, tools and technologies used and required in the probr-core project are:</p><ul><li>Python 2.7</li><li><a href="https://www.djangoproject.com/">Django</a></li><li><a href="http://bower.io/">Bower</a></li><li><a href=https://pip.pypa.io/en/latest/installing.html>PIP</a></li></ul><h3><a id=user-content-devices class=anchor href=#devices aria-hidden=true><span class="octicon octicon-link"></span></a>Devices</h3><p>The devices used for sniffing WiFi packets must fulfill the following requirements:</p><ul><li>*NIX operating system or simliar (Debian, Ubuntu, OpenWRT, Mac OS X, Raspbian etc.)</li><li>wget installed</li><li>tcpdump installed</li><li>internet access</li><li>wireless interface with monitor mode capabilities</li></ul><h2><a id=user-content-installation class=anchor href=#installation aria-hidden=true><span class="octicon octicon-link"></span></a>Installation</h2><p>We highly recommended to use <a href="https://virtualenv.pypa.io/en/latest/">Virtualenv</a> to manage the python environment for probr-core.</p><p>After cloning the project, create a virtual environment for probr outside the probr-core directory:</p><pre><code>virtualenv .env_probr\n\n    </code></pre><p>Activate the virtual python environment:</p><pre><code>source .env_probr/bin/activate\n\n    </code></pre><p>Go into the <code>probr-core</code> directory. Now install the python dependencies of the project:</p><pre><code>pip install -r requirements.txt\n\n    </code></pre><p>Now, install the frontend and web dependencies using bower:</p><pre><code>bower install\n\n    </code></pre><p>You\'re pretty much set to start probr-core at this moment. What is left to do is:</p><p>Create the DB tables:</p><pre><code>python manage.py migrate\n\n    </code></pre><p>Create an admin user for the Django webproject:</p><pre><code>python manage.py createsuperuser\n\n    </code></pre><p>Make sure the mongodb deamon is running:</p><pre><code>mongod &amp;\n    </code></pre><p>Also, the redis-server must be running before you can use probr-core</p><pre><code>redis-server &amp;\n    </code></pre><h2><a id=user-content-start-up class=anchor href=#start-up aria-hidden=true><span class="octicon octicon-link"></span></a>Start-up</h2><p>Finally, you\'re ready to start your probr-core server by running:</p><pre><code>python manage.py runserver\n\n    </code></pre><p>In order for the data to be processed and entered into the database, you need to start the celery worker:</p><pre><code>celery worker -A probr\n    </code></pre><p>And you can check it out by visiting <code>http://localhost:8000</code>.</p></div></div><footer></footer>'),a.put("app/installation/installation.html",'<navbar></navbar><div class="container content"><h1>Getting Started</h1><div class=row><a ui-sref=installation-core><div class="col-xs-6 install-block"><i class="icon-install fa fa-cogs"></i> <span>Core</span></div></a> <a ui-sref=installation-analysis><div class="col-xs-6 install-block"><i class="icon-install fa fa-flask"></i> <span>Analysis</span></div></a></div></div><footer></footer>'),a.put("app/overview/overview.html",'<navbar></navbar><div class=particles-bg id=particles particles><header class=hero-unit id=banner><div class=container><img src=assets/images/probrlogo_white.bf46dc4b.png><h4 class="lead centered">a generic wifi tracking system</h4></div></header></div><div class="container content" id=whatisprobr><marked># Welcome! Probr is a generic and distributed wifi-tracking system, built and developed over the course of a masters project at the University of Zurich. It\'s aim is to make it easier to conduct research-project in the domain of wireless sniffing, tracking and analysis. The project is split into two completely independent parts. ## Core [probr-core](#/docs/core) is a python-django based system for remote device administration. It allows to setup basic *NIX devices to use for various tasks, including but not limited to sniffing. ## Analysis [probr-analysis](#/docs/analysis) is a NodeJS based frontend that visualizes core concepts of our analysis of collected probe requests. It allows to track individual devices using their MAC-Address, as well as monitor room utilization using an custom-made algorithm. ## Get Started To try out probr for yourself, simply follow our [Get Started](#/getstarted) guide. # How It Works Probr uses a distributed architecture. The central component called probr-core serves as a management and storage server. First, all sniffing devices register themselves on the server and can be remotely managed. They are able to relay their sniffing-results (or result of any other given task) to the server which will process the received payload through a flexible handler-system. The system is currently able to process *.pcap files and to store its contents into a database of your choice. New database adapters can also be written easily and registered in probr-core. ## Advantages Using probr-core gives you a headstart when building your own sniffing architecture. Data collection is therefore easy, and faulty devices can be remotely administrated. This allows you to concentrate on your actual research project instead of rebuilding the same system for different use cases over and over again. probr-core can be used for the following purposes: * Out-of-the-box WiFi sniffing and monitoring * Included templates to sniff on a wide range of devices, given tcpdump is installed * No knowledge about WiFi protocols required * Free to use and completely open-source * Supports a range of different databases for storage, such as MongoDB or InfluxDB</marked></div><footer></footer>'),a.put("app/usage/usage-analysis.html",'<navbar></navbar><div class="container content"><h1>Probr-Analysis: Usage Examples</h1><div class=row></div></div><footer></footer>'),a.put("app/usage/usage-core.html",'<navbar></navbar><div class="container content"><h1>Probr-Core: Usage Examples</h1><div class=row><h2>Adding a new device</h2>The gif below shows how you can use the device wizard to add a sniffing device. The terminal on the right is a ssh connection to the device which shall be set up.<br><br><img src=assets/gifs/add_device_wizard.gif alt="Adding a device." class=usage-gif width=800 height="400"></div><div class=row><h2>Uploading a pcap from a different source:</h2><br><br><img src=assets/gifs/upload_pcap.gif alt="Uploading a pcap by hand." class=usage-gif width=800 height="400"></div></div><footer></footer>'),a.put("app/usage/usage.html",'<navbar></navbar><div class="container content"><h1>Getting Started</h1><div class=row><a ui-sref=installation-core><div class="col-xs-6 install-block"><i class="icon-install fa fa-cogs"></i> <span>Core</span></div></a> <a ui-sref=installation-analysis><div class="col-xs-6 install-block"><i class="icon-install fa fa-flask"></i> <span>Analysis</span></div></a></div></div><footer></footer>'),a.put("app/usecase/usecase.html",'<navbar></navbar><div class="container content" id=whatisprobr><h1>Use-Cases</h1><h2>#1 - Room Utilization</h2><p>Our focus during the development of probr was to answer the following research question:</p><blockquote>Is it possible to determine room utilization, which means to determine the number of people in a room, using only passive wifi tracking?</blockquote><p>Also, we tried to enhance the capabilities of the system by building it in such a generic way that more possible use-cases and questions of interested can be answered. The developed tools, probr-core and probr-analysis aim to not only answer the original research question but to answer more questions along the way. We have tested the system over a longer period of time, but would like to share the results of a 2-day test during an internal conference at the University of Zurich. The probr-system had been deployed during the conference and been used to collect data throughout the 2 days.</p></div><footer></footer>'),a.put("components/footer/footer.html","<div class=container><div class=row><div class=col-xs-4><img src=assets/images/uzh_logo.97f149bf.png></div><div class=col-xs-4><p>probr | Communication Systems Group at the University of Zurich, Switzerland</p></div><div class=col-xs-4><img src=assets/images/csg_logo.ffc2e4f2.png></div></div></div>"),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-inverse navbar-static-top" role=navigation ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a ui-sref=overview class=navbar-brand>probr</a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav navbar-right"><li ng-class="{active: isActiveRoot(item.link)}" ng-repeat="item in menu" ng-attr-dropdown=isArray(item.link)><a ng-if=!isArray(item.link) ui-sref="{{ item.link }}">{{ item.title }}</a> <a ng-if=isArray(item.link) href=# dropdown-toggle>{{ item.title }}<b class=caret></b></a><ul ng-if=isArray(item.link) class=dropdown-menu><li ng-repeat="entry in item.link"><a ui-sref="{{ entry.link }}">{{ entry.name }}</a></li></ul></li><li ng-repeat-end><a href=http://github.com/probr><i class="fa fa-github"></i> Github</a></li></ul></div></div></div>')}]);