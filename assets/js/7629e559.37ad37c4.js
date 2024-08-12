"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[95106],{32989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});a(67294);var n=a(3905);const r={sidebar_position:7,sidebar_label:"Single-Node Clusters",title:"Single-Node Clusters",description:"Support for deployment of single-node clusters",keywords:["Harvester cluster","one node","single node"]},s=void 0,o={unversionedId:"advanced/singlenodeclusters",id:"version-v1.2/advanced/singlenodeclusters",title:"Single-Node Clusters",description:"Support for deployment of single-node clusters",source:"@site/versioned_docs/version-v1.2/advanced/singlenodeclusters.md",sourceDirName:"advanced",slug:"/advanced/singlenodeclusters",permalink:"/v1.2/advanced/singlenodeclusters",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/advanced/singlenodeclusters.md",tags:[],version:"v1.2",lastUpdatedAt:1723091497,formattedLastUpdatedAt:"Aug 8, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Single-Node Clusters",title:"Single-Node Clusters",description:"Support for deployment of single-node clusters",keywords:["Harvester cluster","one node","single node"]},sidebar:"api",previous:{title:"Rancher Manager",permalink:"/v1.2/advanced/addons/rancher-vcluster"},next:{title:"Rancher Integration",permalink:"/v1.2/rancher/index"}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Replica Count of the Default StorageClass",id:"replica-count-of-the-default-storageclass",level:2},{value:"Upgrades and Maintenance",id:"upgrades-and-maintenance",level:2}],d={toc:l},u="wrapper";function p({components:e,...t}){return(0,n.kt)(u,{...d,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/advanced/singlenodeclusters"})),(0,n.kt)("p",null,"Harvester supports single-node clusters for implementations that can tolerate lower resilience or require minimal initial deployment resources. You can create single-node clusters using the standard installation methods (",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/index"},"ISO"),", ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/usb-install"},"USB"),", and ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/pxe-boot-install"},"PXE boot"),")."),(0,n.kt)("p",null,"Single-node clusters support most Harvester features, including the creation of RKE2 clusters and node upgrades (with some limitations). However, this deployment type has the following key disadvantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No high availability: Errors and updates that require rebooting of the node cause downtime to running VMs."),(0,n.kt)("li",{parentName:"ul"},"No multi-replica support: Only one replica is created for each volume in Longhorn."),(0,n.kt)("li",{parentName:"ul"},"No live migration and zero-downtime support during upgrades.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before you begin deploying your single-node cluster, ensure that the following requirements are met."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hardware: ",(0,n.kt)("a",{parentName:"li",href:"/v1.2/install/requirements#hardware-requirements"},"Use server-class hardware")," with sufficient resources to run Harvester and a production workload. Laptops and nested virtualization are not supported."),(0,n.kt)("li",{parentName:"ul"},"Network: ",(0,n.kt)("a",{parentName:"li",href:"/v1.2/install/requirements#port-requirements-for-harvester-nodes"},"Configure ports")," based on the type of traffic to be transmitted among VMs.")),(0,n.kt)("h2",{id:"replica-count-of-the-default-storageclass"},"Replica Count of the Default StorageClass"),(0,n.kt)("p",null,"Harvester uses StorageClasses to describe how Longhorn must provision volumes. Each StorageClass has a parameter that defines the number of replicas to be created for each volume. "),(0,n.kt)("p",null,"The default StorageClass ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-longhorn")," has a replica count value of ",(0,n.kt)("strong",{parentName:"p"},"3")," for high availability. If you use ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-longhorn")," in your single-node cluster, Longhorn is unable to create the default number of replicas, and volumes are marked as ",(0,n.kt)("em",{parentName:"p"},"Degraded")," on the ",(0,n.kt)("strong",{parentName:"p"},"Volumes")," screen of the Harvester UI. "),(0,n.kt)("p",null,"To avoid this issue, you can perform either of the following actions: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Change the ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration#installharvesterstorage_classreplica_count"},"replica count")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-longhorn")," to ",(0,n.kt)("strong",{parentName:"p"},"1")," using a ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration"},"Harvester configuration")," file. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/v1.2/advanced/storageclass#creating-a-storageclass"},"Create a new StorageClass")," with the ",(0,n.kt)("strong",{parentName:"p"},"Number of Replicas")," parameter set to ",(0,n.kt)("strong",{parentName:"p"},"1"),". Once created, locate the new StorageClass in the list and then select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,n.kt)("strong",{parentName:"p"},"Set as Default"),". "))),(0,n.kt)("h2",{id:"upgrades-and-maintenance"},"Upgrades and Maintenance"),(0,n.kt)("p",null,"Single-node clusters do not support ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/vm/live-migration"},"Live Migration"),", so VMs become unavailable during cluster upgrades. Harvester forcibly shuts down all VMs before starting the upgrade process."),(0,n.kt)("p",null,"Enabling ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/host/#node-maintenance"},"Maintenance Mode")," is also not possible because that operation relies on Live Migration functionality, and Harvester cannot place the only control plane in Maintenance Mode."))}p.isMDXComponent=!0}}]);