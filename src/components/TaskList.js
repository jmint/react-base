import React, {Component} from 'react'
import styles from '../App.css'
import { connect } from 'react-redux'
import TaskSearch from './TaskSearch';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { updaTask } from '../actions/tasks'
import { updateFilterTask } from '../actions/filteredtasks'
import { bindActionCreators } from 'redux'
import tasks from '../reducers/Tasks';

class TaskList extends Component {
  
  onChange = (e) => {

    switch(Number(e.target.value)) {
      case 1:
        this.props.updaTask(e.target.id, {stat: "TODO"});
        break;
      case 2:
        this.props.updaTask(e.target.id, {stat: "DOING"});
        
        break;
      case 3:
        this.props.updaTask(e.target.id, {stat: "DONE"});
        
        break;
      default:
        e
    }
    
    
}

componentWillMount() {
  this.props.updateFilterTask(this.props.tasks)
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
                          <div className="btn-group btn-group-toggle" id={task.id} data-toggle="buttons" ref = {node => this.radsel = node}>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id={task.id} value={1} ref = {node => this.radsel1 = node} onChange={this.onChange} />To Do
                            </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id={task.id} value={2} ref = {node => this.radsel2 = node} onChange={this.onChange} />Doing
                            </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id={task.id} value={3} ref = {node => this.radsel3 = node} onChange={this.onChange} />Done
                            </label>
                          </div>
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
    filteredtasks : state.filteredtasks,
    tasks : state.tasks,
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