import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact & Book An Appoinment</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Abc" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label>Number</label>
            <input type="numner" required placeholder="Number"/>
          </div>
          <div>
            <label>Message</label>
            <textarea
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
