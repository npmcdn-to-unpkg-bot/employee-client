import React from 'react';
import { Link, hashHistory } from 'react-router';
import cookie from 'react-cookie';
require('../../../styles/singlearticlepage.style.css');


class SingleEmployeePageComponent extends React.Component{

    constructor(){

        super();
        this.showDate = this.showDate.bind(this);
    }
    showDate(date){
    var publishDate = new Date(date),
        year = publishDate.getFullYear(),
        month = publishDate.getMonth(),
        day = publishDate.getDate(),
        hour = publishDate.getHours(),
        minute = publishDate.getMinutes();
    var createdDate = month + "/" + day + "/" + year
                      + " " + hour +":"+ minute;
    return createdDate;
  }
    render(){
        console.log(this.props.employee);
        return (
            <div className="signle-employee-page">
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">姓名</div>
                      <div className="employee-item-content">{this.props.employee.name}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">职位</div>
                        <div className="employee-item-content">{this.props.employee.position}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">工号</div>
                        <div className="employee-item-content">{this.props.employee.badgeNumber}</div>
                  </div>
                </div>

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">性别</div>
                      <div className="employee-item-content">{this.props.employee.gender}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">出生日期</div>
                        <div className="employee-item-content">{this.props.employee.birthday}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">身份证</div>
                        <div className="employee-item-content">{this.props.employee.idNumber}</div>
                  </div>
                </div>

                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--1-col"></div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                      <div className="employee-item-title">联系电话</div>
                      <div className="employee-item-content">{this.props.employee.phoneNumber}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">入职时间</div>
                        <div className="employee-item-content">{this.props.employee.onBoardDate}</div>
                  </div>
                  <div className="mdl-cell mdl-cell--3-col employee-col-div">
                        <div className="employee-item-title">合同号</div>
                        <div className="employee-item-content">{this.props.employee.contractNumber}</div>
                  </div>
                </div>

                <div className="mdl-grid">
                      <div className="mdl-cell mdl-cell--7-col"></div>
                      <div className="mdl-cell mdl-cell--1-col">
                            <button className="mdl-button mdl-js-button mdl-button--primary employee-item-button"
                            onClick={this.editPost.bind(this, this.props.employee)}>
                              编辑
                            </button>
                      </div>
                      <div className="mdl-cell mdl-cell--1-col">
                            <button className="mdl-button mdl-js-button mdl-button--accent employee-item-button">
                              删除
                            </button>
                      </div>
                </div>
            </div>

            )


    }
    deletePost() {
        this.props.asynDeleteMiddleware(this.props.article._id, this.props.article.topic);
        hashHistory.push('/articles');
    }
    editPost(employeeObj) {
        console.log(employeeObj);
    }
    subscribePost() {

    }
}
export default SingleEmployeePageComponent;
