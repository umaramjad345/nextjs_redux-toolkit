"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import React, { ReactNode } from "react";

interface StateProviderProps {
  children: ReactNode;
}

const StateProvider = ({ children }: StateProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
