import { useState } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Signup from './signup';

export default function Home() {
  const [v, sv] = useState({ username: '', password: '' });
  const [login, setlogin] = useState(false);
  const [image, setimage] = useState();
  const [data, setdata] = useState({
    prompt: '',
    size: '',
  });

  function onchange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }
  async function createimage() {
    const { prompt, size } = data;
    const response = await fetch(
      'https://fine-wear-dove.cyclic.app/openai/generateimage',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          size: size,
        }),
      }
    );
    const value = response.json();
    value.then((e) => {
      setimage(e.data);
    });
    //window.location.replace(value.data);
  }

  function handleOnChange(e) {
    sv({ ...v, [e.target.name]: e.target.value });
  }
  async function onLogin() {
    const { username, password } = v;
    if (!username || !password) return alert('!Alert User not found Alert!');
    const response = await fetch('https://fine-wear-dove.cyclic.app/logins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const value = response.json();
    value.then((e) => {
      if (e.status === 200) {
        setlogin(true);
      }
    });
  }

  if (login) {
    return (
      <Background>
        <Header />
        <div className="absolute top-28">
          <div className="image-container">
            <img src={image} alt="" width="516" height="512" />
          </div>
          <div className="form-container">
            <input
              type="text"
              placeholder="prompt here..."
              name="prompt"
              value={data.prompt}
              onChange={onchange}
              size={40}
              style={{ marginRight: '10px' }}
            />
            <select
              name="size"
              value={data.size}
              onChange={onchange}
              style={{ marginRight: '10px' }}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-r-md text-small inline-block px-5 py-2"
              style={{ opacity: 0.8 }}
              onClick={createimage}
            >
              Generate
            </button>
          </div>
        </div>
      </Background>
    );
  } else {
    return (
      <Background>
        <div className="flex items-center justify-center absolute top-26 w-full h-full">
          <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={v.username}
              onChange={handleOnChange}
              className="mb-4 w-full px-3 py-2 border rounded-md"
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={v.password}
              onChange={handleOnChange}
              className="mb-4 w-full px-3 py-2 border rounded-md"
            />
            <button
              onClick={() => onLogin()}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-indigo-600"
            >
              Log in
            </button>
            <Signup />
          </div>
        </div>
      </Background>
    );
  }
}
