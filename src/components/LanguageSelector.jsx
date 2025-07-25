import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import "/node_modules/flag-icons/css/flag-icons.min.css"

export default function Example() {
  return (
    <>
    <Menu as="div" className="relative inline-block mx-3">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-stone-600">
  <span className={`fi fi-gb`} /> English
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-stone-800 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-focus:bg-stone-600 data-focus:outline-hidden"
            >
              <span className={`fi fi-pl`} /> Polski
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
    </>
  )
}
