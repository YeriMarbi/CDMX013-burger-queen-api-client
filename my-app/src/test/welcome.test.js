import {render, screen } from '@testing-library/jest-dom'
import Welcome from '../noauth/Login'
import axios from "axios";
jest.mock('axios');
const response={
    email:'algo.com',
    password:'lkdjla'
}
axios.get = jest.fn(() => { Promise.resolve({response}) });
const spy=jest.spyOn(axios, 'get') 


describe('Welcome component', ()=>{
    render(<Welcome/>);
    const section= screen.getByRole('section');
    expect(section).toBeInTheDocument();
});