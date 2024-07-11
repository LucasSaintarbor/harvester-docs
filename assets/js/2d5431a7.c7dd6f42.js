"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[75144],{24316:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>u,contentTitle:()=>y,default:()=>b,frontMatter:()=>g,metadata:()=>h,toc:()=>k});s(67294);var t=s(3905),m=s(54734),i=s(90238),n=s.n(i),l=s(36765),r=s(99473),p=s(50690),c=s(88337),o=s(48951),d=s(50551);const g={id:"read-namespaced-upgrade",title:"Read a Namespaced Upgrade",description:"Get a Upgrade object.",sidebar_label:"Read a Namespaced Upgrade",hide_title:!0,hide_table_of_contents:!0,api:"eJztmE1z2zYQhv8KBpe0HVqyOz206vSQtJ7U0zbJxHYvjg4rcCUiJgEEWLpWNPzvnQUoibIo1ZbTS0YnSsQCePYDL6RdSIJZkKMbee1mHnIMcpzJHIPy2pG2Ro7kayQBoh0XdvIRFQ1kJq1DD2xzkcuR9Aj5G6gwOFCYt9Yykw48VEjoeZeFNFChHEm8B0Uyk5o3+FSjn8uH214Wti5zQQUKvHfWk5jwJ1A0EOf8WL6uQBsCbYJQZR0I/UlwqPRUKzHVWOZBlPoWxYsV3QumD6rACuRoIWnuGGlibYlgZNNkHUze4ZGcOog7KGtMnDwRc0aNkIG8dmEJRAVwTOuAXigwwlgSCXr+aLb4aMkcULEFxv4KO40R9Bhs7RVP8Pip1h5zOSJfY89mjGpmMXVE6HmpGzj5fHry07h9fvhwMv5uCybGdi/R21g7go0FmFxATYUIyjrMRKhVISCIqfWCEKoQLZy3PCV8We4xrxacNQEDL/D96Sk/HsD+ITOprCE0xKPgXKlVLPjhx8Ami22GdDo2aG8kOP03+sDLZvJWm5xT7FDxUXOejxHpBNKx3PKraef2DVRIkANB8mIKdcnITSahLN9O48HbBxiTuAWTUtuz2zrZ26NNJklTya9ufwwDbQd3Z4OU97+QQDbjpnX+8aibWLqCWc/O2Xo1yZClnZ0bmJSY95yjjvEUyoBNJu92xX1z4Y5/Bfg7ZL0plE6OTpDgbNBq3yU7mdwloDoc7LCyJtdcdqEDB94Da5EmrJ6ydDftLVeWjLbyX0KgKw8mxM2v9I5qYLNrlwPhTpMKQ+hNWsNAEHaU+zpu+1OdRp+dt1+XceasNVkqtIvf+o+AzfEy4mHoO/6Qp6WgfLcR04MK4Bnh+48juisUb2yOyzJOSUghcR7vtK3DPpHy6OyFmdp+Jm1mJfLyvcN12vNPOzuMu4/5kXPi+g81/udAHqH65R8gVRwF/yj4R8E/Cv5R8L9OwZ9DVR41/qjxR40/avxR478WjWfrH07Ptvs714bbT9brz5gf0OnpOPD0fw07Ju+8gVb20Z0KqbDcc50hpXZXIUdyCE6H4YOADNuADFfyHoaL1edm2OamfdnwHYaq9prml8yQSvUVBK06NAWRW3YpowDH8SaTrxA8+n2WySAexGU1tZn8fQkuXr67YP1aabdsfeAdnA1UgVnfZPI9Qi5ArFvPYt173kj4Yp3inS3tFpvwnoauBG1i/fqYlBTmePEz3oNAM3CL2blL2XDU7Y0u4718zwJd2EC88GIxgYDXvmwafp26zSwkuQ7tnRfvtT1+/c89897w3OK809CPHfAk4QeBf7km+l7Ytq2/ph3zF68Z94kx/+Z9e/t+K3Z03HtJlle+mXc5loSxNp4Wwg7Hs/rsB9KmCo8/jQqEnGXgZtGOv1QKXTfeWwrL8V/J2uvzK9k0/wIx5jY1",sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},y=void 0,h={unversionedId:"api/read-namespaced-upgrade",id:"api/read-namespaced-upgrade",title:"Read a Namespaced Upgrade",description:"Get a Upgrade object.",source:"@site/docs/api/read-namespaced-upgrade.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-upgrade",permalink:"/v1.4/api/read-namespaced-upgrade",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"read-namespaced-upgrade",title:"Read a Namespaced Upgrade",description:"Get a Upgrade object.",sidebar_label:"Read a Namespaced Upgrade",hide_title:!0,hide_table_of_contents:!0,api:"eJztmE1z2zYQhv8KBpe0HVqyOz206vSQtJ7U0zbJxHYvjg4rcCUiJgEEWLpWNPzvnQUoibIo1ZbTS0YnSsQCePYDL6RdSIJZkKMbee1mHnIMcpzJHIPy2pG2Ro7kayQBoh0XdvIRFQ1kJq1DD2xzkcuR9Aj5G6gwOFCYt9Yykw48VEjoeZeFNFChHEm8B0Uyk5o3+FSjn8uH214Wti5zQQUKvHfWk5jwJ1A0EOf8WL6uQBsCbYJQZR0I/UlwqPRUKzHVWOZBlPoWxYsV3QumD6rACuRoIWnuGGlibYlgZNNkHUze4ZGcOog7KGtMnDwRc0aNkIG8dmEJRAVwTOuAXigwwlgSCXr+aLb4aMkcULEFxv4KO40R9Bhs7RVP8Pip1h5zOSJfY89mjGpmMXVE6HmpGzj5fHry07h9fvhwMv5uCybGdi/R21g7go0FmFxATYUIyjrMRKhVISCIqfWCEKoQLZy3PCV8We4xrxacNQEDL/D96Sk/HsD+ITOprCE0xKPgXKlVLPjhx8Ami22GdDo2aG8kOP03+sDLZvJWm5xT7FDxUXOejxHpBNKx3PKraef2DVRIkANB8mIKdcnITSahLN9O48HbBxiTuAWTUtuz2zrZ26NNJklTya9ufwwDbQd3Z4OU97+QQDbjpnX+8aibWLqCWc/O2Xo1yZClnZ0bmJSY95yjjvEUyoBNJu92xX1z4Y5/Bfg7ZL0plE6OTpDgbNBq3yU7mdwloDoc7LCyJtdcdqEDB94Da5EmrJ6ydDftLVeWjLbyX0KgKw8mxM2v9I5qYLNrlwPhTpMKQ+hNWsNAEHaU+zpu+1OdRp+dt1+XceasNVkqtIvf+o+AzfEy4mHoO/6Qp6WgfLcR04MK4Bnh+48juisUb2yOyzJOSUghcR7vtK3DPpHy6OyFmdp+Jm1mJfLyvcN12vNPOzuMu4/5kXPi+g81/udAHqH65R8gVRwF/yj4R8E/Cv5R8L9OwZ9DVR41/qjxR40/avxR478WjWfrH07Ptvs714bbT9brz5gf0OnpOPD0fw07Ju+8gVb20Z0KqbDcc50hpXZXIUdyCE6H4YOADNuADFfyHoaL1edm2OamfdnwHYaq9prml8yQSvUVBK06NAWRW3YpowDH8SaTrxA8+n2WySAexGU1tZn8fQkuXr67YP1aabdsfeAdnA1UgVnfZPI9Qi5ArFvPYt173kj4Yp3inS3tFpvwnoauBG1i/fqYlBTmePEz3oNAM3CL2blL2XDU7Y0u4718zwJd2EC88GIxgYDXvmwafp26zSwkuQ7tnRfvtT1+/c89897w3OK809CPHfAk4QeBf7km+l7Ytq2/ph3zF68Z94kx/+Z9e/t+K3Z03HtJlle+mXc5loSxNp4Wwg7Hs/rsB9KmCo8/jQqEnGXgZtGOv1QKXTfeWwrL8V/J2uvzK9k0/wIx5jY1",sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Read a Namespaced Support Bundle",permalink:"/v1.4/api/read-namespaced-support-bundle"},next:{title:"Read a Namespaced Virtual Machine Backup",permalink:"/v1.4/api/read-namespaced-virtual-machine-backup"}},u={},k=[{value:"Request",id:"request",level:2}],N={toc:k},f="wrapper";function b({components:e,...a}){return(0,t.kt)(f,{...N,...a,components:e,mdxType:"MDXLayout"},(0,t.kt)("h1",{className:"openapi__heading"},"Read a Namespaced Upgrade"),(0,t.kt)(n(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace}/upgrades/{name}",mdxType:"MethodEndpoint"}),(0,t.kt)("p",null,"Get a Upgrade object."),(0,t.kt)("h2",{id:"request"},"Request"),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"}),(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"namespace",in:"path",description:"Object name and auth scope, such as for teams and projects",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"exact",in:"query",description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"export",in:"query",description:"Should this value be exported. Export strips fields that a user can not specify.",schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,t.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"OK")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"logEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"imageID",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"nodeStatuses"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"property name*"),(0,t.kt)("span",{className:"openapi-schema__name"}," harvesterhci.io.v1beta1.NodeUpgradeStatus"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(c.Z,{collapsible:!1,name:"previousVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"repoInfo",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"singleNode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"upgradeLog",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "image": "string",\n    "logEnabled": false,\n    "version": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "imageID": "string",\n    "nodeStatuses": {},\n    "previousVersion": "string",\n    "repoInfo": "string",\n    "singleNode": "string",\n    "upgradeLog": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"logEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"imageID",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"nodeStatuses"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"property name*"),(0,t.kt)("span",{className:"openapi-schema__name"}," harvesterhci.io.v1beta1.NodeUpgradeStatus"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(c.Z,{collapsible:!1,name:"previousVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"repoInfo",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"singleNode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"upgradeLog",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "image": "string",\n    "logEnabled": false,\n    "version": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "imageID": "string",\n    "nodeStatuses": {},\n    "previousVersion": "string",\n    "repoInfo": "string",\n    "singleNode": "string",\n    "upgradeLog": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"),(0,t.kt)("span",{className:"openapi-schema__divider"}),(0,t.kt)("span",{className:"openapi-schema__required"},"required"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"logEnabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,t.kt)(c.Z,{collapsible:!1,name:"imageID",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"nodeStatuses"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"property name*"),(0,t.kt)("span",{className:"openapi-schema__name"}," harvesterhci.io.v1beta1.NodeUpgradeStatus"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(c.Z,{collapsible:!1,name:"previousVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"repoInfo",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"singleNode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"upgradeLog",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "image": "string",\n    "logEnabled": false,\n    "version": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "imageID": "string",\n    "nodeStatuses": {},\n    "previousVersion": "string",\n    "repoInfo": "string",\n    "singleNode": "string",\n    "upgradeLog": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Unauthorized")),(0,t.kt)("div",null,(0,t.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))),(0,t.kt)(d.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))))))))))}b.isMDXComponent=!0}}]);