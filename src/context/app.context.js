import React from 'react';
import { createContext, useState } from 'react';
import { PROVINCES_LENGTH } from '../utils/constants';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [provinceLevels, setProvinceLevels] = useState(
		//Initially fill the whole province levels with [0,0,0,0,0,0,0,...]
		new Array(PROVINCES_LENGTH).fill(0),
	);

	return (
		<AppContext.Provider
			value={{
				provinceLevels,
				setProvinceLevels,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
