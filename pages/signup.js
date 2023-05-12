import React from 'react';
import { useState } from 'react';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [regis, setRegis] = useState({ username: '', password: '', email: '' });

  function handleOnChange(e) {
    setRegis({ ...regis, [e.target.name]: e.target.value });
  }
  async function onSignup() {
    const { username, password, email } = regis;
    const response = await fetch('https://fine-wear-dove.cyclic.app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
    const value = response.json();
    value.then((e) => {
      if (e.status === 200) {
        setSignup(true);
      }
    });
  }

  return (
    <>
      <button
        className="w-full px-4 py-2 relative top-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-md hover:bg-green-600"
        onClick={() => setShowModal(true)}
      >
        Create Account
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Account</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={regis.username}
                    onChange={handleOnChange}
                    className="mb-4 w-full px-3 py-2 border rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={regis.password}
                    onChange={handleOnChange}
                    className="mb-4 w-full px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    value={regis.email}
                    onChange={handleOnChange}
                    className="mb-4 w-full px-3 py-2 border rounded-md"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      onSignup();
                      setShowModal(false);
                    }}
                  >
                    register
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
