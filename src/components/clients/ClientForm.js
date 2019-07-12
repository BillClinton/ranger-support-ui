import React from "react";

const ClientForm = ({ client }) => {
  console.log(client);
  return (
    <form className="ui form">
      <h4 className="ui dividing header">Add Client</h4>
      <div className="sixteen wide field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Client Name" />
      </div>
      <div className="two fields">
        <div className="ten wide field">
          <label>Contact</label>
          <input type="text" name="contact" placeholder="Contact Name" />
        </div>
        <div className="six wide field">
          <label>Contact Number</label>
          <input
            type="text"
            name="contact_number"
            placeholder="Contact Number"
          />
        </div>
      </div>
      <div className="two fields">
        <div className="ten wide field">
          <label>Address</label>
          <input type="text" name="address1" placeholder="Address" />
        </div>
        <div className="six wide field">
          <label>City</label>
          <input type="text" name="city" placeholder="City" />
        </div>
      </div>
      <div className="three fields">
        <div className="ten wide field">
          <label>Address line 2 </label>
          <input type="text" name="address2" placeholder="Address line 2" />
        </div>
        <div className="three wide field">
          <label>State</label>
          <input type="text" name="us_state_id" placeholder="State" />
        </div>
        <div className="three wide field">
          <label>Zip</label>
          <input type="text" name="zip" placeholder="Zip" />
        </div>
      </div>

      <div className="ui button" tabIndex="0">
        Add
      </div>
    </form>
  );
};

export default ClientForm;
