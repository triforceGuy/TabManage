import Nav from './NavbarElements';
import { isStyledComponent } from 'styled-components';

test('This should work', () => {
    var ans = isStyledComponent(
        Nav
      )
      console.log("Homepage is a reactCompenent " + ans)
});