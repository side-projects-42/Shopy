import React from "react";
import { render, screen, waitFor , cleanup,fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axiosMock from "axios";
import Plantlist from "./Plantlist"

afterEach(cleanup)

test("showing proper number on cart button", async () => {
  
    const {getByText} = render(Plantlist, {name: '  Add to cart'})
 
   


    // global assetion function from jest
  });





