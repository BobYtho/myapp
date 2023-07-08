import React from 'react';

function Card({title, description, image })  {
        return(
        <React.Fragment>
            <div>Title: {title} </div>
            <div>Descripcion: {description}</div>
            <div>
                <img 
                src={image}
                style={{
                    width:300,
                    height:200


                }}></img>
            </div>
        </React.Fragment>
    );
        


}
export default Card;