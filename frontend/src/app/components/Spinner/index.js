import React from "react";
import { SpinnerClass } from './spinnerStyles';

export const Spinner = () =>{
    return(
        <>
        <SpinnerClass>
            <div className="loader"></div>
        </SpinnerClass>
        </>
    )
}