# GraphQL SQL Node Server

GraphQL SQL Node Server

## Commands

```sh
# initial
yarn
yarn sequelize db:create

# run server locally
yarn dev

# create migration
npx sequelize migration:generate -n MigrationName
```

## Operations
- Get all items of restaurant
- Get customization of item
- Get all restaurants with 10 most sold items
- Get all restaurants with 10 most sold items of specific category
- Get menu items of less than 5*X price and that is mainCourse
