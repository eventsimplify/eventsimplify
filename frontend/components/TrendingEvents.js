import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function TrendingEvents() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between  border-4 border-black px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="grid grid-cols-5 gap-6">
                  <div className="col-span-1 flex items-center">
                    <img src="https://picsum.photos/200/300" alt="event" />
                  </div>
                  <div className="col-span-3">
                    <h1 className="text-left font-bold text-2xl">
                      Title and Tagline for the business or branding
                    </h1>
                    <p>
                      Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''} w-20`}
                    />
                  </div>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between  border-4 border-black px-4 py-2 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className="grid grid-cols-5 gap-6">
                  <div className="col-span-1 flex items-center">
                    <img src="https://picsum.photos/200/300" alt="event" />
                  </div>
                  <div className="col-span-3">
                    <h1 className="text-left font-bold text-2xl">
                      Title and Tagline for the business or branding
                    </h1>
                    <p>
                      Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''} w-20`}
                    />
                  </div>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
