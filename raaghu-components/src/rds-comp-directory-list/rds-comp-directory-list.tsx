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
//     
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


// import React, { useState } from "react";
// import { RdsIcon } from "../rds-elements";
// import { RdsLabel } from "raaghu-react-elements";

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

// export const RdsCompDirectoryList = ({
//   items,
//   path,
//   selectedItemId,
// }: RdsCompDirectoryListProps) => {
//   const [expandedItems, setExpandedItems] = useState<string[]>([]);

//   const handleClick = (id: string, name: string) => () => {
//     if (expandedItems.includes(id)) {
//       setExpandedItems(expandedItems.filter((item) => item !== id));
//     } else {
//       setExpandedItems([...expandedItems, id]);
//     }
//     path({ id });
//   };

//   const renderDirectoryItem = (item: DirectoryItem) => (
//     <>
//       <div  key={item.name} className="d-flex align-items-center ">
//         {item.hasChildren && (
//           <button
//             className=" me-1 border-0 bg-white"
//             onClick={handleClick(item.id, item.name)}
//           >
//             <RdsIcon
//               name={
//                 expandedItems.includes(item.id)
//                   ? "chevron_down"
//                   : "chevron_right"
//               }
//               height="12px"
//               width="12px"
//               fill={false}
//               stroke={true}
//               onClick={handleClick(item.id, item.name,)}
//             />
//           </button>
//         )}
//         <span className="me-1 d-flex align-items-center" onClick={handleClick(item.id, item.name)}>
//           <RdsIcon
//             name="folder"
//             height="15px"
//             width="15px"
//             fill={false}
//             stroke={true}
//             colorVariant={
//               selectedItemId === item.id ? "primary" : undefined
//             }
            
//           />
//            <RdsLabel class="px-2" label={item.name}></RdsLabel>
//         {item.children && (
//           <RdsLabel  label={`(${item.children.length})`}></RdsLabel>
//         )}
//         </span>
       
//       </div>
//       {item.children && expandedItems.includes(item.id) && (
        
//           <RdsCompDirectoryList
//             items={item.children}
//             path={path}
//             selectedItemId={selectedItemId}
//           />
        
//       )}
//     </>
//   );

//   const renderDirectoryItems = (items: DirectoryItem[]) => {
//     return items.map(renderDirectoryItem);
//   };

//   return <ul className="pt-2">{renderDirectoryItems(items)}</ul>;
// };

// export default RdsCompDirectoryList;


import React, { useRef, useState } from "react";
import { RdsIcon } from "../rds-elements";
import { RdsLabel } from "raaghu-react-elements";

export interface DirectoryItem {
  id: string;
  name: string;
  children?: DirectoryItem[];
  hasChildren?: boolean;
}

export interface RdsCompDirectoryListProps {
  items: DirectoryItem[];
  path?: any;
  setMoveId?:any;
  selectedItemId?: string;
  onDragAndDrop?: (sourceId: string, destinationId: string) => void;
}

export const RdsCompDirectoryList=(props : RdsCompDirectoryListProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const draggingItem = useRef<string | null>(null);

  const handleClick = (id: string, name: string) => () => {
    
    const isExpanded = expandedItems.includes(id);
    if (isExpanded) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
    props.path({id,name});
  }

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    draggingItem.current = id;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    if (draggingItem.current !== null) {
      console.log(`Dropped ${draggingItem.current} on ${id}`);
      if (props.onDragAndDrop) {
        props.onDragAndDrop(draggingItem.current, id);
        props.setMoveId(id);
      }
      draggingItem.current = null;
    }
  };

  const renderDirectoryItem = (item: DirectoryItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const isSelected = props.selectedItemId === item.id;

    return (
      <div key={item.id}>
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, item.id)}
          onDragOver={(e) => handleDragOver(e, item.id)}
          onDrop={(e) => handleDrop(e, item.id)}
          className={`d-flex align-items-center ${
            isSelected ? "text-bg-white" : ""
          }`}
          onClick={handleClick(item.id, item.name)}
        >
          {hasChildren && (
            <button
              className="me-1 border-0 bg-white"
              onClick={handleClick(item.id, item.name)}
            >
              <RdsIcon
                name={isExpanded ? "chevron_down" : "chevron_right"}
                height="12px"
                width="12px"
                fill={false}
                stroke={true}
                onClick={handleClick(item.id, item.name,)}
              />
            </button>
          )}
          <RdsIcon
            name="folder"
            height="15px"
            width="15px"
            fill={false}
            stroke={true}
            colorVariant={isSelected ? "primary" : undefined}
            onClick={handleClick(item.id, item.name)}
          />
          <RdsLabel
            class="px-2"
            label={item.name}
            color={isSelected ? "black" : undefined}
          />
          {item.children && (
            <RdsLabel label={`(${item.children.length})`} />
          )}
        </div>
        {item.children && isExpanded && (
          <RdsCompDirectoryList
          items={item.children || []}
          path={props.path}
          selectedItemId={props.selectedItemId}
          onDragAndDrop={props.onDragAndDrop}
        />
        
        )}
      </div>
    );
  };

  const renderDirectoryItems = (items: DirectoryItem[]) => {
    return items.map(renderDirectoryItem);
  };

  return <ul className="pt-2">{renderDirectoryItems(props.items)}</ul>;
}

export default RdsCompDirectoryList;