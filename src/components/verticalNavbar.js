import React from 'react';

function VerticalNavbar() {
  
  return (
    <div className="h-screen w-3/12 flex p-6">
      <div className="w-full bg-[#181c20] rounded-3xl p-10 border-r flex flex-col">
        <h1 className="text-4xl font-bold mb-8 text-white">PORTal</h1>
        <nav className='w-full mt-10'>
          <ul className="space-y-4 w-full m-0 text-white list-none"> {/* Added list-none */}
            {['Home', 'Projects', 'Experience', 'Stack', 'Contact'].map((link) => (
              <li key={link}>
                <a href="#" className="text-white no-underline">{link}</a> {/* Changed to no-underline */}
              </li>
            ))}
          </ul>
        </nav>
      </div>      
    </div>
  );
}

export default VerticalNavbar;
