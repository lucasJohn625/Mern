import React from 'react';

const Display = (props) => {
    const {itemList} = props;



    return  (
        <div>
            <h3>shopping list </h3>
            {
                itemList.map((item, index) => (
                    <p key = {index}>
                        { item.itemName }
                    <br />
                    </p>
                ))
            }

        </div>
   )


}
export default Display;
