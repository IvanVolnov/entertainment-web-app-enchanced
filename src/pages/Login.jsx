import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (modal && modal.showModal) {
      modal.showModal();
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && modal && modal.open) {
        navigate('../');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (modal && modal.close) {
        modal.close();
      }
    };
  }, [navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log({ ...data });
  }

  return createPortal(
    <dialog ref={dialog}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type='email' placeholder='Email address' name='email' />
        <input type='password' placeholder='Password' name='password' />
        <button type='submit'>Login to your account</button>
        <Link to='../'>Cancel</Link>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
