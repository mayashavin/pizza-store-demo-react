/* eslint-disable */
import { test, expect } from '@playwright/experimental-ct-react';
import {Cart} from "../src/components/Cart/Cart";
import { WithCartContext } from '../src/context/WithCartContext';
import { CartContext } from '../src/context/CartContext';

test('should toggle cart display', async ({ mount }) => {
    const component = await mount(
        <WithCartContext><Cart /></WithCartContext>);

    await expect(component).toContainText('Cart')

    await expect(component.getByText('No item in cart')).not.toBeVisible();

    await component.getByRole('button').click();

    await expect(component).toContainText('No item in cart');
})

test('should display with items', async ({ mount }) => {
    const component = await mount(
        <CartContext.Provider value={{
            items: [{
                id: "1",
                title: "Pina Colada Pizza",
                price: "10.00",
                description:
                "A delicious combination of pineapple, coconut, and coconut milk.",
                image:
                "https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/pina_colada_pizza.jpg",
                quantity: 1,
            }],
            total: 1, 
            remove: () => { },
            add: () => { },
            clear: () => { },
            update: () => { }
        }}>
            <Cart />
        </CartContext.Provider>);


    await expect(component).toContainText('Cart')

    await component.getByRole('button').click();

    await expect(component).toContainText('In your cart:');
})

test.skip('shoud remove items', () => {});
