import React, { Suspense, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { RdsAddressDetail, RdsAlert, RdsAppDetail, RdsAvatar, RdsBadge, RdsBankCardDetail, RdsBanner, RdsBenefit, RdsButton, RdsIcon, RdsLabel } from 'raaghu-react-elements';
import "./rds-comp-elements.scss"
// import { code_snippet } from './elements/accordion';

export interface RdsCompElementsProps { }


const RdsCompElements = (props: any) => {

   const [code_snippet, setCode] = React.useState("");

   const [identity, setIdentity] = useState<number>();

   debugger
   const ComponentElement = React.lazy(() => import('./elements/' + props.type + '.tsx'));
   // const ComponentCode = import('./elements/' + props.type + '.tsx');
   console.log("Component: ", ComponentElement);

   // const [searchParams, setSearchParams] = useSearchParams();
   // console.log("Props: ", props, code_snippet);


   // const Accordion_text =
   //    <RdsAccordion
   //       accordionId='1'
   //       accordionType='Default' >
   //       <RdsAccordionItem id={'1'} defaultOpen={false} title={'Section 1 Title'}>
   //          <h1>Hello</h1>
   //       </RdsAccordionItem>
   //       <RdsAccordionItem id={'2'} title={'Section 2 Title'}>
   //          <h1>Hello2</h1>
   //       </RdsAccordionItem>
   //       <RdsAccordionItem id={'3'} title={'Section 3 Title'}>
   //          <h1>Hello3</h1>
   //       </RdsAccordionItem>
   //    </RdsAccordion>

   //    const Address_Detail = ` <RdsAddressDetail
   // addressLine1="Address Line 1"
   // addressLine2="Address Line 2"
   // addressLine3="Address Line 3"
   // cardborder={true}
   // header="Address Header"
   // withIcon={true} children={undefined}></RdsAddressDetail>`

   //    const Alert = ` <RdsAddressDetail
   // addressLine1="Address Line 1"
   // addressLine2="Address Line 2"
   // addressLine3="Address Line 3"
   // cardborder={true}
   // header="Address Header"
   // withIcon={true} children={undefined}></RdsAddressDetail>`

   //    const AppDetail = `  <RdsAppDetail
   // appDetailsItem={{
   //    icon: 'zapier',
   //    iconColor: 'warning',
   //    iconFill: true,
   //    iconHeight: '30px',
   //    iconStroke: true,
   //    iconWidth: '30px',
   //    route: '/home',
   //    routeLabel: 'View integration',
   //    selected: true,
   //    subtitle: 'Build custom automation and intefrations with app',
   //    title: 'Zapier'
   // }}
   // />`

   const copy_click = (text: any) => {
      navigator.clipboard.writeText(text);
   }

   const setChildCode = (message: any) => {
      console.log("setChildCode:", message);
      // setCode(message);
   };

   return (
      <>
         {/* <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">

         </div> */}
         <div className="card p-2 border-0 rounded-0 mt-4">

            <div className='card-header'>
               <h5><RdsLabel> <span className='text-capitalize'>{props.type}</span> </RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3 mt-2">
                     <RdsLabel>Preview</RdsLabel>
                     <div className='mb-4 mt-3'>
                        <Suspense fallback={<div>Page is Loading...</div>}>
                           <ComponentElement onChange={(event: any) => setChildCode(event)} />
                        </Suspense>
                     </div>

                  </div>
                  <div className="col-md-6">
                     <RdsLabel>Code</RdsLabel>
                     <div onClick={() => copy_click(code_snippet)} className="bg-light bg-opacity-100 p-4 rounded-4 mt-4">
                        <span className='float-end'>
                           {/* <RdsButton
                              // class="me-2"
                              label=""
                              type="button"
                              isOutline={false}
                              colorVariant=""
                              size="small"
                              icon = "clipboard"
                              block = {false}
                              iconFill = {false}
                              iconStroke = {true}
                              iconHeight = "15px"
                              iconWidth = "15px"
                              onClick={() => {
                                 // copy_click(code_snippet)
                              }}
                           ></RdsButton> */}
                            <RdsIcon
                  name="clipboard"
                  width="17px"
                  height="17px"
                  fill={false}
                  stroke={true}
                ></RdsIcon>

               {/* { identity ? (
                <span className="text-success">Copied</span>
              ) : (
                <span>copy </span>
              )} */}
              {/* Copy{" "} */}
              {/* { identity ? (
                ""
              ) : (
                <RdsIcon
                  name="clipboard"
                  width="12px"
                  height="12px"
                  fill={false}
                  stroke={true}
                ></RdsIcon>
              )} */}
                           </span>
                        <pre className="language-html">
                           <code className="language-html">
                              {/* {code_snippet} */}
                              {ComponentElement.name}
                           </code>
                        </pre>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* 
         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Address Detail</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3 mt-2">
                     <RdsLabel>Preview</RdsLabel>
                     <div className="mb-4 mt-3">
                        <RdsAddressDetail
                           addressLine1="Address Line 1"
                           addressLine2="Address Line 2"
                           addressLine3="Address Line 3"
                           cardborder={true}
                           header="Address Header"
                           withIcon={true} children={undefined}></RdsAddressDetail>
                     </div>

                  </div>
                  <div className="col-md-6">
                     <RdsLabel>Code</RdsLabel>
                     <div className="bg-light bg-opacity-100 p-4 rounded-4 mt-4">
                        <span className='float-end'>
                           <RdsButton
                              // class="me-2"
                              label="Copy"
                              type="button"
                              isOutline={true}
                              colorVariant="primary"
                              size="small"
                              onClick={() => {
                                 navigator.clipboard.writeText(Address_Detail);
                              }}
                           ></RdsButton></span>
                        <pre className="language-html">
                           <code className="language-html">
                              {Address_Detail}
                           </code>
                        </pre>
                     </div>
                  </div>
               </div>
            </div>


         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Alert</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
                     <RdsLabel>Preview</RdsLabel>
                     <div className="mb-4 mt-3">
                        <div className="mb-2">
                           <RdsAlert
                              alertmessage="This is default alert"
                              position="top"
                              dismisable={false}
                              colorVariant="primary"
                           />
                        </div>
                        <div className="mb-2">
                           <RdsAlert
                              alertmessage="This is alert width icon"
                              icon="information"
                              iconHeight="20px"
                              iconStroke={true}
                              iconWidth="20px"
                              position="top"
                              colorVariant="primary"
                           />
                        </div>
                        <div className="mb-2">
                           <RdsAlert
                              alertmessage="This is close alert"
                              dismisable
                              icon="information"
                              iconHeight="20px"
                              iconStroke
                              iconWidth="20px"
                              position="top"
                              colorVariant='primary'
                           />
                        </div>
                        <div className="mb-2">
                           <RdsAlert
                              alertmessage="This is close alert"
                              delay={5000}
                              icon="information"
                              iconHeight="20px"
                              iconStroke
                              iconWidth="20px"
                              position="top" colorVariant='primary' />
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <RdsLabel>Code</RdsLabel>
                     <div className="bg-light bg-opacity-100 p-4 rounded-4 mt-3">
                        <span className='float-end'>
                           <RdsButton
                              // class="me-2"
                              label="Copy"
                              type="button"
                              isOutline={true}
                              colorVariant="primary"
                              size="small"
                              onClick={() => {
                                 navigator.clipboard.writeText(Alert);
                              }}
                           ></RdsButton></span>
                        <pre className="language-html">
                           <code className="language-html">
                              {Alert}
                           </code>
                        </pre>
                     </div>

                  </div>
               </div>
            </div>
         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>App Detail</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-4">
                     <RdsLabel>Preview</RdsLabel>
                     <div className="mb-4 mt-3">
                        <RdsAppDetail
                           appDetailsItem={{
                              icon: 'zapier',
                              iconColor: 'warning',
                              iconFill: true,
                              iconHeight: '30px',
                              iconStroke: true,
                              iconWidth: '30px',
                              route: '/home',
                              routeLabel: 'View integration',
                              selected: true,
                              subtitle: 'Build custom automation and intefrations with app',
                              title: 'Zapier'
                           }}
                        />
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <RdsLabel>Code</RdsLabel>
                     <div className="bg-light bg-opacity-100 p-4 rounded-4 mt-3">
                        <span className='float-end'>
                           <RdsButton
                              // class="me-2"
                              label="Copy"
                              type="button"
                              isOutline={true}
                              colorVariant="primary"
                              size="small"
                              onClick={() => {
                                 navigator.clipboard.writeText(AppDetail);
                              }}
                           ></RdsButton></span>
                        <pre className="language-html">
                           <code className="language-html">
                              {AppDetail}
                           </code>
                        </pre>
                     </div>

                  </div>
               </div>
            </div>
         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Avatar</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Avatar - Default</RdsLabel>
                     </div>
                     <RdsAvatar
                        colorVariant="default"
                        size="medium"
                     />
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Avatar - With Initials</RdsLabel>
                     </div>
                     <RdsAvatar
                        colorVariant="primary"
                        firstName="Wai"
                        lastName="Technologies"
                        size="medium"
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Avatar - With Label</RdsLabel>
                     </div>
                     <RdsAvatar
                        colorVariant="primary"
                        firstName="Wai"
                        isTitle
                        lastName="Technologies"
                        role="Developer"
                        size="medium"
                        titleAlign="horizontal"
                     />
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Avatar - With Profile</RdsLabel>
                     </div>
                     <RdsAvatar
                        colorVariant="default"
                        firstName="Wai"
                        lastName="Technologies"
                        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU"
                        role="Developer"
                        size="small"
                        titleAlign="horizontal"
                        withProfilePic
                     />
                  </div>
               </div>
            </div>
         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Badge</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Badge - Default</RdsLabel>
                     </div>
                     <RdsBadge
                        badgeType="rectangle"
                        colorVariant="danger"
                        label="Badge"
                        size="medium"
                     />
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Badge - Button</RdsLabel>
                     </div>
                     <RdsButton
                        colorVariant="primary"
                        label="Button"
                        type="button"
                     >
                        <RdsBadge
                           badgeType="rectangle"
                           colorVariant="danger"
                           label="9"
                           size="medium"
                        />
                     </RdsButton>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-4'>
                        <RdsLabel>Badge - Label With Overlay</RdsLabel>
                     </div>
                     <RdsButton
                        class="position-relative"
                        colorVariant="primary"
                        label="Button"
                        size="medium"
                        type="button"
                     >
                        <RdsBadge
                           badgeType="rectangle"
                           colorVariant="danger"
                           label="99"
                           positioned
                           size="medium"
                        />
                     </RdsButton>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-4'>
                        <RdsLabel>Badge - Icon With Overlay</RdsLabel>
                     </div>
                     <span className="position-relative">
                        <RdsIcon
                           height="33px"
                           name="notification"
                           stroke
                           width="33px"
                        />
                        <RdsBadge
                           badgeType="circle"
                           colorVariant="danger"
                           label="9"
                           positioned
                           size="medium"
                        />
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Bank Card Detail</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Bank Card Detail - Default</RdsLabel>
                     </div>
                     <RdsBankCardDetail
                        cardDatas={[
                           {
                              cardExpiry: '11/2027',
                              cardID: '1011',
                              cardName: 'MasterCard',
                              cardNumber: 3596,
                              icon: 'editions',
                              iconColorVarient: 'dark',
                              iconFill: false,
                              iconHeight: '30px',
                              iconWidth: '30px',
                              iconstroke: true,
                              isDefault: false
                           }
                        ]}
                        isEditable
                        isSelectable
                     />
                  </div>
               </div>
            </div>
         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Banner</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Banner - Default</RdsLabel>
                     </div>
                     <RdsBanner
                        bannerText="Big news! We are excited to announce a brand new product."
                        colorVariant="info"
                        icon="information"
                        iconHeight="20px"
                        iconStroke
                        iconWidth="20px"
                        position="top"
                        textAlign="start"
                        iconFill={false} />
                  </div>
               </div>
            </div>
         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Benefit</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Benefit - Default</RdsLabel>
                     </div>
                     <RdsBenefit
                        displayType="default"
                        item={{
                           description: 'Get your order in 2 days',
                           icon: 'currency_dollar_circle',
                           iconColorVarient: 'dark',
                           iconFill: false,
                           iconHeight: '40px',
                           iconWidth: '40px',
                           iconstroke: true,
                           id: 1,
                           title: 'International delivery'
                        }}
                     />
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Benefit - Left Aligned</RdsLabel>
                     </div>
                     <RdsBenefit
                        displayType="Left Aligned"
                        item={{
                           description: 'Name another place that offers year long free delivery? We\'ll be waiting. Order now and you\'ll get delivery absolutely free.',
                           id: 3,
                           imgHeight: '40px',
                           imgSrc: 'https://cdn4.vectorstock.com/i/1000x1000/45/38/gear-icon-line-symbol-vector-21084538.jpg',
                           imgWidth: '40px',
                           title: 'Free delivery all year long'
                        }}
                     />
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Benefit - Center Aligned</RdsLabel>
                     </div>
                     <RdsBenefit
                        displayType="Center Aligned"
                        item={{
                           description: 'Free delivery is our main part of company we just price it into the products. Someone\'s paying for it, and it\'s not us.',
                           icon: 'truck',
                           iconColorVarient: 'dark',
                           iconFill: false,
                           iconHeight: '40px',
                           iconWidth: '40px',
                           iconstroke: true,
                           id: 6,
                           title: 'Free shipping'
                        }}
                     />
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Benefit -With Label/RdsLabel</RdsLabel>
                     </div>
                     <RdsBenefit
                        displayType="With Label"
                        item={{
                           colorVarient: 'success',
                           description: 'Name another place that offers year long free delivery? We\'ll be waiting. Order now and you\'ll get delivery absolutely free.',
                           id: 7,
                           imgHeight: '40px',
                           imgSrc: 'https://cdn4.vectorstock.com/i/1000x1000/45/38/gear-icon-line-symbol-vector-21084538.jpg',
                           imgWidth: '40px',
                           status: 'Active',
                           title: 'Free delivery all year long'
                        }}
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Benefit - Without Label</RdsLabel>
                     </div>
                     <RdsBenefit
                        displayType="Without Label"
                        item={{
                           description: 'Free delivery is our main part of company',
                           icon: 'truck',
                           iconColorVarient: 'dark',
                           iconFill: false,
                           iconHeight: '40px',
                           iconWidth: '40px',
                           iconstroke: true,
                           id: 7,
                           title: 'Free shipping world wide'
                        }}
                     />
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Benefit -Heading With Icon
                        </RdsLabel>
                     </div>
                     <RdsBenefit
                        displayType="Heading With Icon"
                        item={{
                           icon: 'truck',
                           iconColorVarient: 'dark',
                           iconFill: false,
                           iconHeight: '40px',
                           iconWidth: '40px',
                           iconstroke: true,
                           title: 'Free delivery all year long'
                        }}
                     />
                  </div>
               </div>
            </div>
         </div> */}
      </>
   );
};

export default RdsCompElements;
