import { Router } from "express";
import MenuItem from "./data/models/menu_item";

const routes = Router();

routes.post('/menu_items', async (req, res) => {
    try {
        console.log('post menu_items, body: ', req.body);
        const { id, name, description, imageUrl, restaurantId } = req.body;
        const item = await MenuItem.create({ id, name, description, imageUrl, restaurantId });
        return res.json(item);
    } catch (e) {
        return res.status(500);
    }
});

routes.get('/menu_items', async (req, res) => {
    const items = await MenuItem.findAll();
    return res.json(items);
});

export default routes;
