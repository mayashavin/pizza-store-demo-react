/* eslint-disable */
import { fireEvent, render, act } from '@testing-library/react';
import * as cartHooks from '../../hooks/useCart';
import {Cart} from '../Cart/Cart';
import { describe, it, expect, vi, afterEach } from 'vitest'
import { WithCartContext } from '../../context/WithCartContext';

const toggleBtnSelector = '.cart__total';
const cardListSelector = '.cart__list';
const cartListItemSelector = '.cart__list-item';
const itemSelector = {
    title: 'title',
    price: 'price',
    quantity: 'quantity',
    total: 'total',
    removeBtn: 'button'
}
const removeAllBtn = "remove-all";

const mockCartItems = [
    { id: 1, title: 'Pizza', price: '10.00', quantity: 2 },
    { id: 2, title: 'Burger', price: '5.0', quantity: 1 },
];

describe('Cart component', () => {
    const useCartSpy = vi.spyOn(cartHooks, 'useCart');

    afterEach(() => {
        useCartSpy.mockClear()
    })

    it('toggles display', async () => {
        const { container } = render(
            <WithCartContext><Cart /></WithCartContext>);

        const toggleBtn = container.querySelector(toggleBtnSelector);
        expect(container.querySelector(cardListSelector)).toBeFalsy();

        act(() => fireEvent.click(toggleBtn));
        expect(container.querySelector(cardListSelector)).toBeVisible();
    })

    it('renders cart items', async () => {
        useCartSpy.mockReturnValue({
            items: mockCartItems,
            total: mockCartItems.length,
            remove: vi.fn(),
            add: vi.fn(),
            clear: vi.fn(),
            update: vi.fn(),
        });
        const { container } = render(
            <WithCartContext><Cart /></WithCartContext>);
        const toggleBtn = container.querySelector(toggleBtnSelector);
        act(() => fireEvent.click(toggleBtn));

        const cartItems = container.querySelectorAll(cartListItemSelector);
        expect(cartItems).toHaveLength(mockCartItems.length);
    })

    it('triggers remove all', async () => {
        const removeAllMock = vi.fn();
        useCartSpy.mockReturnValue({
            items: mockCartItems,
            total: mockCartItems.length,
            remove: vi.fn(),
            add: vi.fn(),
            clear: removeAllMock,
            update: vi.fn(),
        });

        const { container, getByTestId } = render(
            <WithCartContext><Cart /></WithCartContext>);
        const toggleBtn = container.querySelector(toggleBtnSelector);
        act(() => fireEvent.click(toggleBtn));

        const removeAllbtn = getByTestId(removeAllBtn);
        
        act(() => fireEvent.click(removeAllbtn));
        expect(removeAllMock).toHaveBeenCalled();
    })
});
