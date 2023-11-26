import {
  Banner,
  Brands,
  Footer,
  Header,
  RegistrationForm,
  TrustedBy,
} from "./components";

function App() {
  return (
    <main class="container">
      <Header />
      <Banner />
      <Brands />
      <TrustedBy />
      <RegistrationForm />
      <Footer />
    </main>
  );
}

export default App;
