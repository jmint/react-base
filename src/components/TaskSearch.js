import React, {Component} from 'react'
import styles from '../App.css'
import { updateFilterTask } from '../actions/filteredtasks'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class TaskSearch extends Component {

    UpdT(text) {
        console.log(text);
        const tasksf = this.props.tasks.filter(task => task.task.includes(text,0))
        console.log(tasksf);
        this.props.updateFilterTask(tasksf)
        
    }

    onChange = (e) =>{
        const sw = this.filtertextTask.value.length ? this.UpdT(this.filtertextTask.value) : this.props.updateFilterTask(this.props.tasks)

    }

    render() {
        return(
            <div>
                <h1>Filter Tasks By Text</h1>
                <input
                    onChange = {this.onChange}
                    className = "form-control"
                    placeholder = "Filter Tasks"
                    ref = {node => this.filtertextTask = node}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      tasks: state.tasks,
    }
  }

const mapDispatchToProps = (dispatch) => {
return (
    bindActionCreators({ 
        updateFilterTask,
    }, dispatch)
)
}  
  
  export default connect(mapStateToProps, mapDispatchToProps)(TaskSearch)