import React, { FC } from 'react';
import { RdsCompElementsWrapper } from './rds-comp-elements.styled';
import { RdsAccordion, RdsAddressDetail, RdsAlert, RdsAppDetail, RdsAvatar, RdsBadge, RdsBankCardDetail, RdsBanner, RdsBenefit, RdsButton, RdsIcon, RdsLabel } from 'raaghu-react-elements';
import RdsAccordionItem from '../../../raaghu-elements/src/rds-accordion/rds-accordion-item';

export interface RdsCompElementsProps { }

const RdsCompElements = () => {
   return (
      <>

         {/* <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">

         </div> */}
         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Accordion</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Accordion - Default</RdsLabel>
                     </div>
                     <RdsAccordion
                        accordionId="1"
                        accordionType="Default"
                     >
                        <RdsAccordionItem id={"1"} defaultOpen={false} title={"Section 1 Title"}>
                           <h1>Hello</h1>
                        </RdsAccordionItem>
                        <RdsAccordionItem id={"2"} title={"Section 2 Title"}>
                           <h1>Hello2</h1>
                        </RdsAccordionItem>
                        <RdsAccordionItem id={"3"} title={"Section 3 Title"}>
                           <h1>Hello3</h1>
                        </RdsAccordionItem>
                     </RdsAccordion>
                  </div>
                  <div className="col-md-6">
                     <div className='mb-2'>
                        <RdsLabel>Accordion - Flush</RdsLabel>
                     </div>
                     <RdsAccordion
                        accordionId="4"
                        accordionType="flush"
                     >
                        <RdsAccordionItem id={"4"} defaultOpen={false} title={"Section 1 Title"}>
                           <h1>Hello</h1>
                        </RdsAccordionItem>
                        <RdsAccordionItem id={"5"} title={"Section 2 Title"}>
                           <h1>Hello2</h1>
                        </RdsAccordionItem>
                        <RdsAccordionItem id={"6"} title={"Section 3 Title"}>
                           <h1>Hello3</h1>
                        </RdsAccordionItem>
                     </RdsAccordion>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Accordion - Always Open</RdsLabel>
                     </div>
                     <RdsAccordion
                        accordionId="1"
                        accordionType=""
                     >
                        <RdsAccordionItem id={"7"} AlwaysOpen title={"Section 1 Title"}>
                           <h1>Hello</h1>
                        </RdsAccordionItem>
                        <RdsAccordionItem id={"8"} AlwaysOpen title={"Section 2 Title"}>
                           <h1>Hello2</h1>
                        </RdsAccordionItem>
                        <RdsAccordionItem id={"9"} AlwaysOpen title={"Section 3 Title"}>
                           <h1>Hello3</h1>
                        </RdsAccordionItem>
                     </RdsAccordion>
                  </div>
                  <div className="col-md-6">
                     <div className='mb-2'>
                        <RdsLabel>Accordion - Stack Open</RdsLabel>
                     </div>
                     <RdsAccordion
                        accordionId="10"
                        accordionType=""
                     >
                        <RdsAccordionItem id={"10"} defaultOpen={true} title={"Section 1 Title"}>
                           <h1>Hello</h1>
                        </RdsAccordionItem>
                        <RdsAccordionItem id={"11"} title={"Section 2 Title"}>
                           <h1>Hello2</h1>
                        </RdsAccordionItem>
                        <RdsAccordionItem id={"12"} title={"Section 3 Title"}>
                           <h1>Hello3</h1>
                        </RdsAccordionItem>
                     </RdsAccordion>
                  </div>
               </div>
            </div>


         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Address Detail</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Address Detail - Default</RdsLabel>
                     </div>
                     <RdsAddressDetail
                        addressLine1="Address Line 1"
                        addressLine2="Address Line 2"
                        addressLine3="Address Line 3"
                        cardborder={true}
                        header="Address Header"
                        withIcon={true} children={undefined}></RdsAddressDetail>
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
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Alert - Default</RdsLabel>
                     </div>
                     <RdsAlert
                        alertmessage="This is default alert"
                        position="top"
                        dismisable={false}
                        colorVariant="primary"
                     />
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Alert - WithIcon</RdsLabel>
                     </div>
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
               </div>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Alert - WithCloseButton</RdsLabel>
                     </div>
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
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Alert - WithDelayAlert</RdsLabel>
                     </div>
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
         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>App Detail</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>App Detail - Default</RdsLabel>
                     </div>
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
         </div>
      </>
   );
};

export default RdsCompElements;
