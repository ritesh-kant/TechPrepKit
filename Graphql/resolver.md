
# GraphQL Resolver Parameters

In GraphQL, **resolvers** are functions that handle fetching the data for specific fields in your schema.

## 🔹 Resolver Function Signature

```ts
(parent, args, context, info) => result
```

## 📌 Parameter Breakdown

| Parameter | Description |
|----------|-------------|
| `parent` (or `root`) | The result from the **parent** field. For top-level resolvers like queries, this is often `{}` or `undefined`. |
| `args` | An object containing all **arguments** passed into the field from the query. |
| `context` | Shared context object across resolvers, e.g., auth data, DB connections. |
| `info` | Info about the **execution state** of the query (e.g., field name, schema, etc). Useful for advanced use cases. |

## 🧠 Example

### Schema
```graphql
type Query {
  user(id: ID!): User
}

type User {
  id: ID!
  name: String!
  posts: [Post]
}

type Post {
  id: ID!
  title: String!
}
```

### Resolver Implementation
```js
const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      // args: { id: "123" }
      return context.db.getUserById(args.id);
    }
  },
  User: {
    posts: (parent, args, context, info) => {
      // parent: { id: "123", name: "Ritesh" }
      return context.db.getPostsByUserId(parent.id);
    }
  }
};
```

## ✅ Use Cases for Each Parameter

| Parameter | Use Case |
|----------|----------|
| `parent` | Used to resolve nested fields using the result of the parent object |
| `args` | Access query or mutation arguments |
| `context` | Share database connections, logged-in user, etc., across resolvers |
| `info` | Inspect query fields or apply custom directives or logging |

---

> Let me know if you want examples for mutations, subscriptions, or a framework-specific version (e.g. Apollo Server, GraphQL Yoga).
