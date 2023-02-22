import { Listbox } from '@headlessui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  FaArrowDown,
  FaArrowUp,
  FaCalendar,
  FaCheck,
  FaClock,
  FaExclamation,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLocationArrow,
  FaPeopleArrows,
  FaPersonBooth,
  FaTwitter,
} from 'react-icons/fa';
import BuyTicketComponent from '../../components/BuyTicketComponent';
import EventCard from '../../components/EventCard';
import InfoCard from '../../components/InfoCard';
import Layout from '../../components/Layout';
import styles from '../../styles/event_details.module.css';
const dropDown = [
  {
    title: 'Terms & Conditions',
  },
  {
    title: 'Privacy Policy',
  },
  {
    title: 'FAQ',
  },
  {
    title: 'Contact Us',
  },
  {
    title: 'About Us',
  },
];
// get details from url id and populate the page
const EventDetails = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(dropDown[0]);
  return (
    <div>
      <Layout>
        {/* how to link css from other */}
        <div className={`${styles.main_container}`}>
          <div className={`grid grid-cols-10 mt-24`}>
            <div className={`col-span-1 `}>
              <span className="text-lg font-medium">Share</span>
              <div className={`grid grid-rows-4 mt-4`}>
                <FaLink className={`${styles.social_icon}`} />
                <FaInstagram className={`${styles.social_icon}`} />
                <FaTwitter className={`${styles.social_icon}`} />
                <FaFacebook className={`${styles.social_icon}`} />
              </div>
            </div>
            <div className={`col-span-9 relative`}>
              <div className={`${styles.banner}`}>
                <img src="/assets/event_details/banner_image.png" alt="" />
              </div>
              <div className={`${styles.event_details_ticket}`}>
                <div className="grid grid-cols-2 gap-40">
                  <div>
                    <h1> Drive In Senja: Back to The Future </h1>
                    <p className="mt-4 text-md font-medium flex items-center gap-2">
                      <FaLocationArrow /> Parkiran Utama Mall @ Alam Sutera
                    </p>
                    <p className="mt-4 text-md font-medium flex items-center gap-2">
                      <FaCalendar /> September 22, 2021 · 20.00 - 21.56 WIB
                    </p>
                    <p className="mt-4 font-light">
                      Marty travels back in time using an eccentric scientist's
                      time machine. However, he must make his high-school-aged
                      parents fall in love in order to return to the present.
                    </p>
                  </div>
                  <div>
                    <BuyTicketComponent
                      onClickCallback={
                        // check if user is logged in
                        // if not, pop up login modal
                        // if yes, redirect to checkout page
                        // right now just redirect to checkout page
                        () => {
                          router.push('/checkout');
                        }
                      }
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.event_info_container}`}>
                <h2>Event Information</h2>
                <div className={`${styles.info}`}>
                  <InfoCard>
                    <FaClock />
                  </InfoCard>
                  <InfoCard
                    info={{
                      title: 'Audience',
                      time: '20.00 - 21.56 WIB',
                      duration: '1 hour 56 minutes',
                    }}
                  >
                    <FaPersonBooth />
                  </InfoCard>
                  <InfoCard
                    info={{
                      title: 'Attention',
                      time: '20.00 - 21.56 WIB',
                      duration: '1 hour 56 minutes',
                    }}
                  >
                    <FaExclamation />
                  </InfoCard>
                </div>
              </div>
              <div className={`${styles.description}`}>
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quibusdam. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
                  quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam, quae. Quisquam,
                  quae. Quisquam, quae. Quisquam, quae. Quisquam, quae.
                  Quisquam, quae. Quisquam, quae. Quisquam,
                </p>
              </div>
              <Listbox
                value={selected}
                onChange={(value) => {
                  setSelected(value);
                }}
                as="div"
              >
                {({ open }) => (
                  <>
                    <Listbox.Button>
                      <div className={`${styles.drop_down}`}>
                        <span>{selected.title}</span>
                        {open ? <FaArrowUp /> : <FaArrowDown />}
                      </div>
                    </Listbox.Button>
                    <Listbox.Options
                      className=" mt-1  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      style={{
                        width: '996px',
                      }}
                    >
                      {dropDown.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-primary_light  text-black'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.title}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary_color">
                                  <FaCheck />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </>
                )}
              </Listbox>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default EventDetails;
