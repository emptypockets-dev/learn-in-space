import Image from 'next/image';
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid';

export default function Hero() {
  return (
    <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48'>
      <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24'>
        <div>
          <div>
            <Image
              src='https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500'
              width='50'
              height='50'
              alt='Picture of app'
            />
          </div>
          <div className='mt-20'>
            <div>
              <a href='#' className='inline-flex space-x-4'>
                <span className='rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-500 tracking-wide uppercase'>
                  What&apos;s new
                </span>
                <span className='inline-flex items-center text-sm font-medium text-rose-500 space-x-1'>
                  <span>Just starting to code now</span>
                  <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
                </span>
              </a>
            </div>
            <div className='mt-6 sm:max-w-xl'>
              <h1 className='text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                Deep learning through spaced repetition
              </h1>
              <p className='mt-6 text-xl text-gray-500'>
                Remember everything from the Javascript tutorials you enroll in.
              </p>
            </div>
            <form action='#' className='mt-12 sm:max-w-lg sm:w-full sm:flex'>
              <div className='min-w-0 flex-1'>
                <label htmlFor='hero-email' className='sr-only'>
                  Email address
                </label>
                <input
                  id='hero-email'
                  type='email'
                  className='block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mt-4 sm:mt-0 sm:ml-3'>
                <button
                  type='submit'
                  className='block w-full rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10'
                >
                  Notify me
                </button>
              </div>
            </form>
            <div className='mt-6'>
              <div className='inline-flex items-center divide-x divide-gray-300'>
                <div className='flex-shrink-0 flex pr-5'>
                  <StarIcon
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <StarIcon
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                </div>
                <div className='min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3'>
                  <span className='font-medium text-gray-900'>
                    Rated 5 stars
                  </span>{' '}
                  by <span className='font-medium text-rose-500'>me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
        <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <div className='hidden sm:block'>
            <div className='absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full' />
            <svg
              className='absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0'
              width={404}
              height={392}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
              />
            </svg>
          </div>
          <div className='relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12'>
            <Image
              src='https://tailwindui.com/img/component-images/task-app-rose.jpg'
              layout='fill'
              objectFit='cover'
              objectPosition='-15% 10%'
              alt='screenshot of app'
              className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
