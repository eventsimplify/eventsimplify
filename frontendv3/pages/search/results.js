import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  FaArrowAltCircleDown,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import CheckBoxAndText from '../../components/CheckBoxAndText';
import EventCard from '../../components/EventCard';
import Layout from '../../components/Layout';
import MultiRangeSlider from '../../components/MultirangeSlider';
import SearchBar from '../../components/SearchBar';
import SwitchComp from '../../components/SwitchComp';
import { DummyData } from '../../dummyData';
import styles from '../../styles/search_result.module.css';
const result = () => {
  const [eventShowCase] = DummyData();
  const [enabled, setEnabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // get string from url query string in react
  const {
    query: { search },
  } = useRouter();

  return (
    <div>
      <Layout>
        <div className={`${styles.main_container}`}>
          {/* <SearchBar /> */}
          {/* filter options */}
          <div className=" w-screen h-screen relative top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-40">
            <div className={`${styles.filter_box}`}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  className={`${styles.filter_text}`}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                  }}
                >
                  Filters
                </span>
                <div className="divider" />

                <span
                  className={`${styles.filter_text} flex gap-4  items-center`}
                >
                  <SwitchComp
                    isEnabled={() => {
                      setEnabled(!enabled);
                    }}
                  />
                  Online
                </span>
                <div className="divider" />
                <Disclosure defaultOpen={true}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button>
                        <span
                          className={`${styles.filter_text} flex justify-between mr-5 items-center`}
                        >
                          Location {open ? <FaChevronDown /> : <FaChevronUp />}
                        </span>
                      </Disclosure.Button>

                      <Disclosure.Panel>
                        <div className={`${styles.option_box}`}>
                          <CheckBoxAndText
                            text={'International'}
                            isChecked={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <CheckBoxAndText
                            text={'International'}
                            isChecked={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <CheckBoxAndText
                            text={'International'}
                            isChecked={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <CheckBoxAndText
                            text={'International'}
                            isChecked={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className="divider" />
                <Disclosure defaultOpen={true}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button>
                        <span
                          className={`${styles.filter_text} flex justify-between mr-5 items-center`}
                        >
                          Categories{' '}
                          {open ? <FaChevronDown /> : <FaChevronUp />}
                        </span>
                      </Disclosure.Button>

                      <Disclosure.Panel>
                        <div className={`${styles.option_box}`}>
                          <CheckBoxAndText
                            text={'Concert'}
                            isChecked={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <CheckBoxAndText
                            text={'Arts'}
                            isChecked={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <CheckBoxAndText
                            text={'Conference'}
                            isChecked={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                          <CheckBoxAndText
                            text={'Movies'}
                            isChecked={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <div className="divider" />
                <Disclosure defaultOpen={true}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button>
                        <span
                          className={`${styles.filter_text} flex justify-between mr-5 items-center`}
                        >
                          Price {open ? <FaChevronDown /> : <FaChevronUp />}
                        </span>
                      </Disclosure.Button>

                      <Disclosure.Panel>
                        <MultiRangeSlider />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
            <div className={`${styles.event_showcase_container}`}>
              <div className="mb-10">
                <SearchBar />
              </div>
              <span>
                Search results for <span className="font-bold">"{search}"</span>
              </span>
              <div className={`${styles.event_col} grid grid-cols-3`}>
                <EventCard events={eventShowCase.detailsOfEvents[0]} />
                <EventCard events={eventShowCase.detailsOfEvents[0]} />
                <EventCard events={eventShowCase.detailsOfEvents[0]} />
                <EventCard events={eventShowCase.detailsOfEvents[0]} />
                <EventCard events={eventShowCase.detailsOfEvents[0]} />
                <EventCard events={eventShowCase.detailsOfEvents[0]} />
                <EventCard events={eventShowCase.detailsOfEvents[0]} />
                <EventCard events={eventShowCase.detailsOfEvents[0]} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default result;
