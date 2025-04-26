import { FC } from "react"
import { useRecoilState } from "recoil"
import { filterRecoilState } from "../../recoil/filterRecoilState"

interface FilterArrayInterface {
    id: number,
    Filter_Name: string,
    Filter_Type: string[],
}

const Filter: FC<FilterArrayInterface> = ({ Filter_Name, Filter_Type, id }) => {
    const [filter, setFilter] = useRecoilState<string[]>(filterRecoilState)

    const handleCheckboxChange = (category: string) => {
        setFilter(prev =>
            prev.includes(category)
                ? prev.filter(item => item !== category) // remove
                : [...prev, category] // add
        )
    }

    return (
        <div className="w-[200px] py-2 px-4 mt-6 border-1 border-gray-400 flex flex-col">
            <div className="filter-type text-md font-semibold">{Filter_Name}</div>
            <div className="filter-sub-types flex flex-col gap-1 mt-2">
                {Filter_Type.map((element, index) => {
                    const isChecked = filter.includes(element)
                    return (
                        <div className="flex gap-2" key={index}>
                            <input
                                type="checkbox"
                                id={`filter-checkBox-${id}-${index}`}
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(element)}
                            />
                            <label htmlFor={`filter-checkBox-${id}-${index}`}>
                                <p className="text-sm">{element}</p>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Filter
