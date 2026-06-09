---
title: Orders
description: "An order is a sales-channel order inside MyParcel fulfilment. This guide explains the Order object, order lines and the Order API endpoints that import, query and prepare orders for shipment."
---

## Overview
An **order** represents a sales-channel order inside MyParcel's fulfilment flow. Where a [shipment](./shipments.md) is the parcel that travels to the recipient, an order is the commercial record — products, quantities, customer and billing details — that you import and then prepare for shipment.

The Order API lives at `order.api.myparcel.nl`. The [Order API reference](../api/order.md) is the source of truth for request and response schemas.

## The Order object
Key fields:

- **id** / **shortId** — identifiers.
- **status** — the order's processing status.
- **orderedAt** — when the order was placed.
- **price** — the order total.
- **billingDetails** — billing address and details.
- **customerReference** / **externalReferences** — your own reference and the sales channel's references.
- **lines** — the order lines (see below).
- **notes** — free-text notes on the order.
- **packages** — packages prepared for shipment.
- **shipping** — shipping details.
- **assignedUserId** — the user the order is assigned to.

## Order lines
Each entry in `lines` has **id**, **product**, **quantity**, **price** and **externalReference**.

## Working with orders
The Order API is command-style — each action has its own endpoint:

| Endpoint | Purpose |
| --- | --- |
| `POST /import` | Import an order discovered from a sales channel. |
| `GET /orders` | Query and filter orders. |
| `POST /add-note` / `POST /edit-note` | Add or edit a note on an order. |
| `POST /assign-to-user` | Assign orders to a user. |
| `POST /cancel` | Cancel orders. |
| `POST /add-packages` | Add packages to orders. |
| `POST /create-from-shippable-packages` | Create an order from shippable packages. |
| `POST /prepare-packages-for-shipment` | Prepare an order's packages for shipment. |
| `POST /unprepare-packages-for-shipment` | Reverse the prepare step. |

See the [Order API reference](../api/order.md) for the request bodies.

## From order to shipment
Preparing packages for shipment turns an order's packages into shipments you can label and track with the Shipment API — see the [Shipments guide](./shipments.md).

## Authentication
The Order API authenticates via the `Authorization` header — an API key or a JWT bearer token, with role-based access. See [Authentication](./authentication.md) for the general model and the [Order API reference](../api/order.md) for the exact scheme and roles.
