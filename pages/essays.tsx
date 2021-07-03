import {
  Page,
} from '../components/Page';
import {
  Header,
} from '../components/Header';
import {
  Menu,
} from '../components/Menu';

export default function Essays() {

  return (
    <Page>
      <Header />
      <Menu
        value="essays"
      />
    </Page>
  );
}
