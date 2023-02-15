import React, { useState, useEffect }  from 'react'

const CheckBox = () => {
    const [value, setValue] = useState([] as unknown as string);

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        setValue(e.target.value);
      };

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(value)
    }, [value])

    return (
        <>
            <button className="container flex justify-center min-w-fit mx-auto p-8 m-7 border-2 rounded-full shadow text-xl text-stone-500 focus:bg-yellow-50 focus:border-yellow-500 focus:text-yellow-500" >
                <label htmlFor='checkbox-1'>I am a Driver
                    <input className="checkbox ml-4 mt-2 accent-yellow-500" id='checkbox-1' type="checkbox" value="driver" onChange={handleChange} />
                </label>
            </button>

            <button className="container flex justify-center min-w-fit mx-auto p-8 m-7 border-2 rounded-full shadow text-xl text-stone-500 focus:bg-yellow-50 focus:border-yellow-500 focus:text-yellow-500">
                <label htmlFor='checkbox-2'>I am a Chef
                    <input className="checkbox ml-4 mt-2 accent-yellow-500" id='input-2' type="checkbox" value="chef" onChange={handleChange} />
                </label>
            </button>

            <button className="container flex justify-center min-w-fit mx-auto p-8 m-7 border-2 rounded-full shadow text-xl text-stone-500 focus:bg-yellow-50 focus:border-yellow-500 focus:text-yellow-500" onClick={handleChange}>
                <label htmlFor='checkbox-3'>I am a Customer
                    <input className="checkbox ml-4 mt-2 accent-yellow-500" id='input-3' type="checkbox" value="customer" />
                </label>
            </button>
        </>
)}
export default CheckBox