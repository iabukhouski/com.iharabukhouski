import {
  Page,
} from '../components/Page';
import {
  Header,
} from '../components/Header';
import {
  Menu,
} from '../components/Menu';

export default function Biography() {

  return (
    <Page>
      <Header />
      <Menu
        value="biography"
      />
    </Page>
  );
}
