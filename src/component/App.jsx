import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import { Container } from "./App.styled";

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />
    </Container>
  );
}
