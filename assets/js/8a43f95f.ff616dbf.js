"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[43405],{38234:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});i(67294);var a=i(3905);const o={sidebar_position:6,sidebar_label:"Nvidia Driver Toolkit",title:"Nvidia Driver Toolkit"},n=void 0,d={unversionedId:"advanced/addons/nvidiadrivertoolkit",id:"advanced/addons/nvidiadrivertoolkit",title:"Nvidia Driver Toolkit",description:"Available as of v1.3.0",source:"@site/docs/advanced/addons/nvidiadrivertoolkit.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/nvidiadrivertoolkit",permalink:"/v1.4/advanced/addons/nvidiadrivertoolkit",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons/nvidiadrivertoolkit.md",tags:[],version:"current",lastUpdatedAt:1732644652,formattedLastUpdatedAt:"Nov 26, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Nvidia Driver Toolkit",title:"Nvidia Driver Toolkit"},sidebar:"api",previous:{title:"Managed DHCP",permalink:"/v1.4/advanced/addons/managed-dhcp"},next:{title:"Local Storage Support",permalink:"/v1.4/advanced/addons/lvm-local-storage"}},r={},l=[],s={toc:l},v="wrapper";function p({components:e,...t}){return(0,a.kt)(v,{...s,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/advanced/nvidiadrivertoolkit"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.3.0")),(0,a.kt)("p",null,"nvidia-driver-toolkit is an add-on that allows you to deploy out-of-band NVIDIA GRID KVM drivers to your existing Harvester clusters."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The toolkit only includes the correct Harvester OS image, build utilities, and kernel headers that allow NVIDIA drivers to be compiled and loaded from the container. You must download the NVIDIA KVM drivers using a valid NVIDIA subscription. For guidance on identifying the correct driver for your NVIDIA GPU, see the ",(0,a.kt)("a",{parentName:"p",href:"https://www.nvidia.com/en-au/drivers/vgpu-software-driver/"},"NVIDIA documentation"),".")),(0,a.kt)("p",null,"The Harvester ISO does not include the nvidia-driver-toolkit container image. Because of its size, the image is pulled from Docker Hub by default. If you have an air-gapped environment, you can download and push the image to your private registry. The ",(0,a.kt)("strong",{parentName:"p"},"Image Repository")," and ",(0,a.kt)("strong",{parentName:"p"},"Image Tag")," fields on the ",(0,a.kt)("strong",{parentName:"p"},"nvidia-driver-toolkit")," screen provide information about the image that you must download."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(8269).Z,width:"2313",height:"509"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Each new Harvester version will be released with the correct nvidia-driver-toolkit image to ensure that all dependencies required to install the NVIDIA vGPU KVM drivers are available in the image.")),(0,a.kt)("p",null,"To enable the addon, users need to perform the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide the ",(0,a.kt)("inlineCode",{parentName:"li"},"Driver Location"),": which is an http location where nvidia vgpu kvm driver file is located (as shown in the example)"),(0,a.kt)("li",{parentName:"ul"},"update the ",(0,a.kt)("inlineCode",{parentName:"li"},"Image Repository")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Image Tag")," if needed")),(0,a.kt)("p",null,"Once the addon is enabled, a nvidia-driver-toolkit daemonset is deployed to the cluster."),(0,a.kt)("p",null,"On pod startup, the entrypoint script will download the nvidia driver from the speificied ",(0,a.kt)("inlineCode",{parentName:"p"},"Driver Location"),", install the driver and load the kernel drivers."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDevices")," addon can now leverage this addon to manage the lifecycle of the vGPU devices on nodes containing supported GPU ",(0,a.kt)("a",{parentName:"p",href:"/v1.4/advanced/vgpusupport"},"devices"),"."))}p.isMDXComponent=!0},8269:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/nvidia-driver-toolkit-0b8402112136eac0f408667ff01c3df7.png"}}]);