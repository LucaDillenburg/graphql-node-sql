import { Model, DataTypes } from "sequelize";
import db from "../database";

export enum MenuItemStatus {
    online = 'online',
    offline = 'offline',
}

export interface MenuItemAttributes {
    id: string,
    name: string,
    description: string | null,
    imageUrl: string | null,
    restaurantId: string,
    priceCents: number,
    status: MenuItemStatus,

    sectionIndex: number,
    sectionText: string,

    isMainCourse: boolean,
    isCheap: boolean,

    isBurger: boolean,
    isMeal: boolean,
    isOriental: boolean,
    isPizza: boolean,
    isStarterMeal: boolean,
    isSideDish: boolean,
    isGrocery: boolean,
    isBeverage: boolean,
    isDessert: boolean,

    includesEgg: boolean,
    includesMilk: boolean,
    includesOtherNonVegan: boolean,
}

class MenuItem extends Model<MenuItemAttributes, MenuItemAttributes> implements MenuItemAttributes {
    public id!: string;
    public name!: string;
    public description!: string | null;
    public imageUrl!: string | null;
    public restaurantId!: string;
    public priceCents!: number;
    public status!: MenuItemStatus;
    public sectionIndex!: number;
    public sectionText!: string;
    public isMainCourse!: boolean;
    public isCheap!: boolean;
    public isBurger!: boolean;
    public isMeal!: boolean;
    public isOriental!: boolean;
    public isPizza!: boolean;
    public isStarterMeal!: boolean;
    public isSideDish!: boolean;
    public isGrocery!: boolean;
    public isBeverage!: boolean;
    public isDessert!: boolean;
    public includesEgg!: boolean;
    public includesMilk!: boolean;
    public includesOtherNonVegan!: boolean;
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
        priceCents: DataTypes.INTEGER,
        status: DataTypes.ENUM(MenuItemStatus.online, MenuItemStatus.offline),
        sectionIndex: DataTypes.INTEGER,
        sectionText: DataTypes.STRING,
        isMainCourse: DataTypes.BOOLEAN,
        isCheap: DataTypes.BOOLEAN,
        isBurger: DataTypes.BOOLEAN,
        isMeal: DataTypes.BOOLEAN,
        isOriental: DataTypes.BOOLEAN,
        isPizza: DataTypes.BOOLEAN,
        isStarterMeal: DataTypes.BOOLEAN,
        isSideDish: DataTypes.BOOLEAN,
        isGrocery: DataTypes.BOOLEAN,
        isBeverage: DataTypes.BOOLEAN,
        isDessert: DataTypes.BOOLEAN,
        includesEgg: DataTypes.BOOLEAN,
        includesMilk: DataTypes.BOOLEAN,
        includesOtherNonVegan: DataTypes.BOOLEAN,
    }, {
    tableName: 'menu_items',
    sequelize: db,
}
);

export default MenuItem;
