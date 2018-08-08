import React, {Component} from 'react'
import styles from '../App.css'
import { connect } from 'react-redux'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { updateFilterTask } from '../actions/filteredtasks'
import { bindActionCreators } from 'redux'

class TaskStatus extends Component {
  
  onChange = (e) => {
    var filstat = ""
    switch(e){
      case 1:
        filstat = "TODO"
        break;
      case 2:
        filstat = "DOING"
        break;
      case 3:
        filstat = "DONE"
        break;
    }
    const tasks_s =  this.props.tasks.filter(task => task.stat == filstat)
    this.props.updateFilterTask(tasks_s)
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
          <ToggleButton value={1} onChange={this.onChange} >To Do</ToggleButton>
          <ToggleButton value={2} onChange={this.onChange} >Doing</ToggleButton>
          <ToggleButton value={3} onChange={this.onChange} >Done </ToggleButton>
      </ToggleButtonGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filteredtasks : state.filteredtasks,
  }
}


const mapDispatchToProps = (dispatch) => {
  return(
    bindActionCreators({
      updateFilterTask,
    }, dispatch)
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskStatus)
