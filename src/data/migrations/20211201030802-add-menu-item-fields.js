'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const itemsTable = 'menu_items';
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.changeColumn(itemsTable,
                'priceCents',
                {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'status',
                {
                    type: 'enum_menu_items_status',
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'sectionIndex',
                {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'sectionText',
                {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isMainCourse',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isCheap',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isBurger',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isMeal',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isOriental',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isPizza',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isStarterMeal',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isSideDish',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isGrocery',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isBeverage',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isDessert',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'includesEgg',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'includesMilk',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'includesOtherNonVegan',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: false,
                },
                { transaction }
            );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    },

    down: async (queryInterface, Sequelize) => {
        const itemsTable = 'menu_items';
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.changeColumn(itemsTable,
                'priceCents',
                {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'status',
                {
                    type: 'enum_menu_items_status',
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'sectionIndex',
                {
                    type: Sequelize.DataTypes.INTEGER,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'sectionText',
                {
                    type: Sequelize.DataTypes.STRING,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isMainCourse',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isCheap',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isBurger',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isMeal',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isOriental',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isPizza',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isStarterMeal',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isSideDish',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isGrocery',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isBeverage',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'isDessert',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'includesEgg',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'includesMilk',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );
            await queryInterface.changeColumn(itemsTable,
                'includesOtherNonVegan',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                    allowNull: true,
                },
                { transaction }
            );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }

    }
};
