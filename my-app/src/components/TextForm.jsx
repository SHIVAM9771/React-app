import React from 'react'

export default function (props) {
    return (
        <div>
            <h1 className='my-3 mt-4 text-center'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
    );
}
