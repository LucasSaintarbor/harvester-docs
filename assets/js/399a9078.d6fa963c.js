"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[723],{9044:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>s});A(67294);var n=A(3905);const a={id:"index",sidebar_position:2,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},i=void 0,r={unversionedId:"install/index",id:"version-v1.2/install/index",title:"ISO Installation",description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster.",source:"@site/versioned_docs/version-v1.2/install/iso-install.md",sourceDirName:"install",slug:"/install/index",permalink:"/v1.2/install/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/install/iso-install.md",tags:[],version:"v1.2",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:2,frontMatter:{id:"index",sidebar_position:2,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},sidebar:"api",previous:{title:"Hardware and Network Requirements",permalink:"/v1.2/install/requirements"},next:{title:"USB Installation",permalink:"/v1.2/install/usb-install"}},o={},s=[{value:"Installation Steps",id:"installation-steps",level:2},{value:"Known Issue",id:"known-issue",level:2},{value:"Installer may crash when using an older graphics card/monitor",id:"installer-may-crash-when-using-an-older-graphics-cardmonitor",level:3},{value:"Fail to join nodes using FQDN to a cluster which has custom SSL certificate configured",id:"fail-to-join-nodes-using-fqdn-to-a-cluster-which-has-custom-ssl-certificate-configured",level:3}],l={toc:s},d="wrapper";function g({components:e,...t}){return(0,n.kt)(d,{...l,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/iso-install"})),(0,n.kt)("p",null,"Harvester ships as a bootable appliance image, you can install it directly on a bare metal server with the ISO image. To get the ISO image, download ",(0,n.kt)("strong",{parentName:"p"},"\ud83d\udcbf harvester-v1.x.x-amd64.iso")," from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Harvester releases")," page."),(0,n.kt)("p",null,"During the installation, you can either choose to ",(0,n.kt)("strong",{parentName:"p"},"create a new Harvester cluster")," or ",(0,n.kt)("strong",{parentName:"p"},"join the node to an existing Harvester cluster"),"."),(0,n.kt)("p",null,"The following ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/X0VIGZ_lExQ"},"video")," shows a quick overview of an ISO installation."),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"800",height:"400",src:"https://www.youtube.com/embed/X0VIGZ_lExQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Mount the Harvester ISO file and boot the server by selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Installer")," option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"iso-install.png",src:A(80870).Z,width:"1152",height:"499"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the arrow keys to choose an installation mode. By default, the first node will be the management node of the cluster."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"choose-installation-mode.png",src:A(68123).Z,width:"1152",height:"216"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Create a new Harvester cluster"),": creates an entirely new Harvester cluster.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Join an existing Harvester cluster"),": joins an existing Harvester cluster. You need the VIP and cluster token of the cluster you want to join.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Install Harvester binaries only"),": If you choose this option, additional setup is required after the first bootup."))),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"When there are 3 nodes, the other 2 nodes added first are automatically promoted to management nodes to form an HA cluster. If you want to promote management nodes from different zones, you can add the node label ",(0,n.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone")," in the ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration#oslabels"},"os.labels")," config by providing a URL of ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration"},"Harvester configuration")," on the customize the host step. In this case, at least three different zones are required."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the installation disk you want to install the Harvester cluster on and the data disk you want to store VM data on. By default, Harvester uses ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GUID Partition Table (GPT)")," partitioning schema for both UEFI and BIOS. If you use the BIOS boot, then you will have the option to select ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Master_boot_record"},"Master boot record (MBR)"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"choose-installation-target-data-disk.png",src:A(19795).Z,width:"2304",height:"636"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Installation disk"),": The disk to install the Harvester cluster on. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Data disk"),": The disk to store VM data on. Choosing a separate disk to store VM data is recommended."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Persistent size"),": If you only have one disk or use the same disk for both OS and VM data, you need to configure persistent partition size to store system packages and container images. The default and minimum persistent partition size is 150 GiB. You can specify a size like 200Gi or 153600Mi."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"HostName")," of the node."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"config-hostname.png",src:A(40089).Z,width:"1152",height:"187"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure network interface(s) for the management network. By default, Harvester creates a ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/requirements#hardware-requirements"},"bonded NIC")," named ",(0,n.kt)("inlineCode",{parentName:"p"},"mgmt-bo")," for the ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/networking/index#built-in-cluster-network"},"built-in management cluster network"),", and the IP address can be configured via DHCP or statically assigned."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"config-network.png",src:A(15496).Z,width:"1152",height:"507"})),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"It is not possible to change the node IP throughout the lifecycle of a Harvester cluster. If using DHCP, you must ensure the DHCP server always offers the same IP for the same node. If the node IP is changed, the related node cannot join the cluster and might even break the cluster."),(0,n.kt)("p",{parentName:"admonition"},"In addition, you are required to add the ",(0,n.kt)("em",{parentName:"p"},"routers")," option (",(0,n.kt)("inlineCode",{parentName:"p"},"option routers"),") when configuring the DHCP server. This option is used to add the default route on the Harvester host. Without the default route, the node will fail to start.\nFor example:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"Linux~ # ip route\ndefault via 192.168.122.1 dev mgmt-br proto dhcp\n")),(0,n.kt)("p",{parentName:"admonition"},"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/pxe-boot-install#dhcp-server-configuration"},"DHCP Server Configuration"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"DNS Servers"),". Use commas as a delimiter to add more DNS servers. Leave it blank to use the default DNS server."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"config-dns-server.png",src:A(89240).Z,width:"1152",height:"174"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the virtual IP (VIP) by selecting a ",(0,n.kt)("inlineCode",{parentName:"p"},"VIP Mode"),". This VIP is used to access the cluster or for other nodes to join the cluster."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If using DHCP to configure the IP address, you need to configure a static MAC-to-IP address mapping on your DHCP server to have a persistent virtual IP (VIP), and the VIP must be unique.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"config-virtual-ip.png",src:A(17384).Z,width:"1152",height:"222"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster token"),". This token is used for adding other nodes to the cluster."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"config-cluster-token.png",src:A(66278).Z,width:"1152",height:"189"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure and confirm a ",(0,n.kt)("inlineCode",{parentName:"p"},"Password")," to access the node. The default SSH user is ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"config-password.png",src:A(84601).Z,width:"1152",height:"206"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure ",(0,n.kt)("inlineCode",{parentName:"p"},"NTP servers")," to make sure all nodes' times are synchronized. This defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"0.suse.pool.ntp.org"),". Use commas as a delimiter to add more NTP servers."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"config-ntp-server.png",src:A(38872).Z,width:"1152",height:"201"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) If you need to use an HTTP proxy to access the outside world, enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"Proxy address"),". Otherwise, leave this blank."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"config-proxy.png",src:A(152).Z,width:"1152",height:"181"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) You can choose to import SSH keys by providing ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP URL"),". For example, your GitHub public keys ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/<username>.keys")," can be used."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"import-ssh-keys.png",src:A(13353).Z,width:"1152",height:"174"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) If you need to customize the host with a ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/install/harvester-configuration"},"Harvester configuration")," file, enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"HTTP URL")," here."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"remote-config.png",src:A(72316).Z,width:"1152",height:"148"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review and confirm your installation options. After confirming the installation options, Harvester will be installed to your host. The installation may take a few minutes to be complete."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"confirm-install.png",src:A(50440).Z,width:"1152",height:"580"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the installation is complete, your node restarts. After the restart, the Harvester console displays the management URL and status. The default URL of the web interface is ",(0,n.kt)("inlineCode",{parentName:"p"},"https://your-virtual-ip"),". You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"F12")," to switch from the Harvester console to the Shell and type ",(0,n.kt)("inlineCode",{parentName:"p"},"exit")," to go back to the Harvester console."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Choosing ",(0,n.kt)("inlineCode",{parentName:"p"},"Install Harvester binaries only")," on the first page requires additional setup after the first bootup.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"iso-installed.png",src:A(80115).Z,width:"1530",height:"1150"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be prompted to set the password for the default ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," user when logging in for the first time."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"first-login.png",src:A(28910).Z,width:"2555",height:"1295"})))),(0,n.kt)("h2",{id:"known-issue"},"Known Issue"),(0,n.kt)("h3",{id:"installer-may-crash-when-using-an-older-graphics-cardmonitor"},"Installer may crash when using an older graphics card/monitor"),(0,n.kt)("p",null,"In some cases, if you are using an older graphics card/monitor, you may encounter a ",(0,n.kt)("inlineCode",{parentName:"p"},"panic: invalid dimensions")," error during ISO installation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"invalid-dimensions.png",src:A(22541).Z,width:"799",height:"591"})),(0,n.kt)("p",null,"We are working on this known issue and planning a fix for a future release. You can try to use another GRUB entry to force it to use the resolution of ",(0,n.kt)("inlineCode",{parentName:"p"},"1024x768")," when booting up."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"force-resolution.png",src:A(79870).Z,width:"1537",height:"1149"})),(0,n.kt)("p",null,"If you are using a version earlier than v1.1.1, please try the following workaround:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Boot up with the ISO, and press ",(0,n.kt)("inlineCode",{parentName:"p"},"E")," to edit the first menu entry:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"grub-menu.png",src:A(16165).Z,width:"1692",height:"946"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Append ",(0,n.kt)("inlineCode",{parentName:"p"},"vga=792")," to the line started with ",(0,n.kt)("inlineCode",{parentName:"p"},"$linux"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"edit-menu-entry.png",src:A(67467).Z,width:"1695",height:"941"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl+X")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"F10")," to boot up."))),(0,n.kt)("h3",{id:"fail-to-join-nodes-using-fqdn-to-a-cluster-which-has-custom-ssl-certificate-configured"},"Fail to join nodes using FQDN to a cluster which has custom SSL certificate configured"),(0,n.kt)("p",null,"You may encounter that newly joined nodes stay in the ",(0,n.kt)("strong",{parentName:"p"},"Not Ready")," state indefinitely. This is likely the outcome if you already have a set of ",(0,n.kt)("strong",{parentName:"p"},"custom SSL certificates")," configured on the to-be-joined Harvester cluster and provide an ",(0,n.kt)("strong",{parentName:"p"},"FQDN")," instead of a VIP address for the management address during the Harvester installation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Joining nodes stuck at the &quot;NotReady&quot; state",src:A(45214).Z,width:"2056",height:"1544"})),(0,n.kt)("p",null,"You can check the ",(0,n.kt)("strong",{parentName:"p"},"SSL certificates")," on the Harvester dashboard's setting page or using the command line tool ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get settings.harvesterhci.io ssl-certificates")," to see if there is any custom SSL certificate configured (by default, it is empty)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The SSL certificate setting",src:A(85722).Z,width:"2752",height:"480"})),(0,n.kt)("p",null,"The second thing to look at is the joining nodes. Try to get access to the nodes via consoles or SSH sessions and then check the log of ",(0,n.kt)("inlineCode",{parentName:"p"},"rancherd"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'$ journalctl -u rancherd.service\nOct 02 08:04:43 node-0 systemd[1]: Starting Rancher Bootstrap...\nOct 02 08:04:43 node-0 rancherd[2017]: time="2023-10-02T08:04:43Z" level=info msg="Loading config file [/usr/share/rancher/rancherd/config.yaml.d/50-defaults.yaml]"\nOct 02 08:04:43 node-0 rancherd[2017]: time="2023-10-02T08:04:43Z" level=info msg="Loading config file [/usr/share/rancher/rancherd/config.yaml.d/91-harvester-bootstrap-repo.yaml]"\nOct 02 08:04:43 node-0 rancherd[2017]: time="2023-10-02T08:04:43Z" level=info msg="Loading config file [/etc/rancher/rancherd/config.yaml]"\nOct 02 08:04:43 node-0 rancherd[2017]: time="2023-10-02T08:04:43Z" level=info msg="Bootstrapping Rancher (v2.7.5/v1.25.9+rke2r1)"\nOct 02 08:04:44 node-0 rancherd[2017]: time="2023-10-02T08:04:44Z" level=info msg="Writing plan file to /var/lib/rancher/rancherd/plan/plan.json"\nOct 02 08:04:44 node-0 rancherd[2017]: time="2023-10-02T08:04:44Z" level=info msg="Applying plan with checksum "\nOct 02 08:04:44 node-0 rancherd[2017]: time="2023-10-02T08:04:44Z" level=info msg="No image provided, creating empty working directory /var/lib/rancher/rancherd/plan/work/20231002-080444-applied.plan/_0"\nOct 02 08:04:44 node-0 rancherd[2017]: time="2023-10-02T08:04:44Z" level=info msg="Running command: /usr/bin/env [sh /var/lib/rancher/rancherd/install.sh]"\nOct 02 08:04:44 node-0 rancherd[2017]: time="2023-10-02T08:04:44Z" level=info msg="[stdout]: [INFO]  Using default agent configuration directory /etc/rancher/agent"\nOct 02 08:04:44 node-0 rancherd[2017]: time="2023-10-02T08:04:44Z" level=info msg="[stdout]: [INFO]  Using default agent var directory /var/lib/rancher/agent"\nOct 02 08:04:44 node-0 rancherd[2017]: time="2023-10-02T08:04:44Z" level=info msg="[stderr]: [WARN]  /usr/local is read-only or a mount point; installing to /opt/rancher-system-agent"\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stdout]: [INFO]  Determined CA is necessary to connect to Rancher"\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stdout]: [INFO]  Successfully downloaded CA certificate"\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stdout]: [INFO]  Value from https://192.168.48.240/cacerts is an x509 certificate"\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stderr]: curl: (60) SSL: no alternative certificate subject name matches target host name \'192.168.48.240\'"\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stderr]: More details here: https://curl.se/docs/sslcerts.html"\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stderr]: "\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stderr]: curl failed to verify the legitimacy of the server and therefore could not"\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stderr]: establish a secure connection to it. To learn more about this situation and"\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stderr]: how to fix it, please visit the web page mentioned above."\nOct 02 08:04:45 node-0 rancherd[2017]: time="2023-10-02T08:04:45Z" level=info msg="[stderr]: [ERROR]  000 received while testing Rancher connection. Sleeping for 5 seconds and trying again"\n')),(0,n.kt)("p",null,"This is because ",(0,n.kt)("inlineCode",{parentName:"p"},"rancherd")," will try to download the CA using the provided FQDN in the insecure mode from the embedded Rancher Manager on the Harvester cluster when bootstrapping and then use that CA to verify the received certificates for the following communications. However, the bootstrapping script ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rancherd/install.sh"),", which is also downloaded from the embedded Rancher Manager, has the VIP address configured:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'#!/usr/bin/env sh\n\nCATTLE_AGENT_BINARY_BASE_URL="https://192.168.48.240/assets"\nCATTLE_SERVER=https://192.168.48.240\nCATTLE_CA_CHECKSUM="be59358f796b09615b3f980cfe28ff96cae42a141289900bae494d869f363a67"\n...\n')),(0,n.kt)("p",null,"The nodes will query the embedded Rancher Manager via the VIP address instead of the FQDN provided during the Harvester installation. If the custom SSL certificate you configured doesn't contain a valid IP SAN extension, ",(0,n.kt)("inlineCode",{parentName:"p"},"rancherd")," will fail at the exact point shown above."),(0,n.kt)("p",null,"To work around this, you need to configure the cluster with a valid IP SAN extension, i.e., include the VIP address in the IP SAN extension when generating the CSR or signing the certificate. After applying the new certificate on the cluster, ",(0,n.kt)("inlineCode",{parentName:"p"},"rancherd")," can then proceed and finish its job. However, soon ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-system-agent")," will complain that it cannot verify the certificate received from the embedded Rancher Manager:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'$ journalctl -u rancher-system-agent.service\nOct 02 10:18:44 node-0 systemd[1]: rancher-system-agent.service: Scheduled restart job, restart counter is at 91.\nOct 02 10:18:44 node-0 systemd[1]: Stopped Rancher System Agent.\nOct 02 10:18:44 node-0 systemd[1]: Started Rancher System Agent.\nOct 02 10:18:44 node-0 rancher-system-agent[9620]: time="2023-10-02T10:18:44Z" level=info msg="Rancher System Agent version v0.3.3 (9e827a5) is starting"\nOct 02 10:18:44 node-0 rancher-system-agent[9620]: time="2023-10-02T10:18:44Z" level=info msg="Using directory /var/lib/rancher/agent/work for work"\nOct 02 10:18:44 node-0 rancher-system-agent[9620]: time="2023-10-02T10:18:44Z" level=info msg="Starting remote watch of plans"\nOct 02 10:18:44 node-0 rancher-system-agent[9620]: time="2023-10-02T10:18:44Z" level=info msg="Initial connection to Kubernetes cluster failed with error Get \\"https://192.168.48.240/version\\": x509: certificate signed by unknown authority, removing CA data and trying again"\nOct 02 10:18:44 node-0 rancher-system-agent[9620]: time="2023-10-02T10:18:44Z" level=fatal msg="error while connecting to Kubernetes cluster with nullified CA data: Get \\"https://192.168.48.240/version\\": x509: certificate signed by unknown authority"\nOct 02 10:18:44 node-0 systemd[1]: rancher-system-agent.service: Main process exited, code=exited, status=1/FAILURE\nOct 02 10:18:44 node-0 systemd[1]: rancher-system-agent.service: Failed with result \'exit-code\'.\n')),(0,n.kt)("p",null,"If you see a similar log output, you need to manually add the CA to the trust list on each joining node with the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# prepare the CA as embedded-rancher-ca.pem on the nodes\n$ sudo cp embedded-rancher-ca.pem /etc/pki/trust/anchors/\n$ sudo update-ca-certificates\n")),(0,n.kt)("p",null,"After adding the CA to the trust list, the nodes can join to the cluster successfully."))}g.isMDXComponent=!0},68123:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/choose-installation-mode-5940cde59cb99d8eb4368bc58a5fb434.png"},19795:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/choose-installation-target-data-disk-586ce940d3363de345e8e2c27a190067.png"},66278:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/config-cluster-token-99a582f56222538cc805a9f41807e947.png"},89240:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/config-dns-server-2ea5bb4ef2b94742ea7e006948fb61a0.png"},40089:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/config-hostname-cb9b5c982939e764d043ac6831dd632a.png"},15496:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/config-network-7f982bb95365b22b6b502a8c91b43260.png"},38872:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/config-ntp-server-c477fc3d12f1342e9a7762e0d6c3796c.png"},84601:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/config-password-7a276a4140eb64cc466de59d8329c6ab.png"},152:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/config-proxy-30b54e7cb3691f469ab8e443cd18ed13.png"},17384:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/config-virtual-ip-88fae35e06ee96529686270de2ac6ddd.png"},50440:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/confirm-install-39ea62ac753b219d118f6fe5ee3744fd.png"},67467:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/edit-menu-entry-c532986f01fb640a5d340b42c679777f.png"},28910:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},79870:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/force-resolution-837f06b1ec664c755770590ae133dacc.png"},16165:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/grub-menu-517ed670d5e93618eaee9d106b45e469.png"},13353:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/import-ssh-keys-9171ecc6f8d996859183a4147e10044f.png"},22541:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACIED4AAIAI4QMAAIgQPgAAgAjhAwAAiBA+AACACOEDAACI+FNb4f1+J9oBAAA83P8CLNTuJ9yKCScAAAAASUVORK5CYII="},80870:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/iso-install-457b4eafa01f76d34dc1ed14a1a3fce2.png"},80115:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/iso-installed-8acd6980132f3402a086b63624ec9abf.png"},45214:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/join-node-not-ready-75f61f32c0ca10ce497d9d7901e2d7de.png"},72316:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/remote-config-dc9aeb1bd1f9c2777d2a649dc8944511.png"},85722:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/ssl-certificates-setting-7fbf55360938e56928195cd0dbcc7262.png"}}]);