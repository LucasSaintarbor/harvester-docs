---
sidebar_position: 1
sidebar_label: Rancher Integration
title: "Rancher Integration"
keywords:
  - Harvester
  - harvester
  - Rancher
  - rancher
  - Rancher Integration
description: Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1.
---

<head>
  <link rel="canonical" href="https://docs.harvesterhci.io/v1.4/rancher/rancher-integration"/>
</head>

[Rancher](https://github.com/rancher/rancher) is an open-source multi-cluster management platform. Starting with Rancher v2.6.1, Rancher has integrated Harvester by default to centrally manage VMs and containers.

Users can import and manage multiple Harvester clusters using the Rancher [Virtualization Management](virtualization-management.md) feature. Leveraging the Rancher's [authentication](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config) feature and [RBAC control](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac) for [multi-tenancy](virtualization-management.md#multi-tenancy) support.

For a comprehensive overview of the support matrix, please refer to the [Harvester & Rancher Support Matrix](https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/).

For the network requirements, please refer to the doc [here](../install/requirements.md#network-requirements).

<div class="text-center">
<iframe width="950" height="475" src="https://www.youtube.com/embed/fyxDm3HVwWI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

![virtualization-management](/img/v1.2/rancher/virtualization-management.png)

## Deploying Rancher server

To use Rancher with Harvester, please install Rancher on a separate server. If you want to try out the integration features, you can create a VM in Harvester and install the Rancher server by following the [Helm CLI quick start](https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli).

For production setup, please follow [Deploying Rancher Server document](https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager) to  deploy and provision Rancher and a Kubernetes cluster with the provider of your choice.

If you prefer, the following guide will take you through the same process in individual steps. Use this if you want to run Rancher with a different provider, on prem, or if you want to see how easy it is.

- [Manual Install](https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli)

:::caution

**Do not install Rancher with Docker in production**. Otherwise, your environment may be damaged, and your cluster may not be able to be recovered. Installing Rancher in Docker should only be used for quick evaluation and testing purposes.

:::

## Virtualization management

With Rancher's virtualization management feature, you can import and manage your Harvester cluster. By clicking one of the imported clusters, you can easily access and manage a range of Harvester cluster resources, including hosts, VMs, images, volumes, and more.
Additionally, the virtualization management feature leverages Rancher's existing capabilities, such as authentication with various auth providers and multi-tenancy support.

For in-depth insights, please refer to the [virtualization management](./virtualization-management.md) page.

![import-cluster](/img/v1.2/rancher/import-harvester-cluster.png)

## Creating Kubernetes clusters using the Harvester node driver

You can launch a Kubernetes cluster from Rancher using the [Harvester node driver](./node/node-driver.md). When Rancher deploys Kubernetes onto these nodes, choose RKE2.

:::note

Rancher Kubernetes Engine (RKE) will reach the end of its life on **July 31, 2025**. Harvester **v1.6.0** and later versions will not support RKE. Using RKE2, which provides a more secure and efficient environment, is recommended.

:::

One benefit of installing Kubernetes on node pools hosted by the node driver is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected.

Starting from Rancher version `v2.6.1`, the Harvester node driver is included by default. You can refer to the [node-driver](./node/node-driver.md) page for more details.

![harvester-node-driver](/img/v1.2/rancher/harvester-node-driver.png)

## Harvester baremetal container workload support (experimental)

_Available as of Harvester v1.2.0 + Rancher v2.7.6_


Starting with Rancher v2.7.6, Harvester introduces a new feature that enables you to deploy and manage container workloads directly to the underlying Harvester cluster. With this feature, you can seamlessly combine the power of virtual machines with the flexibility of containerization, allowing for a more versatile and efficient infrastructure setup.

![harvester-container-dashboard](/img/v1.2/rancher/harvester-container-dashboard.png)

This guide will walk you through enabling and using this experimental feature, highlighting its capabilities and best practices.

To enable this new feature flag, follow these steps on Rancher UI:

1. Click the hamburger menu and choose the **Global Settings** tab.
1. Click **Feature Flags** and locate the new feature flag `harvester-baremetal-container-workload`.
1. Click the drop-down menu and select **Activate** to enable this feature.
1. If the feature state changes to **Active**, the feature is successfully enabled.

![harvester-baremetal-container-workload-feature](/img/v1.2/rancher/harvester-baremetal-container-workload-feature.png)

### Key Features

**Unified Dashboard View:**
Once you've enabled the feature, you can explore the dashboard view of the Harvester cluster, just like you would with other standard Kubernetes clusters. This unified experience simplifies the management and monitoring of both your virtual machines and container workloads from a single, user-friendly interface.

**Deploy Custom Workloads:**
This feature lets you deploy custom container workloads directly to the bare-metal Harvester cluster. While this functionality is experimental, it introduces exciting possibilities for optimizing your infrastructure. However, we recommend deploying container and VM workloads in separate namespaces to ensure clarity and separation.

:::note

- Critical system components such as monitoring, logging, Rancher, KubeVirt, and Longhorn are all managed by the Harvester cluster itself. You can't upgrade or modify these components. Therefore, exercise caution and avoid making changes to these critical system components.
- It is essential not to deploy any workloads to the system namespaces `cattle-system`, `harvester-system`, or `longhorn-system`. Keeping your workloads in separate namespaces is crucial to maintaining clarity and preserving the integrity of the system components.
- For best practices, we recommend deploying container and VM workloads in separate namespaces.

:::

## Fleet Support (Experimental)

_Available as of Harvester v1.3.0 + Rancher v2.7.9_

Starting with Rancher v2.7.9, you can leverage [Fleet](https://fleet.rancher.io/) for managing container workloads and configuring Harvester with a GitOps-based approach.

:::info
The Rancher feature `harvester-baremetal-container-workload` must be enabled.
:::
1. On the Rancher UI, go to **☰** > **Continuous Delivery**.

  ![](/img/v1.3/rancher/continuous-delivery-overview.png)

1. (Optional) On the **Clusters** tab, edit the Fleet cluster config to add labels that can be used to group Harvester clusters.

  In this example, the label `location=private-dc` was added.

  ![](/img/v1.3/rancher/fleet-cluster-config.png)

  ![](/img/v1.3/rancher/fleet-additional-labels.png)

1. (Optional) On the **Cluster Groups** tab, create a cluster group.

  In this example, the cluster group `private-dc-clusters` is created with a cluster selector rule that matches the label key/value pair of `location=private-dc`.

  ![](/img/v1.3/rancher/create-cluster-group.png)

1. On the **Git Repos** tab, create a Git repo named `harvester-config` that points to the [harvester-fleet-examples repo](https://github.com/harvester/harvester-fleet-examples), with the branch defined as `main`. You must define the following paths:

  - `keypair`
  - `vmimage`
  - `vmnetwork`
  - `cloudinit`

  ![](/img/v1.3/rancher/gitrepo-definition.png)

1. Click **Next**, and then define the Git repo targets. You can select all clusters, an individual cluster, or a group of clusters.

  In this example, the cluster group named `private-dc-clusters` is used.

  ![](/img/v1.3/rancher/gitrepo-targets.png)

1. Click **Save**. It may take a few seconds for the resources to be rolled out to the target clusters.

  ![](/img/v1.3/rancher/gitrepo-synced.png)
