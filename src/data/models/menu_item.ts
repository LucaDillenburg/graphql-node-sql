import { Model, DataTypes } from "sequelize";
import db from "../database";

interface MenuItemAttributes {
    id: string,
    name: string,
    description: string | null,
    imageUrl: string | null,
    restaurantId: string,
}

class MenuItem extends Model<MenuItemAttributes, {}> implements MenuItemAttributes {
    public id!: string;
    public name!: string;
    public description!: string | null;
    public imageUrl!: string | null;
    public restaurantId!: string;
}

MenuItem.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        restaurantId: DataTypes.STRING,
    }, {
    tableName: 'menu_items',
    sequelize: db,
}
);

export default MenuItem;
