"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[24793],{47469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>m});n(67294);var r=n(3905);const a={sidebar_position:2,sidebar_label:"Upgrade from v1.3.1 to v1.3.2",title:"Upgrade from v1.3.1 to v1.3.2"},s=void 0,i={unversionedId:"upgrade/v1-3-1-to-v1-3-2",id:"version-v1.3/upgrade/v1-3-1-to-v1-3-2",title:"Upgrade from v1.3.1 to v1.3.2",description:"General information",source:"@site/versioned_docs/version-v1.3/upgrade/v1-3-1-to-v1-3-2.md",sourceDirName:"upgrade",slug:"/upgrade/v1-3-1-to-v1-3-2",permalink:"/v1.3/upgrade/v1-3-1-to-v1-3-2",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/upgrade/v1-3-1-to-v1-3-2.md",tags:[],version:"v1.3",lastUpdatedAt:1732644652,formattedLastUpdatedAt:"Nov 26, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upgrade from v1.3.1 to v1.3.2",title:"Upgrade from v1.3.1 to v1.3.2"},sidebar:"api",previous:{title:"Upgrading Harvester",permalink:"/v1.3/upgrade/index"},next:{title:"Upgrade from v1.2.2/v1.3.0 to v1.3.1",permalink:"/v1.3/upgrade/v1-2-2-to-v1-3-1"}},o={},m=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. Two-node cluster upgrade stuck after the first node is pre-drained",id:"1-two-node-cluster-upgrade-stuck-after-the-first-node-is-pre-drained",level:3},{value:"2. Automatic image cleanup is not functioning",id:"2-automatic-image-cleanup-is-not-functioning",level:3}],l={toc:m},d="wrapper";function p({components:e,...t}){return(0,r.kt)(d,{...l,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/upgrade/v1-3-1-to-v1-3-2"})),(0,r.kt)("h2",{id:"general-information"},"General information"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"Upgrade")," button appears on the ",(0,r.kt)("strong",{parentName:"p"},"Dashboard")," screen whenever a new Harvester version that you can upgrade to becomes available. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/upgrade/index#start-an-upgrade"},"Start an upgrade"),"."),(0,r.kt)("p",null,"For air-gapped environments, see ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/upgrade/index#prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade"),"."),(0,r.kt)("h2",{id:"known-issues"},"Known issues"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1-two-node-cluster-upgrade-stuck-after-the-first-node-is-pre-drained"},"1. Two-node cluster upgrade stuck after the first node is pre-drained"),(0,r.kt)("admonition",{title:"important",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Shut down all workload VMs before upgrading ",(0,r.kt)("strong",{parentName:"p"},"two-node clusters")," to prevent data loss.")),(0,r.kt)("p",null,"The worker node can falsely transition to a not-ready state when RKE2 is upgraded on the management node. Consequently, the existing pods on the worker node are evicted and new pods cannot be scheduled on any nodes. These ultimately cause a chained failure in the whole cluster and prevent completion of the upgrade process."),(0,r.kt)("p",null,"Check the cluster status when the following occur:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The upgrade process becomes stuck for some time."),(0,r.kt)("li",{parentName:"ul"},"You are unable to access the Harvester UI and receive an HTTP 503 error.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the conditions and node statuses of the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"Upgrade")," custom resource."),(0,r.kt)("p",{parentName:"li"},"Proceed to the next step if the following conditions are met:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SystemServicesUpgraded")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),", indicating that the system services upgrade is completed."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeStatuses"),", the state of the management node is either ",(0,r.kt)("inlineCode",{parentName:"li"},"Pre-drained")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Waiting Reboot"),"."),(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeStatuses"),", the state of the worker node is ",(0,r.kt)("inlineCode",{parentName:"li"},"Images preloaded"),".")),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'# Find out the latest Upgrade custom resource\n$ kubectl -n harvester-system get upgrades.harvesterhci -l harvesterhci.io/latestUpgrade=true        \nNAME                 AGE\nhvst-upgrade-szlg8   48m\n\n# Check the conditions and node statuses\n$ kubectl -n harvester-system get upgrades hvst-upgrade-szlg8 -o yaml\napiVersion: harvesterhci.io/v1beta1\nkind: Upgrade\nmetadata:\n  ...\n  labels:\n    harvesterhci.io/latestUpgrade: "true"\n    harvesterhci.io/upgradeState: UpgradingNodes\n  name: hvst-upgrade-szlg8\n  namespace: harvester-system\n  ...\nspec:\n  image: ""\n  logEnabled: false\n  version: v1.3.2-rc2\nstatus:\n  conditions:\n  - status: Unknown\n    type: Completed\n  - lastUpdateTime: "2024-09-02T11:57:04Z"\n    message: Upgrade observability is administratively disabled\n    reason: Disabled\n    status: "False"\n    type: LogReady\n  - lastUpdateTime: "2024-09-02T11:58:01Z"\n    status: "True"\n    type: ImageReady\n  - lastUpdateTime: "2024-09-02T12:02:31Z"\n    status: "True"\n    type: RepoReady\n  - lastUpdateTime: "2024-09-02T12:18:44Z"\n    status: "True"\n    type: NodesPrepared\n  - lastUpdateTime: "2024-09-02T12:31:25Z"\n    status: "True"\n    type: SystemServicesUpgraded\n  - status: Unknown\n    type: NodesUpgraded\n  imageID: harvester-system/hvst-upgrade-szlg8\n  nodeStatuses:\n    harvester-c6phd:\n      state: Pre-drained\n    harvester-jkqhq:\n      state: Images preloaded\n  previousVersion: v1.3.1\n  ...\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the node status."),(0,r.kt)("p",{parentName:"li"},"Proceed to the next step if the following conditions are met:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The status of the worker node is ",(0,r.kt)("inlineCode",{parentName:"li"},"NotReady"),"."),(0,r.kt)("li",{parentName:"ul"},"The status of the management node is ",(0,r.kt)("inlineCode",{parentName:"li"},"Ready,SchedulingDisabled"),".")),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl get nodes\nNAME              STATUS                     ROLES                       AGE    VERSION\nharvester-c6phd   Ready,SchedulingDisabled   control-plane,etcd,master   174m   v1.28.12+rke2r1\nharvester-jkqhq   NotReady                   <none>                      166m   v1.27.13+rke2r1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the pods on the worker node."),(0,r.kt)("p",{parentName:"li"},"The issue exists in the cluster if the status of most pods is ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminating"),"."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# Assume harvester-jkqhq is the worker node\n$ kubectl get pods -A --field-selector spec.nodeName=harvester-jkqhq\nNAMESPACE                         NAME                                                    READY   STATUS        RESTARTS       AGE\ncattle-fleet-local-system         fleet-agent-6779fb5dd9-dkpjz                            1/1     Terminating   0              18m\ncattle-fleet-system               fleet-agent-86db8d9954-qgcpq                            1/1     Terminating   2 (18m ago)    61m\ncattle-fleet-system               fleet-controller-696d4b8878-ddctd                       1/1     Terminating   1 (19m ago)    29m\ncattle-fleet-system               gitjob-694dd97686-s4z68                                 1/1     Terminating   1 (19m ago)    29m\ncattle-provisioning-capi-system   capi-controller-manager-6f497d5574-wkrnf                1/1     Terminating   0              20m\ncattle-system                     cattle-cluster-agent-76db9cf9fc-5hhsx                   1/1     Terminating   0              20m\ncattle-system                     cattle-cluster-agent-76db9cf9fc-dnr6m                   1/1     Terminating   0              20m\ncattle-system                     harvester-cluster-repo-7458c7c69d-p982g                 1/1     Terminating   0              27m\ncattle-system                     rancher-7d65df9bd4-77n7w                                1/1     Terminating   0              31m\ncattle-system                     rancher-webhook-cfc66d5d7-fd6gm                         1/1     Terminating   0              28m\nharvester-system                  harvester-85ff674986-wxkl4                              1/1     Terminating   0              26m\nharvester-system                  harvester-load-balancer-54cd9754dc-cwtxg                1/1     Terminating   0              20m\nharvester-system                  harvester-load-balancer-webhook-c8699b786-x6clw         1/1     Terminating   0              20m\nharvester-system                  harvester-network-controller-manager-b69bf6b69-9f99x    1/1     Terminating   0              178m\nharvester-system                  harvester-network-controller-vs4jg                      1/1     Running       0              178m\nharvester-system                  harvester-network-webhook-7b98f8cd98-gjl8b              1/1     Terminating   0              20m\nharvester-system                  harvester-node-disk-manager-tbh4b                       1/1     Running       0              26m\nharvester-system                  harvester-node-manager-7pqcp                            1/1     Running       0              178m\nharvester-system                  harvester-node-manager-webhook-9cfccc84c-68tgp          1/1     Running       0              20m\nharvester-system                  harvester-node-manager-webhook-9cfccc84c-6bbvg          1/1     Running       0              20m\nharvester-system                  harvester-webhook-565dc698b6-np89r                      1/1     Terminating   0              26m\nharvester-system                  hvst-upgrade-szlg8-apply-manifests-4rmjw                0/1     Completed     0              33m\nharvester-system                  virt-api-6fb7d97b68-cbc5m                               1/1     Terminating   0              20m\nharvester-system                  virt-api-6fb7d97b68-gqg5c                               1/1     Terminating   0              23m\nharvester-system                  virt-controller-67d8b4c75c-5qz9x                        1/1     Terminating   0              24m\nharvester-system                  virt-controller-67d8b4c75c-bdf8w                        1/1     Terminating   2 (18m ago)    23m\nharvester-system                  virt-handler-xw98h                                      1/1     Running       0              24m\nharvester-system                  virt-operator-6c98db546-brgnx                           1/1     Terminating   2 (18m ago)    26m\nkube-system                       harvester-snapshot-validation-webhook-b75f94bcb-95zlb   1/1     Terminating   0              20m\nkube-system                       harvester-snapshot-validation-webhook-b75f94bcb-xfrmf   1/1     Terminating   0              20m\nkube-system                       harvester-whereabouts-tdr5g                             1/1     Running       1 (178m ago)   178m\nkube-system                       helm-install-rke2-ingress-nginx-4wt4j                   0/1     Terminating   0              15m\nkube-system                       helm-install-rke2-metrics-server-jn58m                  0/1     Terminating   0              15m\nkube-system                       kube-proxy-harvester-jkqhq                              1/1     Running       0              178m\nkube-system                       rke2-canal-wfpch                                        2/2     Running       0              178m\nkube-system                       rke2-coredns-rke2-coredns-864fbd7785-t7k6t              1/1     Terminating   0              178m\nkube-system                       rke2-coredns-rke2-coredns-autoscaler-6c87968579-rg6g4   1/1     Terminating   0              20m\nkube-system                       rke2-ingress-nginx-controller-d4h25                     1/1     Running       0              178m\nkube-system                       rke2-metrics-server-7f745dbddf-2mp5j                    1/1     Terminating   0              20m\nkube-system                       rke2-multus-fsp94                                       1/1     Running       0              178m\nkube-system                       snapshot-controller-65d5f465d9-5b2sb                    1/1     Terminating   0              20m\nkube-system                       snapshot-controller-65d5f465d9-c264r                    1/1     Terminating   0              20m\nlonghorn-system                   backing-image-manager-c16a-7c90                         1/1     Terminating   0              54m\nlonghorn-system                   csi-attacher-5fbd66cf8-674vc                            1/1     Terminating   0              20m\nlonghorn-system                   csi-attacher-5fbd66cf8-725mn                            1/1     Terminating   0              20m\nlonghorn-system                   csi-attacher-5fbd66cf8-85k5d                            1/1     Terminating   0              20m\nlonghorn-system                   csi-provisioner-5b6ff8f4d4-97wsf                        1/1     Terminating   0              20m\nlonghorn-system                   csi-provisioner-5b6ff8f4d4-cbpm9                        1/1     Terminating   0              20m\nlonghorn-system                   csi-provisioner-5b6ff8f4d4-q7z58                        1/1     Terminating   0              19m\nlonghorn-system                   csi-resizer-74c5555748-6rmbf                            1/1     Terminating   0              20m\nlonghorn-system                   csi-resizer-74c5555748-fw2cw                            1/1     Terminating   0              20m\nlonghorn-system                   csi-resizer-74c5555748-p4nph                            1/1     Terminating   0              20m\nlonghorn-system                   csi-snapshotter-6bc4bcf4c5-6858b                        1/1     Terminating   0              20m\nlonghorn-system                   csi-snapshotter-6bc4bcf4c5-cqkbw                        1/1     Terminating   0              20m\nlonghorn-system                   csi-snapshotter-6bc4bcf4c5-mkqtg                        1/1     Terminating   0              20m\nlonghorn-system                   engine-image-ei-b0369a5d-2t4k4                          1/1     Running       0              178m\nlonghorn-system                   instance-manager-a5bd20597b82bcf3ba9d314620b7e670       1/1     Terminating   0              178m\nlonghorn-system                   longhorn-csi-plugin-x6bdg                               3/3     Running       0              178m\nlonghorn-system                   longhorn-driver-deployer-85cf4b4849-5lc52               1/1     Terminating   0              20m\nlonghorn-system                   longhorn-loop-device-cleaner-hhvgv                      1/1     Running       0              178m\nlonghorn-system                   longhorn-manager-5h2zw                                  1/1     Running       0              178m\nlonghorn-system                   longhorn-ui-6b677889f8-hrg8j                            1/1     Terminating   0              20m\nlonghorn-system                   longhorn-ui-6b677889f8-w5hng                            1/1     Terminating   0              20m\n")))),(0,r.kt)("p",null,"To resolve the issue, you must restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-agent")," service on the worker node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# On the worker node\nsudo systemctl restart rke2-agent.service\n")),(0,r.kt)("p",null,"The upgrade should resume after the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-agent")," service is fully restarted."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This issue occurs because the agent load balancer on the worker node is unable to connect to the API server on the management node after the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-server")," service is restarted. Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-server")," service can be restarted multiple times when nodes are upgraded, the upgrade process is likely to become stuck again. You may need to restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-agent")," service multiple times."),(0,r.kt)("p",{parentName:"admonition"},"To determine if the agent load balancer is functioning, run the following commands:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"# On the management node, check if the `rke2-server` service is running.\nsudo systemctl status rke2-server.service\n\n# On the worker node, check if the agent load balancer is functioning.\nsudo /var/lib/rancher/rke2/bin/kubectl --kubeconfig=/var/lib/rancher/rke2/agent/kubelet.kubeconfig get nodes\n")),(0,r.kt)("p",{parentName:"admonition"},"If the kubectl command does not return a response, the kubelet is unable to access the API server via the agent load balancer. You must restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-agent")," service.")),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/6432#issuecomment-2325488465"},"Issue #6432"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2-automatic-image-cleanup-is-not-functioning"},"2. Automatic image cleanup is not functioning"),(0,r.kt)("p",null,"Because the published Harvester ISO contains an incomplete image list, automatic image cleanup cannot be performed during an upgrade from v1.3.1 to v1.3.2. This issue does not block the upgrade, and you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/blob/main/bin/harv-purge-images.sh"},"this script")," to manually clean up container images after the upgrade is completed. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/6620"},"issue #6620"),"."),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);