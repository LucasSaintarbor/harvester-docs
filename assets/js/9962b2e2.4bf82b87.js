"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[82585],{6350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>w,frontMatter:()=>i,metadata:()=>o,toc:()=>c});n(67294);var r=n(3905);const i={sidebar_position:2,sidebar_label:"Multiple NICs with VLAN-aware Switch",title:"Multiple NICs with VLAN-aware Switch",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},a=void 0,o={unversionedId:"networking/best-practice/multiple-nics-vlan-aware-switch",id:"version-v1.0/networking/best-practice/multiple-nics-vlan-aware-switch",title:"Multiple NICs with VLAN-aware Switch",description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs.",source:"@site/versioned_docs/version-v1.0/networking/best-practice/multiple-nics-vlan-aware-switch.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/multiple-nics-vlan-aware-switch",permalink:"/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/multiple-nics-vlan-aware-switch.md",tags:[],version:"v1.0",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Multiple NICs with VLAN-aware Switch",title:"Multiple NICs with VLAN-aware Switch",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},sidebar:"api",previous:{title:"Overview",permalink:"/v1.0/networking/best-practice/overview"},next:{title:"Multiple NICs with Non VLAN-aware Switch",permalink:"/v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch"}},s={},c=[{value:"Architecture",id:"architecture",level:2},{value:"External Switch Configuration",id:"external-switch-configuration",level:2},{value:"Create a VLAN Network in Harvester",id:"create-a-vlan-network-in-harvester",level:2},{value:"Connect a VM to the subnet of the Harvester hosts",id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts",level:3},{value:"Connect a VM to specific VLAN network",id:"connect-a-vm-to-specific-vlan-network",level:3}],l={toc:c},h="wrapper";function w({components:e,...t}){return(0,r.kt)(h,{...l,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("p",null,'In this best practice guide on how to configure "VLAN-aware", we will introduce Harvester VLAN network and external switch configuration for common scenario.'),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Hardware:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Three Harvester servers with daul ports network card."),(0,r.kt)("li",{parentName:"ul"},'One or more VLAN-aware switch(es). We will use "Cisco like" configuration as example.')),(0,r.kt)("p",null,"Network Specification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assume that the subnet of the Harvester hosts is in VLAN 100."),(0,r.kt)("li",{parentName:"ul"},"Assume that the VMs are in the VLAN 101-200.")),(0,r.kt)("p",null,"Cabling:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Harvester servers are connected to the switch in a port from ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"6"),".")),(0,r.kt)("p",null,"The following diagram illustrates the cabling used for this guide:"),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"mulitple-nics-vlan-aware.png",src:n(4574).Z,width:"921",height:"506"})),(0,r.kt)("h2",{id:"external-switch-configuration"},"External Switch Configuration"),(0,r.kt)("p",null,'For the external switch configuration, we\'ll use a "Cisco-like" configuration as an example. You can apply the following configurations to your switch:'),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," ports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"switch# config terminal\nswitch(config)# interface ethernet1/<Port Number>\nswitch(config-if)# switchport\nswitch(config-if)# switchport mode access\nswitch(config-if)# switchport access 100\nswitch(config-if)# no shutdown\nswitch(config-if)# end\nswitch# copy running-config startup-config\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this case, you need to avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," as the VLAN Network interface. This setting will only allow the traffic in the same subnet of ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-mgmt")," and disallow other VLAN traffic.")),(0,r.kt)("p",null,"For VLAN network ports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"switch# config terminal\nswitch(config)# interface ethernet1/<Port Number>\nswitch(config-if)# switchport\nswitch(config-if)# switchport mode trunk\nswitch(config-if)# switchport trunk allowed vlan 100-200\nswitch(config-if)# switchport trunk native vlan 1\nswitch(config-if)# no shutdown\nswitch(config-if)# end\nswitch# copy running-config startup-config\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We use the VLAN Trunk setup to set up the network ports for the VLAN Network. In this case, you can simply set VLAN 100 for the VMs in the Harvester VLAN network to connect to the same subnet of ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-mgmt"),".")),(0,r.kt)("h2",{id:"create-a-vlan-network-in-harvester"},"Create a VLAN Network in Harvester"),(0,r.kt)("p",null,"You can create a new VLAN network in the ",(0,r.kt)("strong",{parentName:"p"},"Advanced > Networks")," page, and click the ",(0,r.kt)("strong",{parentName:"p"},"Create")," button."),(0,r.kt)("p",null,"Specify the name and a VLAN ID that you want to create for the VLAN network ",(0,r.kt)("small",null,"(You can specify the same VLAN ID in different namespaces if you have ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/rancher/virtualization-management#multi-tenancy"},"Rancher multi-tenancy")," configured)"),"."),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"create-vlan-network.png",src:n(20310).Z,width:"3472",height:"1132"})),(0,r.kt)("h3",{id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts"},"Connect a VM to the subnet of the Harvester hosts"),(0,r.kt)("p",null,"Once you finished the configuration in the previous section, the external switch will send out untagged network traffic to the subnet of the Harvester hosts. In Harvester, the untagged traffic is received in VLAN 1."),(0,r.kt)("p",null,"Therefore, if you need VMs to connect to the VLAN ID 1, you need to create a VLAN ID 1 Network in Harvester also."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We strongly recommend against using VLAN 1 in this scenario.")),(0,r.kt)("h3",{id:"connect-a-vm-to-specific-vlan-network"},"Connect a VM to specific VLAN network"),(0,r.kt)("p",null,"You need to create a VLAN network with a specific VLAN ID and associate the VM with that VLAN network."),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/networking/harvester-network"},"this page")," for additional information on Harvester Networking."))}w.isMDXComponent=!0},20310:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},4574:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mulitple-nics-vlan-aware-eed7b30c0fa0ca9a3c0b590f6f17d735.png"}}]);