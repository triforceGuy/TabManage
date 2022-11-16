import React from 'react';
import RegistrationForm from './registrationForm.js'
import Header from './header.js';
import { toHaveDescription, toHaveTextContent } from '@testing-library/jest-dom/dist/matchers.js';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/to-have-display-value.js';

describe('Registration Header Test', ()=>{
    test('registrationBannerTest', () => {

        expect(Header()).toHaveDisplayValue("Registration");
});
});


describe('Sign Up Test'), ()=>{
    const firstName;
    test('signInTest', () => {

        expect(firstName()).toHaveDisplayValue("First Name");

    });
});