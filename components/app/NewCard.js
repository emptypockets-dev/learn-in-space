import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import {
  LinkIcon,
  PlusSmIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/solid';

export default function NewCard({ open, handleToggleOpen }) {
  const [title, setTitle] = useState('');
  // const createNewCard = ({ title, question, sandboxId }) => {
  // 	let embed = sandboxId.sandbox_id;
  // 	const card = {
  // 		title: title,
  // 		embed_slug: embed,
  // 		question: question,
  // 		level: 1,
  // 		level_name: levelLabels[1].name,
  // 		lastReview: new Date(),
  // 		nextReview: new Date(),
  // 		id: $projects.collections[0].cards.length
  // 	};

  // 	$projects.collections[0].cards.unshift(card);
  // 	$projects = $projects;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`submit ${title}`);
    try {
      const submit = await fetch('/api/sandbox', {
        method: 'POST',
        body: JSON.stringify({
          title,
          //   question,
          //   codeQuestion,
          //   codeAnswer,
        }),
      });
      const data = await submit.json();
      console.log('data', data);
      setTitle('');
      handleToggleOpen(false);
      // createNewCard(data);
      // handleCloseToggle();
      // handleFormReset();
    } catch (err) {
      error = err;
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 overflow-hidden'
        onClose={handleToggleOpen}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Dialog.Overlay className='absolute inset-0' />

          <div className='fixed inset-y-0 pl-16 max-w-full right-0 flex'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-500 sm:duration-700'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm:duration-700'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='w-screen max-w-md'>
                <form
                  onSubmit={handleSubmit}
                  className='h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl'
                >
                  <div className='flex-1 h-0 overflow-y-auto'>
                    <div className='py-6 px-4 bg-indigo-700 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <Dialog.Title className='text-lg font-medium text-white'>
                          New Card
                        </Dialog.Title>
                        <div className='ml-3 h-7 flex items-center'>
                          <button
                            type='button'
                            className='bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                            onClick={() => handleToggleOpen(false)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                      <div className='mt-1'>
                        <p className='text-sm text-indigo-300'>
                          Get started by filling in the information below to
                          create your new card.
                        </p>
                      </div>
                    </div>
                    <div className='flex-1 flex flex-col justify-between'>
                      <div className='px-4 divide-y divide-gray-200 sm:px-6'>
                        <div className='space-y-6 pt-6 pb-5'>
                          <div>
                            <label
                              htmlFor='card-title'
                              className='block text-sm font-medium text-gray-900'
                            >
                              Card title
                            </label>
                            <div className='mt-1'>
                              <input
                                type='text'
                                name='card-title'
                                id='card-title'
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor='description'
                              className='block text-sm font-medium text-gray-900'
                            >
                              Description
                            </label>
                            <div className='mt-1'>
                              <textarea
                                id='description'
                                name='description'
                                rows={4}
                                className='block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                                defaultValue={''}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='pt-4 pb-6'>
                          <div className='flex text-sm'>
                            <a
                              href='#'
                              className='group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900'
                            >
                              <LinkIcon
                                className='h-5 w-5 text-indigo-500 group-hover:text-indigo-900'
                                aria-hidden='true'
                              />
                              <span className='ml-2'>Copy link</span>
                            </a>
                          </div>
                          <div className='mt-4 flex text-sm'>
                            <a
                              href='#'
                              className='group inline-flex items-center text-gray-500 hover:text-gray-900'
                            >
                              <QuestionMarkCircleIcon
                                className='h-5 w-5 text-gray-400 group-hover:text-gray-500'
                                aria-hidden='true'
                              />
                              <span className='ml-2'>
                                Learn more about sharing
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex-shrink-0 px-4 py-4 flex justify-end'>
                    <button
                      type='button'
                      className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => handleToggleOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Create new lesson
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
