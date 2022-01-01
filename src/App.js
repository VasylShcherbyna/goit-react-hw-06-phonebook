import ContactList from './components/ContactList/ContactList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

export default function App() {
  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (contacts) {
  //     setContacts(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (contacts) {
  //     store.setState(contacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(store.getState().contacts));
  // }, [contacts]);

  return (
    <>
      <h1 className={s}>Phonebook</h1>
      <Form />
      <h2 className={s}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
