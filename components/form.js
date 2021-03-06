import { Component } from "react";

export default class Form extends Component {
  // constructor(props) {
  //   super(props);
  //   this.submitForm = this.submitForm.bind(this);
  //   this.state = {
  //     status: ""
  //   };
  // }

  render() {
    // const { status } = this.state;
    return (
      <form 
        method="POST"
        action="https://formspree.io/f/xrgowpqn"
        className="contact-form"
      >
        <input type="text" name="_gotcha" className="hidden" />

        <div className="mb-4">
          <label className="sr-only" htmlFor="name">Name</label>
          <input className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-green text-xl transition ease-in-out duration-200 textb-off-lack" id="name" type="text" placeholder="Name" name="name" required />
        </div>
        <div className="mb-4">
          <label className="sr-only" htmlFor="_replyto">Email</label>
          <input className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-green text-xl transition ease-in-out duration-200 textb-off-lack" id="_replyto" type="email" name="_replyto" placeholder="Email" required />
        </div>
        <div className="mb-4">
          <label className="sr-only" htmlFor="tel">Phone</label>
          <input className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-green text-xl transition ease-in-out duration-200 textb-off-lack" id="tel" type="tel" placeholder="Phone" name="tel" required />
        </div>
        <div className="mb-4">
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea rows="3" className="appearance-none w-full py-3 px-4 leading-tight border-transparent border-2 focus:outline-none focus:border-green text-xl transition ease-in-out duration-200 textb-off-lack" id="message" placeholder="Message" name="message" />
        </div>

        <button className="text-lg lg:text-xl block ml-auto text-right underline" type="submit">Send Message</button>
        
        {/* {status === "SUCCESS" ? <p>Thanks for getting in contact, we'll be in touch soon!</p> : <button className="text-lg lg:text-xl block ml-auto text-right underline" type="submit">Send Message</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>} */}
      </form>
    );
  }

  // submitForm(ev) {
  //   ev.preventDefault();
  //   const form = ev.target;
  //   const data = new FormData(form);
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(form.method, form.action);
  //   xhr.setRequestHeader("Accept", "application/json");
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState !== XMLHttpRequest.DONE) return;
  //     if (xhr.status === 200) {
  //       form.reset();
  //       this.setState({ status: "SUCCESS" });
  //     } else {
  //       this.setState({ status: "ERROR" });
  //     }
  //   };
  //   xhr.send(data);
  // }
}