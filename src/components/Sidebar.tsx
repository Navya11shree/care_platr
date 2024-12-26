
// // //Sidebar.tsx
// // import React, { useState } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { CiHome } from 'react-icons/ci';
// // import { MdExplore, MdGridView } from 'react-icons/md';
// // import { BsChat } from 'react-icons/bs';
// // import { FiUser } from 'react-icons/fi';
// // import { CgFileDocument } from 'react-icons/cg';
// // import '../tailwind.css';

// // const Sidebar: React.FC = () => {
// //   const location = useLocation();
// //   const [isExpanded, setIsExpanded] = useState(true); // Start with expanded state by default
// //   const [selectedPath, setSelectedPath] = useState(location.pathname);

// //   const sidebarItems = [
// //     { path: '/', icon: <CiHome size={20} />, label: 'Home' },
// //     { path: '/grid', icon: <MdGridView size={20} />, label: 'Grid' },
// //     { path: '/chat', icon: <BsChat size={20} />, label: 'Chat' },
// //     { path: '/user', icon: <FiUser size={20} />, label: 'User' },
// //     { path: '/documents', icon: <CgFileDocument size={20} />, label: 'Documents' },
// //     { path: '/explore', icon: <MdExplore size={28} />, label: 'Explore' },
// //   ];

// //   const handleItemClick = (path: string) => {
// //     setSelectedPath(path);
// //     if (path === selectedPath) {
// //       // Toggle sidebar if the same item is clicked
// //       setIsExpanded(!isExpanded);
// //     } else {
// //       // Expand sidebar when a different item is clicked
// //       setIsExpanded(true);
// //     }
// //   };

// //   return (
// //     <div
// //       className={`h-screen bg-blue-50 flex flex-col items-center py-4 transition-all duration-300 ${
// //         isExpanded ? 'w-48' : 'w-20'
// //       }`}
// //     >
// //       <div className="mb-4">
// //         <img
// //           className="w-12 h-12"
// //           src="https://www.google.com/u/2/ac/images/logo.gif?uid=102248287900093422159&service=google_gsuite"
// //           alt="DataPlatr-logo"
// //         />
// //       </div>
// //       {sidebarItems.map((item) => (
// //         <Link
// //           key={item.path}
// //           to={item.path}
// //           className={`w-full flex items-center my-2 px-4 transition-all duration-200 ${
// //             isExpanded ? 'justify-start' : 'justify-center'
// //           }`}
// //           onClick={() => handleItemClick(item.path)}
// //         >
// //           <div
// //             className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200 ${
// //               location.pathname === item.path ? 'bg-blue-800 text-white' : 'bg-white'
// //             } hover:bg-blue-700 hover:text-black`}
// //           >
// //             {item.icon}
// //           </div>
// //           {isExpanded && <span className="ml-4">{item.label}</span>}
// //         </Link>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Sidebar;

// //Sidebar.tsx
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { CiHome } from 'react-icons/ci';
// import { MdExplore, MdGridView } from 'react-icons/md';
// import { BsChat } from 'react-icons/bs';
// import { FiUser } from 'react-icons/fi';
// import { CgFileDocument } from 'react-icons/cg';
// import { AiOutlineSearch } from 'react-icons/ai'; // New icon for Search
// import '../tailwind.css';

// const Sidebar: React.FC = () => {
//   const location = useLocation();
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [selectedPath, setSelectedPath] = useState(location.pathname);

//   const sidebarItems = [
//     { path: '/', icon: <CiHome size={20} />, label: 'Home' },
//     { path: '/grid', icon: <MdGridView size={20} />, label: 'Grid' },
//     { path: '/chat', icon: <BsChat size={20} />, label: 'Chat' },
//     { path: '/user', icon: <FiUser size={20} />, label: 'User' },
//     { path: '/documents', icon: <CgFileDocument size={20} />, label: 'Documents' },
//     { path: '/explore', icon: <MdExplore size={28} />, label: 'Explore' },
//     { path: '/search', icon: <AiOutlineSearch size={20} />, label: 'Search' }, // New entry
//   ];

//   const handleItemClick = (path: string) => {
//     setSelectedPath(path);
//     if (path === selectedPath) {
//       setIsExpanded(!isExpanded);
//     } else {
//       setIsExpanded(true);
//     }
//   };

//   return (
//     <div
//       className={`h-screen bg-blue-50 flex flex-col items-center py-4 transition-all duration-300 ${
//         isExpanded ? 'w-48' : 'w-20'
//       }`}
//     >
//       <div className="mb-4">
//         <img
//           className="w-12 h-12"
//           src="https://www.google.com/u/2/ac/images/logo.gif?uid=102248287900093422159&service=google_gsuite"
//           alt="DataPlatr-logo"
//         />
//       </div>
//       {sidebarItems.map((item) => (
//         <Link
//           key={item.path}
//           to={item.path}
//           className={`w-full flex items-center my-2 px-4 transition-all duration-200 ${
//             isExpanded ? 'justify-start' : 'justify-center'
//           }`}
//           onClick={() => handleItemClick(item.path)}
//         >
//           <div
//             className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200 ${
//               location.pathname === item.path ? 'bg-blue-800 text-white' : 'bg-white'
//             } hover:bg-blue-700 hover:text-black`}
//           >
//             {item.icon}
//           </div>
//           {isExpanded && <span className="ml-4">{item.label}</span>}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;



//api added:
// Sidebar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiHome } from 'react-icons/ci';
import { MdExplore, MdGridView } from 'react-icons/md';
import { BsChat } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { AiOutlineSearch } from 'react-icons/ai';
import { TbApi } from 'react-icons/tb';
import '../tailwind.css';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedPath, setSelectedPath] = useState(location.pathname);

  const sidebarItems = [
    { path: '/', icon: <CiHome size={20} />, label: 'Home' },
    { path: '/grid', icon: <MdGridView size={20} />, label: 'Grid' },
    { path: '/chat', icon: <BsChat size={20} />, label: 'Chat' },
    { path: '/user', icon: <FiUser size={20} />, label: 'User' },
    { path: '/documents', icon: <CgFileDocument size={20} />, label: 'Documents' },
    { path: '/explore', icon: <MdExplore size={28} />, label: 'Explore' },
    { path: '/api', icon: <TbApi size={20} />, label: 'API' },
  ];

  const handleItemClick = (path: string) => {
    setSelectedPath(path);
    if (path === selectedPath) {
      setIsExpanded(!isExpanded);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div
      className={`h-screen bg-blue-50 flex flex-col items-center py-4 transition-all duration-300 ${
        isExpanded ? 'w-48' : 'w-20'
      }`}
    >
      <div className="mb-4">
        <img
          className="w-12 h-12"
          src="https://www.google.com/u/2/ac/images/logo.gif?uid=102248287900093422159&service=google_gsuite"
          alt="DataPlatr-logo"
        />
      </div>
      {sidebarItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`w-full flex items-center my-2 px-4 transition-all duration-200 ${
            isExpanded ? 'justify-start' : 'justify-center'
          }`}
          onClick={() => handleItemClick(item.path)}
        >
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200 ${
              location.pathname === item.path ? 'bg-blue-800 text-white' : 'bg-white'
            } hover:bg-blue-700 hover:text-black`}
          >
            {item.icon}
          </div>
          {isExpanded && <span className="ml-4">{item.label}</span>}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
