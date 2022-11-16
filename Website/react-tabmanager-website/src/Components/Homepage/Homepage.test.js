import Homepage from './index'
import {isElement} from 'react-dom/test-utils';

it('Should check if Homepage is an element', () => {
   var ans = isElement(
      Homepage
    )
    console.log("Homepage is a reactCompenent " + ans)
 });
