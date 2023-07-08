import React from 'react';

function MyFirstComponent(props)  {
    console.log(props)
    return(
        <React.Fragment>
            <div>{props.NewAppText}</div>
            <div>
                <button
                    onClick={() => { props.updateNewAppStateText()}}
                >
                    Update NewApp State
                </button>

            </div>
        </React.Fragment>
    );
        


}
export default MyFirstComponent;