"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[57629],{29962:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>n,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>m});i(67294);var a=i(3905);const o={sidebar_position:6,sidebar_label:"Live Migration",title:"Live Migration",keywords:["Harvester","harvester","Rancher","rancher","Live Migration"],description:"Live migration means moving a virtual machine to a different host without downtime."},n=void 0,r={unversionedId:"vm/live-migration",id:"version-v1.0/vm/live-migration",title:"Live Migration",description:"Live migration means moving a virtual machine to a different host without downtime.",source:"@site/versioned_docs/version-v1.0/vm/live-migration.md",sourceDirName:"vm",slug:"/vm/live-migration",permalink:"/v1.0/vm/live-migration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/vm/live-migration.md",tags:[],version:"v1.0",lastUpdatedAt:1732644652,formattedLastUpdatedAt:"Nov 26, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Live Migration",title:"Live Migration",keywords:["Harvester","harvester","Rancher","rancher","Live Migration"],description:"Live migration means moving a virtual machine to a different host without downtime."},sidebar:"api",previous:{title:"VM Backup & Restore",permalink:"/v1.0/vm/backup-restore"},next:{title:"Hot-Plug Volumes",permalink:"/v1.0/vm/hotplug-volume"}},s={},m=[{value:"Starting a Migration",id:"starting-a-migration",level:2},{value:"Aborting a Migration",id:"aborting-a-migration",level:2},{value:"Migration Timeouts",id:"migration-timeouts",level:2},{value:"Completion Timeout",id:"completion-timeout",level:3},{value:"Progress Timeout",id:"progress-timeout",level:3}],l={toc:m},d="wrapper";function g({components:t,...e}){return(0,a.kt)(d,{...l,...e,components:t,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/live-migration"})),(0,a.kt)("p",null,"Live migration means moving a virtual machine to a different host without downtime."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine is using a management network of bridge interface type."))),(0,a.kt)("h2",{id:"starting-a-migration"},"Starting a Migration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,a.kt)("li",{parentName:"ol"},"Find the virtual machine that you want to migrate and select ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Migrate"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose the node to which you want to migrate the virtual machine. Click ",(0,a.kt)("strong",{parentName:"li"},"Apply"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(69504).Z,width:"1151",height:"643"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(92315).Z,width:"3356",height:"1218"})),(0,a.kt)("h2",{id:"aborting-a-migration"},"Aborting a Migration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,a.kt)("li",{parentName:"ol"},"Find the virtual machine in migrating status that you want to abort. Select ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Abort Migration"),".")),(0,a.kt)("h2",{id:"migration-timeouts"},"Migration Timeouts"),(0,a.kt)("h3",{id:"completion-timeout"},"Completion Timeout"),(0,a.kt)("p",null,"The live migration process will copy virtual machine memory pages and disk blocks to the destination. In some cases, the virtual machine can write to different memory pages or disk blocks at a higher rate than these can be copied. As a result, the migration process is prevented from being completed in a reasonable amount of time. "),(0,a.kt)("p",null,"Live migration will be aborted if it exceeds the completion timeout of 800s per GiB of data. For example, a virtual machine with 8 GiB of memory will time out after 6400 seconds."),(0,a.kt)("h3",{id:"progress-timeout"},"Progress Timeout"),(0,a.kt)("p",null,"Live migration will also be aborted when copying memory doesn't make any progress in 150s."))}g.isMDXComponent=!0},69504:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/migrate-action-4dacb7015258a3473d22d6cbb877515d.png"},92315:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/images/migrate-c1de16524c994d79e9e607fd8828863e.png"}}]);