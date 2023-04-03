// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { RdsIcon } from "../rds-elements";

// export interface RdsCompDirectoryListProps {
//   directory: any[];
//   path: any;
//   ChildrenFolder:any;
// }

// const RdsCompDirectoryList = (props: RdsCompDirectoryListProps) => {
//   const [expanded, setExpanded] = useState(false);
//   const [directory, setDirectory] = useState(props.directory);
//   const[children,setChildren]= useState(false)


//   const handleExpand = (e: any) => {
//     debugger
//     setExpanded(!expanded);
//     props.path(e);
//   };

//   const addChildren=(e:any)=>{
//     setChildren(e.id);
//     props.path(e);
//     console.log("hi")
//   }
//   useEffect(() => {
//     setChildren(props.ChildrenFolder);
//   }, [props.ChildrenFolder]);

//   useEffect(() => {
//     setDirectory(props.directory);
//   }, [props.directory]);

//   return (
//     <>
//       <nav aria-label="directory">
//         <li className="directory">
//           <ul className="directory-item">
//             {directory.map((dir) => (
//               <div key={dir.name}>
//                 <div className="d-flex align-items-center ">
//                   {dir.hasChildren && (
//                     <button className="ms-2 me-2 border-0 bg-white" onClick={() => {
//                       handleExpand({ name: dir.name, id: dir.id });
//                     }}>
//                       {expanded ? (
//                         <RdsIcon 
//                           name="chevron_down"
//                           height="8px"
//                           width="6px"
//                           fill={false}
//                           stroke={true}
//                         ></RdsIcon>
//                       ) : (
//                         <RdsIcon
//                           name="chevron_right"
//                           height="8px"
//                           width="6px"
//                           fill={false}
//                           stroke={true}
//                         ></RdsIcon>
//                       )}
//                     </button>
//                   )}
//                   <span className="me-2 ms-1">
//                     <RdsIcon
//                       name="folder"
//                       height="15px"
//                       width="15px"
//                       fill={false}
//                       stroke={true}
//                       colorVariant="primary"
//                       onClick={()=>{addChildren({ name: dir.name, id: dir.id })}}
//                     />
//                   </span>
//                   <span
                    
//                   >
//                     {dir.name}
//                   </span>
//                   {dir.children && (
//                     <span className="ms-2 mt-2"
//                     >
//                        &nbsp;({dir.children.length})
//                     </span>

//                   )}
//                 </div>
//                 {dir.children && expanded && (
                  
//                   <RdsCompDirectoryList
//                     directory={dir.children}
//                     path={props.path}
//                     ChildrenFolder={props.ChildrenFolder}
//                   />
//                 )}
//               </div>
//             ))}
//           </ul>
//         </li>
//       </nav>
//     </>
//   );
// };

// export default RdsCompDirectoryList;

// import React from "react";
// import { RdsIcon } from "../rds-elements";

// export interface DirectoryItem {
//   id: string;
//   name: string;
//   hasChildren?: boolean;
//   children?: DirectoryItem[];
// }

// export interface RdsCompDirectoryListProps {
//   items: any;
//   path: any;
//   selectedItemId?: string;
// }



// export const RdsCompDirectoryList = ({ items, path, selectedItemId }: RdsCompDirectoryListProps) => {
//   const handleClick = (id: string, name:string) => () => path({ id });

//   const renderDirectoryItem = (item: DirectoryItem) => (
//     <li key={item.id}>
//       <div className="d-flex align-items-center ">
//         {item.hasChildren && (
//           <button
//             className="ms-2 me-2 border-0 bg-white"
//             onClick={handleClick(item.id,item.name)}
             
//           >
//             <RdsIcon
//               name={item.children ? "chevron_down" : "chevron_right"}
//               height="8px"
//               width="6px"
//               fill={false}
//               stroke={true}
//               onClick={handleClick(item.id,item.name)}
//             />
//           </button>
//         )}
//         <span className="me-2 ms-1">
//           <RdsIcon
//             name="folder"
//             height="15px"
//             width="15px"
//             fill={false}
//             stroke={true}
//             colorVariant={selectedItemId === item.id ? "primary" : undefined}
//             onClick={handleClick(item.id, item.name)}
//           />
//         </span>
//         <span>{item.name}</span>
//         {item.children && (
//           <span className="ms-2 mt-2">&nbsp;({item.children.length})</span>
//         )}
//        </div>
//       {item.children && (
//         <ul className="pl-4">
//           <RdsCompDirectoryList
//             items={item.children}
//             path={path}
//             selectedItemId={selectedItemId}
//           />
//         </ul>
//       )}
//     </li>
//   );

//   const renderDirectoryItems = (items: DirectoryItem[]) => {
//     return items.map(renderDirectoryItem);
//   };

//   return <ul>{renderDirectoryItems(items)}</ul>;
// };
//  export default RdsCompDirectoryList


import React, { useState } from "react";
import { RdsIcon } from "../rds-elements";

export interface DirectoryItem {
  id: string;
  name: string;
  hasChildren?: boolean;
  children?: DirectoryItem[];
}

export interface RdsCompDirectoryListProps {
  items: any;
  path: any;
  selectedItemId?: string;
}

export const RdsCompDirectoryList = ({
  items,
  path,
  selectedItemId,
}: RdsCompDirectoryListProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleClick = (id: string, name: string) => () => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
    path({ id });
  };

  const renderDirectoryItem = (item: DirectoryItem) => (
    <div key={item.name}>
      <div className="d-flex align-items-center ">
        {item.hasChildren && (
          <button
            className=" me-2 border-0 bg-white"
            onClick={handleClick(item.id, item.name)}
          >
            <RdsIcon
              name={
                expandedItems.includes(item.id)
                  ? "chevron_down"
                  : "chevron_right"
              }
              height="8px"
              width="6px"
              fill={false}
              stroke={true}
              onClick={handleClick(item.id, item.name,)}
            />
          </button>
        )}
        <span className="me-2 ">
          <RdsIcon
            name="folder"
            height="15px"
            width="15px"
            fill={false}
            stroke={true}
            colorVariant={
              selectedItemId === item.id ? "primary" : undefined
            }
            onClick={handleClick(item.id, item.name)}
          />
        </span>
        <span>{item.name}</span>
        {item.children && (
          <span className=" mt-2">&nbsp;({item.children.length})</span>
        )}
      </div>
      {item.children && expandedItems.includes(item.id) && (
        <ul className="pl-4">
          <RdsCompDirectoryList
            items={item.children}
            path={path}
            selectedItemId={selectedItemId}
          />
        </ul>
      )}
    </div>
  );

  const renderDirectoryItems = (items: DirectoryItem[]) => {
    return items.map(renderDirectoryItem);
  };

  return <ul>{renderDirectoryItems(items)}</ul>;
};

export default RdsCompDirectoryList;
