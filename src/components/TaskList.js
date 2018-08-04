import React, {Component} from 'react'
import styles from '../App.css'
import { connect } from 'react-redux'
import TaskSearch from './TaskSearch';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { updaTask, updateFilterTask } from '../actions/tasks'
import { bindActionCreators } from 'redux'

class TaskList extends Component {
  
  onChange = (e) => {
    switch(e) {
      case 1:
        this.props.updaTask(this.radsel1.props.id, {stat: "TODO"});
        break;
      case 2:
        this.props.updaTask(this.radsel2.props.id, {stat: "DOING"});
        break;
      case 3:
        this.props.updaTask(this.radsel3.props.id, {stat: "DONE"});
        break;
      default:
        e
    }
    
  }
  
  render() {
    
    return(
      <div className={styles.list}>
        
        <div>
          <TaskSearch />
        </div>

        <div className="container">
          
           {
              this.props.filteredtasks.map(task =>{
                return (
                  <div className="card bg-light mb-3" className={styles.taskdiv}>
                    
                    <div className="card-body" className={styles.bod}>
                      <h3 className="card-header">{task.task}</h3>
                        <ToggleButtonGroup
                          type="radio"
                          onChange={this.onChange}
                          name = "radio-stat"
                          className={styles.buttong}
                        
                        >
                          <ToggleButton id={task.id} value={1} ref = {node => this.radsel1 = node} >To Do </ToggleButton>
                          <ToggleButton id={task.id} value={2} ref = {node => this.radsel2 = node}  >Doing </ToggleButton>
                          <ToggleButton id={task.id} value={3} ref = {node => this.radsel3 = node}  >Done </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                      
                  </div>
                  )
              })
            }
          
            
        </div>
        
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    filteredtasks : state.filteredtasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
      bindActionCreators({ 
          updaTask,
          updateFilterTask,
      }, dispatch)
  )
}  

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)