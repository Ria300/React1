import React from 'react';
function Events()
{
    function shoot()
    {
        alert("Great shot!");
    }
return(
<div>
<button onClick={shoot}> Take the shot!!</button>
</div>
)
}
export default Events;