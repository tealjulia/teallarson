import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHotdog, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  const themeOptions = [
    { name: 'light', icon: faSun },
    { name: 'dark', icon: faMoon },
    { name: 'hotdog', icon: faHotdog },
  ]

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <Listbox as="div" className="relative inline-block text-left" value={theme} onChange={setTheme}>
      {/* <div> */}
      <Listbox.Button className="inline-flex w-full justify-center px-4 py-2 align-middle text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 ">
        <div></div>
        <FontAwesomeIcon icon={faPalette} className="self-center" />
        <FontAwesomeIcon
          icon={faChevronDown}
          size="sm"
          className="ml-2 -mr-1 h-5 w-5"
          aria-hidden="true"
        />
      </Listbox.Button>
      {/* </div> */}
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      />
      <Listbox.Options className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">
          {themeOptions.map((option) => {
            return (
              <Listbox.Option key={option.name} value={option.name}>
                {({ active, selected }) => (
                  <div className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                    {selected && (
                      <FontAwesomeIcon icon={option.icon as IconProp} className="mr-1" />
                    )}
                    {option.name}
                  </div>
                )}
              </Listbox.Option>
            )
          })}
        </div>
      </Listbox.Options>
    </Listbox>

    // <button
    //   aria-label="Toggle Dark Mode"
    //   type="button"
    //   className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
    //   onClick={() => setTheme('hotdog')}
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 20 20"
    //     fill="currentColor"
    //     className="text-gray-900 dark:text-gray-100"
    //   >
    //     {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
    //       <path
    //         fillRule="evenodd"
    //         d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
    //         clipRule="evenodd"
    //       />
    //     ) : (
    //       <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    //     )}
    //   </svg>
    // </button>
  )
}

export default ThemeSwitch
