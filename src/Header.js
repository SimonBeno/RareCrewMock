import React, {useState, useEffect, useRef} from "react";


// Local imports
import './Header.css';
import Image from './image.png';

// MUI
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';

import { createTheme, ThemeProvider } from '@mui/material/styles';


function Header() {
	
	// colors
	  const theme = createTheme({
		  palette: {
		    primary: {
		    // white
		      main: `#ffffff`,
		    },
		    secondary: {
		    	main: `#000000`
		    },
		  },
		});

	return (
	<div className="header h-[80px] lg:h-[60px]  max-w-[80%] flex items-center  ">

    <div className="flex flex-row  h-[80px] lg:h-[60px] justify-between w-full items-center lg:items-start bg-[#103454] lg:bg-white">

        {/*<div>
            <img src={Image} alt="" className="h-[60px] w-[60px] lg:w-full" />
        </div>*/}
		 <div className="w-[60px] h-[60px] lg:w-full lg:h-auto relative">
		    <img src={Image} alt="" className=" ml-3 lg:ml-0 absolute inset-0 w-full h-full lg:h-[60px] lg:w-fit object-cover" />
		</div>


        <div className="flex items-center">
        <ThemeProvider theme={theme}>
        	<div className="hidden sm:inline-flex lg:hidden"> 
        		<ReorderIcon fontSize="large" color="primary" className="mr-5 "/>
        	</div>
        	<div className="sm:hidden">
        		<CloseIcon fontSize="large" color="primary" className="mr-5 "/>
        	</div>
		</ThemeProvider>
        </div>

        <div className="hidden lg:inline-flex flex flex-row">
            <div className="flex border-solid border-b-4 border-transparent hover:border-[#103454] w-fit px-5 h-[60px] hover:text-[#103454] hover:cursor-pointer hover:bg-slate-100 items-center">
                <span className=" font-sans font-bold text-gray-500">Ipsum</span>
            </div>
            <div className="flex border-solid border-b-4 border-transparent hover:border-[#103454] w-fit px-5 h-[60px] hover:text-[#103454] hover:cursor-pointer hover:bg-slate-100 items-center">
                <span className=" font-sans font-bold text-gray-500">Ipsum</span>
            </div>
            <div className="flex border-solid border-b-4 border-transparent hover:border-[#103454] w-fit px-5 h-[60px] hover:text-[#103454] hover:cursor-pointer hover:bg-slate-100 items-center">
                <span className=" font-sans font-bold text-gray-500">Ipsum</span>
            </div>
            <div className="flex border-solid border-b-4 border-transparent hover:border-[#103454] w-fit px-5 h-[60px] hover:text-[#103454] hover:cursor-pointer hover:bg-slate-100 items-center">
                <span className=" font-sans font-bold text-gray-500">Ipsum</span>
            </div>
        </div>

    </div>
	</div>

)
}

export default Header;