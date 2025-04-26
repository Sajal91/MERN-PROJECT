import { atom } from "recoil";

export const filterRecoilState = atom<string[]>({
    key: 'filterRecoilState', // unique ID (with respect to other atoms/selectors)
    default: [] // default value (aka initial value)
})