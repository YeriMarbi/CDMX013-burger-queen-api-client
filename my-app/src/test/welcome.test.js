import {render, screen } from '@testing-library/jest-dom'
import Welcome from '../components/login'
import axios from "axios";
jest.mock('axios');

axios.get = jest.fn(() => { Promise.resolve({ status: 200 }) });


describe('Welcome component', ()=>{
    render(<Welcome/>);
    const section= screen.getByRole('section');
    expect(section).toBeInTheDocument();
});