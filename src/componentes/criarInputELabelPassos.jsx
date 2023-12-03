import React from 'react';

export default class MaisPassos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <div className='m border-2 p-4 mx-auto mb-3 mt-3'>
            <label className='text-white text-2xl font-text_ale' htmlFor="">{this.props.passo}</label>
            <input className='border-b-2 px-2 py-2 bg-slate-900 focus:outline-none text-white w-full font-paragrafos text-2xl' type="text" />
        </div>
    )
  }

}

