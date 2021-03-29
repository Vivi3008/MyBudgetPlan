import { createContext } from 'react';
import { useReducer } from 'react';

type ContextProps  = {
	dispatch: React.Dispatch<any>;
	budget: number;
	 expenses: Array<{ 
		id: number; 
		name: string;
		cost: number;}>;
	children: React.ReactNode;
}

interface AuxProps  { 
    children: React.ReactNode,
 }

const AppReducer = (state: any, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};

const initialState = {
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	],
};

const AppContext = createContext(initialState);

export const AppProvider = (props: ContextProps) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContext;