import React from 'react';

const Marker = (props) => {
    const { color, name, id, key} = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
        key={key}
      />
    );
  };

  export default Marker;