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
    <>
      <Header />
      <main class="container">
        <Banner />
        <Brands />
        <TrustedBy />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
