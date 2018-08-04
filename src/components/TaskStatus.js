import React, {Component} from 'react'
import styles from '../App.css'
import { connect } from 'react-redux'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class TaskStatus extends Component {
  onChange = (e) => {
    console.log("click");
  }

  render() {
    return(
      <div className={styles.status}>
        <h1>Filter Tasks By Status</h1>
        <ToggleButtonGroup vertical
          type="radio"
          value={4}
          onChange={this.onChange}
          name="rad_stat"
        >
          <ToggleButton value={1}>To Do</ToggleButton>
          <ToggleButton value={2}>Doing</ToggleButton>
          <ToggleButton value={3}>Done </ToggleButton>
      </ToggleButtonGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filteredtasks : state.filteredtasks
  }
}

export default connect(mapStateToProps,)(TaskStatus)
