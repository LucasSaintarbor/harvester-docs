"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[64786],{99101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>o});a(67294);var s=a(3905);const n={sidebar_position:6,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],description:"The Harvester provides a virtual IP as the management address."},r=void 0,d={unversionedId:"install/management-address",id:"version-v1.0/install/management-address",title:"Management Address",description:"The Harvester provides a virtual IP as the management address.",source:"@site/versioned_docs/version-v1.0/install/management-address.md",sourceDirName:"install",slug:"/install/management-address",permalink:"/v1.0/install/management-address",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/install/management-address.md",tags:[],version:"v1.0",lastUpdatedAt:1732644652,formattedLastUpdatedAt:"Nov 26, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],description:"The Harvester provides a virtual IP as the management address."},sidebar:"api",previous:{title:"Harvester Configuration",permalink:"/v1.0/install/harvester-configuration"},next:{title:"Air Gapped Environment",permalink:"/v1.0/airgap"}},i={},o=[{value:"How to get the VIP MAC address",id:"how-to-get-the-vip-mac-address",level:2},{value:"Usages",id:"usages",level:2}],l={toc:o},m="wrapper";function p({components:e,...t}){return(0,s.kt)(m,{...l,...t,components:e,mdxType:"MDXLayout"},(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/management-address"})),(0,s.kt)("p",null,"Harvester provides a fixed virtual IP (VIP) as the management address, VIP must be different from any Node IP.  You can find the management address on the console dashboard after the installation."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you selected the IP address to be configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7461).Z,width:"1580",height:"770"})),(0,s.kt)("h2",{id:"how-to-get-the-vip-mac-address"},"How to get the VIP MAC address"),(0,s.kt)("p",null,"To get the VIP MAC address, you can run the following command on the management node:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get svc -n kube-system ingress-expose -ojsonpath='{.metadata.annotations}'\n")),(0,s.kt)("p",null,"Example of output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"kube-vip.io/hwaddr":"02:00:00:09:7f:3f","kube-vip.io/requestedIP":"10.84.102.31"}\n')),(0,s.kt)("h2",{id:"usages"},"Usages"),(0,s.kt)("p",null,"The management address has two usages."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Allows the access to the Harvester API/UI via ",(0,s.kt)("inlineCode",{parentName:"li"},"HTTPS")," protocol."),(0,s.kt)("li",{parentName:"ul"},"Is the address the other nodes use to join the cluster.\n",(0,s.kt)("img",{src:a(69936).Z,width:"1207",height:"339"}))))}p.isMDXComponent=!0},69936:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/configure-management-address-43ff76d24277f42606a4ad31cea2464b.png"},7461:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/iso-installed-f4263be997514c7510a5865390e66421.png"}}]);