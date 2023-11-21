// components/Sidebar.tsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className='z-10'> {/* Set a higher z-index */}
      <div className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[227px] overflow-y-auto overflow-auto text-center bg-gray-900 rounded-r-md'></div>
    </div>
  );
};

export default Sidebar;
