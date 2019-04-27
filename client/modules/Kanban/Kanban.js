import { createLane } from '../Lane/LaneActions'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
//import styles from '../Lane/Lane.css';

const Kanban = (props) => {
  console.log('props',props)
  return (
    <div>
      <button
       onClick={() => props.createLane({
        name: 'New lane',
      })} >
        Add lane
      </button>
      <Lanes lanes={props.lanes} />
    </div>
  )
} 

//Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
};

const mapStateToProps = state => ({
  lanes: state.lanes,
});
const mapDispatchToProps = {
  createLane,
};

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);

// Import Style
