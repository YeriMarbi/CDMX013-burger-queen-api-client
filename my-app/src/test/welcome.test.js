import {render, screen } from '@testing-library/jest-dom'
import Welcome from '../components/login'
import axios from "axios";
jest.mock('axios');

// const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('Welcome component', ()=>{
    render(<Welcome/>);
    const section= screen.getByRole('section');
    expect(section).toBeInTheDocument();
});