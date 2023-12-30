import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import SidebarD from './SidebarD';

export default function DocsComponent() {
  return (
    <>
      
      <div className="md:hidden">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4 bg-white">
            <div className="flex flex-shrink-0 items-center px-4">
              {/* Logo */}
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            {/* Navigation */}
            <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
              {/* Your navigation links go here */}
            </nav>
          </div>
          {/* User info */}
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <a href="#" className="group block w-full flex-shrink-0">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="py-4">mmm
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" >
              <SidebarD />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile menu button */}
      <div className="md:hidden fixed bottom-4 right-4">
        <button
          type="button"
          className="p-2 bg-gray-800 text-white rounded-full"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
