const Filter = ({ prop }) => {
    return (
        <>
            <div className="w-[200px] py-2 px-4 mt-6 border-1 border-gray-400 flex flex-col">
                <div className="filter-type text-md font-semibold">{prop.Filter_Name}</div>
                <div className="filter-sub-types flex flex-col gap-1 mt-2">
                    {
                        prop.Filter_Type.map((element, index) => {
                            return <div className="flex gap-2" key={index}>
                                <input type="checkbox" id={`filter-checkBox-${prop.id}-${index}`} />
                                <label htmlFor={`filter-checkBox-${prop.id}-${index}`}>
                                    <p className="text-sm">{element}</p>
                                </label>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Filter