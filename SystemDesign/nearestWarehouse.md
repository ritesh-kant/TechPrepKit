To implement a system that fulfills orders from the nearest warehouse(s) using MongoDB and Node.js, you can follow these steps:

1. **Design the Database Schema**:
    - **Warehouse Collection**: Store information about each warehouse, including its location (latitude and longitude) and inventory.
    - **Order Collection**: Store information about each order, including the items ordered and their quantities.

    Example schema for warehouses and orders:

    ```json
    // Warehouse Collection
    {
      "_id": ObjectId("..."),
      "name": "Warehouse 1",
      "location": {
        "lat": 40.7128,
        "long": -74.0060
      },
      "inventory": [
        { "itemId": "item1", "quantity": 100 },
        { "itemId": "item2", "quantity": 200 }
      ]
    }

    // Order Collection
    {
      "_id": ObjectId("..."),
      "customer": "Customer 1",
      "items": [
        { "itemId": "item1", "quantity": 10 },
        { "itemId": "item2", "quantity": 5 }
      ],
      "location": {
        "lat": 40.730610,
        "long": -73.935242
      },
      "status": "pending"
    }
    ```

2. **Calculate Distance**:
    Use the Haversine formula to calculate the distance between two points on the Earth's surface.

    ```javascript
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(lat2 - lat1); 
      const dLon = deg2rad(lon2 - lon1); 
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
      const distance = R * c; // Distance in km
      return distance;
    }

    function deg2rad(deg) {
      return deg * (Math.PI/180);
    }
    ```

3. **Find Nearest Warehouse**:
    Query the warehouse collection to find the nearest warehouse that has the required items in stock.

    ```javascript
    const findNearestWarehouse = async (order, db) => {
      const warehouses = await db.collection('warehouses').find({}).toArray();
      const orderLocation = order.location;
      const requiredItems = order.items;

      const sortedWarehouses = warehouses.map(warehouse => {
        const distance = getDistanceFromLatLonInKm(
          orderLocation.lat, orderLocation.long,
          warehouse.location.lat, warehouse.location.long
        );
        return { ...warehouse, distance };
      }).sort((a, b) => a.distance - b.distance);

      const warehousesWithStock = sortedWarehouses.filter(warehouse => {
        return requiredItems.every(item => {
          const inventoryItem = warehouse.inventory.find(i => i.itemId === item.itemId);
          return inventoryItem && inventoryItem.quantity >= item.quantity;
        });
      });

      return warehousesWithStock.length > 0 ? warehousesWithStock[0] : null;
    }
    ```

4. **Fulfill Order**:
    If the nearest warehouse can fulfill the order completely, update the inventory and mark the order as fulfilled. If not, split the order among the nearest warehouses that can collectively fulfill it.

    ```javascript
    const fulfillOrder = async (order, db) => {
      const nearestWarehouse = await findNearestWarehouse(order, db);

      if (nearestWarehouse) {
        // Update inventory
        order.items.forEach(item => {
          const inventoryItem = nearestWarehouse.inventory.find(i => i.itemId === item.itemId);
          if (inventoryItem) {
            inventoryItem.quantity -= item.quantity;
          }
        });

        await db.collection('warehouses').updateOne(
          { _id: nearestWarehouse._id },
          { $set: { inventory: nearestWarehouse.inventory } }
        );

        // Mark order as fulfilled
        await db.collection('orders').updateOne(
          { _id: order._id },
          { $set: { status: 'fulfilled' } }
        );

        console.log('Order fulfilled by:', nearestWarehouse.name);
      } else {
        // Partial fulfillment logic
        for (const item of order.items) {
          let remainingQuantity = item.quantity;

          const warehouses = await db.collection('warehouses').find({}).toArray();
          const sortedWarehouses = warehouses.map(warehouse => {
            const distance = getDistanceFromLatLonInKm(
              order.location.lat, order.location.long,
              warehouse.location.lat, warehouse.location.long
            );
            return { ...warehouse, distance };
          }).sort((a, b) => a.distance - b.distance);

          for (const warehouse of sortedWarehouses) {
            const inventoryItem = warehouse.inventory.find(i => i.itemId === item.itemId);
            if (inventoryItem && inventoryItem.quantity > 0) {
              const quantityToShip = Math.min(remainingQuantity, inventoryItem.quantity);
              inventoryItem.quantity -= quantityToShip;
              remainingQuantity -= quantityToShip;

              await db.collection('warehouses').updateOne(
                { _id: warehouse._id },
                { $set: { inventory: warehouse.inventory } }
              );

              if (remainingQuantity === 0) break;
            }
          }
        }

        await db.collection('orders').updateOne(
          { _id: order._id },
          { $set: { status: 'partially fulfilled' } }
        );

        console.log('Order partially fulfilled');
      }
    }
    ```

5. **Integrate with Node.js**:
    Use Express.js to create endpoints to handle orders and warehouse updates.

    ```javascript
    const express = require('express');
    const { MongoClient, ObjectId } = require('mongodb');

    const app = express();
    const port = 3000;
    const url = 'mongodb://localhost:27017';
    const dbName = 'yourDatabaseName';

    app.use(express.json());

    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      if (err) throw err;

      const db = client.db(dbName);

      app.post('/order', async (req, res) => {
        const order = req.body;
        await fulfillOrder(order, db);
        res.send('Order processed');
      });

      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
      });
    });
    ```

This implementation covers the basic functionality of fulfilling orders from the nearest warehouse, including partial fulfillment if necessary. You can further optimize and enhance this system by adding more robust error handling, logging, and other features as required.