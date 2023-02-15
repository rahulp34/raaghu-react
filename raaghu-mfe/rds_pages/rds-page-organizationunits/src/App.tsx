import React, { Suspense, useEffect, useState } from "react";
import OrganizationTree from "./Organization-Tree/Organization-Tree";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../libs/state-management/hooks";
import { fetchOrganizationTrees } from "../../../libs/state-management/organization-tree/organization-tree-slice";
const App = () => {
  const data = useAppSelector((state) => state.persistedReducer.organization);
  const [Data, setData] = useState<any>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrganizationTrees() as any);
    setData(data.organizationUnitTree)
  }, [dispatch]);
  console.log("hello from app.tsx", data.organizationUnitTree);
  return (
    <Suspense>
      <OrganizationTree
        organizationTreeData={Data}
      ></OrganizationTree>
    </Suspense>
  );
};
export default App;