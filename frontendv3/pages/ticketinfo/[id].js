import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import {
  FaArrowLeft,
  FaBackward,
  FaCalendar,
  FaLocationArrow,
  FaSort,
} from 'react-icons/fa';
import BuyTicketContainer from '../../components/BuyTicketContainer';
import Layout from '../../components/Layout';
import UserContext from '../../context/context';
import { DummyData } from '../../dummyData';
import styles from '../../styles/ticketinfo.module.css';
const TicketInfo = () => {
  const { selectedTickets, setSelectedTickets, allTickets, setAllTickets } =
    useContext(UserContext);
  // extract id from url
  const id = 1;
  const router = useRouter();
  const setSelectedTicketsFunc = (tickets) => {
    // filter out tickets that has been selected

    const selectedTickets = tickets.filter((ticket) => ticket.qty > 0);
    // set selected tickets in context
    setSelectedTickets(selectedTickets);
    // save selected tickets in local storage
    localStorage.setItem('selectedTickets', JSON.stringify(selectedTickets));
  };
  return (
    <div>
      <Layout showFooter={false}>
        <div className={`${styles.maincontainer}`}>
          <div className={`${styles.head}`}>
            <FaArrowLeft
              className={`${styles.back_icon}`}
              onClick={() => router.push(`/details/${id}`)}
            />
            <h1>Ticket Options</h1>
          </div>
          <div className={`${styles.info} grid grid-cols-2`}>
            <div className={`${styles.info_left}`}>
              <img src="/assets/event_details/banner_image.png" alt="" />
            </div>
            <div className={`${styles.info_right}`}>
              <div className={`${styles.info_right_top} grid grid-rows-4 `}>
                <h2>Drive In Senja: Back to the Future</h2>
                <span className="flex gap-3 items-center">
                  <FaCalendar />
                  <span>September 22, 2021</span>
                  <span>.</span>
                  <span>20.00 - 21.56 WIB</span>
                </span>
                <span className="flex gap-3 items-center">
                  <FaLocationArrow />
                  <span>Parkiran Utama Mall @ Alam Sutera</span>
                </span>
                <span>
                  Marty travels back in time using an eccentric scientist's time
                  Marty travels back in time using an eccentric scientist's time
                </span>
              </div>
            </div>
          </div>
          {/* divider */}
          <div
            className={` w-full`}
            style={{
              height: '0px',
              border: '1px solid #DDDDDE',
              marginTop: '65px',
            }}
          ></div>
          <div className={`${styles.sort_container}`}>
            <div className={`${styles.sort}`}>
              <FaSort />

              <span>Sort By</span>
            </div>
          </div>
          <div
            className={`${styles.buy_tick_container} grid grid-cols-4 gap-5 justify-between`}
          >
            {allTickets.map(({ ticketTitle, ticketDesc, ticketPrice, qty }) => (
              <BuyTicketContainer
                title={ticketTitle}
                desc={ticketDesc}
                price={ticketPrice}
                qty={qty}
                onAdd={(qty, title) => {
                  const updatedTickets = allTickets.map((ticket) => {
                    if (ticket.ticketTitle === title) {
                      return { ...ticket, qty: qty + 1 };
                    }
                    return ticket;
                  });
                  setAllTickets(updatedTickets);
                  localStorage.setItem(
                    'allTickets',
                    JSON.stringify(updatedTickets)
                  );
                  setSelectedTicketsFunc(updatedTickets);
                }}
                onRemove={(qty, title) => {
                  if (qty > 0) {
                    const updatedTickets = allTickets.map((ticket) => {
                      if (ticket.ticketTitle === title) {
                        return { ...ticket, qty: qty - 1 };
                      }
                      return ticket;
                    });
                    setAllTickets(updatedTickets);
                  }
                  setSelectedTicketsFunc(updatedTickets);
                }}
              />
            ))}
          </div>
          <div className={`${styles.banner_bottom}`}>
            {
              // see if atleast one ticket is selected
              // what does this: selectedTickets.find((ticket) => ticket.qty > 0) return
              //
              !allTickets.find((ticket) => ticket.qty > 0) ? (
                <span>Choose your ticket and quantity.</span>
              ) : (
                <div className={`${styles.info_tickets_selected}`}>
                  <div className={`${styles.info_tickets_selected_left}`}>
                    <div>
                      <p>QTY</p>
                      <span>
                        {/* calculate total tickets quantity selected */}

                        {allTickets.reduce((acc, ticket) => {
                          return acc + ticket.qty;
                        }, 0)}
                      </span>
                    </div>
                    <div>
                      <p>Type</p>
                      <span>
                        {/* if only one type of ticket is selected show the type name else show many */}
                        {allTickets.filter((ticket) => ticket.qty > 0).length >
                        1 ? (
                          'Many'
                        ) : (
                          <span>
                            {
                              allTickets.find((ticket) => ticket.qty > 0)
                                .ticketTitle
                            }
                          </span>
                        )}
                      </span>
                    </div>
                    <div>
                      <p>Price Total(NRS)</p>
                      <span>
                        {/* calculate total tickets price selected */}
                        {parseFloat(
                          allTickets.reduce((acc, ticket) => {
                            return (
                              acc +
                              Number(ticket.qty) * Number(ticket.ticketPrice)
                            );
                          }, 0)
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className={`${styles.info_tickets_selected_right}`}>
                    <button
                      onClick={() => {
                        router.push('/checkout');
                      }}
                    >
                      Buy Tickets
                    </button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TicketInfo;
