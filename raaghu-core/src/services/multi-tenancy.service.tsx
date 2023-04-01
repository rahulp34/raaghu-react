// // import { useEffect } from "react";
// // import { useDispatch } from "react-redux";
// // import { fetchMultiTenancy } from "../redux/actions/action.creator";


// // const fetchMultiTenancyState = (name:string) => {
// //     const dispatch = useDispatch<any>();

// //     useEffect(() => {
// //         dispatch(fetchMultiTenancy(name));
// //     }, [dispatch]);
// // }
// // export default fetchMultiTenancyState;

// import { useState, useEffect } from 'react';
// // import { RestService } from './rest.service';
// // import  SessionStateService  from './session-state-service';
// // import  ConfigStateService  from './config-state-service';
// import  {findTenantByName, findTenantById} from '../proxy/multi-tenancy/abp-tenant.service'
// import { CurrentTenantDto, FindTenantResultDto } from '../proxy/models';
// import _ from "lodash";

// interface MultiTenancyServiceProps {
//   restService: any;
//   sessionState: any;
//   configStateService: any;
//   tenantKey: string;}

//  const useMultiTenancyService = ({
//   restService,
//   sessionState,
//   configStateService,
//   tenantKey,
// }: MultiTenancyServiceProps) => {
//   const [domainTenant, setDomainTenant] = useState<CurrentTenantDto | null>(null);
//   const [isTenantBoxVisible, setIsTenantBoxVisible] = useState(true);
//   const [apiName] = useState('abp');

//   const setTenantToState = (tenant: FindTenantResultDto) => {
//     sessionState.setTenant({ id: tenant.tenantId, name: tenant.name, isAvailable: true });
//     return configStateService.refreshAppState().then(() => tenant);
//   };

//   const setTenantByName = (tenantName: string) => {
//     return findTenantByName(tenantName)
//       .then(setTenantToState);
//   };

//   const setTenantById = (tenantId: string) => {
//     return findTenantById(tenantId)
//       .then(setTenantToState);
//   };

//   useEffect(() => {
//     // initialize domainTenant using tenantKey
//     const initDomainTenant = async () => {
//       const tenant = await restService.findTenantByName(tenantKey);
//       if (tenant) {
//         setDomainTenant(tenant);
//         sessionState.setTenant({ id: tenant.tenantId, name: tenant.name, isAvailable: true });
//       }
//     };
//     initDomainTenant();
//   }, [restService, sessionState, tenantKey]);

//   return {
//     domainTenant,
//     setDomainTenant,
//     isTenantBoxVisible,
//     setIsTenantBoxVisible,
//     apiName,
//     setTenantByName,
//     setTenantById,
//   };
// };
// export default  useMultiTenancyService;
