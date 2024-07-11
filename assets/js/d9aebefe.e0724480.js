"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[11146],{18679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>d});r(67294);var a=r(3905);const n={sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},l=void 0,i={unversionedId:"rancher/cloud-provider",id:"version-v1.0/rancher/cloud-provider",title:"Harvester Cloud Provider",description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer.",source:"@site/versioned_docs/version-v1.0/rancher/cloud-provider.md",sourceDirName:"rancher",slug:"/rancher/cloud-provider",permalink:"/v1.0/rancher/cloud-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/cloud-provider.md",tags:[],version:"v1.0",lastUpdatedAt:1720503628,formattedLastUpdatedAt:"Jul 9, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},sidebar:"api",previous:{title:"Creating an K3s Kubernetes Cluster",permalink:"/v1.0/rancher/node/k3s-cluster"},next:{title:"Harvester CSI Driver",permalink:"/v1.0/rancher/csi-driver"}},o={},d=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying to the RKE1 Cluster with Harvester Node Driver",id:"deploying-to-the-rke1-cluster-with-harvester-node-driver",level:3},{value:"Deploying to the RKE2 Cluster with Harvester Node Driver Experimental",id:"deploying-to-the-rke2-cluster-with-harvester-node-driver-experimental",level:3},{value:"Deploying to the K3s Cluster with Harvester Node Driver Experimental",id:"deploying-to-the-k3s-cluster-with-harvester-node-driver-experimental",level:3},{value:"Deploy external cloud provider",id:"deploy-external-cloud-provider",level:3},{value:"Upgrade Cloud Provider",id:"upgrade-cloud-provider",level:2},{value:"Upgrade RKE2",id:"upgrade-rke2",level:3},{value:"Upgrade RKE/K3s",id:"upgrade-rkek3s",level:3},{value:"Load Balancer Support",id:"load-balancer-support",level:2},{value:"IPAM",id:"ipam",level:3},{value:"Health Checks",id:"health-checks",level:3}],s={toc:d},p="wrapper";function c({components:e,...t}){return(0,a.kt)(p,{...s,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/cloud-provider"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/rke1-cluster"},"RKE1")," and ",(0,a.kt)("a",{parentName:"p",href:"/v1.0/rancher/node/rke2-cluster"},"RKE2")," clusters can be provisioned in Rancher using the built-in Harvester Node Driver. Harvester provides ",(0,a.kt)("a",{parentName:"p",href:"#load-balancer-support"},"load balancer")," and ",(0,a.kt)("a",{parentName:"p",href:"/v1.0/rancher/csi-driver"},"cluster Persistent Storage")," support to the guest Kubernetes cluster."),(0,a.kt)("p",null,"In this page we will learn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to deploy the Harvester cloud provider in both RKE1 and RKE2."),(0,a.kt)("li",{parentName:"ul"},"How to use the ",(0,a.kt)("a",{parentName:"li",href:"#load-balancer-support"},"Harvester load balancer"),".")),(0,a.kt)("h2",{id:"deploying"},"Deploying"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,a.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace.")),(0,a.kt)("h3",{id:"deploying-to-the-rke1-cluster-with-harvester-node-driver"},"Deploying to the RKE1 Cluster with Harvester Node Driver"),(0,a.kt)("p",null,"When spinning up an RKE cluster using the Harvester node driver, you can perform two steps to deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," option."),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{src:r(71822).Z,width:"3066",height:"436"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester Cloud Provider")," from the Rancher marketplace."),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{src:r(24501).Z,width:"3480",height:"886"})))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You should specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster name"),". The default value ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes")," will be set if no ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster name")," is entered. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster name")," is used to distinguish the ownership of the Harvester load balancers. ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install Harvester csi driver from the Rancher marketplace if needed."),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{src:r(81298).Z,width:"3468",height:"850"})))),(0,a.kt)("h3",{id:"deploying-to-the-rke2-cluster-with-harvester-node-driver-experimental"},"Deploying to the RKE2 Cluster with Harvester Node Driver ","[Experimental]"),(0,a.kt)("p",null,"When spinning up an RKE2 cluster using the Harvester node driver, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider. The node driver will then help deploy both the CSI driver and CCM automatically."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(37919).Z,width:"1669",height:"315"})),(0,a.kt)("h3",{id:"deploying-to-the-k3s-cluster-with-harvester-node-driver-experimental"},"Deploying to the K3s Cluster with Harvester Node Driver ","[Experimental]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choose the Kubernetes version to be k3s and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit as YAML")," button to config the K3s cluster YAML (For existing cluster, you can also click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit YAML")," button to update it):"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(70693).Z,width:"2249",height:"601"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit K3s cluster YAML."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"disable-cloud-provider: true")," to disable default k3s cloud provider."),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"cloud-provider=external")," to use harvester cloud provider.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(44729).Z,width:"457",height:"706"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/cloud-provider-harvester/blob/master/deploy/generate_addon.sh"},"Generate addon configuration")," and put it in K3s VMs ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/cloud-config"),"."))),(0,a.kt)("h3",{id:"deploy-external-cloud-provider"},"Deploy external cloud provider"),(0,a.kt)("p",null,"Deploying external cloud provider is similar for both RKE2 and K3s based clusters."),(0,a.kt)("p",null,"Once the in-tree cloud provider has been disabled by following the above steps, you can deploy the external cloud provider via:"),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(73350).Z,width:"1599",height:"764"})),(0,a.kt)("p",null,"A sample additional manifest is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: harvester-cloud-provider\n  namespace: kube-system\nspec:\n  targetNamespace: kube-system\n  bootstrap: true\n  repo: https://charts.harvesterhci.io/\n  chart: harvester-cloud-provider\n  version: 0.1.12\n  helmVersion: v3\n")),(0,a.kt)("p",null,"The cloud provider needs a kubeconfig file to work, a limited scoped one can be generated using the ",(0,a.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," script available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/cloud-provider-harvester"},"harvester/cloud-provider-harvester")," repo."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NOTE:")," The script needs access to the harvester cluster kubeconfig to work. In addition the namespace needs to be the namespace in which the workload cluster will be created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# depend on kubectl to operate the Harvester cluster\n./deploy/generate_addon.sh <serviceaccount name> <namespace>\n")),(0,a.kt)("p",null,"The output will look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'(\u2388 |local:default)\u279c  cloud-provider-harvester git:(master) \u2717 ./deploy/generate_addon.sh harvester-cloud-provider default\nCreating target directory to hold files in ./tmp/kube...done\nCreating a service account in default namespace: harvester-cloud-provider\nW0506 16:44:15.429068 3008674 helpers.go:598] --dry-run is deprecated and can be replaced with --dry-run=client.\nserviceaccount/harvester-cloud-provider configured\n\nCreating a role in default namespace: harvester-cloud-provider\nrole.rbac.authorization.k8s.io/harvester-cloud-provider unchanged\n\nCreating a rolebinding in default namespace: harvester-cloud-provider\nW0506 16:44:23.798293 3008738 helpers.go:598] --dry-run is deprecated and can be replaced with --dry-run=client.\nrolebinding.rbac.authorization.k8s.io/harvester-cloud-provider configured\n\nGetting secret of service account harvester-cloud-provider on default\nSecret name: harvester-cloud-provider-token-5zkk9\n\nExtracting ca.crt from secret...done\nGetting user token from secret...done\nSetting current context to: local\nCluster name: local\nEndpoint: https://HARVESTER_ENDPOINT/k8s/clusters/local\n\nPreparing k8s-harvester-cloud-provider-default-conf\nSetting a cluster entry in kubeconfig...Cluster "local" set.\nSetting token credentials entry in kubeconfig...User "harvester-cloud-provider-default-local" set.\nSetting a context entry in kubeconfig...Context "harvester-cloud-provider-default-local" created.\nSetting the current-context in the kubeconfig file...Switched to context "harvester-cloud-provider-default-local".\n########## cloud config ############\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: CACERT\n    server: https://HARVESTER-ENDPOINT/k8s/clusters/local\n  name: local\ncontexts:\n- context:\n    cluster: local\n    namespace: default\n    user: harvester-cloud-provider-default-local\n  name: harvester-cloud-provider-default-local\ncurrent-context: harvester-cloud-provider-default-local\nkind: Config\npreferences: {}\nusers:\n- name: harvester-cloud-provider-default-local\n  user:\n    token: TOKEN\n')),(0,a.kt)("p",null,"This cloud-config file can now be injected via the ",(0,a.kt)("inlineCode",{parentName:"p"},"user-data")," available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"advanced options")," for the nodepool.\n",(0,a.kt)("img",{src:r(28985).Z,width:"2069",height:"497"})),(0,a.kt)("p",null,"With these settings in place a K3s / RKE2 cluster should provision successfully while using the external cloud provider."),(0,a.kt)("h2",{id:"upgrade-cloud-provider"},"Upgrade Cloud Provider"),(0,a.kt)("h3",{id:"upgrade-rke2"},"Upgrade RKE2"),(0,a.kt)("p",null,"The cloud provider can be upgraded by upgrading the RKE2 version. You can upgrade the RKE2 cluster via the Rancher UI as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Find the guest cluster that you want to upgrade and select \u22ee ",(0,a.kt)("strong",{parentName:"li"},"> Edit Config"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes Version"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("h3",{id:"upgrade-rkek3s"},"Upgrade RKE/K3s"),(0,a.kt)("p",null,"RKE/K3s upgrade cloud provider via the Rancher UI, as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > RKE/K3s Cluster > Apps > Installed Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Find the cloud provider chart and select \u22ee ",(0,a.kt)("strong",{parentName:"li"},"> Edit/Upgrade"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Version"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Next > Update"),".")),(0,a.kt)("h2",{id:"load-balancer-support"},"Load Balancer Support"),(0,a.kt)("p",null,"After deploying the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester Cloud provider"),", you can use the Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service to expose a microservice inside the guest cluster to the external world. When you create a Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service, a Harvester load balancer is assigned to the service and you can edit it through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add-on Config")," in the Rancher UI."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(32544).Z,width:"3474",height:"1174"})),(0,a.kt)("h3",{id:"ipam"},"IPAM"),(0,a.kt)("p",null,"Harvester's built-in load balancer supports both ",(0,a.kt)("inlineCode",{parentName:"p"},"pool")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dhcp")," modes. You can select the mode in the Rancher UI. Harvester adds the annotation ",(0,a.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/ipam")," to the service behind."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"pool: You should configure an IP address pool in Harvester in advance. The Harvester LoadBalancer controller will allocate an IP address from the IP address pool for the load balancer."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:r(88502).Z,width:"3482",height:"932"})," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"dhcp:  A DHCP server is required. The Harvester LoadBalancer controller will request an IP address from the DHCP server."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It is not allowed to modify the IPAM mode. You need to create a new service if you want to modify the IPAM mode.")),(0,a.kt)("h3",{id:"health-checks"},"Health Checks"),(0,a.kt)("p",null,"The Harvester load balancer supports TCP health checks. You can specify the parameters in the Rancher UI if you enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"Health Check")," option."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{src:r(77184).Z,width:"3024",height:"1450"})),(0,a.kt)("p",null,"Alternatively, you can specify the parameters by adding annotations to the service manually. The following annotations are supported:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Annotation Key"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-port")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the port. The prober will access the address composed of the backend server IP and the port.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-success-threshold")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check success threshold. The default value is 1. The backend server will start forwarding traffic if the number of times the prober continuously detects an address successfully reaches the threshold.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-failure-threshold")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check failure threshold. The default value is 3. The backend server will stop forwarding traffic if the number of health check failures reaches the threshold.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-periodseconds")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check period. The default value is 5 seconds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-timeoutseconds")),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"false"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the timeout of every health check. The default value is 3 seconds.")))))}c.isMDXComponent=!0},28985:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cloud-config-userdata-8f6db0afa2079998e6d0930ca7ace5a4.png"},70693:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/edit-k3s-cluster-yaml-244d7967b0be178a714944ddc2d8c465.png"},73350:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/external-cloud-provider-addon-c892cb3dec8e72bd9ef5117f55b6131d.png"},77184:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/health-check-530254bf13d824edd8587eac0d30016d.png"},24501:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-cloud-provider-fcca9c86ea1d2c7eedf824c9b0b5d63a.png"},81298:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-csi-driver-02e0ba91b02f08e31bf87a2d9df2afee.png"},44729:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/k3s-cluster-yaml-content-for-harvester-cloud-provider-2237fc21b54b0440297a3050fc4e5826.png"},32544:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lb-svc-e475b5a9a67cfcd1f5d37c2d550fc917.png"},71822:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke-cloud-provider-8cf30f11940ab37bbda533f8ad2554b9.png"},37919:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-cloud-provider-2d541c4c966ae1adf2f7c375ea1743ac.png"},88502:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vip-pool-d544f501f104efd9aa4dd3e9015efd9d.png"}}]);