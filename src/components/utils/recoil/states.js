import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const loginState = atom({
  key: "loginState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export { loginState };
