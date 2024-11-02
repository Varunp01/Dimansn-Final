// import './App.css'
import { useState } from "react";
import { MdSignalCellular4Bar } from "react-icons/md";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [msg, setMsg] = useState("");
  const [dataToSend, setDataToSend] = useState({
    data: [
      {
        'Name': `${name}`,
        'Email': `${email}`,
        'PhoneNo': `${phno}`,
        'Message': `${msg}`
      },
    ],
  });
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
                  'Name': `${name}`,
                  'Email': `${email}`,
                  'PhoneNo': phno,
                  'Message': `${msg}`
              }
          ]
        })
    }).then((response) => response.json())
      .then((data) => console.log(data));
    
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }
  return (
    <>
      <div className="w-full px-10 py-10" id="ContactPage">
        <div className="w-full shadow-inner px-3 bg-slate-100 shadow-black text-center py-5">
          <div className="text-2xl font-bold font-mono">Let's Get Connected</div>
          <div className="text-lg font-semibold">( If You Have Any Query, Please Contact Us )</div>
          <form onSubmit={onSubmitButton}>
            <div className="w-3/4 md:w-1/2 text-center mx-auto">
              <label className="flex flex-wrap items-center my-5 md:justify-center">
                <p className="text-xl font-semibold">Name:<sup className="text-red-600 font-extrabold">*</sup> &nbsp;</p>
                <input type="text" placeholder="ENTER NAME" className="md:w-1/2 px-2 py-1 shadow border-2 rounded-lg border-gray-600" onChange={(e) => setName(e.target.value)} value={name} required></input>
              </label>
              <label className="flex flex-wrap items-center my-5  md:justify-center">
                <p className="text-xl font-semibold">E-mail:<sup className="text-red-600 font-extrabold">*</sup> &nbsp;</p>
                <input type="email" placeholder="username@company.com" className="md:w-1/2 px-2 py-1 shadow border-2 rounded-lg border-gray-600" onChange={(e) => setEmail(e.target.value)} value={email} required></input>
              </label>
              <label className="flex flex-wrap items-center my-5  md:justify-center">
                <p className="text-xl font-semibold">Phone No:<sup className="text-red-600 font-extrabold">*</sup> &nbsp;</p>
                <input type="number" placeholder="+91 XXXXXXXXXX" className="md:w-1/2 px-2 py-1 shadow border-2 rounded-lg border-gray-600" onChange={(e) => setPhno(e.target.value)} value={phno} required></input>
              </label>
              <label className="flex flex-wrap my-5  md:justify-center">
                <p className="text-xl font-semibold">Message:<sup className="text-red-600 font-extrabold">*</sup> &nbsp;</p>
                <textarea className="px-2 py-1 shadow border-2 rounded-lg border-gray-600" name="message" rows="4" cols="50" placeholder="What's Your Message" onChange={(e) => setMsg(e.target.value)} value={msg} required></textarea>
              </label>
              <input type="submit" value={"SUBMIT"} className="cursor-pointer hover:text-[#DAAF50] bg-black px-10 rounded-lg mx-auto text-2xl text-white"></input>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Contact
