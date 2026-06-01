## Order API — orchestrating the pre-ship lifecycle

The Order API owns the state of every order **before** it becomes a shipment.
Where the Shipment API is concerned with parcels in transit, the Order API
is concerned with orders being prepared.

A typical end-to-end flow:

1. **Receive** the order from the sales channel (`POST /import` or
   `POST /create-from-shippable-packages`).
2. **Annotate** as it moves through the warehouse (`POST /add-note`,
   `POST /assign-to-user`).
3. **Package** items into shippable units (`POST /add-packages`).
4. **Prepare for shipment** when ready to label (`POST /prepare-packages-for-shipment`).
5. Hand off to the Shipment API to create the actual shipment.

If you only ever read one endpoint, read `GET /orders` — its `filter` query
parameter is the workhorse of every reporting and back-office integration.
