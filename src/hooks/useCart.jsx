import { useState, useMemo } from "react"

export const useCart = () => {
    const [items, setItems] = useState([]);
    const total = useMemo(() => items.reduce((acc, item) => {
        return acc + item.quantity
    }, 0), [items]);
    
    const remove = (id) => {
        setItems(items => items.filter(item => item.id !== id))
    }
    const update = ({ id, quantity }) => {
        setItems(items => items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity
                }
            }
            return item
        }))
    }

    const add = (item) => {
        const index = items.findIndex(i => i.id === item.id)
        if (index > -1) {
            update({ id: item.id, quantity: items[index].quantity + 1})
        } else {
            setItems(items => [...items, item])
        }
    }

    const clear = () => {
        setItems([]);
    }

    console.log(items)

    return {
        items,
        total,
        add,
        clear,
        remove,
        update
    }
}