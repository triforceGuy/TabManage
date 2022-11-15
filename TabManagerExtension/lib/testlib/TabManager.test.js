import React from  'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Text Tests', ()=>{
    test('darkText Test', ()=>{
        expect(darkText()).toBe("Dark mode inverts the layout - better on the eyes. Default : off");
    });

    test('spaceText Test', ()=>{
        expect(spaceText()).toBe("Space mode, for when you want a cool theme. Default : off");
    });
});
