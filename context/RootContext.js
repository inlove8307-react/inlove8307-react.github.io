import { createContext, useState } from "react";

const initial = {
	modals: [],
	toasts: [],
};

const RootContext = createContext(initial);

export default function RootContextProvider ({ children }) {
	const [rootContext, setRootContext] = useState(initial);

	return (
		<RootContext.Provider value={{rootContext, setRootContext}}>
			{children}
		</RootContext.Provider>
	);
};

export {
	initial,
	RootContext,
};