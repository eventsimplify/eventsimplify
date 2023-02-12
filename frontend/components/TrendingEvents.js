import React, { HTMLButtonElement } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import styles from './trendingevents.module.css';
import { FaArrowRight, FaArrowDown, FaArrowUp } from 'react-icons/fa';
const events = [
  {
    name: 'Name of the event',
    location: 'Kathmandu',
    tags: ['tag1', 'tag2', 'tag3'],
    image: 'https://picsum.photos/200/300',
    description: 'This is description of the event',
  },
  {
    name: 'Name of the event',
    location: 'Kathmandu',
    tags: ['tag1', 'tag2', 'tag3'],
    image: 'https://picsum.photos/200/300',
    description: 'This is description of the event',
  },
  {
    name: 'Name of the event',
    location: 'Kathmandu',
    tags: ['tag1', 'tag2', 'tag3'],
    image: 'https://picsum.photos/200/300',
    description: 'This is description of the event',
  },
  {
    name: 'Name of the event',
    location: 'Kathmandu',
    tags: ['tag1', 'tag2', 'tag3'],
    image: 'https://picsum.photos/200/300',
    description: 'This is description of the event',
  },
];

export default function TrendingEvents() {
  const refs = React.useMemo(() => {
    return (
      events.map((event, index) => {
        return React.createRef(<HTMLButtonElement />);
      }) ?? []
    );
  }, [events]);
  const closeOther = (index) => {
    const otherRefs = refs.filter((ref) => {
      console.log('Printing ref');
      console.log(ref);
      return ref.current?.getAttribute('data-id') !== index.toString();
    });
    console.log(`Open refs are`);
    otherRefs.forEach((ref) => {
      const isOpen = ref.current?.getAttribute('data-open') === 'true';
      console.log(isOpen);
      if (isOpen) {
        ref.current?.click();
      }
    });
  };
  return (
    <div
      className={`grid grid-rows-5 grid-cols-1 ${styles.disclosure_box_container}`}
    >
      <div className="w-full px-4">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
          {events.map((event, index) => {
            return (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      data-open={open}
                      data-id={index}
                      onClick={() => closeOther(index)}
                      ref={refs[index]}
                      className={`flex  ${styles.disclosure_box}`}
                    >
                      <img
                        src={events[0].image}
                        alt="event"
                        className={`${styles.img_box}`}
                      />
                      <div className={`${styles.title_event}`}>
                        What is your refund policy?
                      </div>
                      <div className={`${styles.event_location}`}>
                        {`${events[0].location}`}
                      </div>
                      <div
                        className={`${styles.event_tags_box} grid grid-cols-3 gap-2`}
                      >
                        {events[0].tags.slice(0, 3).map((tag) => {
                          return (
                            <div className={`${styles.event_tags_text}`}>
                              <p>{tag}</p>
                            </div>
                          );
                        })}
                      </div>
                      <FaArrowUp
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 ${styles.arrow_button}`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
// {events.map((event, index) => {
//   return (
//     <Disclosure as={'div'} className={styles.disclosure_box}>
//       {/* based on open change code */}
//       {({ open }) => (
//         <>
//           <Disclosure.Button>
//             <img
//               src={event.image}
//               alt="event"
//               className={`${styles.img_box}`}
//             />
//             <div className={`${styles.title_event}`}>
//               <p>{`${event.name}`}</p>
//             </div>
//             <div className={`${styles.event_location}`}>
//               {`${event.description}`}
//             </div>
//             <div
//               className={`${styles.event_tags_box} grid grid-cols-3 gap-2`}
//             >
//               {event.tags.slice(0, 3).map((tag) => {
//                 return (
//                   <div className={`${styles.event_tags_text}`}>
//                     <p>{tag}</p>
//                   </div>
//                 );
//               })}
//             </div>
//             {!open ? (
//               <div className={`${styles.arrow_button}`}>
//                 <FaArrowRight size={'2.5em'} />
//               </div>
//             ) : (
//               <div className={`${styles.arrow_button}`}>
//                 <FaArrowDown size={'2.5em'} />
//               </div>
//             )}
//           </Disclosure.Button>
//           <Disclosure.Panel className="text-gray-500">
//             Yes! You can purchase a license that you can share with your
//             entire team.
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// })}
