import React, { useState, useEffect }  from 'react'

const CheckBox = () => {
    const [checkedValue, setChecked] = useState(false);

    function handleChange() {
        setChecked(!checkedValue)
    }

    useEffect(() => {
        if (checkedValue) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const input: HTMLInputElement = document.querySelector("input")!;
            input.setAttribute('checked', 'checked')
        } else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const input: HTMLInputElement = document.querySelector("input")!;
            input.removeAttribute('checked')
        }
    }, [checkedValue])

    // eslint-disable-next-line no-console
    console.log(checkedValue)

    return (
        <>
            <button className="container flex justify-center content-center min-w-fit mx-auto p-8 m-7 border-2 rounded-full shadow text-xl text-stone-500 focus:bg-yellow-50 focus:border-yellow-500 focus:text-yellow-500" onClick={handleChange}>
                I am a Driver
                <input className="ml-4 mt-2 accent-yellow-500 color-white"   type="checkbox" value="true" />
            </button>
            <button className="container flex justify-center min-w-fit mx-auto p-8 m-7 border-2 rounded-full shadow text-xl text-stone-500 focus:bg-yellow-50 focus:border-yellow-500 focus:text-yellow-500" onClick={handleChange}>
                I am a Lorem
                <input className="ml-4 mt-2" type="checkbox" value="true"  />
            </button>
            <button className="container flex justify-center min-w-fit mx-auto p-8 m-7 border-2 rounded-full shadow text-xl text-stone-500 focus:bg-yellow-50 focus:border-yellow-500 focus:text-yellow-500" onClick={handleChange}>
                I am a Lorem
                <input className="ml-4 mt-2" type="checkbox" value="true"  />
            </button>
        </>
)}
export default CheckBox