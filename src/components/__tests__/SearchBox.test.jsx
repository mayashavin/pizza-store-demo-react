/* eslint-disable */
import { fireEvent, render, act, waitFor } from '@testing-library/react';
import {SearchBox} from '../SearchBox';
import { describe, it, expect, vi } from 'vitest'
import {MemoryRouter} from 'react-router-dom';

describe("SearchBox component", () => {
    const inputSelector = "search-input";

    it("should should get the default value", () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={["/"]}>
                <SearchBox defaultValue="pizza" />
            </MemoryRouter>);

        const input = getByTestId(inputSelector);
        expect(input.value).toBe("pizza");
    })

    it("should should get the value from the url", () => {
        const { getByTestId } = render(
            <MemoryRouter initialEntries={["/?search=hawaii"]}>
                <SearchBox />
            </MemoryRouter>);

        const input = getByTestId(inputSelector);
        expect(input.value).toBe("hawaii");
    })

    it("should update input value", async () => {
        const onChange = vi.fn();

        const { getByTestId } = render(
            <MemoryRouter initialEntries={["/"]}>
                <SearchBox defaultValue="fhg" onChange={onChange} />
            </MemoryRouter>);

        const input = getByTestId(inputSelector);
        expect(input.value).toBe("fhg");

        fireEvent.change(input, { target: { value: "pizza" } });

        expect(input.value).toBe("pizza");
        expect(onChange).toHaveBeenCalledWith("pizza");
    })
})