import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({keyword, onChage}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
          <h6 className="btn btn-ghost normal-case text-2xl hover:bg-primary" onClick={() => navigate('/')}>Top 50 Music</h6>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" value={keyword} onChange={(e) => onChage(e.target.value)} placeholder={`Cari ${location.pathname === '/top-songs' ? 'Lagu' : 'Artis'}`} className="input input-bordered focus:border-primary md:w-96" />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <button className="btn btn-square btn-ghost hover:bg-primary ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <ul tabIndex="0" className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li onClick={() => navigate('/')}><h6>Artis Teratas</h6></li>
            <li onClick={() => navigate('/top-songs')}><h6>Lagu teratas</h6></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
