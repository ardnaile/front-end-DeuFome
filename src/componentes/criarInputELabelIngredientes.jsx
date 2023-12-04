import React from 'react';

export default class MaisIngredientes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <div className='m border-2 p-4 mx-auto mb-3 mt-3'>
            <label className='text-white text-2xl font-text_ale' htmlFor="">{this.props.ingrediente}</label>
            <input className='border-b-2 px-2 py-2 bg-white focus:outline-none text-red-900 w-full font-paragrafos text-2xl' type="text" />
        </div>
    )
  }

}

