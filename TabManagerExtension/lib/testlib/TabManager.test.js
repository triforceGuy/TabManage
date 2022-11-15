import React from  'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Text Tests', ()=>{
    test('darkText Test', ()=>{
        expect(darkText()).toHaveProperty('bottomText', "SDark mode inverts the layout - better on the eyes. Default : off");
    });

    test('spaceText Test', ()=>{
        expect(spaceText()).toHaveProperty('bottomText', "Space mode, for when you want a cool theme. Default : off");
    });
});
