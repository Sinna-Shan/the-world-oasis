import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />
      <Row type="horizontal">
        <Heading as="h1">hello world!</Heading>
        <Heading as="h2">hello world!</Heading>
        <Heading as="h3">hello world!</Heading>
        <Button> Check in</Button>
      </Row>
      <Button variation="primary" size="large">
        button primary
      </Button>
      <Button variation="secondary" size="medium">
        button secondary
      </Button>
      <Button variation="danger" size="small">
        button danger
      </Button>
      <Row type="vertical">
        <Heading as="h1">hello world!</Heading>
        <Heading as="h2">hello world!</Heading>
        <Heading as="h3">hello world!</Heading>
        <Button> Check in</Button>
      </Row>
    </>
  );
}

export default App;
