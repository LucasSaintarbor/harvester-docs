"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[55911],{54510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>o});r(67294);var a=r(3905);const n={sidebar_position:4,sidebar_label:"Creating an K3s Kubernetes Cluster",title:"Creating an K3s Kubernetes Cluster"},i=void 0,l={unversionedId:"rancher/node/k3s-cluster",id:"version-v1.1/rancher/node/k3s-cluster",title:"Creating an K3s Kubernetes Cluster",description:"You can now provision K3s Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.3+ using the built-in Harvester node driver.",source:"@site/versioned_docs/version-v1.1/rancher/node/k3s-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/k3s-cluster",permalink:"/v1.1/rancher/node/k3s-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/node/k3s-cluster.md",tags:[],version:"v1.1",lastUpdatedAt:1732644652,formattedLastUpdatedAt:"Nov 26, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Creating an K3s Kubernetes Cluster",title:"Creating an K3s Kubernetes Cluster"},sidebar:"api",previous:{title:"Creating an RKE2 Kubernetes Cluster",permalink:"/v1.1/rancher/node/rke2-cluster"},next:{title:"Harvester Cloud Provider",permalink:"/v1.1/rancher/cloud-provider"}},s={},o=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create K3s Kubernetes Cluster",id:"create-k3s-kubernetes-cluster",level:3},{value:"Add Node Affinity",id:"add-node-affinity",level:4},{value:"Using Harvester K3s Node Driver in Air Gapped Environment",id:"using-harvester-k3s-node-driver-in-air-gapped-environment",level:3}],d={toc:o},p="wrapper";function u({components:e,...t}){return(0,a.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/k3s-cluster"})),(0,a.kt)("p",null,"You can now provision K3s Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.3+")," using the built-in Harvester node driver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"k3s-cluster",src:r(78446).Z,width:"2556",height:"980"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Harvester K3s node driver is in ",(0,a.kt)("strong",{parentName:"li"},"Tech Preview"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v1.1/networking/harvester-network#vlan-network"},"VLAN network")," is required for Harvester node driver."),(0,a.kt)("li",{parentName:"ul"},"Harvester node driver only supports cloud images."))),(0,a.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your cloud credential name"),(0,a.kt)("li",{parentName:"ol"},'Select "Imported Harvester Cluster".'),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(72314).Z,width:"1920",height:"969"})),(0,a.kt)("h3",{id:"create-k3s-kubernetes-cluster"},"Create K3s Kubernetes Cluster"),(0,a.kt)("p",null,"You can create a K3s Kubernetes cluster from the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," page via the K3s node driver."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," button."),(0,a.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,a.kt)("strong",{parentName:"li"},"RKE2/K3s"),"."),(0,a.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,a.kt)("li",{parentName:"ol"},"Select a ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Image")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Network Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"SSH User")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-k3s-harvester-cluster",src:r(39386).Z,width:"1919",height:"1079"})),(0,a.kt)("h4",{id:"add-node-affinity"},"Add Node Affinity"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.3 + Rancher v2.6.7")),(0,a.kt)("p",null,"The Harvester node driver now supports scheduling a group of machines to particular nodes through the node affinity rules. This provides high availability and better resource utilization."),(0,a.kt)("p",null,"Node affinity can be added to the machine pools during the cluster creation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Show Advanced")," button and click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),(0,a.kt)("img",{alt:"affinity-add-node-selector",src:r(82682).Z,width:"3668",height:"1478"})),(0,a.kt)("li",{parentName:"ol"},"Set priority to ",(0,a.kt)("inlineCode",{parentName:"li"},"Required")," if you wish the scheduler to schedule the machines only when the rules are met."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Rule")," to specify the node affinity rules, e.g., for the ",(0,a.kt)("a",{parentName:"li",href:"/v1.1/rancher/node/node-driver#topology-spread-constraints"},"topology spread constraints")," use case, you can add the ",(0,a.kt)("inlineCode",{parentName:"li"},"region")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"zone")," labels as follows:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list \nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list \nvalues: us-east-1a\n")),(0,a.kt)("img",{alt:"affinity-add-rules",src:r(85572).Z,width:"3634",height:"1290"})),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," to save the node template. After the cluster is installed, you can check whether its machine nodes are scheduled according to the affinity rules.")),(0,a.kt)("h3",{id:"using-harvester-k3s-node-driver-in-air-gapped-environment"},"Using Harvester K3s Node Driver in Air Gapped Environment"),(0,a.kt)("p",null,"K3s provisioning relies on the ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," package to get the IP of the virtual machine."),(0,a.kt)("p",null,"However, it may not be feasible to install packages in an air gapped environment."),(0,a.kt)("p",null,"You can address the installation constraints with the following options:"),(0,a.kt)("p",null,"Option 1. Use a VM image with required packages installed."),(0,a.kt)("p",null,"Option 2. Configure the ",(0,a.kt)("strong",{parentName:"p"},"Show Advanced > User Data")," to enable the VMs to install required packages via an HTTP(S) proxy."),(0,a.kt)("p",null,"Example of ",(0,a.kt)("inlineCode",{parentName:"p"},"user data")," in Harvester node template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\n")))}u.isMDXComponent=!0},82682:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/affinity-rke2-add-node-selector-43c8e7c2785ab6a07a2c90791d84f9c3.png"},85572:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/affinity-rke2-add-rules-6934a0009ec40592576d46f06523c040.png"},72314:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-cloud-credentials-b3b6813e1a8b52c1e0fa45e740f27a23.png"},39386:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-k3s-harvester-cluster-3b0b62e216eaf050c48c10a762cf4ff4.png"},78446:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-k3s-node-driver-5b8e9729d66e7494fd1c0f310268bd56.png"}}]);