interface Prop {
    id: number;
    name: string;
    handleCheckboxChange: (id: number) => void;
    checked?: boolean
  }
  
export const CheckBox = ({ id, name, handleCheckboxChange, checked }: Prop) => {
  
  return (
    <>
      <label htmlFor={`${id}`} className="flex items-center w-full px-3 py-2 cursor-pointer">
        <div className="grid mr-3 place-items-center">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
              <input id={`${id}`} type="checkbox" checked={checked}
                onChange={() => handleCheckboxChange(id)}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-slate-400 checked:bg-slate-400 checked:before:bg-gray-400 hover:before:opacity-0" />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
          {name}
        </p>
      </label>
    </>
  )
}
