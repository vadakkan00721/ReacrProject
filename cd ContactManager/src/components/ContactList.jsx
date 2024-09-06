/* eslint-disable react/prop-types */
const ContactList = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return (
      <div className="item" key={contact.id}>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </div>
      </div>
    );
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
