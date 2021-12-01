'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const itemsTable = 'menu_items';
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.addColumn(itemsTable,
                'priceCents',
                {
                    type: Sequelize.DataTypes.INTEGER,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'status',
                {
                    type: Sequelize.DataTypes.ENUM('online', 'offline'),
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'sectionIndex',
                {
                    type: Sequelize.DataTypes.INTEGER,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'sectionText',
                {
                    type: Sequelize.DataTypes.STRING,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isMainCourse',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isCheap',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isBurger',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isMeal',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isOriental',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isPizza',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isStarterMeal',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isSideDish',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isGrocery',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isBeverage',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'isDessert',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'includesEgg',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'includesMilk',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
                },
                { transaction }
            );
            await queryInterface.addColumn(itemsTable,
                'includesOtherNonVegan',
                {
                    type: Sequelize.DataTypes.BOOLEAN,
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
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.removeColumn(itemsTable, 'priceCents');
            await queryInterface.removeColumn(itemsTable, 'status');
            await queryInterface.removeColumn(itemsTable, 'sectionIndex');
            await queryInterface.removeColumn(itemsTable, 'sectionText');
            await queryInterface.removeColumn(itemsTable, 'isMainCourse');
            await queryInterface.removeColumn(itemsTable, 'isCheap');
            await queryInterface.removeColumn(itemsTable, 'isBurger');
            await queryInterface.removeColumn(itemsTable, 'isMeal');
            await queryInterface.removeColumn(itemsTable, 'isOriental');
            await queryInterface.removeColumn(itemsTable, 'isPizza');
            await queryInterface.removeColumn(itemsTable, 'isStarterMeal');
            await queryInterface.removeColumn(itemsTable, 'isSideDish');
            await queryInterface.removeColumn(itemsTable, 'isGrocery');
            await queryInterface.removeColumn(itemsTable, 'isBeverage');
            await queryInterface.removeColumn(itemsTable, 'isDessert');
            await queryInterface.removeColumn(itemsTable, 'includesEgg');
            await queryInterface.removeColumn(itemsTable, 'includesMilk');
            await queryInterface.removeColumn(itemsTable, 'includesOtherNonVegan');

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            throw err;
        }

    }
};
