import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { addFilterData, removeFilterData } from "../../redux/filterStateSlice"
import CATEGORY from "../../constants/category"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { useState } from "react"

interface FilterArrayInterface {
    id: number,
    Filter_Name: string,
    Filter_Type: CATEGORY[],
}

const Filter: FC<FilterArrayInterface> = ({ Filter_Name, Filter_Type, id }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const filterCategories = useAppSelector(state => state.filterCategory.value);
    const dispatch = useAppDispatch();

    const handleCheckboxChange = (category: CATEGORY) => {
        if (filterCategories.includes(category)) {
            dispatch(removeFilterData(category));
        } else {
            dispatch(addFilterData(category));
        }
    }

    const selectedCount = Filter_Type.filter(category => filterCategories.includes(category)).length;

    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between py-4 text-left"
            >
                <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{Filter_Name}</span>
                    {selectedCount > 0 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {selectedCount}
                        </span>
                    )}
                </div>
                {isExpanded ? <FiChevronUp className="text-gray-400" /> : <FiChevronDown className="text-gray-400" />}
            </button>

            {isExpanded && (
                <div className="pb-4 space-y-3">
                    {Filter_Type.map((element: CATEGORY, index) => {
                        const isChecked = filterCategories.includes(element);
                        return (
                            <label
                                key={index}
                                className="flex items-center gap-3 cursor-pointer group"
                            >
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        id={`filter-checkBox-${id}-${index}`}
                                        checked={isChecked}
                                        onChange={() => handleCheckboxChange(element)}
                                        className="peer sr-only"
                                    />
                                    <div className="w-5 h-5 border-2 rounded border-gray-300 peer-checked:border-black peer-checked:bg-black transition-colors group-hover:border-gray-400">
                                        {isChecked && (
                                            <svg
                                                className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                    {element}
                                </span>
                            </label>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Filter
