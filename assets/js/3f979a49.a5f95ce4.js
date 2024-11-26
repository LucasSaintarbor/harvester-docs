"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[43805],{44132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});a(67294);var i=a(3905),o=a(25108);const s={sidebar_position:2,sidebar_label:"StorageClass",title:"StorageClass"},n=void 0,l={unversionedId:"advanced/storageclass",id:"advanced/storageclass",title:"StorageClass",description:"A StorageClass allows administrators to describe the classes of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called profiles in other storage systems.",source:"@site/docs/advanced/storageclass.md",sourceDirName:"advanced",slug:"/advanced/storageclass",permalink:"/v1.4/advanced/storageclass",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/storageclass.md",tags:[],version:"current",lastUpdatedAt:1732644652,formattedLastUpdatedAt:"Nov 26, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"StorageClass",title:"StorageClass"},sidebar:"api",previous:{title:"Settings",permalink:"/v1.4/advanced/index"},next:{title:"Third-Party Storage Support",permalink:"/v1.4/advanced/csidriver"}},r={},d=[{value:"Creating a StorageClass",id:"creating-a-storageclass",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Parameters Tab",id:"parameters-tab",level:3},{value:"Number of Replicas",id:"number-of-replicas",level:4},{value:"Stale Replica Timeout",id:"stale-replica-timeout",level:4},{value:"Node Selector (Optional)",id:"node-selector-optional",level:4},{value:"Disk Selector (Optional)",id:"disk-selector-optional",level:4},{value:"Migratable",id:"migratable",level:4},{value:"Customize Tab",id:"customize-tab",level:3},{value:"Reclaim Policy",id:"reclaim-policy",level:4},{value:"Allow Volume Expansion",id:"allow-volume-expansion",level:4},{value:"Volume Binding Mode",id:"volume-binding-mode",level:4},{value:"Data Locality Settings",id:"data-locality-settings",level:2},{value:"Data Locality Options",id:"data-locality-options",level:3},{value:"Appendix - Use Case",id:"appendix---use-case",level:2},{value:"HDD Scenario",id:"hdd-scenario",level:3},{value:"Recommended Practice",id:"recommended-practice",level:4}],p=e=>function(t){return o.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=p("Tabs"),m=p("TabItem"),u={toc:d},g="wrapper";function h({components:e,...t}){return(0,i.kt)(g,{...u,...t,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/storageclass"})),(0,i.kt)("p",null,"A StorageClass allows administrators to describe the ",(0,i.kt)("strong",{parentName:"p"},"classes")," of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called ",(0,i.kt)("strong",{parentName:"p"},"profiles")," in other storage systems."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For support with other storage, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/advanced/csidriver"},"Third-Party Storage Support"))),(0,i.kt)("h2",{id:"creating-a-storageclass"},"Creating a StorageClass"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(m,{value:"ui",label:"UI",default:!0,mdxType:"TabItem"},"You can create one or more StorageClasses from the **Advanced > StorageClasses** page.",(0,i.kt)("p",null,(0,i.kt)("img",{src:a(36119).Z,width:"1783",height:"771"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"After a StorageClass is created, nothing can be changed except ",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),".")),(0,i.kt)("h3",{id:"header-section"},"Header Section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Name"),": name of the StorageClass"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Description")," (optional): description of the StorageClass")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(13264).Z,width:"1783",height:"771"})),(0,i.kt)("h3",{id:"parameters-tab"},"Parameters Tab"),(0,i.kt)("h4",{id:"number-of-replicas"},"Number of Replicas"),(0,i.kt)("p",null,"The number of replicas created for each volume in Longhorn. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(80730).Z,width:"1783",height:"771"})),(0,i.kt)("h4",{id:"stale-replica-timeout"},"Stale Replica Timeout"),(0,i.kt)("p",null,"Determines when Longhorn would clean up an error replica after the replica's status is ERROR. The unit is minute. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," minutes in Harvester."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(63815).Z,width:"1783",height:"771"})),(0,i.kt)("h4",{id:"node-selector-optional"},"Node Selector (Optional)"),(0,i.kt)("p",null,"Select the node tags to be matched in the volume scheduling stage. You can add node tags by going to ",(0,i.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(56501).Z,width:"1783",height:"771"})),(0,i.kt)("h4",{id:"disk-selector-optional"},"Disk Selector (Optional)"),(0,i.kt)("p",null,"Select the disk tags to be matched in the volume scheduling stage. You can add disk tags by going to ",(0,i.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(90993).Z,width:"1783",height:"771"})),(0,i.kt)("h4",{id:"migratable"},"Migratable"),(0,i.kt)("p",null,"Whether ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/vm/live-migration"},"Live Migration")," is supported. Defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"Yes"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(82990).Z,width:"1783",height:"771"})),(0,i.kt)("h3",{id:"customize-tab"},"Customize Tab"),(0,i.kt)("h4",{id:"reclaim-policy"},"Reclaim Policy"),(0,i.kt)("p",null,"Volumes dynamically created by a StorageClass will have the reclaim policy specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"reclaimPolicy")," field of the class. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," mode is used by default."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Delete"),": Deletes volumes and the underlying devices when the volume claim is deleted."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Retain"),": Retains the volume for manual cleanup.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(46288).Z,width:"1791",height:"770"})),(0,i.kt)("h4",{id:"allow-volume-expansion"},"Allow Volume Expansion"),(0,i.kt)("p",null,"Volumes can be configured to be expandable. This feature is ",(0,i.kt)("inlineCode",{parentName:"p"},"Enabled")," by default, which allows users to resize the volume by editing the corresponding PVC object."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(72792).Z,width:"1791",height:"770"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can only use the volume expansion feature to grow a Volume, not to shrink it.")),(0,i.kt)("h4",{id:"volume-binding-mode"},"Volume Binding Mode"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"volumeBindingMode")," field controls when volume binding and dynamic provisioning should occur. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Immediate")," mode is used by default."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Immediate"),": Binds and provisions a persistent volume once the PersistentVolumeClaim is created."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"WaitForFirstConsumer"),": Binds and provisions a persistent volume once a VM using the PersistentVolumeClaim is created.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9982).Z,width:"1791",height:"770"}))),(0,i.kt)(m,{value:"api",label:"API",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  annotations:\n    storageclass.beta.kubernetes.io/is-default-class: 'true'\n    storageclass.kubernetes.io/is-default-class: 'true'\n  name: single-replica\nparameters:\n  migratable: 'false'\n  numberOfReplicas: '1'\n  staleReplicaTimeout: '30'\nprovisioner: driver.longhorn.io\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\nallowVolumeExpansion: true\n"))),(0,i.kt)(m,{value:"terraform",label:"Terraform",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "harvester_storageclass" "single-replica" {\n  name = "single-replica"\n\n  is_default = "true"\n  allow_volume_expansion = "true"\n  volume_binding_mode = "immediate"\n  reclaim_policy = "delete"\n\n  parameters = {\n    "migratable"          = "false"\n    "numberOfReplicas"    = "1"\n    "staleReplicaTimeout" = "30"\n  }\n}\n')))),(0,i.kt)("h2",{id:"data-locality-settings"},"Data Locality Settings"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataLocality")," parameter when at least one replica of a Longhorn volume must be scheduled on the same node as the pod that uses the volume (whenever possible)."),(0,i.kt)("p",null,"Harvester officially supports data locality as of ",(0,i.kt)("strong",{parentName:"p"},"v1.3.0"),". This applies even to volumes created from ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/image/upload-image"},"images"),". To configure data locality, create a new StorageClass on the Harvester UI (",(0,i.kt)("strong",{parentName:"p"},"Storage Classess")," > ",(0,i.kt)("strong",{parentName:"p"},"Create")," > ",(0,i.kt)("strong",{parentName:"p"},"Parameters"),") and then add the following parameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"dataLocality")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"best-effort"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(94935).Z,width:"1916",height:"863"})),(0,i.kt)("h3",{id:"data-locality-options"},"Data Locality Options"),(0,i.kt)("p",null,"Harvester currently supports the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"disabled"),": When applied, Longhorn may or may not schedule a replica on the same node as the pod that uses the volume. This is the default option. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"best-effort"),": When applied, Longhorn always attempts to schedule a replica on the same node as the pod that uses the volume. Longhorn does not stop the volume even when a local replica is unavailable because of an environmental limitation (for example, insufficient disk space or incompatible disk tags)."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Longhorn provides a third option called ",(0,i.kt)("inlineCode",{parentName:"p"},"strict-local"),", which forces Longhorn to keep only one replica on the same node as the pod that uses the volume. Harvester does not support this option because it can affect certain operations such as ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/vm/live-migration"},"VM Live Migration"))),(0,i.kt)("p",null,"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.6.0/high-availability/data-locality/"},"Data Locality")," in the Longhorn documentation."),(0,i.kt)("h2",{id:"appendix---use-case"},"Appendix - Use Case"),(0,i.kt)("h3",{id:"hdd-scenario"},"HDD Scenario"),(0,i.kt)("p",null,"With the introduction of ",(0,i.kt)("em",{parentName:"p"},"StorageClass"),", users can now use ",(0,i.kt)("strong",{parentName:"p"},"HDDs")," for tiered or archived cold storage."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"HDD is not recommended for guest RKE2 clusters or VMs with good performance disk requirements.")),(0,i.kt)("h4",{id:"recommended-practice"},"Recommended Practice"),(0,i.kt)("p",null,"First, add your HDD on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Host")," page and specify the disk tags as needed, such as",(0,i.kt)("inlineCode",{parentName:"p"},"HDD")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ColdStorage"),". For more information on how to add extra disks and disk tags, see ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/host/#multi-disk-management"},"Multi-disk Management")," for details."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(38874).Z,width:"1785",height:"772"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(89767).Z,width:"1919",height:"1079"})),(0,i.kt)("p",null,"Then, create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," for the HDD (use the above disk tags). For hard drives with large capacity but slow performance, the number of replicas can be reduced to improve performance."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(14341).Z,width:"1785",height:"767"})),(0,i.kt)("p",null,"You can now create a volume using the above ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," with HDDs mostly for cold storage or archiving purpose."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(94321).Z,width:"1789",height:"767"})))}h.isMDXComponent=!0},38874:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add_hdd_on_host_page-3ccc34f2a8bc65e511cc35776100e80d.png"},89767:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add_tags-00cf25164f80f53cdd438eaecee15665.png"},14341:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_hdd_storageclass-8e158b236ade10694195738114374437.png"},90993:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_disk_selector-c60a5061987f68f18252a819732640e6.png"},36119:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_entry-e4e255f7a07230ce65351e3966c056ff.png"},13264:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_header_sections-9d615b806de3fb6314419c0e76e30663.png"},82990:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_migratable-dde41ae11a1e2dbf156b91b4cc488a7a.png"},56501:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_node_selector-e055498ee31e10df985dd0452a825c21.png"},80730:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_replicas-720c4cf37f05197846b7d021a3d3fd7c.png"},63815:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_stale_timeout-5602affc442bba6fe5f933a309c3847f.png"},94321:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_volume_hdd-91b7f44277ede22bd6bd230b00697aa4.png"},72792:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_allow_vol_expansion-a76850a093cf3669eb31341081d8b51c.png"},46288:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_reclaim_policy-5440e3059223d00fcf3fe0398afbaec0.png"},9982:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_vol_binding_mode-54f01765773587a542eedc6a2afe43fa.png"},94935:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/data-locality-8cb58f0d743ab67ec8588153e1e8e9fe.png"}}]);