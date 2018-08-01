import React, {Component} from 'react'
import styles from '../App.css'
import { connect } from 'react-redux'
import TaskSearch from './TaskSearch';

class TaskList extends Component {
  
  render() {

    return(
      <div className={styles.list}>
        
        <div>
          <TaskSearch />
        </div>
        {
            this.props.filteredtasks.map(task =>{
              return (
                <div className={styles.taskdiv}>
                  {task.task}
                  <form>
                  <input type="radio" value="To Do" name="To Do" />To Do &nbsp;
                  <input type="radio" value="To Do" name="To Do" />Doing &nbsp;
                  <input type="radio" value="To Do" name="To Do" />Done
                  </form>
                </div>
                )
            })
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    filteredtasks : state.filteredtasks
  }
}

export default connect(mapStateToProps,)(TaskList)