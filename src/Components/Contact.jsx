// import './App.css'
import { useState } from "react";
import { MdSignalCellular4Bar } from "react-icons/md";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [msg, setMsg] = useState("");
  const [dataSend, setDataSend] = useState(false);
  let onSubmitButton = async (e) => {
    e.preventDefault();
    console.log(name, "+", email, "+", phno, "+", msg);

    try {
      fetch('https://sheetdb.io/api/v1/xucx4qjx4hww1', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              Name: `${name}`,
              'Email': `${email}`,
              'PhoneNo': phno,
              'Message': `${msg}`
            }
          ]
        })
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDataSend(true);
          setName("");
          setEmail("");
          setPhno("");
          setMsg("");
        });

    } catch (error) {
      alert(`try again because of ${error}`);
      console.error('Error adding data:', error);
    }
  }
  return (
    <>
      <div className="w-full sm:px-10 py-10" id="ContactPage">
        <div className="w-full shadow-inner px-3 rounded-t-3xl rounded-b-lg rounded bg-slate-100 shadow-black text-center py-5">
          {(!dataSend)
            ? <>
              <div className="text-2xl font-bold font-mono">Let's Get Connected</div>
              <div className="text-base font-semibold">(If You Have Any Query, Please Contact Us)</div>
              <form onSubmit={onSubmitButton}>
                <div className="w-3/4 md:w-1/2 text-center mx-auto">
                  <label className="flex flex-wrap items-center my-5 md:justify-center">
                    <p className="text-xl font-semibold">Name:<sup className="text-red-600 font-extrabold">*</sup> &nbsp;</p>
                    <input type="text" placeholder="ENTER NAME" className="focus:bg-gray-200 md:w-1/2 px-2 py-1 shadow border-2 rounded-lg border-gray-600" onChange={(e) => setName(e.target.value)} value={name} required></input>
                  </label>
                  <label className="flex flex-wrap items-center my-5  md:justify-center">
                    <p className="text-xl font-semibold">E-mail:<sup className="text-red-600 font-extrabold">*</sup> &nbsp;</p>
                    <input type="email" placeholder="username@company.com" className="focus:bg-gray-200 md:w-1/2 px-2 py-1 shadow border-2 rounded-lg border-gray-600" onChange={(e) => setEmail(e.target.value)} value={email} required></input>
                  </label>
                  <label className="flex flex-wrap items-center my-5  md:justify-center">
                    <p className="text-xl font-semibold">Phone No:<sup className="text-red-600 font-extrabold">*</sup> &nbsp;</p>
                    <input type="number" placeholder="+91 XXXXXXXXXX" className="focus:bg-gray-200 md:w-1/2 px-2 py-1 shadow border-2 rounded-lg border-gray-600" onChange={(e) => setPhno(e.target.value)} value={phno} required></input>
                  </label>
                  <label className="flex flex-wrap my-5  md:justify-center">
                    <p className="text-xl font-semibold">Message:<sup className="text-red-600 font-extrabold">*</sup> &nbsp;</p>
                    <textarea className="focus:bg-gray-200 px-2 py-1 shadow border-2 rounded-lg border-gray-600" name="message" rows="4" cols="50" placeholder="What's Your Message" onChange={(e) => setMsg(e.target.value)} value={msg} required></textarea>
                  </label>
                  <input type="submit" value={"SUBMIT"} className="cursor-pointer hover:text-[#DAAF50] bg-black px-10 rounded-lg mx-auto text-2xl text-white"></input>
                </div>
              </form>
            </>
            : <>
              <div id="alert-1" class="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50" role="alert">
                <span class="sr-only">Info</span>
                <div class="ms-3 text-sm font-medium">
                  Your message has been received. We appreciate your feedback and will be in touch shortly.
                </div>
                <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#alert-1" aria-label="Close" onClick={() => setDataSend(false)}>
                  <span class="sr-only">Close</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                </button>
              </div>
            </>
          }
        </div>
      </div>

    </>
  )
}

export default Contact
