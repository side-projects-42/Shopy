import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

test("renders without errors", () =>{
render(<CheckoutForm/>)

});

test("renders the contact form header", () => {
    /* querying data*/
const header = screen.queryByText(/checkout form /i)




})