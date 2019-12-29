import React from 'react';

const Marker = (props) => {
    
    const { color, name, id, key} = props;
    const showName = () => {
      props.centerOnMe({lat: props.lat, lng: props.lng})
    }
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
        key={key}
        onClick={showName}
      />
    );
  };

  export default Marker;