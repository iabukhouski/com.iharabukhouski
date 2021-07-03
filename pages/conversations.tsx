import {
  Page,
} from '../components/Page';
import {
  Header,
} from '../components/Header';
import {
  Menu,
} from '../components/Menu';

export default function Conversations() {

  return (
    <Page>
      <Header />
      <Menu
        value="conversations"
      />
    </Page>
  );
}
